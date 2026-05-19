import WebsiteDesignerSaltford from '../../src/views/WebsiteDesignerSaltford';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Saltford | Web Design from £399 | SEO Kings' },
  description: 'Website designer serving Saltford. Fast, mobile-first websites for trades and local businesses from £399. Google Business Profile included. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-saltford' },
};

export default function Page() {
  return <WebsiteDesignerSaltford />;
}
