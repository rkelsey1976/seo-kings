# Sitemap validator: "Content type text/html" error

Some sitemap validators (e.g. Sitechecker) say their bot needs **Content-Type: text/html** and that they had trouble crawling the site.

## What we did

- **netlify.toml** – Set explicit `Content-Type` for:
  - `/sitemap.xml` → `application/xml; charset=utf-8`
  - `/robots.txt` → `text/plain; charset=utf-8`  
  So the sitemap and robots file are served with the correct type. HTML pages are still served by Netlify with `text/html` (default for `index.html`).

## What to check

1. **Confirm your site returns HTML**
   - In a terminal:  
     `curl -I https://seokings.co.uk/`  
   - Look for:  
     `Content-Type: text/html; charset=utf-8` (or similar).
   - If you see that, the site is sending HTML with the right type.

2. **Confirm sitemap returns XML**
   - Run:  
     `curl -I https://seokings.co.uk/sitemap.xml`  
   - You should see:  
     `Content-Type: application/xml; charset=utf-8` (after deploy).

3. **Validator limitations**
   - Some tools only support static HTML and don’t handle SPAs well (same HTML for every URL, content loaded by JS).
   - If your site is a React SPA (like this one), validators may still report issues even when the server sends `text/html` and the sitemap is valid.

## What to use instead

- **Google Search Console** – Sitemaps → add `https://seokings.co.uk/sitemap.xml` (in the property that matches your domain). This is the one that matters for Google.
- **Bing Webmaster Tools** – Submit the same sitemap URL.
- **Browser** – Open `https://seokings.co.uk/sitemap.xml` and `https://seokings.co.uk/` to confirm they load and look correct.

If `curl -I` shows `text/html` for `/` and (after deploy) `application/xml` for `/sitemap.xml`, your setup is correct and the validator message is likely a limitation of that tool rather than a problem with your site.
