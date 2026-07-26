/**
 * ServiceSchemas — combined schema component for the 4 new services added
 * in the SEO Kings full-service marketing agency expansion:
 *   - Free SEO Audit
 *   - Technical SEO
 *   - AI Search Optimisation
 *   - Landing Page Design
 *
 * All reference the homepage Organization via @id so the structured data
 * graph connects everything to SEO Kings.
 */
const siteUrl = 'https://seo-kings.co.uk';

const areaServed = [
  { '@type': 'City', name: 'Bath', sameAs: 'https://en.wikipedia.org/wiki/Bath,_Somerset' },
  { '@type': 'City', name: 'Bristol', sameAs: 'https://en.wikipedia.org/wiki/Bristol' },
  { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset', sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset' },
  { '@type': 'AdministrativeArea', name: 'South Gloucestershire', sameAs: 'https://en.wikipedia.org/wiki/South_Gloucestershire' },
  { '@type': 'AdministrativeArea', name: 'Somerset', sameAs: 'https://en.wikipedia.org/wiki/Somerset' },
];

function makeSchema(json) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      suppressHydrationWarning
    />
  );
}

export function FreeSEOAuditSchema() {
  return makeSchema({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/#service-free-seo-audit`,
    name: 'Free SEO Audit',
    serviceType: 'SEO Audit',
    description: 'Written, no-obligation SEO audit for trades in Bath, Bristol, BANES and South Glos. Current Google ranking, GBP review, on-page and technical SEO, and 3 prioritised recommendations. Delivered within 48 hours.',
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed,
    offers: {
      '@type': 'Offer',
      name: 'Free SEO Audit',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/free-seo-audit`,
      price: 0,
      priceCurrency: 'GBP',
    },
  });
}

export function TechnicalSEOSchema() {
  return makeSchema({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/#service-technical-seo`,
    name: 'Technical SEO',
    serviceType: 'Technical SEO',
    description: 'Technical SEO audit and fixes for trade websites in Bath, Bristol, BANES and South Glos. Page speed, schema markup, broken links, crawl and indexing issues, mobile usability. Audit from £150, audit + fixes from £300.',
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed,
    offers: [
      {
        '@type': 'Offer',
        name: 'Technical SEO Audit',
        price: 150,
        priceCurrency: 'GBP',
        description: 'Written report covering 8 areas: page speed, mobile, schema, broken links, crawl, HTTPS, images, structured data validation.',
      },
      {
        '@type': 'Offer',
        name: 'Technical SEO Audit + Fixes',
        price: 300,
        priceCurrency: 'GBP',
        description: 'Audit plus all priority fixes implemented. Before/after Lighthouse scores. 30 days post-fix support.',
      },
    ],
  });
}

export function AISearchSchema() {
  return makeSchema({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/#service-ai-search-optimisation`,
    name: 'AI Search Optimisation',
    serviceType: 'AI Search Optimisation',
    description: 'Optimisation for Google AI Overviews, ChatGPT, Perplexity and other AI search tools. We structure your content so your business can be found and cited as search habits change. From £150.',
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed,
    offers: {
      '@type': 'Offer',
      name: 'AI Search Optimisation',
      price: 150,
      priceCurrency: 'GBP',
      description: 'Schema markup, content structure, FAQPage and HowTo structured data so AI tools can find and cite your business.',
    },
  });
}

export function LandingPageSchema() {
  return makeSchema({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/#service-landing-page-design`,
    name: 'Landing Page Design',
    serviceType: 'Landing Page Design',
    description: 'A single focused page for one service or offer. Quick to launch, with click-to-call and a contact form. Suits trades who need a straightforward online presence. From £250.',
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed,
    offers: {
      '@type': 'Offer',
      name: 'Landing Page',
      price: 250,
      priceCurrency: 'GBP',
      description: 'One-page landing page, mobile-first, click-to-call, contact form, 6 months free hosting.',
    },
  });
}
