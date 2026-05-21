import WebsiteDesignerKeynsham from '../../src/views/WebsiteDesignerKeynsham';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Keynsham | Web Design from £250 | SEO Kings' },
  description: 'Website designer in Keynsham BS31. Fast, mobile-first websites for trades and local businesses from £250. Google Business Profile included. Based in Keynsham — free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-keynsham' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Keynsham', path: '/website-designer-keynsham' },
      ]} />
      <WebsiteDesignerKeynsham />
    </>
  );
}
