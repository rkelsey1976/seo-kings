import WebsiteDesignerRadstock from '../../src/views/WebsiteDesignerRadstock';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Radstock | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Radstock BA3. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-radstock' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Radstock, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Radstock', path: '/website-designer-radstock' },
      ]} />
      <WebsiteDesignerRadstock />
    </>
  );
}
