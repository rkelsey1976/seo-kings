import WebDesignForCleaners from '../../../src/views/WebDesignForCleaners';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Cleaners Bath & Somerset | From £250 | SEO Kings' },
  description: 'Websites for cleaning businesses that rank on Google. DBS/insurance display, end of tenancy pages, recurring customer messaging. Bath and Somerset from £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/cleaners' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Cleaners', path: '/web-design-for/cleaners' },
      ]} />
      <WebDesignForCleaners />
    </>
  );
}
