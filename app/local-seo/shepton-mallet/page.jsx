import LocalSEOSheptonMallet from '../../../src/views/LocalSEOSheptonMallet';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Shepton Mallet | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'We get Shepton Mallet trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/shepton-mallet' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Shepton Mallet, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Shepton Mallet', path: '/local-seo/shepton-mallet' },
      ]} />
      <LocalSEOSheptonMallet />
    </>
  );
}
