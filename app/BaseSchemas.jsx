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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#localbusiness`,
  name: 'SEO Kings',
  description: 'Bath-based website design and local SEO agency. We build fast websites and get tradespeople and small businesses in BANES found on Google. Website design from £399, GBP and local SEO.',
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
    { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset', sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset' },
  ],
  serviceArea: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 51.3751, longitude: -2.3617 }, geoRadius: '20000' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO', description: 'Improve your rankings in local search results' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design', description: 'Professional websites built to convert visitors into customers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile Management', description: 'Optimise and manage your Google Business Profile' } },
    ],
  },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:30' }],
  sameAs: ['https://facebook.com/seokings', 'https://linkedin.com/company/seokings', 'https://instagram.com/seokings'],
};

export default function BaseSchemas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
