import TechnicalSEO from '../../src/views/TechnicalSEO';
import BreadcrumbSchema from '../BreadcrumbSchema';
import { TechnicalSEOSchema } from '../ServiceSchemas';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Technical SEO for Bath & Bristol Trades | From £150 | SEO Kings' },
  description: 'Technical SEO for trade websites in Bath, Bristol, BANES and South Glos. Page speed, schema markup, broken links, crawl and indexing issues, mobile usability. We diagnose, then fix. From £150.',
  alternates: { canonical: 'https://seo-kings.co.uk/technical-seo' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Technical SEO', path: '/technical-seo' },
        ]}
      />
      <TechnicalSEOSchema />
      <TechnicalSEO />
    </>
  );
}
