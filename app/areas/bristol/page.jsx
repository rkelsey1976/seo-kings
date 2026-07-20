import BristolHub from '../../../src/views/BristolHub';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Agency Bristol | Web Design | SEO Kings' },
  description: 'Bristol SEO agency & web designer. Local SEO from £150/mo, websites from £250. Free audit — see where you rank.',
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