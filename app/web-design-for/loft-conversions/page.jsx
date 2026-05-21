import WebDesignForLoftConversions from '../../../src/views/WebDesignForLoftConversions';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Loft Conversion Specialists in Bath & Somerset | From £399 | SEO Kings' },
  description: 'Websites for loft conversion specialists in Bath that rank on Google. Planning pages, project galleries. From £399. SEO Kings.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/loft-conversions' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Loft Conversions', path: '/web-design-for/loft-conversions' },
      ]} />
      <WebDesignForLoftConversions />
    </>
  );
}