import LocalSEOBradfordOnAvon from '../../../src/views/LocalSEOBradfordOnAvon';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Bradford on Avon | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'We get Bradford on Avon trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/bradford-on-avon' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Bradford on Avon, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Bradford on Avon', path: '/local-seo/bradford-on-avon' },
      ]} />
      <LocalSEOBradfordOnAvon />
    </>
  );
}
