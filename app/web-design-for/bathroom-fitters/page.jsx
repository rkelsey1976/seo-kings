import WebDesignForBathroomFitters from '../../../src/views/WebDesignForBathroomFitters';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Bathroom Fitters Bath & Somerset | From £250 | SEO Kings' },
  description: 'Websites for bathroom fitters that rank on Google and generate enquiries. Project galleries, wet rooms, before/after photos. From £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/bathroom-fitters' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Bathroom Fitters', path: '/web-design-for/bathroom-fitters' },
      ]} />
      <WebDesignForBathroomFitters />
    </>
  );
}