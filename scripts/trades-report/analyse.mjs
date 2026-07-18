#!/usr/bin/env node
/**
 * Bristol Trades Report — stage 2: analyse.
 *
 * Reads data/bristol-trades-raw.csv and computes the report statistics:
 * the "invisible" cohort (no website), review totals/medians, and breakdowns
 * by trade and suburb. Writes data/bristol-trades-summary.json — the exact
 * shape the report page will consume — and prints a human summary.
 *
 * Usage: node scripts/trades-report/analyse.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const IN = join(ROOT, 'data', 'bristol-trades-raw.csv');
const OUT = join(ROOT, 'data', 'bristol-trades-summary.json');

function parseCsv(text) {
  const [header, ...lines] = text.trim().split('\n');
  const cols = header.split(',');
  return lines.map((line) => {
    const vals = line.match(/"([^"]*)"/g).map((v) => v.slice(1, -1));
    return Object.fromEntries(cols.map((c, i) => [c, vals[i]]));
  });
}

const rows = parseCsv(readFileSync(IN, 'utf8')).map((r) => ({
  ...r,
  rating: parseFloat(r.rating) || null,
  reviews: parseInt(r.reviews, 10) || 0,
  hasSite: !!r.website,
}));

const median = (ns) => {
  if (!ns.length) return 0;
  const s = [...ns].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

// The report cohort: rated businesses with no website.
const invisible = rows.filter((r) => !r.hasSite && r.reviews > 0);
const withSite = rows.filter((r) => r.hasSite);
const rated = (list) => list.filter((r) => r.rating !== null);

const byKey = (list, key) => {
  const map = {};
  for (const r of list) (map[r[key]] ??= []).push(r);
  return map;
};

const buckets = [
  { label: '0–9 reviews', min: 1, max: 9 },
  { label: '10–24 reviews', min: 10, max: 24 },
  { label: '25–49 reviews', min: 25, max: 49 },
  { label: '50–99 reviews', min: 50, max: 99 },
  { label: '100+ reviews', min: 100, max: Infinity },
].map((b) => ({ label: b.label, count: invisible.filter((r) => r.reviews >= b.min && r.reviews <= b.max).length }));

const summary = {
  generated: new Date().toISOString().slice(0, 10),
  totals: {
    businessesFound: rows.length,
    withWebsite: withSite.length,
    withoutWebsite: rows.filter((r) => !r.hasSite).length,
    invisibleCohort: invisible.length,
    pctWithoutWebsite: Math.round((rows.filter((r) => !r.hasSite).length / rows.length) * 100),
    invisibleReviewsTotal: invisible.reduce((s, r) => s + r.reviews, 0),
    invisibleReviewsMedian: median(invisible.map((r) => r.reviews)),
    invisibleAvgRating: +(rated(invisible).reduce((s, r) => s + r.rating, 0) / (rated(invisible).length || 1)).toFixed(2),
    invisiblePerfectFives: rated(invisible).filter((r) => r.rating === 5).length,
  },
  reviewBuckets: buckets,
  byTrade: Object.entries(byKey(invisible, 'trade'))
    .map(([trade, list]) => ({ trade, count: list.length, reviews: list.reduce((s, r) => s + r.reviews, 0) }))
    .sort((a, b) => b.count - a.count),
  bySuburb: Object.entries(byKey(invisible, 'suburb'))
    .map(([suburb, list]) => {
      const all = rows.filter((r) => r.suburb === suburb);
      return {
        suburb,
        invisible: list.length,
        total: all.length,
        pctInvisible: Math.round((all.filter((r) => !r.hasSite).length / all.length) * 100),
        topBusiness: [...list].sort((a, b) => b.reviews - a.reviews)[0]?.name || '',
        topBusinessReviews: [...list].sort((a, b) => b.reviews - a.reviews)[0]?.reviews || 0,
      };
    })
    .sort((a, b) => b.invisible - a.invisible),
};

writeFileSync(OUT, JSON.stringify(summary, null, 2));

const t = summary.totals;
console.log(`Businesses found:        ${t.businessesFound}`);
console.log(`No website:              ${t.withoutWebsite} (${t.pctWithoutWebsite}%)`);
console.log(`Invisible cohort (rated): ${t.invisibleCohort}`);
console.log(`  reviews between them:  ${t.invisibleReviewsTotal} (median ${t.invisibleReviewsMedian})`);
console.log(`  average rating:        ${t.invisibleAvgRating} (${t.invisiblePerfectFives} perfect 5.0s)`);
console.log(`\nTop suburbs by invisible trades:`);
for (const s of summary.bySuburb.slice(0, 5)) console.log(`  ${s.suburb}: ${s.invisible} (of ${s.total} found, ${s.pctInvisible}% no website)`);
console.log(`\nWrote data/bristol-trades-summary.json — send this file to Claude to build the report page.`);
