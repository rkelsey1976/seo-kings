import PaultonHub from '../../../src/views/PaultonHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Paulton | Somer Valley Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Paulton BS39. Websites from £399, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/paulton' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Paulton, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Paulton', path: '/areas/paulton' },
      ]} />
      <PaultonHub />
    </>
  );
}
