/**
 * Business contact and profile URLs — single source of truth.
 * Update here to change links site-wide.
 */

// Google Maps place page — visitors can view reviews and click "Write a review"
export const GOOGLE_MAPS_PLACE_URL =
  'https://www.google.com/maps/place/SEO+Kings/@51.4146602,-2.8149845,10z/data=!4m6!3m5!1s0x6336f883e105215f:0xa48c1533c75af07c!8m2!3d51.4082228!4d-2.4520036!16s%2Fg%2F11nj8kvxfx';

// Google Maps embed iframe src — for embedding on Contact and About. Get the exact URL from Google Maps: your place → Share → Embed a map → copy the iframe src.
export const GOOGLE_MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159277.9983531994!2d-2.45200365!3d51.40822275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6336f883e105215f%3A0xa48c1533c75af07c!2sSEO%20Kings!5e0!3m2!1sen!2suk!4v1779109284266!5m2!1sen!2suk';

export const PHONE_NUMBER = '07702 264 921';
export const PHONE_HREF = 'tel:07702264921';

/** Google Business Profile description (750 char max). Copy into Google Business Profile → Edit profile → Business description. Website-design focused for local search. */
export const GBP_DESCRIPTION =
  'SEO Kings is a Keynsham-based website design and local SEO agency for tradespeople and small businesses across Bath and North East Somerset (BANES). We build fast, professional websites and get you found on Google — website design from £399, plus Google Business Profile optimisation and local SEO so you rank in your area. We work with plumbers, electricians, roofers, cleaners and other local service businesses. Website designer in Bath, Keynsham, Midsomer Norton, Radstock and BANES. We\'ve helped over 150 local businesses improve their visibility and grow their enquiries. No jargon, clear reports, honest pricing. Free local SEO audit. Based in Keynsham, serving BANES.';

/**
 * Custom services for Google Business Profile.
 * Add these in GBP: Edit profile → Services → Add custom service (or Edit services).
 * Name + optional description per service (GBP allows descriptions for custom services).
 */
export const GBP_SERVICES = [
  {
    name: 'Website design',
    description: 'Fast, mobile-friendly websites from £399. For trades and small businesses in Bath and North East Somerset.',
  },
  {
    name: 'Web design packages',
    description: 'Fixed-price website packages for local businesses. Includes hosting and clear structure for Google.',
  },
  {
    name: 'Local SEO',
    description: 'Get found on Google for your area and trade. From £150/month. Keyword research, on-page optimisation, GBP, monthly reports.',
  },
  {
    name: 'Google Business Profile optimisation',
    description: 'One-off £150. We optimise your Google listing (categories, keywords, description, hours). Also included in our website and Local SEO packages.',
  },
  {
    name: 'Free local SEO audit',
    description: 'Free check of your website and Google listing. We show you what\'s holding you back and how to improve.',
  },
];
