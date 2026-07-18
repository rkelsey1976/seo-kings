import ToolsHub from '../../src/views/ToolsHub';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Trades Growth Hub | Free Tools, Guides & Checklists for Trades | SEO Kings' },
  description:
    'Free tools, guides and checklists for trades and local businesses: the Local SEO Checklist PDF, Google Business Profile score checker, review request generator, invoice creator and website ROI calculator. No sign-up walls.',
  alternates: { canonical: 'https://seo-kings.co.uk/tools' },
  openGraph: {
    title: 'Trades Growth Hub — Free Tools, Guides & Checklists for Trades',
    description:
      'The Local SEO Checklist PDF, GBP score checker, review requests, invoices and website ROI — free, no sign-up walls.',
    url: 'https://seo-kings.co.uk/tools',
    type: 'website',
  },
};

export default function Page() {
  return <ToolsHub />;
}
