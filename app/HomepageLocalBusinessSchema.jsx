/**
 * LocalBusiness + ProfessionalService schema — homepage only.
 * This is the canonical brand-level entity declaration for SEO Kings.
 * It belongs exclusively on the homepage so each page type can declare
 * its own primary entity without duplication.
 */
const siteUrl = 'https://seo-kings.co.uk';

const GOOGLE_MAPS_PLACE_URL =
  'https://www.google.com/maps/place/SEO+Kings/@51.3405512,-2.2459894,17z/data=!3m1!4b1!4m6!3m5!1s0x6ea24f9bfbc79da3:0xbe2aa102c5cf0938!8m2!3d51.3405512!4d-2.2434091!16s%2Fg%2F11zks3vh84?entry=ttu';

const websiteDesignPackageOffers = [
  {
    '@type': 'Offer',
    name: 'Starter',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=starter`,
    itemOffered: {
      '@type': 'Service',
      name: 'Starter – 1-page website',
      description:
        'Single-page site with services, contact and area info, contact form and click-to-call. Google Business Profile optimisation included for one service in one location. Mobile-responsive, SEO basics, 12 months hosting, SSL, UK support.',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 399,
      valueAddedTaxIncluded: true,
    },
  },
  {
    '@type': 'Offer',
    name: 'Professional',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=professional`,
    itemOffered: {
      '@type': 'Service',
      name: 'Professional – multi-page website',
      description:
        'Up to 8 pages, full custom design, contact form and callback request, portfolio or gallery. Google Business Profile optimisation for 3 services, 4 locations. Mobile-responsive, SEO optimised, 12 months hosting, 30-day post-launch support.',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 1200,
      valueAddedTaxIncluded: true,
    },
  },
  {
    '@type': 'Offer',
    name: 'Full Package',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=full`,
    itemOffered: {
      '@type': 'Service',
      name: 'Full Package – complete website',
      description:
        'Up to 10 pages, full custom design, contact form, callback and booking, portfolio/gallery, social media integration. Google Business Profile optimisation for 5 services, 8 locations. SEO optimised, 12 months hosting, 60-day post-launch support.',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 1800,
      valueAddedTaxIncluded: true,
    },
  },
];

const homepageLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#organization`,
  name: 'SEO Kings',
  description:
    'SEO Kings is a web agency and Website Designer in Bath and North East Somerset. We build fast websites and get tradespeople and small businesses in Bath, Keynsham, Bitton and the surrounding area found on Google. Website Design from £399, local SEO and Google Business Profile.',
  url: siteUrl,
  telephone: '+447702264921',
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Bank Transfer, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16a Culvers Road',
    addressLocality: 'Keynsham',
    addressRegion: 'Somerset',
    postalCode: 'BS31 2DW',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4139, longitude: -2.4989 },
  areaServed: [
    { '@type': 'City', name: 'Bath', sameAs: 'https://en.wikipedia.org/wiki/Bath,_Somerset' },
    { '@type': 'City', name: 'Keynsham', sameAs: 'https://en.wikipedia.org/wiki/Keynsham' },
    { '@type': 'City', name: 'Midsomer Norton', sameAs: 'https://en.wikipedia.org/wiki/Midsomer_Norton' },
    { '@type': 'City', name: 'Radstock', sameAs: 'https://en.wikipedia.org/wiki/Radstock' },
    {
      '@type': 'AdministrativeArea',
      name: 'Bath and North East Somerset',
      sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset',
    },
  ],
  serviceArea: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 51.4139, longitude: -2.4989 },
      geoRadius: '25000',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    reviewCount: 2,
    bestRating: 5,
    worstRating: 1,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Design & Local SEO Services',
    itemListElement: [
      ...websiteDesignPackageOffers,
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Local SEO',
          description:
            'Local SEO for Bath and North East Somerset. Get found on Google for local trade searches. On-page optimisation, Google Business Profile, local links and monthly reporting.',
        },
        url: `${siteUrl}/local-seo`,
      },
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Google Business Profile Management',
          description:
            'Optimise and manage your Google Business Profile so you appear in local search and Google Maps across Bath and North East Somerset.',
        },
        url: `${siteUrl}/google-business-profile`,
      },
    ],
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '17:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '17:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '17:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '17:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '17:30' },
  ],
  mainEntityOfPage: { '@type': 'WebPage', '@id': siteUrl },
  sameAs: [
    GOOGLE_MAPS_PLACE_URL,
    'https://uk.trustpilot.com/review/seo-kings.co.uk',
    'https://facebook.com/seokings',
    'https://linkedin.com/company/seokings',
    'https://instagram.com/seokings',
  ],
};

export default function HomepageLocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageLocalBusinessSchema) }}
      suppressHydrationWarning
    />
  );
}
