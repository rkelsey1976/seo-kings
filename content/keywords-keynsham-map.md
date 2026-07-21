# Keynsham & Suburbs — Keyword Map

Every query variation for the home patch, mapped to the page that should own it.
Companion to `keywords-target.md` (which is Bath/BANES-wide). Written 2026-07-21.

**No volume figures in this document.** There's no Ahrefs/SEMrush export in the repo, so
any number here would be invented. Where volume matters to a decision it's described in
relative terms and flagged for checking. See *Getting real numbers* at the end.

---

## 1. Reality check — what Keynsham can actually deliver

Keynsham is roughly 16,000 people. Every service-term variation combined is a modest monthly
total — this is not a volume play and shouldn't be resourced like one.

**What makes it worth the effort instead:**

- **It's the home market.** You're on Culvers Road. Proximity is the strongest map pack signal
  there is, and it's the one thing competitors can't copy. Every Keynsham query should be
  winnable at #1 — not "eventually competitive", *winnable*.
- **`/website-designer-keynsham` is at position 37.8** on 69 impressions (GSC 14 Jul). For the
  page covering your own town, sitting on page four is the single biggest gap on the site.
- **It receives two 301 redirects** (per CLAUDE.md) so it's already being fed authority it isn't
  converting into rank.

The goal for Keynsham is **complete ownership of a small set**, not partial visibility on a
large one. Different objective from Bristol, and the tactics follow from that.

---

## 2. Query families and who owns them

The risk on a patch this small isn't missing keywords — it's four pages competing for the same
twelve searches. Assign ownership first, then write to it.

| Family | Example queries | Owner page | Status |
|---|---|---|---|
| **Web design** | web designer Keynsham, website design Keynsham, web design BS31 | `/website-designer-keynsham` | Live — **pos 37.8, needs work** |
| **Local SEO / map pack** | local SEO Keynsham, Google Business Profile Keynsham, map pack Keynsham | `/local-seo/keynsham` | Live |
| **SEO (broad)** | SEO Keynsham, SEO agency Keynsham, SEO company Keynsham | **none** | ⚠️ **GAP — see §5** |
| **Area / hub** | web design and SEO Keynsham, agency Keynsham, BS31 | `/areas/keynsham` | Live |
| **Suburbs** | web design Saltford / Bitton / Hanham etc. | `/areas/{suburb}` + `/website-designer-saltford` | Live |
| **Commercial intent** | website cost Keynsham, web design packages BS31 | `/web-design-packages` | Live, not localised |

**Rule of thumb for keeping them apart:** "SEO" queries are about *ranking*, "web design" queries
are about *building*, "local SEO" queries are about *Maps*. If a page's H1, title and first
paragraph don't make clear which of those three it is, it will drift into a sibling's territory.

---

## 3. The variation matrix

Every service term × every location form. Not all are worth a page — most are worth a *mention*
in the right page's copy so it can pick them up as long-tail.

### Service term variants

These are genuinely distinct queries, not synonyms Google collapses:

| Cluster | Variants |
|---|---|
| **Designer (person)** | web designer, website designer, freelance web designer, local web designer |
| **Design (service)** | web design, website design, website design services |
| **Build (outcome)** | website builder, get a website, new website, website for my business |
| **Dev (technical)** | web development, web developer, website development |
| **SEO** | SEO, local SEO, SEO agency, SEO company, SEO services, SEO consultant, SEO expert, SEO specialist |
| **GBP** | Google Business Profile, Google My Business, GMB, Google listing, Google Maps listing, map pack |

**Note on "designer" vs "design":** these behave differently. "Website designer Keynsham" is a
*who* search — the results skew to individuals and small firms, which suits you. "Website design
Keynsham" is a *what* search and pulls in agencies and directories. Both are worth having, but
the designer form is the easier win and should lead the H1.

**"Freelance" is under-used.** "Freelance web designer Keynsham" / "freelance web designer
Bristol" is a real query family with softer competition than the agency terms, and it matches
how you actually operate — one person, direct contact. Not currently targeted anywhere.

