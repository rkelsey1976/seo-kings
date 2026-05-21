import WebsiteDesignerPeasedownStJohn from '../../src/views/WebsiteDesignerPeasedownStJohn';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Peasedown St John | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Peasedown St John BA2. Fast, mobile-first websites for trades and local businesses from £250. Google Business Profile included. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-peasedown-st-john' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Peasedown St John', path: '/website-designer-peasedown-st-john' },
      ]} />
      <WebsiteDesignerPeasedownStJohn />
    </>
  );
}
