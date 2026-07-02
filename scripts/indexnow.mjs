#!/usr/bin/env node
/**
 * IndexNow submission — pings Bing (and other IndexNow engines) with every
 * URL in the live sitemap so new/changed pages are crawled within hours
 * instead of waiting for Bingbot's slow organic crawl.
 *
 * Run after each deploy: node scripts/indexnow.mjs
 * Optionally pass specific URLs: node scripts/indexnow.mjs /areas/bath /seo/bath
 *
 * The key file (public/<key>.txt) must be live on the site before this works.
 * IndexNow submissions do NOT count against Bing Webmaster Tools' manual
 * URL-submission quota.
 */

const HOST = 'seo-kings.co.uk';
const KEY = 'f59516064ef733ce28075821148f8768';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function getUrls() {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    return args.map((p) => (p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? p : `/${p}`}`));
  }
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) throw new Error('No <loc> entries found in sitemap');
  return urls;
}

async function main() {
  // Verify the key file is live first — submissions with an unreachable key are ignored
  const keyRes = await fetch(KEY_LOCATION);
  const keyBody = (await keyRes.text()).trim();
  if (!keyRes.ok || keyBody !== KEY) {
    throw new Error(`Key file not live yet at ${KEY_LOCATION} (HTTP ${keyRes.status}) — deploy first`);
  }

  const urlList = await getUrls();
  console.log(`Submitting ${urlList.length} URLs for ${HOST}…`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  // 200 = submitted, 202 = accepted (key validation pending) — both are success
  console.log(`IndexNow response: HTTP ${res.status} ${res.statusText}`);
  const body = await res.text();
  if (body) console.log(body);
  if (res.status !== 200 && res.status !== 202) process.exit(1);
  console.log('Done — Bing will crawl the submitted URLs shortly.');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
