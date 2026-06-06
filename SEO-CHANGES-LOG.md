# SEO Kings — Site Audit Change Log
**Session date:** 4 June 2026  
**Prepared by:** Vortex Design Studio

---

## Summary Table

| Page URL | What Changed | Date |
|----------|-------------|------|
| `/web-design` | Removed location-specific geo targeting; fixed hosting price copy; updated FAQs | 2026-06-04 |
| `/web-design` (meta) | Removed "across Bath & North East Somerset" from meta description | 2026-06-04 |
| `/web-design` (schema) | Service renamed; `areaServed` broadened to BANES + Somerset + Wiltshire | 2026-06-04 |
| `/areas/odd-down-bath` | Full unique content added (description, landmarks, FAQs, local context) | 2026-06-04 |
| `/areas/combe-down-bath` | Full unique content added | 2026-06-04 |
| `/areas/widcombe-bath` | Full unique content added | 2026-06-04 |
| `/areas/larkhall-bath` | Full unique content added | 2026-06-04 |
| `/areas/twerton-bath` | Full unique content added | 2026-06-04 |
| `/areas/weston-bath` | Full unique content added | 2026-06-04 |
| `/areas/oldfield-park-bath` | Full unique content added | 2026-06-04 |
| `/areas/bear-flat-bath` | Full unique content added | 2026-06-04 |
| `/areas/bathampton-bath` | Full unique content added | 2026-06-04 |
| `/areas/bathwick-bath` | Full unique content added | 2026-06-04 |
| `/areas/southdown-bath` | Full unique content added | 2026-06-04 |
| `/areas/batheaston-bath` | Full unique content added | 2026-06-04 |
| `/areas/walcot-bath` | Full unique content added | 2026-06-04 |
| `/areas/bathford-bath` | Full unique content added | 2026-06-04 |
| `/areas/timsbury` | Full unique content added (coalfield heritage, local trades) | 2026-06-04 |
| `/areas/westfield` | Full unique content added (Somer Valley context, residential growth) | 2026-06-04 |
| `/areas/chew-magna` | Full unique content added (affluent village, heritage properties) | 2026-06-04 |
| `/areas/temple-cloud` | Full unique content added (Cam Valley cluster, rural positioning) | 2026-06-04 |
| `/areas/clutton` | Full unique content added (Cam Valley cluster, village trades) | 2026-06-04 |
| `/case-studies/aurelian-massage` | Case study fully built with overview, challenges, solution, results, testimonial | 2026-06-04 |
| `sitemap.js` | lastmod updated for `/web-design` + 5 Somerset village pages | 2026-06-04 |

---

## Pages verified clean — no changes needed

The following pages were audited and found to already be correct. No edits were made.

- `/web-design-packages` — geo.region set to GB-BAS, theme-color correct, pricing accurate
- `/case-studies` — geo.region correct, template up to date
- `/about` — "Keynsham-based" present, canonical and geo tags in place
- `/website-designer-keynsham` — pricing correct (£250 + £50/page)

---

## Task 1 — `/web-design` page overhaul

### What was wrong

The `/web-design` service page was over-indexed to Bath and BANES. It contained:
- A list of area pill links tying the page tightly to specific local geographies
- A hero description referencing "trades across Bath & BANES" — limiting its relevance nationally and to other Somerset/Wiltshire searches
- FAQs with location-specific language
- Incorrect hosting price (£15/month — this is not the current offer)

The problem: `/web-design` is a high-value commercial page. By loading it with geo-specific signals, it was competing with (and potentially suppressing) the individual area pages like `/website-designer-bath`, `/website-designer-radstock`, etc., which are better positioned to rank for those local queries.

The schema's `areaServed` also referenced Bath city + Somerset — this was narrower than the actual service area and inconsistent with the Wiltshire pages already live on the site.

### What was fixed

**`src/views/WebDesign.jsx`**
- Removed the "Areas covered" pill-link section entirely
- Replaced with a single neutral paragraph and a "Find your area" link — keeps internal linking without embedding location signals in the service page itself
- Hero description changed from "trades across Bath & BANES" to generic "tradespeople"
- FAQs rewritten to remove location-specific language
- Hosting price corrected: **6 months free, then £50/year** (was showing £15/month)

**`app/web-design/page.jsx`**
- Meta description updated: "across Bath & North East Somerset" removed

**`app/WebDesignServiceSchema.jsx`**
- Service name changed from "Website Design Bath & Somerset" to "Website Design for Trades"
- `areaServed` updated to: Bath and North East Somerset, Somerset, Wiltshire

### What to watch in GSC

**Page:** `https://seo-kings.co.uk/web-design`

