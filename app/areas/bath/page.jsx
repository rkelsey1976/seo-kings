import BathHub from '../../../src/views/BathHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Design, Local SEO & GBP for Bath Businesses | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses across Bath BA1 & BA2. Websites from £250, SEO from £150/month. Free audit.',
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
