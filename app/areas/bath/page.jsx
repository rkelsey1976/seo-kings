import BathHub from '../../../src/pages/BathHub';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Bath | Trades & Local Businesses | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Bath. Websites from £399, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/bath' },
  other: { 'geo.region': 'GB-BST', 'geo.placename': 'Bath, Somerset' },
};

export default function Page() {
  return <BathHub />;
}
