import KeynshamHub from '../../../src/views/KeynshamHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Keynsham BS31 | Trades & Local Businesses | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Keynsham BS31. Websites from £399, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/keynsham' },
  other: { 'geo.region': 'GB-BST', 'geo.placename': 'Keynsham, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Keynsham', path: '/areas/keynsham' },
      ]} />
      <KeynshamHub />
    </>
  );
}
