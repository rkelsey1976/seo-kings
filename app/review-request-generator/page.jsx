import ReviewRequestGenerator from '../../src/views/ReviewRequestGenerator';

export const metadata = {
  title: { absolute: 'Free Google Review Request Generator for Tradespeople | SEO Kings' },
  description: 'Generate a personalised WhatsApp message asking your customer for a Google review. Free tool for plumbers, electricians, builders and trades across the UK.',
  alternates: { canonical: 'https://seo-kings.co.uk/review-request-generator' },
  openGraph: {
    title: 'Free Review Request Generator — Ask for Google Reviews the Easy Way',
    description: 'Builds a personalised WhatsApp message asking your customer for a Google review — copy, send, done. Free for all trades.',
    url: 'https://seo-kings.co.uk/review-request-generator',
    type: 'website',
  },
};

export default function Page() {
  return <ReviewRequestGenerator />;
}
