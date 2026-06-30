import LocalSEOTrowbridge from '../../../src/views/LocalSEOTrowbridge';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Trowbridge | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'We get Trowbridge trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/trowbridge' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Trowbridge, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Trowbridge', path: '/local-seo/trowbridge' },
      ]} />
      <LocalSEOTrowbridge />
    </>
  );
}
