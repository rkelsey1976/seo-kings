# SEO approach: Website design in [location]

Strategy for ranking for "website design [location]", "website designer [location]" and related searches. Use this alongside `keywords-target.md` (sections 7 and 7b).

---

## 1. What’s already in place

**Area pages (`/areas/[slug]`)**
- Meta title: `Website design [Area] | Website Designer & SEO Add-ons – SEO Kings`
- Meta description: `Website design in [Area] from £399. Our main service. We also offer...`
- H1: `Website design in [Area]` (hero)
- H2: `Website designer & website design in [Area]` with body copy
- SEO component `keywords`: includes `website design ${area.name}`, `website designer ${area.name}`, `web design ${area.name}`
- CTA link: "Website designer in [Area]" → `/web-design`

**Web Design page (`/web-design`)**
- "Areas we serve" section with H2: "Website Design in Bath, North East Somerset & Beyond"
- Location links with anchor text: "Website design Bath", "Website design Keynsham", etc. (Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury, Westfield, Chew Magna, Temple Cloud, Clutton)
- Body copy mentions Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Peasedown, Paulton, Saltford, Timsbury, BANES, Wiltshire

**Blog**
- Dedicated location posts: website-design-bath, website-design-keynsham, website-design-bitton-keynsham, website-design-radstock, website-design-trowbridge, website-design-midsomer-norton-peachy-cleans, one-page-website-bath-banes

**Keywords doc (`keywords-target.md`)**
- Section 7: website designer/design + Bath, BANES, Keynsham, Midsomer Norton, Radstock, Peasedown, Paulton, Saltford, Timsbury, Trowbridge, Somerset, Wiltshire
- Section 7b: one-page, £399, small business, trades, fast website, website that ranks, etc.

---

## 2. Gaps and improvements

### 2.1 Area pages: website-design keywords in “Keywords we target”

- **Gap:** `localKeywords` on area pages are **trade-only** (e.g. plumber Bath, electrician Bath). They don’t include "website design [area]" or "website designer [area]".
- **Improvement:** Add 2–3 website-design phrases per area, e.g.:
  - `website design [Area]`
  - `website designer [Area]`
  - `web design [Area]`
- **Where:** In `AreaDetail.jsx`, add these to each area’s `localKeywords` array (or a separate `websiteKeywords` array and show them in the keywords section / meta).

### 2.2 Web Design page: meta and H1

- **Check:** Meta title and H1 should include primary terms. Ensure:
  - Title includes "website design" or "website designer" + "Bath" or "Bath and North East Somerset".
  - H1 includes "Website design" (or "Website designer") and location (e.g. Bath, or "Bath & North East Somerset").
- **Improvement:** Add "website designer" as well as "website design" in one H2 or subheading (e.g. "Website designer & web design in Bath and North East Somerset") so both variants are reinforced.

### 2.3 BANES vs "Bath and North East Somerset"

- **Gap:** keywords-target.md uses "BANES"; on-site copy uses "Bath and North East Somerset". Some users search "website design BANES" or "website designer BANES".
- **Improvement:** Use "Bath and North East Somerset" as primary in copy; add "BANES" in meta keywords, one H2, or FAQ where it reads naturally (e.g. "website design Bath and BANES") so both are targeted.

### 2.4 Blog coverage for website design + location

- **Current:** Bath, Keynsham, Bitton/Keynsham, Radstock, Trowbridge, Midsomer Norton (Peachy Cleans), one-page Bath & BANES.
- **Gaps:** No dedicated "website design [location]" blog post for: Peasedown St John, Paulton, Saltford, Timsbury, Westfield, Chew Magna, Temple Cloud, Clutton.
- **Improvement:** Prioritise 1–2 more location posts for high-intent areas (e.g. "Website design in Peasedown St John" or "Website design for Somer Valley businesses – Radstock, Midsomer Norton, Paulton") and/or one post targeting "website design Somerset" or "website design Wiltshire" if you serve them.

