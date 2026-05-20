import WebDesignForPlumbers from '../../../src/views/WebDesignForPlumbers';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Plumbers Bath & Somerset | From £399 | SEO Kings' },
  description: 'Websites for plumbers that rank on Google and get you calls. Gas Safe badge, emergency page, dedicated service pages. Serving Bath, Keynsham and Somerset from £399.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/plumbers' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Plumbers', path: '/web-design-for/plumbers' },
      ]} />
      <WebDesignForPlumbers />
    </>
  );
}
