import MidsomerNortonHub from '../../../src/views/MidsomerNortonHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO & Web Design Midsomer Norton | SEO Kings' },
  description: 'Local SEO & web design for trades in Midsomer Norton BA3. Websites from £250, SEO from £150/mo. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/midsomer-norton' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/midsomer-norton' },
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