### Location variants for Keynsham

| Form | Examples | Notes |
|---|---|---|
| Bare | Keynsham | Primary |
| Postcode | BS31 | Genuinely used by trades. Worth explicit mentions. |
| Disambiguated | Keynsham Bristol, Keynsham Bath, Keynsham Somerset | People qualify Keynsham because it sits between two cities — cover all three forms in copy |
| Council | BANES, Bath and North East Somerset | Lower volume, high specificity |
| Proximity | near me, near Keynsham, local | "Near me" resolves by device location — you win it by proximity + GBP, not by writing "near me" on the page |

### Modifiers

| Type | Variants | Worth targeting? |
|---|---|---|
| Price | cheap, affordable, budget, low cost, how much, cost, prices | **Yes** — "affordable" and "cost" convert. Avoid "cheap" in your own copy; it undercuts positioning even where it ranks. |
| Quality | best, top, leading, professional | Low value — hard to rank, weak intent |
| Audience | for trades, for small business, for tradesmen, for builders | **Yes** — matches your actual positioning |
| Format | packages, quote, pricing | **Yes** — high commercial intent |
| Trust | reviews, recommended | Low volume, but easy to satisfy with review schema |

---

## 4. Suburb keyword sets

Each suburb takes the same service-term matrix. Postcodes matter here because several sit on
boundaries — a trade searching "electrician BS30" is a different person from one searching
"electrician Keynsham".

| Suburb | Postcodes | Has page | Distinguishing angle |
|---|---|---|---|
| **Saltford** | BS31 | ✅ 3 pages | Bath/Bristol dual catchment |
| **Bitton** | BS30, BS31 | ✅ area | Boundary — S. Glos not BANES |
| **Hanham** | BS15, BS30 | ✅ area | Largest; high street retail |
| **Oldland Common** | BS30 | ✅ area | Target **both** "Oldland" and "Oldland Common" |
| **Longwell Green** | BS30 | ✅ area | Retail park; commercial queries |
| **Warmley** | BS30 | ✅ area | Railway path; "near the railway path" |
| **Willsbridge** | BS30 | ❌ | — |
| **Cadbury Heath** | BS30 | ❌ | — |
| **Bridgeyate** | BS30 | ❌ | — |
| **Chewton Keynsham** | BS31 | ❌ | — |
| **Burnett** | BS31 | ❌ | Hamlet (~100 people) |
| **Queen Charlton** | BS31 | ❌ | Hamlet |
| **Compton Dando** | BS39 | ❌ | — |
| **Corston / Newton St Loe** | BA2 | ❌ | — |

**Don't build pages for the ❌ rows.** Burnett has about a hundred residents; a page for it would
be thin content of exactly the kind that got the five existing suburb pages into trouble. Cover
them as *mentions* inside the nearest suburb page's copy and service-area list instead — that
picks up the long-tail without adding indexable thin pages.

**Postcode families worth explicit coverage:** BS31 (Keynsham, Saltford, Chewton Keynsham,
Burnett), BS30 (Bitton, Oldland, Longwell Green, Warmley, Willsbridge, Cadbury Heath),
BS15 (Hanham, Kingswood).

---

## 5. The gap: `/seo/keynsham`

**There is no `/seo/keynsham` page, and the evidence says there should be.**

From the 14 July GSC snapshot:

> "The /seo/bath page (created 2026-06-04) is **clearly working** — it's pulling impressions for
> the high-volume 'seo bath' cluster and the position is climbing fast (24.1 → 12.3 in 5 weeks)."

The pattern is proven on Bath and being rolled out on Bristol (plus ten `/seo/bristol/{trade}`
pages). Keynsham has `/website-designer-keynsham` and `/local-seo/keynsham` but nothing owning
the broad **"SEO Keynsham" / "SEO agency Keynsham" / "SEO company Keynsham"** family.

