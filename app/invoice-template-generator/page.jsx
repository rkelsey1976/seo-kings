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
};

export default function Page() {
  return <InvoiceGenerator />;
}
