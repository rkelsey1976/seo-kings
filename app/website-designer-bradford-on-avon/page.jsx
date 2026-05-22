import WebsiteDesignerBradfordOnAvon from '../../src/views/WebsiteDesignerBradfordOnAvon';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Bradford on Avon | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Bradford on Avon BA15. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-bradford-on-avon' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Bradford on Avon, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Bradford on Avon', path: '/website-designer-bradford-on-avon' },
      ]} />
      <WebsiteDesignerBradfordOnAvon />
    </>
  );
}