| Metric | Queries to monitor | What good looks like |
|--------|-------------------|---------------------|
| Impressions + Position | "web design for tradespeople", "website design for trades", "website designer for plumbers / builders / electricians" | Impressions growing for broader trade queries over 8–12 weeks |
| Impressions + Position | "web design Bath", "website designer Bath" | These may *drop slightly* — that's expected and healthy. The area pages should absorb this traffic |
| Clicks | All queries to `/web-design` | Clicks should hold or increase as the page becomes relevant to a broader audience |

**When to check:** 6–8 weeks after Google re-crawls (request indexing in GSC now). Full picture at 12 weeks.

**What success looks like:** `/web-design` ranks for generic trade + service queries. The area pages (`/website-designer-bath`, `/website-designer-radstock`, etc.) hold or improve on their local queries without `/web-design` competing with them.

---

## Task 2 — Bath neighbourhood area pages (14 pages)

### What was wrong

The 14 Bath neighbourhood pages (`/areas/[neighbourhood]-bath`) existed but contained generic or templated content with little to distinguish one neighbourhood from another. Pages with thin, duplicated content:
- Struggle to rank because Google has no reason to prefer them over each other
- Miss the specific local signals (landmarks, business types, neighbourhood character) that help map local search intent
- Don't serve the user well — a plumber searching for work in Larkhall has a different context to one in Combe Down

### What was fixed

Every page now has **unique content** written specifically for that neighbourhood:

- **Description + extended description** — neighbourhood character and what kind of businesses operate there
- **Why intro + why bullets** — specific reasons trades in that area benefit from a good web presence
- **Landmarks** — real, named local landmarks to reinforce geo-relevance in the content and schema
- **Unique FAQs** — questions and answers relevant to that specific neighbourhood

**Pages updated:**

| Neighbourhood | Key local signals added |
|--------------|------------------------|
| Odd Down | Southern Bath, local tradespeople context |
| Combe Down | Quarrying heritage, independent businesses, affluent residential |
| Widcombe | Canal-side, mixed residential/commercial, Widcombe Hill |
| Larkhall | Village-feel suburb, independent traders, St Saviour's Road |
| Twerton | Working-class heritage, Bath Rugby proximity, Twerton High Street |
| Weston | North Bath, village character, Weston High Street |
| Oldfield Park | Student/family mix, Moorland Road, dense residential |
| Bear Flat | Affluent south Bath, Bear Flat shops, independent businesses |
| Bathampton | Kennet & Avon Canal, rural village, commuter location |
| Bathwick | Georgian conservation area, Sydney Gardens, high-value properties |
| Southdown | Quiet residential, Dartmouth Avenue area |
| Batheaston | Village on A4, Avon valley, mix of trades serving rural homes |
| Walcot | Artisan quarter, independent shops, Walcot Street |
| Bathford | Affluent village, conservation area, historic properties |

Additional content per page: **local SEO mentions** and **Google Business Profile service mentions** to reinforce the service offering in context.

### What to watch in GSC

**Pages:** `https://seo-kings.co.uk/areas/[neighbourhood]-bath` (all 14)

| Metric | Queries to monitor | What good looks like |
|--------|-------------------|---------------------|
| Impressions | "web design [neighbourhood]", "website designer [neighbourhood] Bath", "local SEO [neighbourhood]" | Pages start appearing in impressions data (even position 30–50 is a good early signal) |
| Average position | As above | Movement from unranked → 20–40 range within 6 weeks; 10–20 range within 12 weeks |
| Clicks | Any clicks to these pages | Even 1–2 clicks/month per page at this stage is healthy progress |

**When to check:** 4–6 weeks for first impressions data. Meaningful position movement at 8–12 weeks.

**Tip:** In GSC, filter by page URL (e.g. `/areas/combe-down-bath`) and look at the Queries tab to see what Google thinks the page is about. If unrelated queries appear, that's a signal to strengthen the content further.

---

## Task 2 — Somerset village area pages (5 pages)

### What was wrong

The five Somerset village pages existed but lacked the depth and local specificity to compete — even in low-competition rural searches. Generic content means Google can't differentiate them from one another or from the broader area pages.

### What was fixed

Full unique content written for each village:

| Village | Key local signals added |
|---------|------------------------|
| Timsbury | Coalfield heritage, Conygre Hall, rural trades context |
| Westfield | Midsomer Norton connection, Somer Valley FM, residential growth area |
| Chew Magna | Affluent commuter village, independent businesses, heritage/period properties |
| Temple Cloud | Cam Valley cluster, rural positioning, local tradespeople |
| Clutton | Cam Valley cluster, village trades, rural Somerset identity |

