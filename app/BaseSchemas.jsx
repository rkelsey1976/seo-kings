const siteUrl = 'https://seo-kings.co.uk';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'SEO Kings',
  url: siteUrl,
  logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png`, width: 200, height: 200 },
  image: `${siteUrl}/og-image.jpg`,
  description: 'Website design and local SEO in Bath and BANES. We build fast, professional websites and get tradespeople and small businesses found on Google. From £399.',
  telephone: '+447702264921',
  address: { '@type': 'PostalAddress', addressLocality: 'Bath', addressRegion: 'Somerset', postalCode: 'BA1', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.3751, longitude: -2.3617 },
  sameAs: ['https://facebook.com/seokings', 'https://linkedin.com/company/seokings', 'https://instagram.com/seokings'],
  contactPoint: { '@type': 'ContactPoint', telephone: '+447702264921', contactType: 'customer service', areaServed: 'GB', availableLanguage: 'English' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'SEO Kings',
  description: 'Website design and local SEO for Bath and North East Somerset. Fast sites from £399, Google Business Profile and local SEO so you get found on Google.',
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'en-GB',
};

// Keynsham / BS31 geo (town centre approx)
const keynshamGeo = { '@type': 'GeoCoordinates', latitude: 51.4139, longitude: -2.4989 };

const keynshamAreaServed = [
  { '@type': 'City', name: 'Keynsham', sameAs: 'https://en.wikipedia.org/wiki/Keynsham' },
  { '@type': 'PostalCode', name: 'BS31', addressCountry: 'GB' },
  { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset', sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#localbusiness`,
  name: 'SEO Kings',
  description: 'Website design and local SEO in Bath and North East Somerset. We build fast websites and get tradespeople and small businesses in Bath, Keynsham, Bitton and the surrounding area found on Google. Website design from £399, local SEO and Google Business Profile.',
  url: siteUrl,
  telephone: '+447702264921',
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Bank Transfer, Credit Card',
  address: { '@type': 'PostalAddress', addressLocality: 'Bath', addressRegion: 'Somerset', postalCode: 'BA1', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.3751, longitude: -2.3617 },
  areaServed: [
    { '@type': 'City', name: 'Bath', sameAs: 'https://en.wikipedia.org/wiki/Bath,_Somerset' },
    { '@type': 'City', name: 'Keynsham', sameAs: 'https://en.wikipedia.org/wiki/Keynsham' },
    { '@type': 'PostalCode', name: 'BS31', addressCountry: 'GB' },
    { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset', sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset' },
  ],
  serviceArea: [
    { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 51.3751, longitude: -2.3617 }, geoRadius: '20000' },
    { '@type': 'GeoCircle', geoMidpoint: keynshamGeo, geoRadius: '10000' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Design & Local SEO in Bath & BANES',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Design',
          description: 'Professional website design for Keynsham and BS31 businesses. Mobile-first, fast-loading sites built for local search. One-page sites from £399 with Google Business Profile optimisation included.',
          areaServed: keynshamAreaServed,
        },
        areaServed: keynshamAreaServed,
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          minPrice: 399,
          valueAddedTaxIncluded: true,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Local SEO',
          description: 'Local SEO for Keynsham and BS31. Get found on Google for searches like "plumber Keynsham", "electrician BS31". On-page optimisation, Google Business Profile, local links and ongoing support.',
          areaServed: keynshamAreaServed,
        },
        areaServed: keynshamAreaServed,
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          price: 'From monthly packages',
          valueAddedTaxIncluded: true,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Google Business Profile Management',
          description: 'Optimise and manage your Google Business Profile so you appear in local search and Google Maps in Keynsham and BS31.',
          areaServed: keynshamAreaServed,
        },
        areaServed: keynshamAreaServed,
        availability: 'https://schema.org/InStock',
      },
    ],
  },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:30' }],
  sameAs: ['https://facebook.com/seokings', 'https://linkedin.com/company/seokings', 'https://instagram.com/seokings'],
};

// Service schema: Website Design in Keynsham/BS31
const serviceWebsiteDesignSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service-website-design-keynsham`,
  name: 'Website Design in Keynsham & BS31',
  description: 'Professional website design for businesses in Keynsham and the BS31 area. Fast, mobile-friendly sites from £399 with SEO and Google Business Profile optimisation. Get found on Google in Keynsham.',
  serviceType: 'Website Design',
  provider: { '@id': `${siteUrl}/#localbusiness` },
  areaServed: keynshamAreaServed,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Design Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          minPrice: 399,
          valueAddedTaxIncluded: true,
        },
        url: `${siteUrl}/web-design`,
      },
    ],
  },
};

// Service schema: Local SEO in Keynsham/BS31
const serviceLocalSEOSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service-local-seo-keynsham`,
  name: 'Local SEO in Keynsham & BS31',
  description: 'Local SEO for Keynsham and BS31 businesses. Rank higher in Google for local searches: on-page optimisation, Google Business Profile, local links and monthly reporting. Get found when customers search in Keynsham.',
  serviceType: 'Local SEO',
  provider: { '@id': `${siteUrl}/#localbusiness` },
  areaServed: keynshamAreaServed,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Local SEO Services',
    itemListElement: [
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          price: 'From monthly packages',
          valueAddedTaxIncluded: true,
        },
        url: `${siteUrl}/local-seo`,
      },
    ],
  },
};

export default function BaseSchemas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceWebsiteDesignSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLocalSEOSchema) }} />
    </>
  );
}
