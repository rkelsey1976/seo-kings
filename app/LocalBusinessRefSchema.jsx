/**
 * Compact LocalBusiness entity for service pages.
 * The full brand entity is declared on the homepage (HomepageLocalBusinessSchema),
 * but Google's structured-data parsing is page-scoped — a Service schema whose
 * provider references /#organization must declare that entity on the same page
 * or the reference dangles. This emits the core NAP/geo node with the same @id
 * (values mirror the homepage entity) so provider links resolve in-page.
 */
import { ORG_SAME_AS } from '../src/constants/business';

const siteUrl = 'https://seo-kings.co.uk';

const localBusinessRef = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#organization`,
  name: 'SEO Kings',
  url: siteUrl,
  telephone: '+447702264921',
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  priceRange: '££',
  sameAs: ORG_SAME_AS,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16a Culvers Road',
    addressLocality: 'Keynsham',
    addressRegion: 'Bath and North East Somerset',
    postalCode: 'BS31 2DW',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4139, longitude: -2.4989 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '16:30' },
  ],
};

export default function LocalBusinessRefSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessRef) }}
      suppressHydrationWarning
    />
  );
}
