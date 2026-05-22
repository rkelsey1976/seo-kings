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
};
