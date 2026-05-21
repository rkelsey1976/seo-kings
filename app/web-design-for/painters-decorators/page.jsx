import WebDesignForPainterDecorators from '../../../src/views/WebDesignForPainterDecorators';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Painters & Decorators Bath | From £250 | SEO Kings' },
  description: 'Websites for painters and decorators with before/after galleries, heritage property pages and quote forms. Rank on Google for Bath and Somerset searches. From £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/painters-decorators' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Painters & Decorators', path: '/web-design-for/painters-decorators' },
      ]} />
      <WebDesignForPainterDecorators />
    </>
  );
}
