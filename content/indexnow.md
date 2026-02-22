# IndexNow – notify search engines when content changes

[IndexNow](https://www.indexnow.org/documentation) lets you tell Bing, Yandex, and other participating engines that your pages have been added or updated, so they can re-crawl and index faster.

## What’s in this repo

- **Key file (ownership):** `public/seokings-indexnow-a1b2c3d4e5f6.txt`  
  Deployed at `https://seo-kings.co.uk/seokings-indexnow-a1b2c3d4e5f6.txt`. Search engines use this to verify you own the site.

- **Submit script:** `scripts/submit-indexnow.js`  
  Reads `out/sitemap.xml`, then POSTs all URLs to the IndexNow API (shared across Bing, Yandex, etc.).

## How to submit your sitemap to IndexNow

1. **Build and deploy** so the key file and site are live:
   ```bash
   npm run build
   ```
   Then deploy the `out/` folder (and ensure `public/` files are at the site root, e.g. `https://seo-kings.co.uk/seokings-indexnow-a1b2c3d4e5f6.txt`).

2. **Run the submit script** (after deploy):
   ```bash
   npm run indexnow
   ```
   This sends all URLs from `out/sitemap.xml` to IndexNow. You should see: `IndexNow submission accepted: 200` or `202`.

3. **When to run:** After each deploy when you’ve added or changed important pages. You can also run it manually whenever you want to ask engines to re-crawl.

## Notes

- IndexNow does **not** replace [Google Search Console](https://search.google.com/search-console). For Google, keep submitting your sitemap there.
- The key in the key file should stay private (only you and the engines that verify it). Don’t change it unless you’re moving to a new key and key file.
