import BathTradesReport from '../../src/views/BathTradesReport';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'The Invisible Trades of Bath: 136 Top-Rated Trades, Zero Websites | 2026 Report | SEO Kings' },
  description:
    'We identified 136 highly-rated trade businesses in and around Bath with no website at all — nearly 7,000 Google reviews between them, average rating 4.86. Full findings and methodology.',
  alternates: { canonical: 'https://seo-kings.co.uk/bath-trades-website-report' },
  openGraph: {
    title: 'The Invisible Trades of Bath — 136 Top-Rated Businesses, Zero Websites',
    description:
      '136 Bath-area trades with nearly 7,000 Google reviews between them and not a single website. New research from SEO Kings, June 2026.',
    url: 'https://seo-kings.co.uk/bath-trades-website-report',
    type: 'article',
  },
};

export default function Page() {
  return <BathTradesReport />;
}
