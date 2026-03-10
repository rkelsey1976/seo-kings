# Submit Sitemap to Google and Bing

Your XML sitemap URL:

**https://seo-kings.co.uk/sitemap.xml**

Use this URL in both Google Search Console and Bing Webmaster Tools.

---

## Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Select your property for **seo-kings.co.uk** (or add the property if you haven’t yet: **Add property** → enter `https://seo-kings.co.uk`).
3. In the left sidebar, click **Sitemaps** (under “Indexing”).
4. Under **Add a new sitemap**, enter: `sitemap.xml`  
   (Google will use your property URL, so this becomes `https://seo-kings.co.uk/sitemap.xml`.)
5. Click **Submit**.

Google will show the sitemap status and discovered URLs. Re-crawling can take a few days.

---

## Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Sign in and select your site **seo-kings.co.uk** (or add it: **Add a site** → enter the URL and verify ownership).
3. In the left menu, go to **Sitemaps** (under “Configure my site” or “Reports & Data”).
4. Under **Submit a sitemap**, enter: `https://seo-kings.co.uk/sitemap.xml`
5. Click **Submit**.

Bing will list the sitemap and process it. You can also use **URL Submission** or **IndexNow** for faster discovery (see below).

---

## Optional: IndexNow (Bing / Yandex)

The repo includes a script that submits URLs to IndexNow (used by Bing and others):

```bash
npm run build
# Deploy so https://seo-kings.co.uk/sitemap.xml is live, then:
node scripts/submit-indexnow.js
```

This notifies Bing/Yandex of your URLs without waiting for a full sitemap crawl.

---

## Verify the sitemap is live

Before submitting, confirm the sitemap is reachable:

- Open: https://seo-kings.co.uk/sitemap.xml  
- You should see XML with `<urlset>` and `<url>` entries.

If you use static export, run `npm run build` and deploy the `out/` folder so `sitemap.xml` is served at the URL above.
