import WebsiteDesignerMidsomerNorton from '../../src/pages/WebsiteDesignerMidsomerNorton';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Midsomer Norton | Web Design from £399 | SEO Kings' },
  description: 'Website designer serving Midsomer Norton BA3. Fast, mobile-first websites for trades and local businesses from £399. Google Business Profile included. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-midsomer-norton' },
};

export default function Page() {
  return <WebsiteDesignerMidsomerNorton />;
}
