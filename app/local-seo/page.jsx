import LocalSEO from '../../src/views/LocalSEO';
import LocalBusinessRefSchema from '../LocalBusinessRefSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Services Bath | £150/mo | SEO Kings' },
  description: 'Local SEO for trades in Bath & North East Somerset. Rank #1 on Google Maps. Monthly tracking & optimisation from £150.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo' },
};

export default function Page() {
  return (
    <>
      <LocalBusinessRefSchema />
      <LocalSEO />
    </>
  );
}
