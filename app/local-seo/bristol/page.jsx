import LocalSEOBristol from '../../../src/views/LocalSEOBristol';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Bristol | From £150/mo | Map Pack Results | SEO Kings' },
  description: 'Local SEO for Bristol trades and businesses across BS1–BS16. Google Business Profile optimisation and suburb-level Map Pack campaigns from £150/mo. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/bristol' },
  other: { 'geo.region': 'GB-BST', 'geo.placename': 'Bristol' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Bristol', path: '/local-seo/bristol' },
      ]} />
      <LocalSEOBristol />
    </>
  );
}
