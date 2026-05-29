/**
 * Single source of truth for sitemap: blog slugs, area slugs, and static routes.
 * Used by app/blog/[slug]/page.jsx, app/areas/[slug]/page.jsx, app/sitemap/page.jsx, and app/sitemap.js
 */

export const BASE_URL = 'https://seo-kings.co.uk';

export const BLOG_SLUGS = [
  'beautiful-websites-that-rank',
  'get-more-google-reviews-bath',
  'free-seo-audit-what-we-check',
  'why-speed-matters-for-seo',
];

/** Slug to display label for blog (for HTML sitemap). Add new posts here. */
export const BLOG_LINKS = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog/beautiful-websites-that-rank', label: 'Beautiful Websites That Rank' },
  { href: '/blog/get-more-google-reviews-bath', label: 'Get More Google Reviews' },
  { href: '/blog/free-seo-audit-what-we-check', label: 'Free SEO Audit – What We Check' },
  { href: '/blog/why-speed-matters-for-seo', label: 'Why Speed Matters for SEO' },
];

export const CASE_STUDY_SLUGS = [
  'peachy-cleans',
  'new-decorating',
  'aurelian-massage',
  'bath-painter',
];

const caseStudyLabels = {
  'peachy-cleans': 'Peachy Cleans',
  'new-decorating': 'New Decorating',
  'aurelian-massage': 'Aurelian Massage',
};
export const CASE_STUDY_LINKS = [
  { href: '/case-studies', label: 'Case Studies' },
  ...CASE_STUDY_SLUGS.map((slug) => ({
    href: `/case-studies/${slug}`,
    label: `Case Study: ${caseStudyLabels[slug] || slug}`,
  })),
];

export const AREA_SLUGS = [
  // bath, keynsham, midsomer-norton, radstock have bespoke static routes
  // under app/areas/[town]/page.jsx and must NOT be in generateStaticParams
  // peasedown-st-john, paulton, saltford, timsbury have bespoke static routes
  // westfield, chew-magna, temple-cloud, clutton have bespoke static routes
  'odd-down-bath',
  'combe-down-bath',
  'widcombe-bath',
  'larkhall-bath',
  'twerton-bath',
  'weston-bath',
  'oldfield-park-bath',
  'bear-flat-bath',
  'bathampton-bath',
  'bathwick-bath',
  'southdown-bath',
  'batheaston-bath',
  'walcot-bath',
  'bathford-bath',
  'bitton-keynsham',
  'hanham-keynsham',
  'oldland-keynsham',
  'longwell-green-keynsham',
  'warmley-keynsham',
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
  'weston-bath': 'Weston',
  'oldfield-park-bath': 'Oldfield Park',
  'bear-flat-bath': 'Bear Flat',
  'bathampton-bath': 'Bathampton',
  'bathwick-bath': 'Bathwick',
  'southdown-bath': 'Southdown',
  'batheaston-bath': 'Batheaston',
  'walcot-bath': 'Walcot',
  'bathford-bath': 'Bathford',
  'bitton-keynsham': 'Bitton',
  'hanham-keynsham': 'Hanham',
  'oldland-keynsham': 'Oldland',
  'longwell-green-keynsham': 'Longwell Green',
  'warmley-keynsham': 'Warmley',
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
export { slugToLabel };
export const AREA_LINKS = [
  { href: '/areas', label: 'All Areas' },
  ...AREA_SLUGS.map((slug) => ({ href: `/areas/${slug}`, label: slugToLabel(slug) })),
];

/** Static routes for XML sitemap: path, lastmod (YYYY-MM-DD), changefreq, priority */
export const STATIC_ROUTES = [
  { path: '/', lastmod: '2026-05-05', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.8 },
  { path: '/how-we-are-different', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/contact', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-near-me', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-bath', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-keynsham', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-midsomer-norton', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-radstock', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-saltford', lastmod: '2026-05-17', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-peasedown-st-john', lastmod: '2026-05-17', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-packages', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo/plumbers', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/electricians', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/roofers', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/bath', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo/keynsham', lastmod: '2026-05-18', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo/midsomer-norton', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-trowbridge', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-redesign', lastmod: '2026-05-18', changefreq: 'monthly', priority: 0.8 },
  { path: '/google-business-profile', lastmod: '2026-03-13', changefreq: 'monthly', priority: 0.9 },
  { path: '/blog', lastmod: '2026-05-05', changefreq: 'weekly', priority: 0.8 },
  { path: '/case-studies', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/spotlight/peachy-cleans', lastmod: '2026-02-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas', lastmod: '2026-05-05', changefreq: 'monthly', priority: 0.9 },
  { path: '/areas/bath', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/areas/keynsham', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/areas/midsomer-norton', lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.9 },
  { path: '/areas/radstock', lastmod: '2026-05-18', changefreq: 'monthly', priority: 0.9 },
  { path: '/areas/peasedown-st-john', lastmod: '2026-05-19', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/paulton', lastmod: '2026-05-19', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/saltford', lastmod: '2026-05-29', changefreq: 'monthly', priority: 0.9 },
  { path: '/areas/timsbury', lastmod: '2026-05-19', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/westfield', lastmod: '2026-05-19', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/chew-magna', lastmod: '2026-05-19', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/temple-cloud', lastmod: '2026-05-19', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/clutton', lastmod: '2026-05-19', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/radstock', lastmod: '2026-05-18', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo/peasedown-st-john', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/paulton', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/saltford', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/services', lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-packages', lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/plumbers', lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/electricians', lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/painters-decorators', lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/cleaners', lastmod: '2026-05-20', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/roofers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/builders', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/landscapers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/kitchen-fitters', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/bathroom-fitters', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/heating-engineers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/plasterers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/gas-engineers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/loft-conversions', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/extension-builders', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/web-design-for/drainage-engineers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo/builders', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/landscapers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/cleaners', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/painters-decorators', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/kitchen-fitters', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/bathroom-fitters', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/heating-engineers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/plasterers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/gas-engineers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/loft-conversions', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/extension-builders', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/drainage-engineers', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/plumbers/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/electricians/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/roofers/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/builders/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/landscapers/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/cleaners/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/painters-decorators/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/kitchen-fitters/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/bathroom-fitters/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/heating-engineers/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/plasterers/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/gas-engineers/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/loft-conversions/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/extension-builders/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for/drainage-engineers/bath', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/frome', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/bradford-on-avon', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/corsham', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/shepton-mallet', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/areas/melksham', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/website-designer-frome', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-bradford-on-avon', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-corsham', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-shepton-mallet', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.9 },
  { path: '/website-designer-melksham', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.9 },
  { path: '/local-seo/frome', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/bradford-on-avon', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/corsham', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/shepton-mallet', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/local-seo/melksham', lastmod: '2026-05-22', changefreq: 'monthly', priority: 0.8 },
  { path: '/hosting', lastmod: '2026-05-21', changefreq: 'monthly', priority: 0.9 },
  { path: '/sitemap', lastmod: '2026-05-05', changefreq: 'monthly', priority: 0.5 },
  { path: '/privacy', lastmod: '2026-02-21', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms', lastmod: '2026-02-21', changefreq: 'yearly', priority: 0.3 },
  { path: '/credits', lastmod: '2026-05-22', changefreq: 'yearly', priority: 0.2 },
];

/** Build all URLs for XML sitemap */
export function getSitemapUrls() {
  const today = new Date().toISOString().split('T')[0];
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