**Recommendation:** build `/seo/keynsham` — but only after fixing `/website-designer-keynsham`.
Adding a fourth Keynsham page while the primary one sits at position 37.8 adds cannibalisation
risk without fixing the underlying problem. Order matters:

1. Fix `/website-designer-keynsham` (full improvement pattern) — it's the priority page in
   CLAUDE.md, it receives two redirects, and it's on page four.
2. Re-measure after 3–4 weeks.
3. Then add `/seo/keynsham` with tight scope: ranking and audits, *not* web design, *not* Maps.

**Do not build `/seo/keynsham/{trade}` pages.** The trade-vertical pattern suits Bristol's
volume. "SEO for plumbers Keynsham" is a handful of searches a year — ten such pages would be
thin content on the patch where your authority matters most.

---

## 6. Cannibalisation watchlist

CLAUDE.md tracks this as a live problem site-wide. On Keynsham specifically, watch these pairs
in GSC — if both pages surface for the same query, one needs re-angling:

| Pair | Risk | Test |
|---|---|---|
| `/website-designer-keynsham` ↔ `/areas/keynsham` | **High** — hub vs service page, the exact pattern that went wrong on Bath in June | Search "web design Keynsham" — only one should appear |
| `/local-seo/keynsham` ↔ future `/seo/keynsham` | **High if built carelessly** | Local SEO = Maps/GBP. SEO = organic rankings. Keep the H1s unambiguous. |
| `/areas/saltford` ↔ `/website-designer-saltford` | Medium | Same hub/service split as Keynsham |
| Suburb pages ↔ `/areas/keynsham` | Low | Suburb pages target the village name; hub targets the town |

The Bath precedent is instructive: `/website-designer-bath` was consolidated into `/areas/bath`
in June, then reversed three weeks later. Decide ownership *before* building, not after.

---

## 7. Add to rank tracking

`scripts/rank-check.mjs` currently tracks 12 keywords, only two of them Keynsham
(`web designer keynsham`, `web design keynsham`). Suggested additions — paste into `KEYWORDS`:

```js
{ q: 'website designer keynsham', location: 'Keynsham, England, United Kingdom' },
{ q: 'seo keynsham', location: 'Keynsham, England, United Kingdom' },
{ q: 'local seo keynsham', location: 'Keynsham, England, United Kingdom' },
{ q: 'web designer bs31', location: 'Keynsham, England, United Kingdom' },
{ q: 'freelance web designer bristol', location: 'Bristol, England, United Kingdom' },
{ q: 'web designer saltford', location: 'Keynsham, England, United Kingdom' },
{ q: 'web designer hanham', location: 'Bristol, England, United Kingdom' },
{ q: 'web designer longwell green', location: 'Bristol, England, United Kingdom' },
```

That's 20 keywords total, ~80 credits a month on weekly runs — comfortably inside the free tier.

**Baseline them before changing anything**, so the `/website-designer-keynsham` work has a
before-and-after rather than a guess.

---

## 8. Getting real numbers

Everything above is structural — which queries exist and who should own them. What it can't tell
you is which are worth the effort. Options, cheapest first:

1. **GSC Search Console → Performance → filter by "keynsham"** — free, and it's *your* data.
   Shows what you already surface for, including queries nobody would think to target. Best
   starting point. The existing snapshots in `data/gsc-snapshots/` don't break out Keynsham
   queries — worth pulling that view specifically.
2. **Google Keyword Planner** — free with an Ads account. Volumes are bucketed and rounded, but
   adequate for ranking a shortlist.
3. **Serper** (already wired up for `rank-check`) — gives positions and SERP composition, not
   volume. Useful for judging competition rather than demand.
4. **Ahrefs / SEMrush** — real numbers, but the cost is hard to justify for a patch this size.

**Before writing a page for any keyword in this document, check it has non-zero volume.** On a
town of 16,000 a good proportion of the theoretical variations get searched literally never.
