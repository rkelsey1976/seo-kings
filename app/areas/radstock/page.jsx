import RadstockHub from '../../../src/views/RadstockHub';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Radstock | Somer Valley Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Radstock BA3. Websites from £399, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/radstock' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Radstock, Somerset' },
};

export default function Page() {
  return <RadstockHub />;
}
