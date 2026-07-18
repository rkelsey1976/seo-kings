#!/usr/bin/env node
/**
 * Weekly rank tracker — queries a SERP API for tracked keywords and appends
 * positions to data/rankings.csv so history accumulates in git.
 *
 * Usage:
 *   SERPER_API_KEY=xxx node scripts/rank-check.mjs           # all keywords
 *   SERPER_API_KEY=xxx node scripts/rank-check.mjs "seo bristol"  # one keyword
 *   node scripts/rank-check.mjs --list                       # show tracked set
 *
 * Get a key at https://serper.dev (2,500 free credits — years of weekly runs
 * at this volume). ~1 credit per keyword per run.
 *
 * Positions are organic only. Map Pack presence is reported when Serper
 * returns a "places" block containing our name.
 */

import './lib/env.mjs';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CSV = join(ROOT, 'data', 'rankings.csv');
const DOMAIN = 'seo-kings.co.uk';
const BUSINESS_NAME = /seo kings/i;

/** Tracked keywords. location biases results like a searcher in that place. */
const KEYWORDS = [
  { q: 'web designer bath', location: 'Bath, England, United Kingdom' },
  { q: 'website designer bath', location: 'Bath, England, United Kingdom' },
  { q: 'local seo bath', location: 'Bath, England, United Kingdom' },
  { q: 'seo bath', location: 'Bath, England, United Kingdom' },
  { q: 'web designer bristol', location: 'Bristol, England, United Kingdom' },
  { q: 'website designer bristol', location: 'Bristol, England, United Kingdom' },
  { q: 'local seo bristol', location: 'Bristol, England, United Kingdom' },
  { q: 'seo bristol', location: 'Bristol, England, United Kingdom' },
  { q: 'web designer keynsham', location: 'Keynsham, England, United Kingdom' },
  { q: 'web design keynsham', location: 'Keynsham, England, United Kingdom' },
  { q: 'website design bedminster bristol', location: 'Bristol, England, United Kingdom' },
  { q: 'web designer bath city centre', location: 'Bath, England, United Kingdom' },
];

const args = process.argv.slice(2);
if (args.includes('--list')) {
  for (const k of KEYWORDS) console.log(`${k.q}  (${k.location})`);
  process.exit(0);
}

const API_KEY = process.env.SERPER_API_KEY;
if (!API_KEY) {
  console.error('SERPER_API_KEY is not set. Get a free key at https://serper.dev, then:');
  console.error('  SERPER_API_KEY=xxx npm run rank-check');
  process.exit(1);
}

const only = args.find((a) => !a.startsWith('--'));
const targets = only ? KEYWORDS.filter((k) => k.q === only.toLowerCase()) : KEYWORDS;
if (targets.length === 0) {
  console.error(`"${only}" is not a tracked keyword. Run with --list to see the set.`);
  process.exit(1);
}

async function check({ q, location }) {
  const res = await fetch('https://google.serper.dev/search', {
    method: 'POST',
    headers: { 'X-API-KEY': API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ q, location, gl: 'gb', hl: 'en', num: 100 }),
  });
  if (!res.ok) throw new Error(`Serper ${res.status} for "${q}": ${await res.text()}`);
  const data = await res.json();

  const organic = data.organic || [];
  const hit = organic.find((r) => (r.link || '').includes(DOMAIN));
  const position = hit ? hit.position : '';
  const url = hit ? hit.link : '';

  const places = data.places || [];
  const mapIdx = places.findIndex((p) => BUSINESS_NAME.test(p.title || ''));
  const mapPack = mapIdx === -1 ? '' : mapIdx + 1;

  return { position, url, mapPack };
}

const today = new Date().toISOString().slice(0, 10);
mkdirSync(dirname(CSV), { recursive: true });
if (!existsSync(CSV)) {
  writeFileSync(CSV, 'date,keyword,location,organic_position,map_pack_position,ranking_url\n');
}

let rows = '';
for (const kw of targets) {
  try {
    const { position, url, mapPack } = await check(kw);
    const posLabel = position || '100+';
    const mapLabel = mapPack ? ` | maps #${mapPack}` : '';
    console.log(`${kw.q.padEnd(36)} organic ${String(posLabel).padEnd(4)}${mapLabel}  ${url}`);
    rows += `${today},"${kw.q}","${kw.location}",${position},${mapPack},${url}\n`;
  } catch (err) {
    console.error(`FAILED ${kw.q}: ${err.message}`);
    rows += `${today},"${kw.q}","${kw.location}",error,,\n`;
  }
}
writeFileSync(CSV, readFileSync(CSV, 'utf8') + rows);
console.log(`\nAppended ${targets.length} row(s) to data/rankings.csv — commit it to keep the history.`);
