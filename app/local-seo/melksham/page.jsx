import LocalSEOMelksham from '../../../src/views/LocalSEOMelksham';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Melksham | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'We get Melksham trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/melksham' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Melksham, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Melksham', path: '/local-seo/melksham' },
      ]} />
      <LocalSEOMelksham />
    </>
  );
}
