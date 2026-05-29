import LocalSEOBath from '../../../src/views/LocalSEOBath';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Bath | Map Pack Rankings from £150/month | SEO Kings' },
  description: 'Local SEO for Bath trades and businesses. Get into the Google Map Pack, rank on page one, and get more calls — from £150/month. BA1 & BA2. Free audit included.',
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
