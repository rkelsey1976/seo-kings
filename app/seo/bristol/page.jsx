import SEOBristol from '../../../src/views/SEOBristol';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Bristol — SEO Agency for Trades & Small Business from £150/mo | SEO Kings' },
  description: 'SEO agency in Bristol. We rank #1 for "SEO Bristol" — and we can do the same for your trade or small business. SEO services from £150/month. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/seo/bristol' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'SEO Bristol', path: '/seo/bristol' },
      ]} />
      <SEOBristol />
    </>
  );
}