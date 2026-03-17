const siteUrl = 'https://seo-kings.co.uk';

const GOOGLE_MAPS_PLACE_URL =
  'https://www.google.com/maps/place/SEO+Kings/@51.3405512,-2.2459894,17z/data=!3m1!4b1!4m6!3m5!1s0x6ea24f9bfbc79da3:0xbe2aa102c5cf0938!8m2!3d51.3405512!4d-2.2434091!16s%2Fg%2F11zks3vh84?entry=ttu';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'SEO Kings',
  url: siteUrl,
  logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png`, width: 200, height: 200 },
  image: `${siteUrl}/og-image.jpg`,
  description: 'SEO Kings is a web agency and Website Designer in Bath and North East Somerset. We build fast, professional websites and get tradespeople and small businesses found on Google. Website Design from £399, local SEO and Google Business Profile.',
  knowsAbout: ['Website Design', 'Website Designer', 'Local SEO', 'Google Business Profile', 'Website design for trades'],
  telephone: '+447702264921',
  address: { '@type': 'PostalAddress', streetAddress: '16a Culvers Road', addressLocality: 'Keynsham', addressRegion: 'Somerset', postalCode: 'BS31 2DW', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4139, longitude: -2.4989 },
  sameAs: [GOOGLE_MAPS_PLACE_URL, 'https://facebook.com/seokings', 'https://linkedin.com/company/seokings', 'https://instagram.com/seokings'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+447702264921',
    contactType: 'customer service',
    areaServed: 'GB',
    addressCountry: 'GB',
    availableLanguage: 'English',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'SEO Kings',
  description: 'Web agency and Website Designer in Bath and North East Somerset. Website Design from £399, local SEO and Google Business Profile so you get found on Google.',
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'en-GB',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function BaseSchemas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} suppressHydrationWarning />
    </>
  );
}
