import LocalSEOFrome from '../../../src/views/LocalSEOFrome';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Frome | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'We get Frome trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/frome' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Frome, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Frome', path: '/local-seo/frome' },
      ]} />
      <LocalSEOFrome />
    </>
  );
}
