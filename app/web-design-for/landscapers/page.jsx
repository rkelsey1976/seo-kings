import WebDesignForLandscapers from '../../../src/views/WebDesignForLandscapers';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Landscapers Bath & Somerset | From £250 | SEO Kings' },
  description: 'Websites for landscapers and gardeners that rank on Google and get you enquiries. Before/after galleries, service pages, seasonal content. Serving Bath, Keynsham and Somerset from £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/landscapers' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Landscapers', path: '/web-design-for/landscapers' },
      ]} />
      <WebDesignForLandscapers />
    </>
  );
}