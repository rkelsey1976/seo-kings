import LocalSEORadstock from '../../../src/views/LocalSEORadstock';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Radstock | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'Local SEO for Radstock businesses. Google Business Profile, website SEO and review growth from £150/month. Serving BA3 and the Somer Valley. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/radstock' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Radstock, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Radstock', path: '/local-seo/radstock' },
      ]} />
      <LocalSEORadstock />
    </>
  );
}
