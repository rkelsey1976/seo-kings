import WebDesignForHub from '../../src/views/WebDesignForHub';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Trades in Bath & Somerset | From £399 | SEO Kings' },
  description: 'Websites built for your trade — plumbers, electricians, roofers, builders and more in Bath & North East Somerset. Mobile-first, fast, built to rank. From £399.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for' },
};

export default function Page() {
  return <WebDesignForHub />;
}