import KeynshamHub from '../../../src/views/KeynshamHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Digital Marketing in Keynsham | SEO & Local Search | SEO Kings' },
  description: 'Local SEO, Google Business Profile and web design for trades and local businesses in Keynsham BS31. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/keynsham' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/keynsham' },
  other: { 'geo.region': 'GB-BAS', 'geo.placename': 'Keynsham, Somerset' },
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
