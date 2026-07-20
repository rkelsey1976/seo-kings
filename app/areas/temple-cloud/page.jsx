import TempleCloudHub from '../../../src/views/TempleCloudHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Temple Cloud | BS39 Trades & Businesses | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Temple Cloud BS39. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/temple-cloud' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/temple-cloud' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Temple Cloud, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Temple Cloud', path: '/areas/temple-cloud' },
      ]} />
      <TempleCloudHub />
    </>
  );
}
