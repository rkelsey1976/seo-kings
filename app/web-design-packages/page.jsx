import WebDesignPackages from '../../src/views/WebDesignPackages';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design Packages for Trades | From £250 | SEO Kings Bath' },
  description: 'Transparent per-page pricing — from £250 for one page, £50 per extra page. No monthly fees, no contracts. Build your quote in 30 seconds. Serving Bath, Keynsham & Somerset.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-packages' },
};

export default function Page() {
  return <WebDesignPackages />;
}
