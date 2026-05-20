import WebsiteDesignerRadstock from '../../src/views/WebsiteDesignerRadstock';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Radstock | Web Design from £399 | SEO Kings' },
  description: 'Website designer serving Radstock BA3. Fast, mobile-first websites for trades and local businesses from £399. Google Business Profile included. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-radstock' },
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
