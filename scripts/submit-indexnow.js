/**
 * Submit sitemap URLs to IndexNow (Bing, Yandex, and other participating engines).
 * Run after deploy so the key file is live at https://seo-kings.co.uk/<key>.txt
 *
 * Usage: node scripts/submit-indexnow.js
 * Requires: npm run build first (so out/sitemap.xml exists), then deploy, then run this.
 *
 * @see https://www.indexnow.org/documentation
 */

const fs = require('fs');
const path = require('path');

const INDEXNOW_KEY = 'seokings-indexnow-a1b2c3d4e5f6';
const BASE_URL = 'https://seo-kings.co.uk';
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '..', 'out', 'sitemap.xml');
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

function getUrlsFromSitemap(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(
      `Sitemap not found at ${sitemapPath}. Run "npm run build" first so out/sitemap.xml exists.`
    );
  }
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const locs = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
  return locs.map((el) => el.replace(/<\/?loc>/g, '').trim());
}

async function submitToIndexNow(urlList) {
  const body = {
    host: 'seo-kings.co.uk',
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  return { status: res.status, ok: res.ok, statusText: res.statusText };
}

async function main() {
  console.log('Reading URLs from', SITEMAP_PATH);
  const urls = getUrlsFromSitemap(SITEMAP_PATH);
  console.log('Found', urls.length, 'URLs');

  const result = await submitToIndexNow(urls);
  if (result.ok || result.status === 202) {
    console.log(
      'IndexNow submission accepted:',
      result.status,
      result.statusText,
      '(URLs sent to Bing, Yandex, etc.)'
    );
  } else {
    console.error('IndexNow submission failed:', result.status, result.statusText);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
