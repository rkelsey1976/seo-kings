# Internal links – site-wide audit

Where internal links live and where they point. Use this to spot gaps and strengthen internal linking for SEO.

---

## 1. Global (every page)

### Navbar
- **Home** → `/`
- **Services** (dropdown): Website Design → `/web-design`, Web Design Packages → `/web-design-packages`, Local SEO → `/local-seo`, Google Business Profile → `/google-business-profile`
- **Areas** (dropdown): Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury → `/areas/[slug]`; "View all areas" → `/areas`
- **About** → `/about`
- **Blog** → `/blog`
- **Case Studies** → `/case-studies`
- **Contact** / **Get Your Free Audit** → `/contact`

### Footer
- **Logo** → `/`
- **Services**: Website Design → `/web-design`, Web Design Packages → `/web-design-packages`, Local SEO → `/local-seo`, Google Business Profile → `/google-business-profile`, Free SEO Audit → `/contact`
- **Areas**: Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury → `/areas/[slug]`; "View all" (mobile) → `/areas`
- **Company**: About Us → `/about`, Blog → `/blog`, Case Studies → `/case-studies`, Contact → `/contact`
- **Bottom**: Sitemap → `/sitemap`, Privacy → `/privacy`, Terms → `/terms`

---

## 2. Homepage

- **Hero**: CTA → `/contact`
- **WhyChoose**: (no internal links in snippet; check component)
- **Services**: link to `/web-design`
- **HowItWorks**: CTA → `/contact`
- **Reviews**: "See all reviews on Google" (external)
- **Spotlight**: Case study → `/case-studies/peachy-cleans`, Spotlight → `/spotlight/peachy-cleans`, CTA → `/contact`
- **CTABanner**: Primary → `/contact`, Secondary → `/web-design`

---

## 3. Area pages (`/areas/[slug]`)

**Breadcrumbs:** Home → `/`, Areas → `/areas`, parent area (if sub-area) → `/areas/[parent]`

**In-content:**
- **Website design section**: "Website designer in [Area]" → `/web-design`; "Read more: Website design in [Area]" → `/blog/[websiteDesignBlogSlug]` (only if `websiteDesignBlogSlug` is set)
- **Nearby areas**: links to `/areas/[nearbySlug]` for each nearby area
- **View All Areas** → `/areas`
- **CTA**: Get audit → `/contact`, phone = tel

**Areas with blog link:** Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton (websiteDesignBlogSlug = website-design-somer-valley for Paulton) – each area that has `websiteDesignBlogSlug` gets "Read more: Website design in [Area] →" to the matching post.

---

## 4. Web Design (`/web-design`)

- **Areas we serve**: Bath → `/areas/bath` (anchor "Website designer Bath"), Keynsham → `/areas/keynsham` ("Website designer Keynsham"), Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury, Westfield, Chew Magna, Temple Cloud, Clutton → `/areas/[slug]` with "Website design [Area]"
- **All packages** → `/web-design-packages`
- **CTA** → `/web-design-packages` (or contact – check)

---

## 5. Web Design Packages (`/web-design-packages`)

- **Contact** → `/contact` and `/contact?subject=web-design-packages`

---

## 6. Local SEO (`/local-seo`)

- **Trade links**: Plumbers → `/local-seo/plumbers`, Electricians → `/local-seo/electricians`, Roofers → `/local-seo/roofers`
- **CTA** → `/contact`

---

## 7. Local SEO trade (`/local-seo/[tradeSlug]`)

- **Breadcrumbs**: Home → `/`, Local SEO → `/local-seo`
- **CTA** → `/contact`
- **Areas** → `/areas`
- **Case study** (if set) → `/case-studies/[slug]`

---

## 8. Google Business Profile (`/google-business-profile`)

- **CTA** → `/contact?service=gbp`
- **Copy**: Local SEO → `/local-seo`, website design → `/web-design`
- **Secondary CTAs** → `/local-seo`, `/web-design`

---

## 9. Blog (`/blog`)

- **Post cards**: title + "Read more" → `/blog/[post.slug]`

---

## 10. Blog post (`/blog/[slug]`)

- **Breadcrumbs**: Blog → `/blog`
- **In-content / CTAs**: varies by post; many link to `/contact`, some to `/local-seo` or related pages. No systematic link from blog posts back to area pages (e.g. "Website design in Keynsham" post could link to `/areas/keynsham`).

---

## 11. Case studies (`/case-studies`)

- **Card**: "View case study" → `/case-studies/[slug]`
- **CTA** → `/contact`

---

## 12. Case study detail (`/case-studies/[slug]`)

- **Back** → `/case-studies`
- **Related**: e.g. Peachy Cleans → `/spotlight/peachy-cleans`
- **CTA** → `/contact` (typical)

---

## 13. About (`/about`)

- **Areas grid**: each area → `/areas/[slug]`
- **"View all areas we serve"** → `/areas`
- **"get in touch"** → `/contact`

---

## 14. Contact (`/contact`)

- **Privacy** → `/privacy` (in form small print)

---

## 15. Other pages

- **Privacy / Terms**: link back to `/`
- **Thank you**: `/`, `/case-studies`
- **404**: `/`, `/contact`
- **BANESMap** (where used): area markers → `/areas/[slug]`

---

## Gaps and recommendations

| Gap | Recommendation |
|-----|----------------|
| **Blog → area pages** | In location-focused posts (e.g. "Website design Keynsham"), add a line and link: "We serve Keynsham and the surrounding area – see our Keynsham page" → `/areas/keynsham` with anchor "Website design in Keynsham". |
| **Blog → services** | In relevant posts, add one contextual link to `/web-design`, `/local-seo`, or `/google-business-profile` (e.g. "Our website design starts from £399"). |
| **Web Design → case studies** | Add a short "What we've done" with 1–2 case study links (e.g. New Decorating, Peachy Cleans) to `/case-studies/new-decorating`, `/case-studies/peachy-cleans`. |
| **Area pages → case studies** | Where an area has a named case study (e.g. Keynsham Electrics for Keynsham), add a link from that area page to the case study. |
| **Footer areas** | Footer lists 8 areas; you have more (e.g. Westfield, Chew Magna, Temple Cloud, Clutton). Consider "View all" only or add key areas; keep Nav/Footer in sync with main areas. |
| **Sitemap page** | Already links to all main sections; ensure it’s linked from footer (it is: Sitemap → `/sitemap`). |
| **Local SEO → area pages** | Local SEO page could link to 2–3 key area pages (e.g. Bath, Keynsham, Midsomer Norton) with "Website design in [area]" or "SEO in [area]" to tie services to locations. |

---

## Summary

- **Strong:** Nav and footer give every main section (home, services, areas, about, blog, case studies, contact). Area pages link to `/web-design`, blog (where slug set), nearby areas, and `/areas`. Web Design page links to all area pages with good anchor text.
- **To improve:** Blog posts rarely link back to area pages or service pages; Web Design and Local SEO could link to case studies; area pages could link to a relevant case study when one exists.

*Source: grep over `src` for `href="/` and `Link href`. Nav/Footer from components; area logic from AreaDetail.jsx.*
