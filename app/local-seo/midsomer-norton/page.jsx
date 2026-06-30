import LocalSEOMidsomerNorton from '../../../src/views/LocalSEOMidsomerNorton';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Midsomer Norton | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'Local SEO for Midsomer Norton businesses. Google Business Profile, website SEO and review growth from £150/month. Serving BA3 and the Somer Valley. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/midsomer-norton' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Midsomer Norton', path: '/local-seo/midsomer-norton' },
      ]} />
      <LocalSEOMidsomerNorton />
    </>
  );
}