### What to watch in GSC

**Pages:** `https://seo-kings.co.uk/areas/[village]` (all 5)

| Metric | Queries to monitor | What good looks like |
|--------|-------------------|---------------------|
| Impressions | "web design [village name]", "website designer [village] Somerset", "local SEO [village]" | These are low-volume searches — even 10–20 impressions/month confirms Google has indexed the intent |
| Average position | As above | Rural/village pages often reach top 10 quickly due to low competition — check at 6 weeks |
| Clicks | Any clicks | Conversion rates on niche local pages are high — one click can mean a lead |

**When to check:** 4–6 weeks. Rural Somerset village pages are low competition — faster movement expected than Bath neighbourhood pages.

---

## Task 2 — Aurelian Massage case study

### What was done

`/case-studies/aurelian-massage` — fully built. The page now includes:
- Business overview
- Challenges faced before the new site
- Solution delivered
- Results achieved
- Timeline
- Ross's testimonial

### What to watch in GSC

**Page:** `https://seo-kings.co.uk/case-studies/aurelian-massage`

| Metric | Queries to monitor | What good looks like |
|--------|-------------------|---------------------|
| Impressions | "web design massage therapist Bath", "website for massage therapist", "Aurelian Massage" | Branded query (Aurelian Massage) should appear quickly; service queries take longer |
| Position | As above | Branded queries often reach top 3 within weeks |

Case studies also support the main service pages indirectly — they demonstrate real results, which builds trust signals across the site.

---

## GSC action checklist — do this now

Request re-indexing for the following URLs via **GSC → URL Inspection → Request Indexing** (up to ~10/day):

**Priority batch (day 1):**
1. `https://seo-kings.co.uk/web-design`
2. `https://seo-kings.co.uk/areas/combe-down-bath`
3. `https://seo-kings.co.uk/areas/walcot-bath`
4. `https://seo-kings.co.uk/areas/bathwick-bath`
5. `https://seo-kings.co.uk/areas/bear-flat-bath`
6. `https://seo-kings.co.uk/areas/chew-magna`
7. `https://seo-kings.co.uk/areas/timsbury`
8. `https://seo-kings.co.uk/case-studies/aurelian-massage`
9. `https://seo-kings.co.uk/areas/twerton-bath`
10. `https://seo-kings.co.uk/areas/widcombe-bath`

**Batch 2 (day 2):**
1. `https://seo-kings.co.uk/areas/larkhall-bath`
2. `https://seo-kings.co.uk/areas/odd-down-bath`
3. `https://seo-kings.co.uk/areas/weston-bath`
4. `https://seo-kings.co.uk/areas/oldfield-park-bath`
5. `https://seo-kings.co.uk/areas/bathampton-bath`
6. `https://seo-kings.co.uk/areas/southdown-bath`
7. `https://seo-kings.co.uk/areas/batheaston-bath`
8. `https://seo-kings.co.uk/areas/bathford-bath`
9. `https://seo-kings.co.uk/areas/westfield`
10. `https://seo-kings.co.uk/areas/temple-cloud`

**Batch 3 (day 3):**
1. `https://seo-kings.co.uk/areas/clutton`

---

---

# SEO Kings — Site Audit Change Log
**Session date:** 6 June 2026  
**Prepared by:** Vortex Design Studio

---

## Summary Table — 6 June 2026

| Page URL | What Changed | Date |
|----------|-------------|------|
| `/areas/keynsham` | H2 de-optimised from "Web design and SEO in Keynsham" → "Digital marketing in Keynsham"; text link added to `/website-designer-keynsham` | 2026-06-06 |
| `/areas/midsomer-norton` | Same H2 fix; FAQ heading updated; text link added to `/website-designer-midsomer-norton` | 2026-06-06 |
| `/website-designer-midsomer-norton` | Added link back to Midsomer Norton area hub | 2026-06-06 |
| `/website-designer-melksham` | Removed geo-mismatched Peachy Cleans case study; replaced with Bath-relevant case studies | 2026-06-06 |
| `/website-designer-corsham` | Same Peachy Cleans removal and replacement | 2026-06-06 |
| `/website-designer-bradford-on-avon` | Same Peachy Cleans removal and replacement | 2026-06-06 |
| `BlogPost.jsx` | Dead content removed for 3 redirected slugs; 3 blog posts updated with "local SEO Bath" contextual links | 2026-06-06 |
| `/local-seo/bath` | Hero opens with "Our local SEO Bath service…"; H2 changed to exact phrase "Local SEO Bath"; FAQ expanded with all BA1/BA2 neighbourhoods | 2026-06-06 |
| 14 × Bath neighbourhood area pages | Each now links to `/local-seo/bath` via Local SEO service card | 2026-06-06 |
| Directory listings | Clutch.co, DesignRush submitted; Yell.com completed | 2026-06-06 |

