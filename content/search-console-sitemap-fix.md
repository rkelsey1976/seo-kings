# Fix "URL not allowed" for Sitemap in Google Search Console

Your sitemap uses **https://seo-kings.co.uk/** (no www). The error means the property you're submitting to doesn't include those URLs.

---

## Step 1: Add a URL prefix property (recommended)

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click the **property dropdown** (top left) → **Add property**.
3. Choose **URL prefix** (not Domain).
4. Enter exactly: **`https://seo-kings.co.uk`**  
   - Use **https** (not http).  
   - No **www**.  
   - No trailing slash (or use `https://seo-kings.co.uk/` — both work).
5. Click **Continue** and verify (e.g. HTML file — you already have `google5c4250cff1d9c2a5.html` in place).
6. In that **new** property, go to **Sitemaps**.
7. Submit: **`sitemap.xml`** (or `https://seo-kings.co.uk/sitemap.xml`).
8. Leave the old property; use this one for the sitemap.

---

## Step 2: If you only have a Domain property

- If you verified with a **Domain** (e.g. DNS record for `seo-kings.co.uk`), Google can still show "URL not allowed" for sitemap URLs in that property.
- **Fix:** Add a **URL prefix** property **`https://seo-kings.co.uk`** as above, verify it, and submit the sitemap there. Use the URL prefix property for sitemaps.

---

## Step 3: If you used http by mistake

- If the property is **`http://seo-kings.co.uk`** (no **s**), then **https** URLs in the sitemap are not allowed.
- **Fix:** Add a new property with **`https://seo-kings.co.uk`**, verify, and submit the sitemap in that property.

---

## Checklist

- [ ] Property type: **URL prefix** (not Domain for sitemap).
- [ ] Property URL: **https://seo-kings.co.uk** (https, no www).
- [ ] Sitemap submitted in **that** property as `sitemap.xml` or `https://seo-kings.co.uk/sitemap.xml`.
- [ ] Verification successful (green tick).

After that, the "URL not allowed" errors should stop. It can take a few hours for GSC to re-process the sitemap.
