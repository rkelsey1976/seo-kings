import SEOServices from '../../src/views/SEOServices';
import LocalBusinessRefSchema from '../LocalBusinessRefSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Agency Bath & Bristol | Local SEO from £150/mo | SEO Kings' },
  description: 'SEO for trades in Bath, Bristol & North East Somerset. Local SEO, Google Business Profile optimisation and Map Pack rankings. From £150/month.',
  alternates: { canonical: 'https://seo-kings.co.uk/seo' },
};

export default function Page() {
  return (
    <>
      <LocalBusinessRefSchema />
      <SEOServices />
    </>
  );
}
