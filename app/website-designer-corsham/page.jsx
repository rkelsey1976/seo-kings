import WebsiteDesignerCorsham from '../../src/views/WebsiteDesignerCorsham';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Corsham | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Corsham SN13. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-corsham' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Corsham, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Corsham', path: '/website-designer-corsham' },
      ]} />
      <WebsiteDesignerCorsham />
    </>
  );
}
