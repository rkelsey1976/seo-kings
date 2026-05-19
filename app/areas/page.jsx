import Areas from '../../src/views/Areas';

export const revalidate = 3600;

export const metadata = {
  title: 'Areas We Cover | Website Design Across Bath & Somerset',
  description: 'We build websites for trades and local businesses across Bath, Keynsham, Midsomer Norton, Radstock and the surrounding villages. See all the areas we serve.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas' },
};

export default function Page() {
  return <Areas />;
}
