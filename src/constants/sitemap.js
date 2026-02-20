/**
 * Single source of truth for sitemap: blog slugs, area slugs, and static routes.
 * Used by app/blog/[slug]/page.jsx, app/areas/[slug]/page.jsx, app/sitemap/page.jsx, and app/sitemap.js
 */

export const BASE_URL = 'https://seo-kings.co.uk';

export const BLOG_SLUGS = [
  'beautiful-websites-that-rank',
  'what-is-local-seo-bath',
  'get-more-google-reviews-bath',
  'local-seo-bath',
  'seo-for-plumbers-bath',
  'free-seo-audit-what-we-check',
  'website-design-midsomer-norton-peachy-cleans',
  'new-decorating-website-bath',
  'website-design-bath',
  'website-designer-bath-banes',
  'website-design-keynsham',
  'how-we-build-websites-keynsham',
  'keynsham-gbp-keyword-research',
  'website-design-bitton-keynsham',
  'get-found-on-google-keynsham',
  'website-design-radstock',
  'website-design-peasedown-st-john',
  'website-design-somer-valley',
  'website-design-trowbridge',
  'one-page-website-bath-banes',
  'why-speed-matters-for-seo',
  'how-we-get-you-number-one-google-maps',
  'gbp-trades-losing-customers',
  'google-business-profile-for-trades',
];

/** Slug to display label for blog (for HTML sitemap). Add new posts here. */
export const BLOG_LINKS = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog/beautiful-websites-that-rank', label: 'Beautiful Websites That Rank' },
  { href: '/blog/what-is-local-seo-bath', label: 'What Is Local SEO Bath' },
  { href: '/blog/get-more-google-reviews-bath', label: 'Get More Google Reviews' },
  { href: '/blog/local-seo-bath', label: 'Local SEO in Bath' },
  { href: '/blog/seo-for-plumbers-bath', label: 'SEO for Plumbers Bath' },
  { href: '/blog/free-seo-audit-what-we-check', label: 'Free SEO Audit – What We Check' },
  { href: '/blog/website-design-midsomer-norton-peachy-cleans', label: 'Website Design Midsomer Norton – Peachy Cleans' },
  { href: '/blog/new-decorating-website-bath', label: 'New Decorating: No Web Presence to Top 8 on Google Maps in a Week' },
  { href: '/blog/website-design-bath', label: 'Website Design Bath' },
  { href: '/blog/website-designer-bath-banes', label: 'Website Designer Bath & North East Somerset' },
  { href: '/blog/website-design-keynsham', label: 'Website Design Keynsham' },
  { href: '/blog/how-we-build-websites-keynsham', label: 'How We Build Websites in Keynsham' },
  { href: '/blog/keynsham-gbp-keyword-research', label: 'Google Business Profile Keyword Research Keynsham' },
  { href: '/blog/website-design-bitton-keynsham', label: 'Website Design Bitton & Keynsham' },
  { href: '/blog/get-found-on-google-keynsham', label: 'Get Found on Google Keynsham' },
  { href: '/blog/website-design-radstock', label: 'Website Design Radstock' },
  { href: '/blog/website-design-peasedown-st-john', label: 'Website Design Peasedown St John' },
  { href: '/blog/website-design-somer-valley', label: 'Website Design Somer Valley' },
  { href: '/blog/website-design-trowbridge', label: 'Website Design Trowbridge' },
  { href: '/blog/one-page-website-bath-banes', label: 'One-Page Website Bath & North East Somerset' },
  { href: '/blog/why-speed-matters-for-seo', label: 'Why Speed Matters for SEO' },
  { href: '/blog/how-we-get-you-number-one-google-maps', label: 'How We Get You to Number One on Google Maps' },
  { href: '/blog/gbp-trades-losing-customers', label: 'Why Trades Lose Customers When They\'re Not on Google' },
  { href: '/blog/google-business-profile-for-trades', label: 'What is a Google Business Profile and Why Trades Need One' },
];

export const CASE_STUDY_SLUGS = [
  'mitchell-plumbing',
  'keynsham-electrics',
  'norton-roofing',
  'the-bath-kitchen',
  'radstock-dental',
  'saltford-garden-centre',
  'peachy-cleans',
  'new-decorating',
];

