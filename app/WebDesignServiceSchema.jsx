const siteUrl = 'https://seo-kings.co.uk';

/**
 * WebDesignService JSON-LD for rich snippets: pricing (OfferCatalog).
 * Review/AggregateRating omitted: Google does not show review rich results from first-party
 * (self-serving) markup; use Google Business Profile for stars in search/Maps.
 */
const webDesignServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service-website-design`,
  name: 'Website Design Bath & Somerset',
  description: 'Professional Website Design and website designer services from a Bath and Somerset web agency. We build mobile-first sites for trades and small businesses from £399, with SEO and Google Business Profile. Get found on Google.',
  serviceType: 'Website Design',
  provider: { '@id': `${siteUrl}/#localbusiness` },
  areaServed: [
    { '@type': 'City', name: 'Bath', sameAs: 'https://en.wikipedia.org/wiki/Bath,_Somerset' },
    { '@type': 'AdministrativeArea', name: 'Somerset', sameAs: 'https://en.wikipedia.org/wiki/Somerset' },
    { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset', sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset' },
  ],
  sameAs: 'https://en.wikipedia.org/wiki/Web_design',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Design Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'One-Page Website Package',
          description: 'Single-page website with contact form, mobile-first design, and Google Business Profile optimisation. Ideal for trades and local businesses.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          price: 399,
          valueAddedTaxIncluded: true,
        },
        availability: 'https://schema.org/InStock',
        url: `${siteUrl}/web-design-packages`,
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Page Website Package',
          description: 'Full multi-page website with blog, services pages, and local SEO setup. For businesses ready to scale their online presence.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          price: 899,
          valueAddedTaxIncluded: true,
        },
        availability: 'https://schema.org/InStock',
        url: `${siteUrl}/web-design-packages`,
      },
    ],
  },
};

export default function WebDesignServiceSchema() {
  const jsonLd = JSON.stringify(webDesignServiceSchema);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
