import WebDesign from '../../src/pages/WebDesign';
import WebDesignServiceSchema from '../WebDesignServiceSchema';

export const revalidate = 3600;

export const metadata = {
  title: 'Website Designer Bath | Web Design North East Somerset & Trowbridge – SEO Kings',
  description: 'Website designer in Bath & North East Somerset — we specialise in trade websites and getting local trades found on Google. Plumbers, electricians, builders: fast, SEO-ready sites from £399.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design' },
};

export default function Page() {
  return (
    <>
      <WebDesignServiceSchema />
      <WebDesign />
    </>
  );
}
