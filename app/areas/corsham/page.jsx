import CorshamHub from '../../../src/views/CorshamHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Corsham | Wiltshire Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Corsham SN13. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/corsham' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Corsham, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Corsham', path: '/areas/corsham' },
      ]} />
      <CorshamHub />
    </>
  );
}
