import Areas from '../../src/views/Areas';

export const revalidate = 3600;

export const metadata = {
  title: 'Areas We Cover | Website Design Across Bath, Somerset & Wiltshire',
  description: 'We build websites for trades and local businesses across Bath, Frome, Bradford on Avon, Corsham, Melksham and the surrounding Somerset and Wiltshire area. See all the areas we serve.',
  alternates: { canonical: 'https://seo-kings.co.uk/areas' },
};

export default function Page() {
  return <Areas />;
}
