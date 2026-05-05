import { TRADE_META } from '../../../src/constants/tradeMeta';

const BASE_URL = 'https://seo-kings.co.uk';

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
      provider: { '@id': `${BASE_URL}/#organization` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
      description: trade.metaDescription,
      url: pageUrl,
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
