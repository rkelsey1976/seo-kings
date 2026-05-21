import WebsiteDesignerSaltford from '../../src/views/WebsiteDesignerSaltford';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Saltford | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Saltford. Fast, mobile-first websites for trades and local businesses from £250. Google Business Profile included. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-saltford' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Saltford', path: '/website-designer-saltford' },
      ]} />
      <WebsiteDesignerSaltford />
    </>
  );
}
