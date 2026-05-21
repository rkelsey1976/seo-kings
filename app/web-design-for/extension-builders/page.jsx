import WebDesignForExtensionBuilders from '../../../src/views/WebDesignForExtensionBuilders';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Extension Builders in Bath & Somerset | From £250 | SEO Kings' },
  description: 'Websites for extension builders in Bath that rank on Google. Planning pages, project galleries, Bath stone expertise. From £250. SEO Kings.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/extension-builders' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Extension Builders', path: '/web-design-for/extension-builders' },
      ]} />
      <WebDesignForExtensionBuilders />
    </>
  );
}