import WebsiteDesignerKeynsham from '../../src/views/WebsiteDesignerKeynsham';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design Keynsham — Websites for Trades from £250 | SEO Kings' },
  description: 'We build fast, mobile-first websites for Keynsham trades that rank on Google. From £250. Based in BS31. Top results for "website designer Keynsham" — see our real client results. Free audit.',
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
