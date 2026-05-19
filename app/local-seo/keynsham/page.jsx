import LocalSEOKeynsham from '../../../src/views/LocalSEOKeynsham';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Keynsham | Search Engine Optimisation BS31 | SEO Kings' },
  description: 'Local SEO for Keynsham businesses. Google Business Profile optimisation, website SEO and review growth from £150/month. Based in Keynsham BS31. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/keynsham' },
};

export default function Page() {
  return <LocalSEOKeynsham />;
}
