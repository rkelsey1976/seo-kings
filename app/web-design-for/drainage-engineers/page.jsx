import WebDesignForDrainageEngineers from '../../../src/views/WebDesignForDrainageEngineers';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Drainage Engineers in Bath & Somerset | From £399 | SEO Kings' },
  description: 'Websites for drainage engineers in Bath that rank on Google. Emergency page, CCTV survey pages. From £399. SEO Kings.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/drainage-engineers' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Drainage Engineers', path: '/web-design-for/drainage-engineers' },
      ]} />
      <WebDesignForDrainageEngineers />
    </>
  );
}