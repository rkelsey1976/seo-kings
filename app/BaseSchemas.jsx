const siteUrl = 'https://seo-kings.co.uk';

/**
 * WebSite schema — emitted on every page via app/layout.jsx.
 * Organization is declared once on the homepage via HomepageLocalBusinessSchema.jsx
 * as a merged Organization + LocalBusiness + ProfessionalService entity at /#organization.
 * All other schemas reference that entity via @id.
 */
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} suppressHydrationWarning />
  );
}
