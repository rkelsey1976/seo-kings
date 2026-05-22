import SheptonMalletHub from '../../../src/views/SheptonMalletHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & SEO in Shepton Mallet | Somerset Trades | SEO Kings' },
  description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Shepton Mallet BA4. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/shepton-mallet' },
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
