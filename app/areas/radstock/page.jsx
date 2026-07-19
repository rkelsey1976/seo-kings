import RadstockHub from '../../../src/views/RadstockHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO & Web Design Radstock | SEO Kings' },
  description: 'Local SEO & web design for trades in Radstock BA3. Websites from £250, SEO from £150/mo. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/radstock' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/radstock' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Radstock, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Radstock', path: '/areas/radstock' },
      ]} />
      <RadstockHub />
    </>
  );
}
