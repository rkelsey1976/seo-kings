# SEO Kings — Project Instructions for Claude

## About this project

Next.js 14 App Router with static export (`output: 'export'`), deployed on Netlify.
Richard Kelsey / Vortex Design Studio. Local web design and SEO for Bath & Somerset trades.

---

## Standing rules

### Sitemap lastmod — update on every page edit

**When editing any page, update its `lastmod` date in `src/constants/sitemap.js` in the same commit.**

- Use today's date in `YYYY-MM-DD` format
- The file to update is `src/constants/sitemap.js` → `STATIC_ROUTES` array
- Blog posts and case studies use a dynamic build date (already automated — no action needed)
- This keeps Google's crawl scheduler accurate and speeds up re-indexing after changes

Example: if you edit `WebsiteDesignerBath.jsx`, update:
```js
{ path: '/website-designer-bath', lastmod: '2026-05-29', ... }
```

---

## Architecture — critical to understand

### SEO / metadata

- **`<SEO>` client component is NOT read by Google** — it only injects JSON-LD schemas via the `schemas` prop
- **Server-side metadata in `app/*/page.jsx` is what Google reads** — title, description, canonical, breadcrumbs all go here
- Dead props on `<SEO>` (title, description, canonical, breadcrumbs) do nothing — clean them when seen, keep only `schemas={[schema]}`
- Pattern: `<SEO schemas={[schema]} />`

### Static export

- `images: { unoptimized: true }` — no automatic WebP conversion
- No server-side rendering — everything is pre-rendered at build time
- Netlify deploys on every push to main

---

## Page improvement pattern (buried pages)

When fixing a page with poor GSC rankings, apply this checklist:

1. **Clean dead SEO props** → `<SEO schemas={[schema]} />`
2. **Add `detail` text to results cards** — one sentence of context per card
3. **Add Bath Painter to results** if it's a relevant service/area page (slug: `bath-painter`)
4. **Add content expansion section** — `~400 words`, keyword-variant H2 (e.g. "Web design in Radstock — why BA3 is easier to rank than you think"), 4 feature cards
5. **Update FAQ H2** — include location (e.g. "Common questions about web design in Radstock")
6. **Add related services section** at the bottom
7. **Results grid**: use `sm:grid-cols-2 lg:grid-cols-3` when there are 3 cards

---

## Case studies

Current live case studies: `peachy-cleans`, `new-decorating`, `aurelian-massage`, `bath-painter`

Bath Painter details:
- Site: bathpainter.co.uk
- 20+ years experience, listed buildings, lime plaster, traditional distemper, Georgian/Victorian/Edwardian
- Testimonial: Duncan Herron, 5 stars
- Result: enquiries up within a week of launch

---

## GSC indexing habit

After any session where key pages are updated, request re-indexing in Google Search Console:
- GSC → URL Inspection → paste URL → "Request Indexing"
- Up to ~10 URLs per day
- Priority pages: website-designer-*, local-seo/*, case-studies/bath-painter
