import ChecklistDownload from '../../../src/views/ChecklistDownload';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'The Local SEO Checklist for Trades — Free PDF | SEO Kings' },
  description:
    'The 22 things that decide whether a trade business shows up on Google Maps — Google Business Profile, reviews, website and citations. Free printable PDF, no jargon.',
  alternates: { canonical: 'https://seo-kings.co.uk/tools/local-seo-checklist' },
};

export default function Page() {
  return <ChecklistDownload />;
}
