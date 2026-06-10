import ToolsHub from '../../src/views/ToolsHub';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Free Tools for Tradespeople | GBP Checker, Reviews, Invoices & ROI | SEO Kings' },
  description:
    'Four free tools for trades and local businesses: check your Google Business Profile score, generate review request messages, create invoices and quotes, and work out what a website is worth to you. No sign-up walls.',
  alternates: { canonical: 'https://seo-kings.co.uk/tools' },
  openGraph: {
    title: 'Free Tools for Tradespeople — GBP Checker, Reviews, Invoices & ROI',
    description:
      'Check your Google Business Profile score, write review requests, create invoices and work out website ROI. Free, no sign-up walls.',
    url: 'https://seo-kings.co.uk/tools',
    type: 'website',
  },
};

export default function Page() {
  return <ToolsHub />;
}
