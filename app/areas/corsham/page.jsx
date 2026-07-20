import CorshamHub from '../../../src/views/CorshamHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Digital Marketing in Corsham | SEO & Local Search | SEO Kings' },
  description: 'Local SEO, Google Business Profile and web design for trades and local businesses in Corsham SN13. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/corsham' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/corsham' },
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
