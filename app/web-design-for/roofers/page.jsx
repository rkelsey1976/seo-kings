import WebDesignForRoofers from '../../../src/views/WebDesignForRoofers';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Roofers Bath & Somerset | From £250 | SEO Kings' },
  description: 'Websites for roofers that rank on Google and get you enquiries. Before/after galleries, emergency page, insurance work. Serving Bath, Keynsham and Somerset from £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/roofers' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Roofers', path: '/web-design-for/roofers' },
      ]} />
      <WebDesignForRoofers />
    </>
  );
}