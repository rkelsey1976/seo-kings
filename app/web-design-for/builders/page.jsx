import WebDesignForBuilders from '../../../src/views/WebDesignForBuilders';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Builders Bath & Somerset | From £399 | SEO Kings' },
  description: 'Websites for builders that rank on Google and get you enquiries. Project galleries, service pages, NHBC/FMB badges. Serving Bath, Keynsham and Somerset from £399.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/builders' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Builders', path: '/web-design-for/builders' },
      ]} />
      <WebDesignForBuilders />
    </>
  );
}