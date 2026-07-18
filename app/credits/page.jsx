import Credits from '../../src/views/Credits';

export const revalidate = 3600;

export const metadata = {
  title: 'Image Credits',
  description: 'Attribution for third-party images used on this website, sourced from Wikimedia Commons under Creative Commons licences.',
  alternates: { canonical: 'https://seo-kings.co.uk/credits' },
};

export default function Page() {
  return <Credits />;
}
