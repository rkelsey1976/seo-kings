import LocalSEOMidsomerNorton from '../../../src/views/LocalSEOMidsomerNorton';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Midsomer Norton | SEO Agency BA3 | SEO Kings' },
  description: 'Local SEO for Midsomer Norton businesses. Google Business Profile, website SEO and review growth from £150/month. Serving BA3 and the Somer Valley. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/midsomer-norton' },
};

export default function Page() {
  return <LocalSEOMidsomerNorton />;
}
