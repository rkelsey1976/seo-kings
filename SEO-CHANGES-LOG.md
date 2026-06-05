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

## Review schedule

| When | What to check |
|------|--------------|
| **2 weeks** | Confirm all pages are indexed (GSC → Coverage) |
| **6 weeks** | First impressions data for area pages; `/web-design` position on trade queries |
| **8–10 weeks** | Position movement on Bath neighbourhood pages; Somerset village pages should be ranking |
| **12 weeks** | Full picture — compare clicks and impressions to pre-audit baseline (4 June 2026) |

To set a baseline now: in GSC, note the current impressions and clicks for `/web-design` and any area pages already in the data. Screenshot or export — you'll want this for comparison.
