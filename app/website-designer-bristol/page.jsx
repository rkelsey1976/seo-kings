import WebsiteDesignerBristol from '../../src/views/WebsiteDesignerBristol';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Bristol | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Bristol BS1-BS16. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-bristol' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Bristol', path: '/website-designer-bristol' },
      ]} />
      <WebsiteDesignerBristol />
    </>
  );
}