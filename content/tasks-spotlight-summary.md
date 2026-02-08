# Spotlight Feature – Task Summary

Summary of work done to add the **Client Spotlight** feature and replace testimonials with the Peachy Cleans case.

---

## 1. Plan & scope

- **Goal:** Replace the testimonials section with a single, proof-heavy **Client Spotlight** (Peachy Cleans).
- **Content:** Hero, What We Built, How It Helps Them Show Up High, proof images (#1 map pack, #1 organic, website), The Results, quote from Alisha Kelsey, and CTA “Get Your Free Check”.
- **Assets:** Use existing proof images in `public/spotlight/` (peachy-map-pack.PNG, peachy-organic.PNG, peachy-website.PNG).

---

## 2. Tasks completed

### 2.1 Spotlight component (`src/components/Spotlight.jsx`)

- **Expanded** the component from a short hero + 3 images + quote into a full case-style section:
  - **Hero:** “Peachy Cleans – Number 1 on Google & Top of Maps in Midsomer Norton” plus intro paragraph.
  - **What We Built:** Checklist (one-page site at peachycleans.info, fast on mobile, services listed, big CTAs, photos, single screen).
  - **How It Helps Them Show Up High:** Website + Google listing aligned; checklist (areas, photos, updates, reviews); paragraph on #1 search and Maps.
  - **Three proof images:** Map pack #1, organic #1, website – with labels and short descriptions.
  - **The Results:** Checklist (top spot, strong Maps, beats bigger players, more leads, 5-star/DBS/insured) plus tagline.
  - **Quote:** Alisha Kelsey, Peachy Cleans, Midsomer Norton; links to full case study and peachycleans.info.
  - **CTA:** “Want the same for your business?” + **Get Your Free Check** button → `/contact`; hashtags at bottom.
- **Styling:** Kept existing dark theme, gradient text, checkmarks, and section layout; no new dependencies.

### 2.2 Replaced Testimonials with Spotlight on 5 pages

- **Home** (`app/page.jsx` – already used Spotlight; `src/pages/Home.jsx` was updated earlier for consistency.)
- **Local SEO** (`app/local-seo/page.jsx` → uses Spotlight via page component; `src/pages/LocalSEO.jsx`: import and usage switched from Testimonials to Spotlight.)
- **Google Business Profile** (`src/pages/GoogleBusinessProfile.jsx`: Testimonials → Spotlight.)
- **Web Design** (`src/pages/WebDesign.jsx`: Testimonials → Spotlight.)
- **Web Design Packages** (`src/pages/WebDesignPackages.jsx`: Testimonials → Spotlight.)

So wherever the old “What Clients Say” testimonials appeared, the **Client Spotlight** (Peachy Cleans) section now appears instead.

### 2.3 Full Spotlight page

- **Route:** `/spotlight/peachy-cleans`
- **File:** `app/spotlight/peachy-cleans/page.jsx`
- **Content:** Renders the full Spotlight component (all sections above) as a standalone page with site layout (Navbar, Footer).
- **SEO:** Page-level metadata (title, description, canonical) for the Peachy Cleans spotlight.
- **Navigation:** Back link to home and link to full case study at top of page; Spotlight section includes a “View full spotlight page” button so users can open the full page from any page that shows the section.

### 2.4 Launch

- Started the Next.js dev server so the site (and Spotlight) could be viewed locally (e.g. `http://localhost:3001`).

---

## 3. Files touched / added

| Action   | Path |
|----------|------|
| Expanded | `src/components/Spotlight.jsx` |
| Updated  | `src/pages/Home.jsx` (Testimonials → Spotlight) |
| Updated  | `src/pages/LocalSEO.jsx` (Testimonials → Spotlight) |
| Updated  | `src/pages/GoogleBusinessProfile.jsx` (Testimonials → Spotlight) |
| Updated  | `src/pages/WebDesign.jsx` (Testimonials → Spotlight) |
| Updated  | `src/pages/WebDesignPackages.jsx` (Testimonials → Spotlight) |
| Added    | `app/spotlight/peachy-cleans/page.jsx` (full Spotlight page) |
| Added    | `content/tasks-spotlight-summary.md` (this summary) |

**Unchanged:** `src/components/Testimonials.jsx` remains in the repo but is no longer used; can be removed later if desired.

---

## 4. User-facing result

- **On site:** The section previously showing “What Clients Say” with multiple testimonial cards now shows **one Client Spotlight** – Peachy Cleans: #1 on Google & top of Maps in Midsomer Norton, with full story, proof images, results, quote, and “Get Your Free Check” CTA.
- **Full page:** Everything in that section is also available on its own page at **/spotlight/peachy-cleans** for sharing, linking, or SEO.

---

## 5. Optional next steps

- Add a nav or footer link to “Client Spotlight” or “Peachy Cleans result” pointing to `/spotlight/peachy-cleans`.
- Remove `src/components/Testimonials.jsx` if you no longer need it.
- Add more spotlights later (e.g. other clients) by reusing the same section structure and/or adding more routes under `/spotlight/`.
