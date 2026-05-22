import WebsiteDesignerSheptonMallet from '../../src/views/WebsiteDesignerSheptonMallet';
import BreadcrumbSchema from '../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Designer Shepton Mallet | Web Design from £250 | SEO Kings' },
  description: 'Website designer serving Shepton Mallet BA4. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-shepton-mallet' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Shepton Mallet, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Website Designer Shepton Mallet', path: '/website-designer-shepton-mallet' },
      ]} />
      <WebsiteDesignerSheptonMallet />
    </>
  );
}
