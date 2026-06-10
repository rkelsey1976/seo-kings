import InvoiceGenerator from '../../src/views/InvoiceGenerator';

export const metadata = {
  title: {
    absolute: 'Free Invoice & Quote Template Generator for Tradespeople | SEO Kings',
  },
  description:
    'Create a free professional invoice or quote template for your trade business in 2 minutes. Customise with your details and download as PDF. No signup needed.',
  alternates: {
    canonical: 'https://seo-kings.co.uk/invoice-template-generator',
  },
  openGraph: {
    title: 'Free Invoice & Quote Generator for Tradespeople',
    description: 'Create a professional invoice or quote in 2 minutes — your details, line items and VAT, downloaded as a PDF. Free, no sign-up.',
    url: 'https://seo-kings.co.uk/invoice-template-generator',
    type: 'website',
  },
};

export default function Page() {
  return <InvoiceGenerator />;
}
