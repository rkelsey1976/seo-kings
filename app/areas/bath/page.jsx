import BathHub from '../../../src/views/BathHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Agency Bath | Web Design | SEO Kings' },
  description: 'Bath SEO agency & web designer for trades and small businesses. Local SEO from £150/mo, websites from £250. 6+ years helping Bath businesses rank. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/bath' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/bath' },
  other: { 'geo.region': 'GB-BAS', 'geo.placename': 'Bath, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Bath', path: '/areas/bath' },
      ]} />
      <BathHub />
    </>
  );
}
