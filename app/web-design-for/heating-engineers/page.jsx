import WebDesignForHeatingEngineers from '../../../src/views/WebDesignForHeatingEngineers';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Heating Engineers Bath & Somerset | From £399 | SEO Kings' },
  description: 'Websites for heating engineers that rank on Google and generate enquiries. Gas Safe badge, emergency boiler repair page. From £399.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/heating-engineers' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Heating Engineers', path: '/web-design-for/heating-engineers' },
      ]} />
      <WebDesignForHeatingEngineers />
    </>
  );
}