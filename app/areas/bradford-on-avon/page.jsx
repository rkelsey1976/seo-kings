import BradfordOnAvonHub from '../../../src/views/BradfordOnAvonHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Bradford on Avon | Wiltshire Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Bradford on Avon BA15. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/bradford-on-avon' },
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
