import BristolHub from '../../../src/views/BristolHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Agency Bristol | Web Design & Local Search | SEO Kings' },
  description: 'Bristol SEO agency and web designer. Local SEO from £150/month, websites from £250, GBP optimisation from £100. #1 for "SEO Bristol". Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas/bristol' },
  openGraph: { url: 'https://seo-kings.co.uk/areas/bristol' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Areas', path: '/areas' },
        { name: 'Bristol', path: '/areas/bristol' },
      ]} />
      <BristolHub />
    </>
  );
}