import LocalSEOBristol from '../../../src/views/LocalSEOBristol';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Bristol | Map Pack Rankings from £150/mo | SEO Kings' },
  description: 'Local SEO agency in Bristol. We get trades and small businesses into the Google Map Pack across BS1–BS16. GBP optimisation, citations and local SEO from £150/month. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/bristol' },
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