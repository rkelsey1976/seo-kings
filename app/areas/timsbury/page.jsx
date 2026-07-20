import TimsburyHub from '../../../src/views/TimsburyHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Timsbury | BA2 Trades & Businesses | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Timsbury BA2. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/timsbury' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/timsbury' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Timsbury, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Timsbury', path: '/areas/timsbury' },
      ]} />
      <TimsburyHub />
    </>
  );
}
