import WebsiteDesignerTrowbridge from '../../src/views/WebsiteDesignerTrowbridge';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Trowbridge | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Trowbridge and Wiltshire. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-trowbridge' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Trowbridge', path: '/website-designer-trowbridge' },
      ]} />
      <WebsiteDesignerTrowbridge />
    </>
  );
}
