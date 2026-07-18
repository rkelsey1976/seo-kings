#!/usr/bin/env node
/**
 * Bristol Trades Report — stage 1: harvest.
 *
 * Queries Serper.dev Places (Google Maps data) for every trade × suburb combo,
 * dedupes, and writes data/bristol-trades-raw.csv. This is the source dataset
 * for the "Invisible Trades of Bristol" report — same methodology as the Bath
 * report (June 2026), plus a suburb dimension.
 *
 * Usage:  SERPER_API_KEY=xxx node scripts/trades-report/harvest.mjs
 * Cost:   ~2 credits per trade×suburb combo (2 pages) ≈ 300 credits total.
 */

import '../lib/env.mjs';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = join(ROOT, 'data', 'bristol-trades-raw.csv');

const TRADES = [
  'plumber', 'electrician', 'builder', 'roofer', 'painter decorator', 'cleaner',
  'heating engineer', 'landscaper', 'plasterer', 'carpenter', 'kitchen fitter', 'tiler',
];

const SUBURBS = [
  'Bedminster Bristol', 'Easton Bristol', 'St George Bristol', 'Kingswood Bristol',
  'Horfield Bristol', 'Bishopston Bristol', 'Redland Bristol', 'Clifton Bristol',
  'Totterdown Bristol', 'Brislington Bristol', 'Whitchurch Bristol', 'Filton Bristol',
];

const API_KEY = process.env.SERPER_API_KEY;
if (!API_KEY) {
  console.error('SERPER_API_KEY is not set.');
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function places(q, page) {
  const res = await fetch('https://google.serper.dev/places', {
    method: 'POST',
    headers: { 'X-API-KEY': API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ q, gl: 'gb', hl: 'en', page }),
  });
  if (!res.ok) throw new Error(`Serper ${res.status}: ${await res.text()}`);
  return (await res.json()).places || [];
}

const seen = new Map(); // cid (or name|address) -> row
let queries = 0;

for (const suburb of SUBURBS) {
  for (const trade of TRADES) {
    const q = `${trade} ${suburb}`;
    for (const page of [1, 2]) {
      try {
        const results = await places(q, page);
        queries++;
        for (const p of results) {
          const key = p.cid || `${p.title}|${p.address}`;
          if (seen.has(key)) continue;
          seen.set(key, {
            trade,
            suburb: suburb.replace(' Bristol', ''),
            name: p.title || '',
            rating: p.rating ?? '',
            reviews: p.ratingCount ?? 0,
            website: p.website || '',
            address: (p.address || '').replace(/"/g, "'"),
            phone: p.phoneNumber || '',
          });
        }
        if (results.length < 10) break; // no second page worth fetching
      } catch (err) {
        console.error(`FAILED "${q}" p${page}: ${err.message}`);
      }
      await sleep(300);
    }
    process.stdout.write(`\r${queries} queries, ${seen.size} unique businesses…`);
  }
}

const esc = (v) => `"${String(v).replace(/"/g, "'")}"`;
const rows = [...seen.values()];
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(
  OUT,
  'trade,suburb,name,rating,reviews,website,address,phone\n' +
    rows.map((r) => [r.trade, r.suburb, r.name, r.rating, r.reviews, r.website, r.address, r.phone].map(esc).join(',')).join('\n') + '\n'
);
console.log(`\nWrote ${rows.length} unique businesses to data/bristol-trades-raw.csv (${queries} queries used).`);
console.log('Next: node scripts/trades-report/analyse.mjs');
