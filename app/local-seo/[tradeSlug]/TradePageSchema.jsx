import { TRADE_META } from '../../../src/constants/tradeMeta';

const BASE_URL = 'https://seo-kings.co.uk';

const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '16a Culvers Road',
  addressLocality: 'Keynsham',
  addressRegion: 'Somerset',
  postalCode: 'BS31 2DW',
  addressCountry: 'GB',
};

export default function TradePageSchema({ slug }) {
  const trade = TRADE_META[slug];
  if (!trade) return null;

  const pageUrl = `${BASE_URL}/local-seo/${slug}`;

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Local SEO', item: `${BASE_URL}/local-seo` },
        { '@type': 'ListItem', position: 3, name: `Local SEO for ${trade.name}`, item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}/#service`,
      name: `Local SEO for ${trade.name} in Bath & North East Somerset`,
      serviceType: 'Local SEO',
      provider: { '@id': `${BASE_URL}/#organization` },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
      ],
      description: trade.metaDescription,
      url: pageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${pageUrl}/#localbusiness`,
      name: 'SEO Kings',
      description: `Local SEO for ${trade.name} in Bath and North East Somerset. We help ${trade.name.toLowerCase()} rank higher on Google and get more enquiries.`,
      url: pageUrl,
      telephone: '+447702264921',
      address: BUSINESS_ADDRESS,
      geo: { '@type': 'GeoCoordinates', latitude: 51.4139, longitude: -2.4989 },
      areaServed: { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
      parentOrganization: { '@type': 'Organization', '@id': `${BASE_URL}/#organization` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: trade.faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