const caseStudyLabels = {
  'mitchell-plumbing': 'Mitchell Plumbing',
  'keynsham-electrics': 'Keynsham Electrics',
  'norton-roofing': 'Norton Roofing',
  'the-bath-kitchen': 'The Bath Kitchen',
  'radstock-dental': 'Radstock Dental',
  'saltford-garden-centre': 'Saltford Garden Centre',
  'peachy-cleans': 'Peachy Cleans',
  'new-decorating': 'New Decorating',
};
export const CASE_STUDY_LINKS = [
  { href: '/case-studies', label: 'Case Studies' },
  ...CASE_STUDY_SLUGS.map((slug) => ({
    href: `/case-studies/${slug}`,
    label: `Case Study: ${caseStudyLabels[slug] || slug}`,
  })),
];

export const AREA_SLUGS = [
  'bath',
  'keynsham',
  'midsomer-norton',
  'radstock',
  'peasedown-st-john',
  'paulton',
  'saltford',
  'timsbury',
  'westfield',
  'chew-magna',
  'temple-cloud',
  'clutton',
  'odd-down-bath',
  'combe-down-bath',
  'widcombe-bath',
  'larkhall-bath',
  'twerton-bath',
  'bitton-keynsham',
  'hanham-keynsham',
  'oldland-keynsham',
  'clandon-midsomer-norton',
  'farrington-gurney-midsomer-norton',
  'writhlington-radstock',
  'chilcompton-radstock',
  'stanton-drew-chew-magna',
  'chew-stoke-chew-magna',
  'bishop-sutton-chew-magna',
  'high-littleton-paulton',
  'hallatrow-paulton',
];

/** For HTML sitemap: main areas and sub-areas with display labels (match AreaDetail.jsx names) */
const areaLabels = {
  bath: 'Bath',
  keynsham: 'Keynsham',
  'midsomer-norton': 'Midsomer Norton',
  radstock: 'Radstock',
  'peasedown-st-john': 'Peasedown St John',
  paulton: 'Paulton',
  saltford: 'Saltford',
  timsbury: 'Timsbury',
  westfield: 'Westfield',
  'chew-magna': 'Chew Magna',
  'temple-cloud': 'Temple Cloud',
  clutton: 'Clutton',
  'odd-down-bath': 'Odd Down',
  'combe-down-bath': 'Combe Down',
  'widcombe-bath': 'Widcombe',
  'larkhall-bath': 'Larkhall',
  'twerton-bath': 'Twerton',
  'bitton-keynsham': 'Bitton',
  'hanham-keynsham': 'Hanham',
  'oldland-keynsham': 'Oldland',
  'clandon-midsomer-norton': 'Clandown',
  'farrington-gurney-midsomer-norton': 'Farrington Gurney',
  'writhlington-radstock': 'Writhlington',
  'chilcompton-radstock': 'Chilcompton',
  'stanton-drew-chew-magna': 'Stanton Drew',
  'chew-stoke-chew-magna': 'Chew Stoke',
  'bishop-sutton-chew-magna': 'Bishop Sutton',
  'high-littleton-paulton': 'High Littleton',
  'hallatrow-paulton': 'Hallatrow',
};
function slugToLabel(slug) {
  return areaLabels[slug] || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
export const AREA_LINKS = [
  { href: '/areas', label: 'All Areas' },
  ...AREA_SLUGS.map((slug) => ({ href: `/areas/${slug}`, label: slugToLabel(slug) })),
];

/** Static routes for XML sitemap: path, lastmod (YYYY-MM-DD), changefreq, priority */
export const STATIC_ROUTES = [
  { path: '/', lastmod: '2026-02-21', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/contact', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-packages', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo/plumbers', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/electricians', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/roofers', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/google-business-profile', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/blog', lastmod: '2026-02-21', changefreq: 'weekly', priority: 0.8 },
  { path: '/case-studies', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/spotlight/peachy-cleans', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/sitemap', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.5 },
  { path: '/privacy', lastmod: '2026-02-21', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms', lastmod: '2026-02-21', changefreq: 'yearly', priority: 0.3 },
];

/** Build all URLs for XML sitemap */
export function getSitemapUrls() {
  const today = '2026-02-21';
  const urls = [
    ...STATIC_ROUTES.map((r) => ({
      url: `${BASE_URL}${r.path}`,
      lastModified: r.lastmod,
      changeFrequency: r.changefreq,
      priority: r.priority,
    })),
    ...BLOG_SLUGS.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...CASE_STUDY_SLUGS.map((slug) => ({
      url: `${BASE_URL}/case-studies/${slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...AREA_SLUGS.map((slug) => ({
      url: `${BASE_URL}/areas/${slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
  return urls;
}
