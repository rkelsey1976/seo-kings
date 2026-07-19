import Areas from '../../src/views/Areas';

export const revalidate = 3600;

export const metadata = {
  title: 'Areas We Cover | Bath, Bristol & Somerset',
  description: 'Web design & local SEO across Bath, Bristol, Keynsham, Frome and Somerset. Find your area — websites from £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas' },
};

export default function Page() {
  return <Areas />;
}
