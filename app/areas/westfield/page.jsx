import WestfieldHub from '../../../src/views/WestfieldHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Westfield | BA3 Somer Valley Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Westfield BA3. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/westfield' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/westfield' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Westfield, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Westfield', path: '/areas/westfield' },
      ]} />
      <WestfieldHub />
    </>
  );
}
