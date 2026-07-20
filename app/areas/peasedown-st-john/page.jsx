import PeasedownHub from '../../../src/views/PeasedownHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Digital Marketing in Peasedown St John | SEO & Local Search | SEO Kings' },
  description: 'Local SEO, Google Business Profile and web design for trades and local businesses in Peasedown St John BA2. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/peasedown-st-john' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/peasedown-st-john' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Peasedown St John, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Peasedown St John', path: '/areas/peasedown-st-john' },
      ]} />
      <PeasedownHub />
    </>
  );
}
