import SheptonMalletHub from '../../../src/views/SheptonMalletHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Digital Marketing in Shepton Mallet | SEO & Local Search | SEO Kings' },
  description: 'Local SEO, Google Business Profile and web design for trades and local businesses in Shepton Mallet BA4. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/shepton-mallet' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/shepton-mallet' },
  other: { 'geo.region': 'GB-SOM', 'geo.placename': 'Shepton Mallet, Somerset' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Shepton Mallet', path: '/areas/shepton-mallet' },
      ]} />
      <SheptonMalletHub />
    </>
  );
}
