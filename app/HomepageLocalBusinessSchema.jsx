/**
 * LocalBusiness + ProfessionalService schema — homepage only.
 * This is the canonical brand-level entity declaration for SEO Kings.
 * It belongs exclusively on the homepage so each page type can declare
 * its own primary entity without duplication.
 */
import { ORG_SAME_AS } from '../src/constants/business';

const siteUrl = 'https://seo-kings.co.uk';

const websiteDesignPackageOffers = [
  {
    '@type': 'Offer',
    name: 'Starter',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=starter`,
    itemOffered: {
      '@type': 'Service',
      name: 'Starter – 1-page website',
      description:
        'Single-page site with services, contact and area info, contact form and click-to-call. Mobile-responsive, local SEO from day one, 6 months free hosting, SSL. GBP optimisation available as a £100 add-on.',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 250,
      valueAddedTaxIncluded: true,
    },
  },
  {
    '@type': 'Offer',
    name: 'Professional',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=professional`,
    itemOffered: {
      '@type': 'Service',
      name: 'Professional – 3-page website',
      description:
        '3-page site (£250 base + £50 per additional page), full custom design, contact form and callback request, portfolio or gallery. Local SEO optimised, 6 months free hosting, SSL. GBP optimisation available as a £100 add-on.',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 350,
      valueAddedTaxIncluded: true,
    },
  },
  {
    '@type': 'Offer',
    name: 'Full',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact?package=full`,
    itemOffered: {
      '@type': 'Service',
      name: 'Full – 5-page website',
      description:
        '5-page site (£250 base + £50 per additional page), full custom design, contact form, callback and booking, portfolio/gallery. Local SEO optimised, 6 months free hosting, SSL. GBP optimisation available as a £100 add-on.',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      price: 450,
      valueAddedTaxIncluded: true,
    },
  },
];

const homepageLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#organization`,
  name: 'SEO Kings',
  description:
    'SEO Kings is a web agency and Website Designer in Bath and North East Somerset. We build fast websites and get tradespeople and small businesses in Bath, Keynsham, Bitton and the surrounding area found on Google. Website Design from £250, local SEO and Google Business Profile.',
  url: siteUrl,
  sameAs: ORG_SAME_AS,
  founder: {
    '@type': 'Person',
    '@id': `${siteUrl}/#richard-kelsey`,
    name: 'Richard Kelsey',
    jobTitle: 'Founder & Web Designer',
    description:
      'Web designer and local SEO specialist with 22 years of development experience and 15 years of graphic design. Based in Keynsham, Somerset — clients speak directly to the person who builds their site.',
    url: `${siteUrl}/about`,
    worksFor: { '@id': `${siteUrl}/#organization` },
    knowsAbout: ['Web Design', 'Local SEO', 'Google Business Profile', 'Small Business Websites'],
  },
  telephone: '+447702264921',
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Bank Transfer, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16a Culvers Road',
    addressLocality: 'Keynsham',
    addressRegion: 'Bath and North East Somerset',
    postalCode: 'BS31 2DW',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4139, longitude: -2.4989 },
  areaServed: [
    { '@type': 'City', name: 'Bath', sameAs: 'https://en.wikipedia.org/wiki/Bath,_Somerset' },
    { '@type': 'City', name: 'Bristol', sameAs: 'https://en.wikipedia.org/wiki/Bristol' },
    { '@type': 'City', name: 'Keynsham', sameAs: 'https://en.wikipedia.org/wiki/Keynsham' },
    { '@type': 'City', name: 'Midsomer Norton', sameAs: 'https://en.wikipedia.org/wiki/Midsomer_Norton' },
    { '@type': 'City', name: 'Radstock', sameAs: 'https://en.wikipedia.org/wiki/Radstock' },
    {
      '@type': 'AdministrativeArea',
      name: 'Bath and North East Somerset',
      sameAs: 'https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset',
    },
  ],
  serviceArea: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 51.4139, longitude: -2.4989 },
      geoRadius: '25000',
    },
  ],
  // No aggregateRating here — same policy as AreaDetail: Google ignores
  // self-serving review markup on your own LocalBusiness and the reviews
  // live on Google, not this site. GBP carries the stars in the Map Pack.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Design & Local SEO Services',
    itemListElement: [
      ...websiteDesignPackageOffers,
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Local SEO',
          description:
            'Local SEO for Bath and North East Somerset. Get found on Google for local trade searches. On-page optimisation, Google Business Profile, local links and monthly reporting.',
        },
        url: `${siteUrl}/local-seo`,
      },
      {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Google Business Profile Management',
          description:
            'Optimise and manage your Google Business Profile so you appear in local search and Google Maps across Bath and North East Somerset.',
        },
        url: `${siteUrl}/google-business-profile`,
      },
    ],
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '16:30' },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Getting Started with JavaScript, v2',
      credentialCategory: 'Certificate',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Frontend Masters',
        url: 'https://frontendmasters.com',
      },
      url: 'https://static.frontendmasters.com/ud/c/17d759b157/PCLLiLkdZh/getting-started-javascript-v2.pdf',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Complete Intro to Web Development, v2',
      credentialCategory: 'Certificate',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Frontend Masters',
        url: 'https://frontendmasters.com',
      },
      url: 'https://static.frontendmasters.com/ud/c/17d759b157/nPKnbMgPYe/web-development-v2.pdf',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Getting Started with CSS',
      credentialCategory: 'Certificate',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Frontend Masters',
        url: 'https://frontendmasters.com',
      },
      url: 'https://static.frontendmasters.com/ud/c/17d759b157/jQdKurJCyS/getting-started-css.pdf',
    },
  ],
  knowsAbout: [
    'Web Design',
    'Website Development',
    'Local SEO',
    'Google Business Profile Optimisation',
    'Search Engine Optimisation',
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'Small Business Websites',
  ],
  mainEntityOfPage: { '@type': 'WebPage', '@id': siteUrl },
};

export default function HomepageLocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageLocalBusinessSchema) }}
      suppressHydrationWarning
    />
  );
}
