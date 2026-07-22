import SEOBristol from '../../../src/views/SEOBristol';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Bristol — SEO Agency for Trades & Small Business from £150/mo | SEO Kings' },
  description: 'SEO agency in Bristol for trades and small businesses. Real client results — Map Pack and page one within weeks. SEO services from £150/month. Free audit.',
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