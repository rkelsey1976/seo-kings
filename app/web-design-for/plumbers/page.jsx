import WebDesignForPlumbers from '../../../src/views/WebDesignForPlumbers';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Plumber Website Design Bath | £250 | SEO Kings' },
  description: 'Websites for plumbers that rank on Google. Gas Safe badge, emergency page, booking system. Bath & Somerset from £250.',
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
