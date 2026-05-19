import WebsiteDesignerTrowbridge from '../../src/views/WebsiteDesignerTrowbridge';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Trowbridge | Web Design from £399 | SEO Kings' },
  description: 'Website designer serving Trowbridge and Wiltshire. Fast, mobile-first websites for trades and local businesses from £399. Google Business Profile included. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-trowbridge' },
};

export default function Page() {
  return <WebsiteDesignerTrowbridge />;
}
