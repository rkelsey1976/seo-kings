# SEO Kings — Project Instructions for Claude

## About this project

Next.js 14 App Router with static export (`output: 'export'`), deployed on Netlify.
Richard Kelsey / Vortex Design Studio. Local web design and SEO for Bath & Somerset trades.

Base URL: `https://seo-kings.co.uk`
Phone: `07702 264 921` / `+447702264921`
Address: 16a Culvers Road, Keynsham, BS31 2DW
Geo: 51.4145, -2.4965

---

## Keyword cannibalization tracker

Blog posts are competing with (and often outranking) service pages for commercial queries. This actively suppresses the pages that convert.

**Fix pattern:**
1. Improve the service page (full improvement pattern)
2. Add internal link from the blog post → service page with commercial anchor text (e.g. "local SEO services in Bath")
3. Re-angle the blog post to a purely informational query so the two pages stop competing

**Identified pairs** (GSC data, 2026-05-29):

| Location | Blog post | Blog pos | Service page | Service pos | Status |
|----------|-----------|----------|--------------|-------------|--------|
| Keynsham (web design) | `/blog/website-design-keynsham` + `/blog/how-we-build-websites-keynsham` | ~10–16 | `/website-designer-keynsham` | 39 | ✅ 301 redirects live (2026-05-22) — strengthen destination |
| Bath (local SEO) | `/blog/local-seo-bath` + `/blog/what-is-local-seo-bath` | 15 | `/local-seo/bath` | 52 | ✅ 301 redirects live (2026-05-22) — strengthen destination |
| Bath (web design) | `/blog/website-design-bath` | 69 | `/website-designer-bath` | 78 | ✅ 301 redirect live (2026-05-22) — already improved |
| Trowbridge | `/blog/website-design-trowbridge` | 8 | `/website-designer-trowbridge` | 43 | ✅ 301 redirect live (2026-05-22) |
| Peasedown | `/blog/website-design-peasedown-st-john` | 19 | `/website-designer-peasedown-st-john` | — | ✅ 301 redirect live (2026-05-22) |

All 301 redirects are in `public/_redirects` (Netlify). Added 2026-05-22 — allow 1–3 months for Google to fully process and transfer equity.

**Next action:** Strengthen destination service pages so they're worthy of the incoming authority. Priority: `/website-designer-keynsham` (receives 2 redirects) → `/local-seo/bath`.

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

### Navigation

- **`app/layout.jsx` imports `PillNav.jsx`** — this is the live nav
- **`Navbar.jsx` is dead/unused** — it is NOT imported anywhere; any edits to it have zero effect
- `PillNav.jsx` has a flat `navItems` array; no dropdowns
- Current nav items: Home, Services, Web Design for Trades, Areas, Case Studies, About, Contact

### SEO / metadata

- **`<SEO>` client component is NOT read by Google** — it only injects JSON-LD schemas via the `schemas` prop
- **Server-side metadata in `app/*/page.jsx` is what Google reads** — title, description, canonical, breadcrumbs all go here
- Dead props on `<SEO>` (title, description, canonical, breadcrumbs) do nothing — clean them when seen, keep only `schemas={[schema]}`
- Pattern: `<SEO schemas={[schema]} />`

### Static export

- `output: 'export'` in production only — dev server runs normally with `npm run dev`
- **Do NOT use `next dev --turbo`** — it causes binding errors; use plain `npm run dev`
- `images: { unoptimized: true }` — no automatic WebP conversion
- No server-side rendering — everything is pre-rendered at build time
- Netlify deploys automatically on every push to main
- No API routes or dynamic server functions — static only

### File structure

- **Views**: `src/views/*.jsx` — one file per page, imported by `app/*/page.jsx`
- **Components**: `src/components/` — shared UI
- **Constants**: `src/constants/sitemap.js`, `areaMeta.js`, `blogMeta.js`
- **App routes**: `app/*/page.jsx` — sets metadata, imports the view

---

## Design system

### Colours (Tailwind tokens)

| Token | Hex | Use |
|-------|-----|-----|
| `text-primary` / `bg-primary` | #E8715A | Coral — CTAs, highlights, prices, icons |
| `bg-primary-dark` | #C25245 | Button hover states |
| `text-secondary` | #4A90A4 | Teal — mono labels, secondary accents |
| `bg-dark` | #0B1324 | Page background |
| `bg-dark-card` | #0E1628 | Card backgrounds |
| `text-white` | #FFFFFF | Headings |
| `text-gray-300` | — | List items |
| `text-gray-400` | — | Body copy |
| `text-gray-500` | — | Meta text, captions, card sub-labels |

### Typography

- **H1 (hero)**: handled by `ServicePageHero` component
- **H2 (section)**: `text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight`
- **H3 (card title)**: `text-white font-semibold text-sm`
- **Body**: `text-gray-400 leading-relaxed`
- **Mono label / SectionTag**: `text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary`
- Always precede H2s with a `<SectionTag>` component

### Section layout

```jsx
<section className="py-24 border-t border-white/[0.06]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

### Cards

```jsx
<div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
```

Hover state on linked cards: `hover:border-white/10 transition-colors group`

### Grids

- 3 results cards: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl`
- 4 feature cards: `grid sm:grid-cols-2 lg:grid-cols-4 gap-4`
- 2-col content: `grid md:grid-cols-2 gap-12 items-center`

### Icons

Use inline SVG with `fill="none" stroke="currentColor"`. Checkmark:
```jsx
<svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>
```

---

## Copywriting rules

### Tone

