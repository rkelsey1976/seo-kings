import ChewMagnaHub from '../../../src/views/ChewMagnaHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Chew Magna | Chew Valley Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Chew Magna BS40. Websites from £399, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/chew-magna' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Chew Magna, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Chew Magna', path: '/areas/chew-magna' },
      ]} />
      <ChewMagnaHub />
    </>
  );
}
