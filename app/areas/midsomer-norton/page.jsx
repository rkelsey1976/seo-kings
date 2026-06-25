import MidsomerNortonHub from '../../../src/views/MidsomerNortonHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Digital Marketing in Midsomer Norton | SEO & Local Search | SEO Kings' },
  description: 'Local SEO, Google Business Profile and web design for trades and local businesses in Midsomer Norton BA3. Websites from £250, local SEO from £150/month. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/midsomer-norton' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Midsomer Norton, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Midsomer Norton', path: '/areas/midsomer-norton' },
      ]} />
      <MidsomerNortonHub />
    </>
  );
}
