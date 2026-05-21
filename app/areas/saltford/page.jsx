import SaltfordHub from '../../../src/views/SaltfordHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Saltford | BS31 Trades & Businesses | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Saltford BS31. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/saltford' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Saltford, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Saltford', path: '/areas/saltford' },
      ]} />
      <SaltfordHub />
    </>
  );
}
