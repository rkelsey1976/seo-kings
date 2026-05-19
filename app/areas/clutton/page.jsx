import CluttonHub from '../../../src/pages/CluttonHub';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Clutton | BS39 Trades & Businesses | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Clutton BS39. Websites from £399, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/clutton' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Clutton, Somerset' },
};

export default function Page() {
  return <CluttonHub />;
}
