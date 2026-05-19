import PeasedownHub from '../../../src/views/PeasedownHub';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Peasedown St John | South BANES Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Peasedown St John BA2. Websites from £399, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/peasedown-st-john' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Peasedown St John, Somerset' },
};

export default function Page() {
  return <PeasedownHub />;
}
