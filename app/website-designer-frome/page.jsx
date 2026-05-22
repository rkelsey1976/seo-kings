import WebsiteDesignerFrome from '../../src/views/WebsiteDesignerFrome';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Frome | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Frome BA11. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-frome' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Frome, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Frome', path: '/website-designer-frome' },
      ]} />
      <WebsiteDesignerFrome />
    </>
  );
}
