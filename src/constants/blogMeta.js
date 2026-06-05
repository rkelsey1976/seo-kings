/**
 * Blog post metadata for generateMetadata (app/blog/[slug]).
 * Ensures each blog page has the correct title/description in server-rendered HTML.
 *
 * All cannibalising posts have been removed from this file and given 301 redirects
 * in public/_redirects instead. Only genuinely indexed informational posts live here.
 */
export const BLOG_META = {
  // ── KEEP — informational, no competing landing page ──────────────────────
  'beautiful-websites-that-rank': {
    title: 'How We Build Beautiful Websites That Rank Well on Google',
    description: 'We build websites that look great, load fast, and score 95+ on Lighthouse — so they rank better on Google and convert more customers.',
  },
  'get-more-google-reviews-bath': {
    title: 'How to Get More Google Reviews in Bath (Without Breaking the Rules)',
    description: 'Practical steps for Bath businesses: when and how to ask for Google reviews, how to respond, and how it helps you rank higher in the map pack.',
  },
  'free-seo-audit-what-we-check': {
    title: 'What We Actually Check in Your Free Local SEO Audit',
    description: 'A clear breakdown of what we look at in your free audit: Google Business Profile, website, citations, and how we turn that into a plan.',
  },
  'why-speed-matters-for-seo': {
    title: 'Why Speed Matters for SEO: How Fast Websites Rank Better on Google',
    description: "Page speed is a ranking factor and affects user experience. Here's why fast websites rank better on Google and what you can do about it.",
  },
  'google-map-pack-bath': {
    title: 'How to Get Into the Google Map Pack in Bath | SEO Kings',
    description: "The Map Pack shows three local businesses at the top of Google — and it drives most of the clicks. Here's what puts a Bath trade in those three spots.",
    canonical: 'https://seo-kings.co.uk/blog/google-map-pack-bath',
  },
  'website-cost-bath': {
    title: 'How Much Does a Website Cost in Bath? | SEO Kings',
    description: "Website prices in Bath range from a few hundred pounds to thousands. Here's what actually drives the cost — and what a trade or small business realistically needs.",
    canonical: 'https://seo-kings.co.uk/blog/website-cost-bath',
  },
  'how-to-choose-web-designer-bath': {
    title: 'How to Choose a Web Designer in Bath | SEO Kings',
    description: "Picking a web designer in Bath is harder than it looks. Here's what to ask, what to look for, and what most designers won't tell you upfront.",
    canonical: 'https://seo-kings.co.uk/blog/how-to-choose-web-designer-bath',
  },
  'do-i-need-a-website-plumber-bath': {
    title: 'Do I Need a Website as a Plumber? Honest Answer for Bath Trades | SEO Kings',
    description: "Most plumbers in Bath get by on word of mouth — but there's a ceiling to that. Here's what happens when potential customers Google you and find nothing.",
    canonical: 'https://seo-kings.co.uk/blog/do-i-need-a-website-plumber-bath',
  },
  'set-up-google-business-profile-tradesperson': {
    title: 'How to Set Up Your Google Business Profile as a Tradesperson | SEO Kings',
    description: 'Your Google Business Profile is free and one of the most powerful tools a tradesperson has. A step-by-step guide to setting it up properly.',
    canonical: 'https://seo-kings.co.uk/blog/set-up-google-business-profile-tradesperson',
  },
  'get-trade-business-google-map-pack': {
    title: 'How to Get Your Trade Business Into the Google Map Pack | SEO Kings',
    description: "The Google Map Pack shows three businesses at the top of every local search — and that's where most of the calls go. Here's what gets a tradesperson in.",
    canonical: 'https://seo-kings.co.uk/blog/get-trade-business-google-map-pack',
  },
};
