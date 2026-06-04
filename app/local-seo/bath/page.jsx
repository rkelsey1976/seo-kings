import LocalSEOBath from '../../../src/views/LocalSEOBath';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Bath — Top 3 Map Pack Results from £150/mo | SEO Kings' },
  description: 'We\'ve put Bath trades into the Google Map Pack — exterior painter Bath (Top 3), cleaning Midsomer Norton (#1). Local SEO from £150/mo. Free audit. BA1 & BA2.',
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
