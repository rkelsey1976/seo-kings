import FromeHub from '../../../src/views/FromeHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO & Web Design in Frome | Somerset Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Frome BA11. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/frome' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Frome, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Frome', path: '/areas/frome' },
      ]} />
      <FromeHub />
    </>
  );
}
