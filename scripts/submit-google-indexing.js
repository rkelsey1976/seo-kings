/**
 * Submit sitemap URLs to the Google Indexing API (faster indexing in Google Search).
 * Requires: Service account key + Search Console ownership. See content/google-indexing-api.md.
 *
 * Usage:
 *   npm install googleapis   # one-time
 *   set GOOGLE_APPLICATION_CREDENTIALS=C:\path\to\service-account-key.json
 *   node scripts/submit-google-indexing.js
 *
 * Optional: MAX_URLS=50 node scripts/submit-google-indexing.js   (default: 100, quota ~200/day)
 */

const fs = require('fs');
const path = require('path');

const SITEMAP_PATH = path.join(__dirname, '..', 'out', 'sitemap.xml');
const MAX_URLS = Math.min(parseInt(process.env.MAX_URLS || '100', 10) || 100, 200);

function getUrlsFromSitemap(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(
      `Sitemap not found at ${sitemapPath}. Run "npm run build" first.`
    );
  }
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const locs = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
  return locs.map((el) => el.replace(/<\/?loc>/g, '').trim());
}

async function getClient() {
  try {
    const { google } = require('googleapis');
    const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (!keyPath || !fs.existsSync(keyPath)) {
      throw new Error(
        'Set GOOGLE_APPLICATION_CREDENTIALS to the path of your service account JSON key. See content/google-indexing-api.md.'
      );
    }
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    return auth.getClient();
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new Error('Run: npm install googleapis');
    }
    throw e;
  }
}

async function main() {
  const urls = getUrlsFromSitemap(SITEMAP_PATH);
  const toSubmit = urls.slice(0, MAX_URLS);
  console.log('Sitemap URLs:', urls.length, '| Submitting (max):', toSubmit.length);

  const authClient = await getClient();
  const { google } = require('googleapis');
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  let ok = 0;
  let err = 0;
  for (const url of toSubmit) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: 'URL_UPDATED' },
      });
      ok++;
      process.stdout.write('.');
    } catch (e) {
      err++;
      console.error('\n', url, e.message || e.code || e);
    }
  }
  console.log('\nDone. Submitted:', ok, '| Errors:', err);
  if (err > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
