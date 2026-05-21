import WebsiteDesignerMidsomerNorton from '../../src/views/WebsiteDesignerMidsomerNorton';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Midsomer Norton | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Midsomer Norton BA3. Fast, mobile-first websites for trades and local businesses from £250. Google Business Profile included. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-midsomer-norton' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Midsomer Norton', path: '/website-designer-midsomer-norton' },
      ]} />
      <WebsiteDesignerMidsomerNorton />
    </>
  );
}