---

## Task 1 — Keyword cannibalisation fixes (area hub pages)

### What was wrong

`/areas/keynsham` and `/areas/midsomer-norton` had H2s reading "Web design and SEO in [town]" — commercial intent language that put them in direct competition with the dedicated service pages (`/website-designer-keynsham`, `/website-designer-midsomer-norton`). Two pages competing for the same query split the authority between them and suppressed both.

### What was fixed

**`KeynshamHub.jsx`**
- H2 changed from "Web design and SEO in Keynsham" → "Digital marketing in Keynsham"
- Added inline text link to `/website-designer-keynsham` with commercial anchor text

**`MidsomerNortonHub.jsx`**
- Same H2 change (→ "Digital marketing in Midsomer Norton")
- FAQ heading updated to remove keyword overlap
- Added inline text link to `/website-designer-midsomer-norton`

**`WebsiteDesignerMidsomerNorton.jsx`**
- Added reciprocal link back to `/areas/midsomer-norton` to reinforce the hub-and-spoke relationship

### What to watch in GSC

| Page | Query to monitor | Expected outcome |
|------|-----------------|-----------------|
| `/website-designer-keynsham` | "web design keynsham", "website designer keynsham" | Position should improve as the area hub stops competing |
| `/areas/keynsham` | "keynsham web design" vs "keynsham digital marketing" | Impressions shift toward informational intent queries |
| `/website-designer-midsomer-norton` | "web design midsomer norton" | Same — cleaner separation in rankings |
| `/areas/midsomer-norton` | Informational Midsomer Norton queries | Should hold or grow without cannibalising the service page |

**When to check:** 4–6 weeks. Internal link changes are picked up quickly once Googlebot recrawls.

---

## Task 2 — Geo-mismatched case studies fixed (Wiltshire pages)

### What was wrong

`/website-designer-melksham`, `/website-designer-corsham`, and `/website-designer-bradford-on-avon` were displaying the Peachy Cleans case study — a cleaning business based in Midsomer Norton, Somerset. Showing a Somerset case study on Wiltshire service pages sends a mixed geo-signal: the page claims to serve Wiltshire but its social proof is from a different county. This weakens local relevance for Wiltshire searchers and for Google.

Dead blog post content for 3 already-redirected slugs was also removed from `BlogPost.jsx` — serving 404-adjacent content for redirected URLs adds no value.

### What was fixed

**`WebsiteDesignerMelksham.jsx`, `WebsiteDesignerCorsham.jsx`, `WebsiteDesignerBradfordOnAvon.jsx`**
- Peachy Cleans (Midsomer Norton) case study removed
- Replaced with Bath-relevant case studies — geographically closer to Wiltshire and more credible for cross-border west of England searches

**`BlogPost.jsx`**
- Removed dead content for 3 redirected blog slugs (clean-up, no ranking impact expected)

### What to watch in GSC

| Page | What good looks like |
|------|---------------------|
| `/website-designer-melksham` | Improved click-through rate as local relevance signals strengthen |
| `/website-designer-corsham` | Same |
| `/website-designer-bradford-on-avon` | Same |

**When to check:** 6–8 weeks. Case study geo-relevance is a moderate signal — improvement will be gradual.

---

## Task 3 — Directory listings submitted

### What was done

Three directory profiles submitted or completed to build citation consistency and domain authority:

| Directory | Action | Status |
|-----------|--------|--------|
| **Clutch.co** | Full profile submitted | Pending validation (7–10 days) |
| **DesignRush** | Profile submitted | Pending |
| **Yell.com** | Existing listing completed — description, services, logo, photos, areas, opening hours added | Live |

### What to watch

- **Branded search impressions** in GSC — an uptick in "SEO Kings" or "Vortex Design Studio" queries confirms the listings are driving brand awareness
- **Domain authority / referring domains** in Ahrefs or Moz — new citation links should appear within 4–8 weeks of validation
- **Local Pack visibility** — consistent NAP (name, address, phone) across Yell, Clutch, DesignRush, and Google Business Profile strengthens local ranking signals

**When to check:** 4–8 weeks for Clutch and DesignRush to validate and index. Yell is live now — check it's crawlable.

---

## Task 4 — Local SEO Bath page boost

### What was wrong

`/local-seo/bath` was ranking around position 8 for "local SEO Bath" — within reach of top 5 but not quite there. The page lacked explicit exact-match phrase prominence in key on-page positions (hero, H2), and the 14 Bath neighbourhood area pages weren't cross-linking to it — a missed internal authority signal.

