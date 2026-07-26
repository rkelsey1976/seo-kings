import OnPageSEO from '../../src/views/OnPageSEO';
import LocalBusinessRefSchema from '../LocalBusinessRefSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'On-Page SEO | Bath & Bristol | SEO Kings' },
  description: 'On-page SEO for trade websites in Bath and Bristol — keyword research, title tags, headings and internal linking. Included in every Local SEO and Technical SEO package.',
  alternates: { canonical: 'https://seo-kings.co.uk/on-page-seo' },
};

export default function Page() {
  return (
    <>
      <LocalBusinessRefSchema />
      <OnPageSEO />
    </>
  );
}
