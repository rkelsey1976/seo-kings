import WebDesign from '../../src/views/WebDesign';
import WebDesignServiceSchema from '../WebDesignServiceSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Trades from £250 | SEO Kings' },
  description: 'Fast, mobile-first websites built to rank on Google. For plumbers, electricians, builders and trades. From £250, live in 2 weeks.',
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
