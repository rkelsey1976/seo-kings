# SEO Kings — Runbook (July 2026)

Everything that runs outside the repo, in one place. Code-side work is done and
in "let it bake" mode until the mid-August GSC review.

## One-time setup (do once, ~20 min)

1. **Save the API key locally** so every script just works:
   ```
   cp .env.example .env
   # edit .env → SERPER_API_KEY=your-key (from serper.dev dashboard)
   ```
   `.env` is gitignored. Rotate the key at serper.dev when convenient (it was
   pasted in chat once).

2. **Bing Webmaster Tools** — https://www.bing.com/webmasters
   Verify seo-kings.co.uk (import from GSC is one click), submit
   `https://seo-kings.co.uk/sitemap.xml`. Bing's index is what ChatGPT search
   reads — this is the AI-visibility dashboard.

3. **GA4 key events** — Admin → Events → mark as key event (or create via
   "Create event"): phone taps (`tel:` clicks), contact form submits.
   Without this, August tells us what ranks but not what converts.

## After every deploy (~1 min)

```
npm run indexnow
```
Submits every sitemap URL to Bing via IndexNow. Do it after Netlify finishes.

## This week's one-offs

1. **GSC → URL Inspection → Request Indexing** (max ~10/day), priority order:
   - /case-studies/aspect-builds        (title fixed — page 1, 0% CTR)
   - /local-seo/landscapers             (title fixed — page 1, 0% CTR)
   - /blog/website-cost-bath            (title fixed — page 1, 0% CTR)
   - /local-seo/bristol
   - /areas/bristol
   - /blog/website-cost-bristol
   - /blog/google-map-pack-bristol
   - /areas/city-centre-bristol
   - /areas/bath
   - /website-designer-bristol

2. **First rank baseline**:
   ```
   npm run rank-check
   git add data/rankings.csv && git commit -m "Rank baseline w/c 2026-07-20" && git push
   ```

3. **Bristol Trades Report harvest** (~300 Serper credits, ~15 min):
   ```
   npm run trades-harvest
   npm run trades-analyse
   npm run trades-audit        # optional but worth it (~10 min)
   ```
   Then give Claude `data/bristol-trades-summary.json` to build the report page.

4. **A Bristol photo** for the 22 suburb pages (currently a Keynsham image).
   Harbourside / suspension bridge / Gloucester Road — anything genuinely Bristol.

## Weekly rhythm (1–2 hours)

- `npm run rank-check` → commit the CSV (same day each week).
- **One GBP post** — alternate cities; drafts pattern: web-design post links the
  area page, SEO post links /local-seo/<city>. (Twerton pair already drafted.)
- **Review ask** on every completed job — priority anything Bristol; reviews
  that name the city and trade are worth the most.
- Share the week's post/case study to Facebook + LinkedIn + one local group.

## One-off link tasks (highest link value per hour)

- "Website by SEO Kings" footer link on client sites: bathpainter.co.uk,
  New Decorating, Peachy Cleans, Aurelian, Aspect Builds, RG Extreme Pressure
  (point RG's at a Bristol page).
- Two or three local directory/roundup listings for Bristol.

## Monthly

- Ask ChatGPT / Perplexity / Google AI: "good web designer for a plumber in
  Bath", "who are SEO Kings" — note what gets cited (AI-search rank check).
- GSC snapshot into `data/gsc-snapshots/` (compare with 2026-07-14).

## Mid-August review (w/c 18 Aug)

Bring: 4+ weeks of rankings.csv, fresh GSC snapshot. Decisions due:
- CTR title pass on pages with impressions but no clicks
- Whether the four Bristol service pages (/seo/bristol, /local-seo/bristol,
  /website-designer-bristol, /areas/bristol) are cannibalising each other
- Which zero-impression pages to consolidate
- Whether to unpause new content (Bristol blog queue: "How much does SEO cost
  in Bristol?", "How to choose a web designer in Bristol")
