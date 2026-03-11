# Cursor AI Prompt: Optimize Service / Location Pages for 2026 AI Search

Use this prompt in **Cursor Composer** to optimize location-based service pages for AI search visibility. Attach the relevant files (e.g. `@app/areas`, `@src/pages/AreaDetail.jsx`, service page components) when running.

---

## Prompt (copy from here)

```
Analyze these location-based service pages. For each page:

1. **Hyper-localize content**
   - Update the copy to mention specific local landmarks and postcodes (e.g. BS31 for Keynsham, BA1/BA2 for Bath, BA3 for Midsomer Norton) to improve local relevance.
   - Use existing LANDMARKS_BY_SLUG and area.postcodes where available; add or surface them in visible content where it reads naturally.

2. **Technical SEO audit**
   - Fix missing alt tags on images; ensure every image has descriptive, location- or service-relevant alt text.
   - Ensure the header hierarchy (H1 → H2 → H3) is logical and consistent for AI crawlers (e.g. one H1 per page, then H2s for sections, H3s for subsections).

3. **Schema injection**
   - Add or update LocalBusiness and Service JSON-LD schema per page/area.
   - Ensure the areaServed property explicitly references the correct Wikipedia or DBpedia entry for that specific town (e.g. sameAs or containedInPlace with sameAs).

4. **E-E-A-T section**
   - Add a placeholder component or section for "Local Client Testimonials" (or "What [Town] clients say") specific to this area to boost trust signals. It can be a simple section with a heading and placeholder text/cards until real testimonials are added.

5. **Constraints**
   - Maintain the existing Tailwind CSS styling.
   - Do not delete existing functional scripts or break current behaviour.
```

---

## How to use

1. Open **Cursor** and go to **Composer** (Cmd/Ctrl + I).
2. Paste the prompt text above into the input.
3. Attach files, e.g.:
   - `@app/areas`
   - `@src/pages/AreaDetail.jsx`
   - `@src/pages/WebDesign.jsx` (or other service pages if applicable)
4. Run the prompt and review the suggested edits before applying.

---

## Relevant files in this project

- **Area pages:** `app/areas/[slug]/page.jsx`, `src/pages/AreaDetail.jsx` (areasData, LANDMARKS_BY_SLUG, AREA_GEO, schema).
- **Service pages:** `src/pages/WebDesign.jsx`, `src/pages/LocalSEO.jsx`, `src/pages/GoogleBusinessProfile.jsx` (if they have location-specific variants).
- **Schema:** LocalBusiness and Service JSON-LD are built in `AreaDetail.jsx` and in `app/BaseSchemas.jsx`; areaServed already uses Place/PostalCode and can be extended with sameAs to Wikipedia/DBpedia per town.
