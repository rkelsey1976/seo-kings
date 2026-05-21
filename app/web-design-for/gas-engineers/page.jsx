import WebDesignForGasEngineers from '../../../src/views/WebDesignForGasEngineers';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Gas Engineers in Bath & Somerset | From £250 | SEO Kings' },
  description: 'Websites for Gas Safe engineers in Bath that rank on Google. Gas Safe badge, emergency page, boiler pages. From £250. SEO Kings.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/gas-engineers' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Gas Engineers', path: '/web-design-for/gas-engineers' },
      ]} />
      <WebDesignForGasEngineers />
    </>
  );
}