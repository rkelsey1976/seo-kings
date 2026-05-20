import LocalSEOBath from '../../../src/views/LocalSEOBath';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Bath | Search Engine Optimisation BA1 & BA2 | SEO Kings' },
  description: 'Local SEO for Bath businesses. Google Business Profile optimisation, website SEO and review growth from £150/month. Serving BA1 & BA2. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/bath' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Bath', path: '/local-seo/bath' },
      ]} />
      <LocalSEOBath />
    </>
  );
}
