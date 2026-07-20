import WebDesignForHub from '../../src/views/WebDesignForHub';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Trades from £250 | SEO Kings' },
  description: 'Websites for plumbers, electricians, roofers, builders and trades in Bath. Mobile-first, fast, built to rank. From £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for' },
};

export default function Page() {
  return <WebDesignForHub />;
}