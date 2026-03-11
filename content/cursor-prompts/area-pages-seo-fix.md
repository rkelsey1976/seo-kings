# Cursor AI Prompt: Fix All Area Pages (SEO)

Use this prompt in **Cursor Composer** to audit and fix area pages for local SEO. Copy the block below into Composer.

---

## Prompt (copy from here)

```
Review all files that power area pages in this project:

- app/areas/[slug]/page.jsx (dynamic route + generateMetadata)
- app/areas/page.jsx (areas index)
- src/pages/AreaDetail.jsx (single component with areasData, schema, and content for all areas)
- src/constants/areaMeta.js (metaTitle, metaDescription per slug)

For each area page (each slug in areasData / AREA_SLUGS):

1. **Schema**
   - Ensure every area has unique LocalBusiness and Service JSON-LD (no shared generic node).
   - In areaServed / serviceArea, use the specific town name and local postcode for that area (e.g. Keynsham + BS31, Bath + BA1/BA2, Midsomer Norton + BA3). Do not use generic "Bath" for non-Bath areas.
   - Keep @id unique per area (e.g. #localbusiness-{slug}, #service-website-design-{slug}).

2. **Metadata**
   - Update <title> and meta description so they include the specific town name and the phrase "Website Designer" (e.g. "Website Designer in [Town Name] | …" or "… Website Designer … [Town Name]").
   - Ensure metaTitle and metaDescription in areaMeta.js and in areasData (metaTitle, metaDescription) are aligned and location-specific.

3. **Content**
   - Add or refine a distinct "Why choose SEO Kings in [Town Name]" (or equivalent) section per area so content is not duplicated across area pages. Use area-specific reasons, landmarks, or stats where possible.

4. **Internal linking**
   - Ensure a clear "back to homepage" (or "Home") link is present.
   - Ensure links to other nearby service areas are present (e.g. nearbyAreas) to improve crawlability and topical relevance.

**Constraints**
- Do not change the overall CSS theme or layout structure.
- Only modify SEO-related metadata, schema, and location-specific text strings.
- Preserve existing behaviour and data shape (areasData, AREA_GEO, LANDMARKS_BY_SLUG, etc.); only fix or add what’s missing for the above goals.
```

---

## How to use

1. Open Cursor and go to **Composer** (Cmd/Ctrl + I).
2. Paste the prompt text (the block between the triple backticks above) into the input.
3. Optionally add: `@app/areas @src/pages/AreaDetail.jsx @src/constants/areaMeta.js` so Cursor focuses on those paths.
4. Run the prompt and apply the suggested edits after reviewing the diff.

---

## Reference: area page structure in this project

- **Route:** `app/areas/[slug]/page.jsx` → renders `<AreaDetail params={params} />`.
- **Metadata:** `generateMetadata` uses `AREA_META[slug]`; `AreaDetail` uses `area.metaTitle`, `area.metaDescription` for SEO component.
- **Schema:** Built inside `AreaDetail.jsx` (breadcrumbSchema, serviceWebsiteDesignSchema, serviceLocalSEOSchema, areaLocalBusinessSchema, faqSchema) and passed to `<SEO schemas={schemasForPage} />`.
- **Data:** `areasData` in `AreaDetail.jsx` holds per-area content; `area.postcodes`, `area.name`, `area.county` drive schema and copy. `AREA_GEO` and `LANDMARKS_BY_SLUG` are used for geo and landmarks.
- **Nearby areas:** Many areas define `nearbyAreas` (array of slugs) used for internal links.
