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

// Bing Maps place page — for schema sameAs, helps with Bing/ChatGPT indexing
export const BING_MAPS_PLACE_URL =
  'https://www.bing.com/maps/search?style=r&q=SEO+Kings+-+Web+Design+%26+SEO+for+Trades%2C+16+Culvers+Rd%2C+Bristol%2C+BS31+2DW%2C+England&ss=id.local_ypid%3A%22YN68B5155FA5C4F30B%22&st=SEO+Kings+-+Web+Design+%26+SEO+for+Trades&sfa=16+Culvers+Rd%2C+Bristol%2C+BS31+2DW%2C+England&FORM=QBMV&cp=51.416603%7E-2.502991&lvl=16';

export const PHONE_NUMBER = '07702 264 921';
export const PHONE_HREF = 'tel:07702264921';

// Official SEO Kings profiles — used as schema sameAs so search engines and
// AI assistants can connect the website to the GBP listing, reviews and socials
export const ORG_SAME_AS = [
  GOOGLE_MAPS_PLACE_URL,
  BING_MAPS_PLACE_URL,
  'https://uk.trustpilot.com/review/seo-kings.co.uk',
  'https://clutch.co/profile/seo-kings-0',
  'https://www.facebook.com/profile.php?id=61587531959737',
  'https://www.linkedin.com/company/seokings',
];

/** Google Business Profile description (750 char max). Copy into Google Business Profile → Edit profile → Business description. Website-design focused for local search. */
export const GBP_DESCRIPTION =
  'SEO Kings is a Keynsham-based website design and local SEO agency for tradespeople and small businesses across Bath and North East Somerset (BANES). We build fast, professional websites and get you found on Google — website design from £250, plus Google Business Profile optimisation and local SEO so you rank in your area. We work with plumbers, electricians, roofers, cleaners and other local service businesses. Website designer in Bath, Keynsham, Midsomer Norton, Radstock and BANES. We\'ve helped over 150 local businesses improve their visibility and grow their enquiries. No jargon, clear reports, honest pricing. Free local SEO audit. Based in Keynsham, serving BANES.';

/**
 * Custom services for Google Business Profile.
 * Add these in GBP: Edit profile → Services → Add custom service (or Edit services).
 * Name + optional description per service (GBP allows descriptions for custom services).
 */
export const GBP_SERVICES = [
  {
    name: 'Website design',
    description: 'Fast, mobile-friendly websites from £250. For trades and small businesses in Bath and North East Somerset.',
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
    description: 'One-off £100. We optimise your Google listing (categories, keywords, description, hours). Also included in our website and Local SEO packages.',
  },
  {
    name: 'Free local SEO audit',
    description: 'Free check of your website and Google listing. We show you what\'s holding you back and how to improve.',
  },
  {
    name: 'Website redesign',
    description: 'Existing site looking dated or not getting enquiries? We redesign from the ground up — fast, mobile-first and built to rank. Keep your domain, ditch everything else.',
  },
  {
    name: 'Social media integration',
    description: 'We connect your website to your Facebook, Instagram and Google Business Profile so customers can find, follow and contact you from wherever they land.',
  },
  {
    name: 'Logo design',
    description: 'Professional logo design for trades and local businesses from £100. Supplied in PNG, SVG and PDF — ready for your website, Google Business Profile, van signage and social media.',
  },
];
