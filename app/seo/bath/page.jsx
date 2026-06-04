import SEOBath from '../../../src/views/SEOBath';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Bath — SEO Agency for Trades & Small Business from £150/mo | SEO Kings' },
  description: 'SEO agency in Bath. We rank trades and small businesses on page one — exterior painter Bath Top 3, cleaning Midsomer Norton #1. SEO services from £150/month. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/seo/bath' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'SEO Bath', path: '/seo/bath' },
      ]} />
      <SEOBath />
    </>
  );
}