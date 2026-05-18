import WebsiteDesignerBath from '../../src/pages/WebsiteDesignerBath';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Bath | Web Design from £399 | SEO Kings' },
  description: 'Website designer serving Bath BA1 & BA2. Fast, mobile-first websites for trades and local businesses from £399. Google Business Profile included. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-bath' },
};

export default function Page() {
  return <WebsiteDesignerBath />;
}
