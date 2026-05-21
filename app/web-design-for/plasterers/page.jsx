import WebDesignForPlasterers from '../../../src/views/WebDesignForPlasterers';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Plasterers Bath & Somerset | From £399 | SEO Kings' },
  description: 'Websites for plasterers that rank on Google and generate enquiries. Before/after gallery, service pages, lime plaster. From £399.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/plasterers' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Plasterers', path: '/web-design-for/plasterers' },
      ]} />
      <WebDesignForPlasterers />
    </>
  );
}