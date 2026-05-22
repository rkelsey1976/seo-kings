import WebsiteDesignerMelksham from '../../src/views/WebsiteDesignerMelksham';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Melksham | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Melksham SN12. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-melksham' },
  other: { 'geo.region': 'GB-WIL', 'geo.placename': 'Melksham, Wiltshire' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Melksham', path: '/website-designer-melksham' },
      ]} />
      <WebsiteDesignerMelksham />
    </>
  );
}
