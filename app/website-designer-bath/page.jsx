import WebsiteDesignerBath from '../../src/views/WebsiteDesignerBath';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Bath | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Bath BA1 & BA2. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-bath' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Bath', path: '/website-designer-bath' },
      ]} />
      <WebsiteDesignerBath />
    </>
  );
}
