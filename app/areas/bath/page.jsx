import BathHub from '../../../src/views/BathHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Agency Bath | Web Design, Local SEO & GBP | SEO Kings' },
  description: 'SEO and web design agency in Bath BA1 & BA2. Websites from £250, local SEO from £150/month, GBP optimisation from £100. 6+ years helping Bath trades get found on Google. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/bath' },
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
