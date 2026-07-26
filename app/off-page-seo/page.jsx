import OffPageSEO from '../../src/views/OffPageSEO';
import LocalBusinessRefSchema from '../LocalBusinessRefSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Off-Page SEO & Citations | Bath & Bristol | SEO Kings' },
  description: 'Off-page SEO for trade websites in Bath and Bristol — local citations, directory listings and backlinks that move rankings. Included in Growth & Scale packages.',
  alternates: { canonical: 'https://seo-kings.co.uk/off-page-seo' },
};

export default function Page() {
  return (
    <>
      <LocalBusinessRefSchema />
      <OffPageSEO />
    </>
  );
}
