#!/usr/bin/env node
/**
 * Bristol Trades Report — stage 3 (optional): website audit.
 *
 * For every harvested business WITH a website, fetches the homepage and
 * records: HTTPS, response time, HTML size, mobile viewport meta, title,
 * meta description, LocalBusiness schema presence, WordPress/Wix detection.
 * Appends aggregate stats to data/bristol-trades-summary.json (siteAudit key)
 * and writes per-site detail to data/bristol-trades-audit.csv.
 *
 * Usage: node scripts/trades-report/audit.mjs        (run after harvest)
 * No API key needed — plain fetches with a 10s timeout, 500ms apart.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const IN = join(ROOT, 'data', 'bristol-trades-raw.csv');
const SUMMARY = join(ROOT, 'data', 'bristol-trades-summary.json');
const OUT = join(ROOT, 'data', 'bristol-trades-audit.csv');

function parseCsv(text) {
  const [header, ...lines] = text.trim().split('\n');
  const cols = header.split(',');
  return lines.map((line) => {
    const vals = line.match(/"([^"]*)"/g).map((v) => v.slice(1, -1));
    return Object.fromEntries(cols.map((c, i) => [c, vals[i]]));
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const sites = parseCsv(readFileSync(IN, 'utf8')).filter((r) => r.website);

async function auditSite(url) {
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SEOKingsAudit/1.0; +https://seo-kings.co.uk)' },
    });
    const html = await res.text();
    const ms = Date.now() - started;
    return {
      ok: res.ok,
      status: res.status,
      https: res.url.startsWith('https://'),
      ms,
      kb: Math.round(html.length / 1024),
      viewport: /<meta[^>]+name=["']viewport/i.test(html),
      title: /<title[^>]*>[^<]{3,}<\/title>/i.test(html),
      metaDesc: /<meta[^>]+name=["']description/i.test(html),
      schema: /application\/ld\+json/i.test(html) && /LocalBusiness|Plumber|Electrician|HomeAndConstructionBusiness/i.test(html),
      wordpress: /wp-content|wp-includes/i.test(html),
      wix: /wix\.com|wixstatic/i.test(html),
    };
  } catch (err) {
    return { ok: false, status: 'error', https: url.startsWith('https://'), ms: Date.now() - started, kb: 0, viewport: false, title: false, metaDesc: false, schema: false, wordpress: false, wix: false, error: err.name };
  } finally {
    clearTimeout(timer);
  }
}

const results = [];
let done = 0;
for (const s of sites) {
  const r = await auditSite(s.website);
  results.push({ name: s.name, trade: s.trade, suburb: s.suburb, url: s.website, ...r });
  done++;
  process.stdout.write(`\r${done}/${sites.length} audited…`);
  await sleep(500);
}

const esc = (v) => `"${String(v).replace(/"/g, "'")}"`;
writeFileSync(
  OUT,
  'name,trade,suburb,url,status,https,response_ms,html_kb,viewport,title,meta_description,schema,wordpress,wix\n' +
    results.map((r) => [r.name, r.trade, r.suburb, r.url, r.status, r.https, r.ms, r.kb, r.viewport, r.title, r.metaDesc, r.schema, r.wordpress, r.wix].map(esc).join(',')).join('\n') + '\n'
);

const reachable = results.filter((r) => r.ok);
const pct = (n) => Math.round((n / (reachable.length || 1)) * 100);
const siteAudit = {
  audited: results.length,
  unreachable: results.length - reachable.length,
  pctNoHttps: pct(reachable.filter((r) => !r.https).length),
  pctSlow: pct(reachable.filter((r) => r.ms > 3000).length),
  medianResponseMs: (() => { const s = reachable.map((r) => r.ms).sort((a, b) => a - b); return s[Math.floor(s.length / 2)] || 0; })(),
  pctNoViewport: pct(reachable.filter((r) => !r.viewport).length),
  pctNoMetaDescription: pct(reachable.filter((r) => !r.metaDesc).length),
  pctNoSchema: pct(reachable.filter((r) => !r.schema).length),
  pctWordpress: pct(reachable.filter((r) => r.wordpress).length),
  pctWix: pct(reachable.filter((r) => r.wix).length),
};

const summary = JSON.parse(readFileSync(SUMMARY, 'utf8'));
summary.siteAudit = siteAudit;
writeFileSync(SUMMARY, JSON.stringify(summary, null, 2));

console.log(`\nAudited ${results.length} sites (${siteAudit.unreachable} unreachable).`);
console.log(`No HTTPS: ${siteAudit.pctNoHttps}%  |  >3s response: ${siteAudit.pctSlow}%  |  no viewport meta: ${siteAudit.pctNoViewport}%`);
console.log(`No schema: ${siteAudit.pctNoSchema}%  |  WordPress: ${siteAudit.pctWordpress}%  |  Wix: ${siteAudit.pctWix}%`);
console.log('siteAudit block added to data/bristol-trades-summary.json.');
