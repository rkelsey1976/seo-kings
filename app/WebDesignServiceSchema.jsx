const siteUrl = 'https://seo-kings.co.uk';

/**
 * WebDesignService JSON-LD for rich snippets: gold stars (AggregateRating) and pricing (OfferCatalog).
 * Injected in <head> so Google can capture rating and package offers.
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '2',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Jay' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.",
    },
    {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'Peachy Cleans' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: "SEO Kings built our website and got us found across Midsomer Norton, Radstock and Bath. We're now getting regular enquiries from our service areas — couldn't ask for more.",
    },
  ],
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
