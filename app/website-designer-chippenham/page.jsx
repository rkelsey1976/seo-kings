import WebsiteDesignerChippenham from '../../src/views/WebsiteDesignerChippenham';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Chippenham | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Chippenham SN14 & SN15. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-chippenham' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Chippenham', path: '/website-designer-chippenham' },
      ]} />
      <WebsiteDesignerChippenham />
    </>
  );
}
