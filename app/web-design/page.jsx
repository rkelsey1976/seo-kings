import WebDesign from '../../src/views/WebDesign';
import WebDesignServiceSchema from '../WebDesignServiceSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Trades & Local Businesses | How We Build Websites | SEO Kings' },
  description: 'How we build trade websites that rank on Google — fast, mobile-first, SEO-ready from day one. For plumbers, electricians, builders and local businesses across Bath & North East Somerset. From £399.',
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
