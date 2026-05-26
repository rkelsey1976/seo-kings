import MelkshamHub from '../../../src/views/MelkshamHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO & Web Design in Melksham | Wiltshire Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Melksham SN12. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/melksham' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Melksham, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Melksham', path: '/areas/melksham' },
      ]} />
      <MelkshamHub />
    </>
  );
}