### What was fixed

**`LocalSEOBath.jsx`**
- Hero description now opens with "Our local SEO Bath service…" — exact-match phrase at the start of the first visible sentence
- Main H2 changed to exact phrase "Local SEO Bath" — keyword prominence in a heading element
- FAQ section expanded to list all BA1/BA2 neighbourhoods — reinforces topical depth and covers long-tail neighbourhood + local SEO queries

**`AreaDetail.jsx`** (affects 14 Bath neighbourhood pages)
- Each of the 14 Bath neighbourhood area pages now includes a Local SEO service card linking to `/local-seo/bath`
- 14 new internal links pointing to the target page with relevant anchor text

**`BlogPost.jsx`** (3 blog posts)
- 3 existing blog posts updated with contextual "local SEO Bath" links pointing to `/local-seo/bath`
- Adds editorial internal link weight from content pages

### What to watch in GSC

**Target query:** "local SEO Bath"  
**Current position:** ~8  
**Target:** Top 5 within 6–8 weeks

| Signal | What to watch |
|--------|--------------|
| Average position | "local SEO Bath" — expect movement upward within 4–6 weeks as internal links are crawled |
| Impressions | Should grow as FAQ now covers BA1/BA2 neighbourhood variants |
| Click-through rate | Monitor CTR at current position — if it's low, title/description may need a tweak |

**When to check:** 6 weeks for first position movement. 8 weeks for a reliable read on whether the changes are working.

---

## URLs to submit to GSC — 6 June 2026

Request re-indexing for the following URLs via **GSC → URL Inspection → Request Indexing** (up to ~10/day):

**Priority batch (day 1):**
1. `https://seo-kings.co.uk/local-seo/bath`
2. `https://seo-kings.co.uk/areas/keynsham`
3. `https://seo-kings.co.uk/areas/midsomer-norton`
4. `https://seo-kings.co.uk/website-designer-keynsham`
5. `https://seo-kings.co.uk/website-designer-midsomer-norton`
6. `https://seo-kings.co.uk/website-designer-melksham`
7. `https://seo-kings.co.uk/website-designer-corsham`
8. `https://seo-kings.co.uk/website-designer-bradford-on-avon`
9. `https://seo-kings.co.uk/areas/odd-down-bath` *(now links to /local-seo/bath)*
10. `https://seo-kings.co.uk/areas/combe-down-bath`

**Batch 2 (day 2):**
1. `https://seo-kings.co.uk/areas/widcombe-bath`
2. `https://seo-kings.co.uk/areas/larkhall-bath`
3. `https://seo-kings.co.uk/areas/twerton-bath`
4. `https://seo-kings.co.uk/areas/weston-bath`
5. `https://seo-kings.co.uk/areas/oldfield-park-bath`
6. `https://seo-kings.co.uk/areas/bear-flat-bath`
7. `https://seo-kings.co.uk/areas/bathampton-bath`
8. `https://seo-kings.co.uk/areas/bathwick-bath`
9. `https://seo-kings.co.uk/areas/southdown-bath`
10. `https://seo-kings.co.uk/areas/batheaston-bath`

**Batch 3 (day 3):**
1. `https://seo-kings.co.uk/areas/walcot-bath`
2. `https://seo-kings.co.uk/areas/bathford-bath`

---

## Review schedule — 6 June 2026 changes

| When | What to check |
|------|--------------|
| **2 weeks** | Confirm all changed pages are indexed (GSC → Coverage) |
| **4–6 weeks** | Cannibalisation fix: check `/website-designer-keynsham` and `/website-designer-midsomer-norton` positions; check Yell listing is crawlable |
| **6–8 weeks** | "local SEO Bath" position — target is top 5; Wiltshire pages CTR and local relevance signals |
| **8–10 weeks** | Clutch.co and DesignRush validated and indexed; branded search impressions in GSC |
| **12 weeks** | Full read on all June 6 changes vs baseline |

---

## Review schedule

| When | What to check |
|------|--------------|
| **2 weeks** | Confirm all pages are indexed (GSC → Coverage) |
| **6 weeks** | First impressions data for area pages; `/web-design` position on trade queries |
| **8–10 weeks** | Position movement on Bath neighbourhood pages; Somerset village pages should be ranking |
| **12 weeks** | Full picture — compare clicks and impressions to pre-audit baseline (4 June 2026) |

To set a baseline now: in GSC, note the current impressions and clicks for `/web-design` and any area pages already in the data. Screenshot or export — you'll want this for comparison.