- Direct, specific, no waffle — Richard has 22 years of experience, write to match that
- British English throughout: colour, optimise, centre, enquiries, recognised
- Trade-focused audience: plumbers, electricians, builders, cleaners, painters-decorators, roofers
- Specifics over vague claims — "loads in under a second" not "lightning fast"

### Forbidden phrases

Never use: "passionate about", "dedicated to", "tailored solutions", "cutting-edge", "seamless", "bespoke experience" (bespoke on its own is fine), "we're here to help", "in today's digital world", "take your business to the next level"

### Established narratives

- **BA3 / Somer Valley**: low competition, fewer well-optimised businesses, Map Pack rankings come quickly
- **Next.js advantage**: static pages, sub-second load, no WordPress plugin conflicts, green Core Web Vitals
- **Local proximity**: based in Keynsham, 12 miles from Radstock — you speak to the person who built your site
- **Pricing**: honest, transparent — from £250, no hidden fees

### Pricing copy (always accurate)

- 1-page starter: from £250
- 3-page professional: from £350
- 5+ page full: from £450
- GBP optimisation add-on: £100
- Hosting: 6 months free, then £50/year

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
8. **Update sitemap lastmod** in `src/constants/sitemap.js`

---

## JSON-LD schema template

Every service/area page uses `@graph` with three types:

```js
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/[path]',
      url: 'https://seo-kings.co.uk/[path]',
      name: '[Page title] | SEO Kings',
      description: '[Meta description]',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: '[Page name]' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/[path]',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Bath and North East Somerset',
        postalCode: 'BS31 2DW',
        addressCountry: 'GB',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 51.4145, longitude: -2.4965 }, // always Keynsham — SEO Kings' actual location, never the target town
      areaServed: [/* relevant City objects for this page, e.g. { '@type': 'City', name: 'Corsham' } */],
      priceRange: '££',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '17:30' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};
```

---

## Case studies

Current live case studies: `peachy-cleans`, `new-decorating`, `aurelian-massage`, `bath-painter`

| Slug | Business | Location | Result | Keyword |
|------|----------|----------|--------|---------|
| `peachy-cleans` | Peachy Cleans | Midsomer Norton | Map Pack | "cleaning Midsomer Norton" |
| `new-decorating` | New Decorating | Bath | Top 3 Map Pack | "exterior painter Bath" |
| `aurelian-massage` | Aurelian Massage | Bath | — | — |
| `bath-painter` | Bath Painter | Bath | Bespoke site | "painter and decorator Bath" |

**Bath Painter details:**
- Site: bathpainter.co.uk
- 20+ years experience, listed buildings, lime plaster, traditional distemper, Georgian/Victorian/Edwardian
- Testimonial: Duncan Herron, 5 stars
- Result: enquiries up within a week of launch

**Standard results card copy:**
```jsx
const results = [
  { business: 'Peachy Cleans', location: 'Midsomer Norton', result: 'Map Pack', keyword: '"cleaning Midsomer Norton"', detail: 'Ranked in the Google Map Pack within months of launch — now generating regular enquiries from local searches.', slug: 'peachy-cleans' },
  { business: 'New Decorating', location: 'Bath', result: 'Top 3 Map Pack', keyword: '"exterior painter Bath"', detail: "Top 3 Map Pack for one of Bath's most competitive trade keywords — consistent enquiries from Google Maps.", slug: 'new-decorating' },
  { business: 'Bath Painter', location: 'Bath', result: 'Bespoke', keyword: '"painter and decorator Bath"', detail: 'Full brand and bespoke website delivered — enquiries up within a week of going live.', slug: 'bath-painter' },
];
```

---

## Known technical debt

- **`Navbar.jsx`**: has stray edits from a mistaken session — component is unused (not imported anywhere), so no user impact, but file is inconsistent with intent
- **`PricingModal.jsx`**: 8 form inputs without `<label>` elements — WCAG AA failure
- **`/website-designer-trowbridge`**: orphaned — no nav link or area page inbound link
- **`/hosting`**: orphaned — no inbound links from any page

---

## Area pages status

Pages that have had the full improvement pattern applied:
- `/website-designer-bath` ✓
- `/website-designer-trowbridge` ✓ (content — still orphaned in nav)
- `/website-designer-radstock` ✓
- `/website-designer-midsomer-norton` ✓
- `/website-designer-keynsham` ✓
- `/local-seo/midsomer-norton` ✓
- `/local-seo/bath` ✓
- `/areas/keynsham` ✓
- `/areas/saltford` ✓
- `/areas/radstock` ✓
- `/areas/midsomer-norton` ✓

Pages still needing the improvement pattern:
- `/website-designer-bradford-on-avon`
- `/website-designer-corsham`
- `/website-designer-frome`
- `/website-designer-melksham`
- `/website-designer-shepton-mallet`
- `/website-designer-saltford`
- `/website-designer-peasedown-st-john`
- `/local-seo/keynsham`
- `/local-seo/bradford-on-avon`
- `/local-seo/corsham`
- `/local-seo/frome`
- `/local-seo/melksham`
- `/local-seo/shepton-mallet`
- `/local-seo/saltford`
- `/local-seo/peasedown`
- `/local-seo/radstock`
- `/local-seo/paulton`

---

## GSC indexing habit

After any session where key pages are updated, request re-indexing in Google Search Console:
- GSC → URL Inspection → paste URL → "Request Indexing"
- Up to ~10 URLs per day
- Priority pages: website-designer-*, local-seo/*, case-studies/bath-painter
