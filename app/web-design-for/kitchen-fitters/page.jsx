import WebDesignForKitchenFitters from '../../../src/views/WebDesignForKitchenFitters';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Kitchen Fitters Bath & Somerset | From £399 | SEO Kings' },
  description: 'Websites for kitchen fitters that rank on Google and generate enquiries. Project galleries, service pages, planning permission. From £399.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/kitchen-fitters' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Kitchen Fitters', path: '/web-design-for/kitchen-fitters' },
      ]} />
      <WebDesignForKitchenFitters />
    </>
  );
}