### 2.5 Internal linking from area pages to blog

- **Gap:** Area pages link to `/web-design` and `/web-design-packages` but not to relevant blog posts (e.g. "Website design in Keynsham" post from Keynsham area page).
- **Improvement:** On each area page, add a short “Read more” or “Website design in [area]” block with a link to the matching blog post (when it exists). Use anchor text like "Website design in [Area]" or "How we do website design in [Area]".

---

## 3. Additional keywords to target

Use these in area pages, Web Design page, blog, and GBP where natural.

### 3.1 Location + format / offer

- one-page website [location] — e.g. one-page website Bath, one-page website Keynsham  
- website from £399 [location] — e.g. website from £399 Bath  
- affordable website design [location]  
- small business website [location]  
- business website [location]

### 3.2 Location + audience

- website for trades [location] — e.g. website for trades Bath  
- website for plumbers / electricians / builders [location]  
- website for local business [location]  
- website for tradespeople Bath and North East Somerset

### 3.3 Outcome / benefit

- website that ranks [location]  
- fast website [location]  
- mobile-friendly website [location]  
- SEO website [location]  
- get found on Google [location]

### 3.4 Alternative phrases

- website builder [location] — some users search "builder" not "design"  
- get a website [location]  
- new website for business [location]  
- professional website [location]  
- web design packages [location]

### 3.5 Regional

- website design Bath and North East Somerset  
- website design BANES  
- website design Somer Valley (Midsomer Norton, Radstock, Paulton)  
- website design Somerset  
- website design Wiltshire (if you serve Trowbridge etc.)

### 3.6 Long-tail (blog / FAQ)

- affordable website design for small business Bath  
- one-page website for trades Bath  
- website design for plumbers electricians Bath  
- website designer near me (already in Tier 2; reinforce on Web Design + area pages with local context)

---

## 4. Quick wins (implementation order) — Done

1. **Area pages:** (Done — added to all main area pages.) Add `website design [Area]`, `website designer [Area]`, `web design [Area]` to each area’s `localKeywords` (or equivalent) and ensure they appear in the "Keywords we target" section and/or meta.
2. **Web Design page:** (Done — H2 now "Website designer & website design in Bath, North East Somerset & Beyond".) Confirm meta title and H1 include "website design" or "website designer" + "Bath" (or BANES). Add one H2 that includes "website designer" if missing.
3. **Web Design page:** (Done — Bath and Keynsham links use "Website designer Bath" and "Website designer Keynsham".) In "Areas we serve", add "Website designer [Area]" as alternate anchor text for 1–2 key areas (e.g. Bath, Keynsham) so "website designer" is reinforced without over-optimising.
4. **Blog:** (Done — added website-design-peasedown-st-john and website-design-somer-valley.) Add 1–2 new posts for missing locations (e.g. "Website design in Peasedown St John" or "Website design for Somer Valley – Radstock, Midsomer Norton, Paulton") and link from the corresponding area pages.
5. **Area pages:** (Done — websiteDesignBlogSlug on Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton; "Read more: Website design in [Area]" link.) From each area page, link to the matching "Website design in [area]" blog post (when it exists) with anchor text "Website design in [Area]" or similar.
6. **FAQ / body:** (Done — FAQ "Do you do website design in BANES?" and (BANES) in body.) On Web Design or key area pages, add one FAQ or sentence that uses "website design BANES" or "website designer Bath and North East Somerset" so BANES and full region name are both covered.

---

## 5. How to use this doc

- **Area page copy:** Use section 3 phrases in H2s, body, and "Keywords we target" (or meta) for that area.
- **Web Design page:** Use section 3 in "Areas we serve" body and in one FAQ (e.g. "Do you do website design in [area]?").
- **Blog ideas:** Use section 3.6 and 3.5 for new "website design [location]" or "website for [audience] [location]" posts.
- **GBP / ads:** Use "website designer [location]", "website design [location]", "from £399" where relevant.

Update this file when you add new areas or change priority keywords.
