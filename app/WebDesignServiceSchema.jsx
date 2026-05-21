const siteUrl = 'https://seo-kings.co.uk';

/**
 * WebDesignService JSON-LD for rich snippets: pricing (OfferCatalog).
 * Per-page pricing: £250 base + £50 per page. Three representative examples shown.
 * Review/AggregateRating omitted: Google does not show review rich results from first-party
 * (self-serving) markup; use Google Business Profile for stars in search/Maps.
 */
const webDesignPackageOffers = [
  {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: '1-page website',
      description: 'Single-page site with services, contact form, click-to-call, and area info. Mobile-responsive, SEO basics, 6 months free hosting, SSL, UK support.',
    },
    name: '1-page website',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/web-design-packages`,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 250,
      valueAddedTaxIncluded: true,
    },
  },
  {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: '3-page website',
      description: 'Home, services and contact pages. Full custom design, contact form, portfolio or gallery option. Mobile-responsive, SEO optimised, 6 months free hosting.',
    },
    name: '3-page website',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/web-design-packages`,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 350,
      valueAddedTaxIncluded: true,
    },
  },
  {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: '5-page website',
      description: 'Full site with individual service pages for better local rankings. Home, service pages, gallery, contact. SEO optimised, 6 months free hosting.',
    },
    name: '5-page website',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/web-design-packages`,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 450,
      valueAddedTaxIncluded: true,
    },
  },
];

const webDesignServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service-website-design`,
  name: 'Website Design Bath & Somerset',
  description: 'Professional website design for trades and small businesses in Bath & Somerset. Per-page pricing from £250 — £250 base + £50 per page. All sites include mobile-responsive design, SEO basics, contact form, click-to-call, 6 months free hosting, and SSL. Google Business Profile optimisation available as an add-on.',
  serviceType: 'Website Design',
  provider: { '@id': `${siteUrl}/#organization` },
  areaServed: [
    { '@type': 'City', name: 'Bath', sameAs: 'https://en.wikipedia.org/wiki/Bath,_Somerset' },
    { '@type': 'AdministrativeArea', name: 'Somerset', sameAs: 'https://en.wikipedia.org/wiki/Somerset' },
    { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset', sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset' },
  ],
  sameAs: 'https://en.wikipedia.org/wiki/Web_design',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/web-design` },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Design — Per-Page Pricing',
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
