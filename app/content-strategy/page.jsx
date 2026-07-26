import ContentStrategy from '../../src/views/ContentStrategy';
import LocalBusinessRefSchema from '../LocalBusinessRefSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Content Strategy | Bath & Bristol | SEO Kings' },
  description: 'Content strategy for trade websites in Bath and Bristol — service pages, location pages and blog posts built around real search queries. Included in Growth & Scale packages.',
  alternates: { canonical: 'https://seo-kings.co.uk/content-strategy' },
};

export default function Page() {
  return (
    <>
      <LocalBusinessRefSchema />
      <ContentStrategy />
    </>
  );
}
