const siteUrl = 'https://seo-kings.co.uk';

/**
 * WebDesignService JSON-LD for rich snippets: pricing (OfferCatalog).
 * Three package tiers matching /web-design-packages: Starter £399, Professional £1200, Full £1800.
 * Review/AggregateRating omitted: Google does not show review rich results from first-party
 * (self-serving) markup; use Google Business Profile for stars in search/Maps.
 */
const webDesignPackageOffers = [
  {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Starter – 1-page website',
      description: 'Single-page site with services, contact and area info, contact form and click-to-call. Google Business Profile optimisation for one service, one location. Mobile-responsive, SEO basics, 12 months hosting, SSL, UK support.',
    },
    name: 'Starter',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=starter`,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 399,
      valueAddedTaxIncluded: true,
    },
  },
  {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Professional – multi-page website',
      description: 'Up to 8 pages, full custom design, contact form and callback request, portfolio or gallery. Google Business Profile optimisation for 3 services, 4 locations. Mobile-responsive, SEO optimised, 12 months hosting, 30-day post-launch support.',
    },
    name: 'Professional',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=professional`,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 1200,
      valueAddedTaxIncluded: true,
    },
  },
  {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Full Package – complete website',
      description: 'Up to 10 pages, full custom design, contact form, callback and booking, portfolio/gallery, social integration. Google Business Profile optimisation for 5 services, 8 locations. SEO optimised, 12 months hosting, 60-day post-launch support.',
    },
    name: 'Full Package',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=full`,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 1800,
      valueAddedTaxIncluded: true,
    },
  },
];

const webDesignServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service-website-design`,
  name: 'Website Design Bath & Somerset',
  description: 'Professional Website Design and website designer services from a Bath and Somerset web agency. We build mobile-first sites for trades and small businesses: Starter from £399 (1-page + GBP 1 service/1 location), Professional £1,200 (up to 8 pages + GBP 3 services/4 locations), Full £1,800 (up to 10 pages + GBP 5 services/8 locations). Get found on Google.',
  serviceType: 'Website Design',
  provider: { '@id': `${siteUrl}/#localbusiness` },
  areaServed: [
    { '@type': 'City', name: 'Bath', sameAs: 'https://en.wikipedia.org/wiki/Bath,_Somerset' },
    { '@type': 'AdministrativeArea', name: 'Somerset', sameAs: 'https://en.wikipedia.org/wiki/Somerset' },
    { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset', sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset' },
  ],
  sameAs: 'https://en.wikipedia.org/wiki/Web_design',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/web-design` },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Design Packages',
    itemListElement: webDesignPackageOffers,
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
