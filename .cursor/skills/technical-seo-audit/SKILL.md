---
name: technical-seo-audit
description: Runs a structured technical SEO audit with ordered sections, evidence-first findings, and verification steps. Use when the user asks for a technical SEO audit, crawl/indexation review, pre-launch SEO check, post-release technical SEO validation, or Next.js SEO/metadata review.
---

# Technical SEO audit

## When to use

Apply this skill for **technical** SEO reviews (not primary keyword strategy or link building unless tied to indexation/crawl). Use the **output table** format below for every run.

## Required inputs (ask if missing)

1. **Property / environment**: production vs staging; any noindex or access restrictions on staging.
2. **Primary URLs**: homepage, main templates (listing, detail, search/facets if any), and any problem URLs from Search Console.
3. **Markets / languages**: single-locale vs `hreflang` matrix.
4. **Optional**: GSC coverage or enhancement screenshots, recent redirects or releases, CDN or host (affects headers and caching).

## Audit order (do not skip)

Work **in this sequence** so dependencies make sense:

1. **Indexation intent** — `noindex`, canonicals, duplicates, parameterized URLs, staging leakage; align with GSC "Pages" / indexing reports when the user provides them.
2. **Crawling** — `robots.txt`, sitemap discovery and freshness, internal link depth to key templates, orphan risks.
3. **Rendering** — critical content in HTML vs JS-only; status codes for soft 404s; mobile parity at a high level.
4. **Structured data** — types present, required properties, errors vs warnings; use validator mindset, not "more schema for rankings."
5. **Performance signals** — LCP/CLS/INP **as measured**; call out lab (Lighthouse) vs field (CrUX) when relevant.
6. **Security / hygiene** — HTTPS, mixed content, obvious header gaps (e.g. `X-Robots-Tag` on assets) only when evidence exists in codebase or user reports.

## Next.js-specific pass (if codebase is Next.js)

After the global pass, add a short subsection:

- **Metadata pipeline** — `metadata` / `generateMetadata`, alternates/canonical, `robots` per route; duplicate title/description patterns across layouts.
- **Crawl artifacts** — `robots.ts` or static `robots.txt`, sitemap route(s), `next.config` redirects/headers, middleware effects on bots.
- **Rendering** — App vs Pages Router; client-heavy pages and empty shells; `notFound()` / error boundaries vs accidental 200s on bad slugs.
- **i18n** — `locale` routing, `hreflang` or `alternates.languages` alignment with actual URLs.
- **Structured data** — JSON-LD emitted in RSC or `_document`; match URL in schema to canonical user-facing URL.

## Output format (mandatory)

Produce a **single markdown table** for findings, then **verification checklist** and **recommended next actions** (prioritized).

### Findings table

| Issue | Evidence (URL, file, or tool) | Severity (High/Med/Low) | Suggested fix | How to verify |
| ----- | ------------------------------ | ----------------------- | ------------- | ------------- |
| …     | …                              | …                       | …             | …             |

### After the table

1. **Verification checklist** — bullet list of concrete checks (e.g. "Rich Results Test on URL X", "GSC URL Inspection", "Lighthouse run on template Y").
2. **Prioritized next actions** — max 5 items ordered by impact vs effort.

## Quality bar

- Prefer **specific** evidence over generic best-practice lists.
- If the workspace lacks the site code, **state that limitation** and audit from URLs and user-supplied artifacts only.
- Do not recommend manipulative or policy-violating tactics.
