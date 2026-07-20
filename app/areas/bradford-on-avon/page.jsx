import BradfordOnAvonHub from '../../../src/views/BradfordOnAvonHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Digital Marketing in Bradford-on-Avon | SEO & Local Search | SEO Kings' },
  description: 'Local SEO, Google Business Profile and web design for trades and local businesses in Bradford-on-Avon BA15, Wiltshire. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/bradford-on-avon' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/bradford-on-avon' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Bradford on Avon, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Bradford on Avon', path: '/areas/bradford-on-avon' },
      ]} />
      <BradfordOnAvonHub />
    </>
  );
}
