import LocalSEOKeynsham from '../../../src/views/LocalSEOKeynsham';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Keynsham | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'Local SEO for Keynsham businesses. Google Business Profile optimisation, website SEO and review growth from £150/month. Based in Keynsham BS31. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/keynsham' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Keynsham', path: '/local-seo/keynsham' },
      ]} />
      <LocalSEOKeynsham />
    </>
  );
}
