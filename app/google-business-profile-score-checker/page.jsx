import GBPScoreChecker from '../../src/views/GBPScoreChecker';

export const metadata = {
  title: { absolute: 'Google Business Profile Score Checker — Free GBP Audit Tool | SEO Kings' },
  description: "Check your Google Business Profile score in 2 minutes. Free interactive checklist for tradespeople — see exactly what's stopping you from appearing in Google Maps.",
  alternates: { canonical: 'https://seo-kings.co.uk/google-business-profile-score-checker' },
  openGraph: {
    title: 'Free GBP Score Checker — How Healthy Is Your Google Business Profile?',
    description: "Score your Google profile in 2 minutes and see exactly what's stopping you appearing in Google Maps. Free, no sign-up wall.",
    url: 'https://seo-kings.co.uk/google-business-profile-score-checker',
    type: 'website',
  },
};

export default function Page() {
  return <GBPScoreChecker />;
}
