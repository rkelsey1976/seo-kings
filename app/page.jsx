import HomePageFAQSchema from './HomePageFAQSchema';
import HomepageLocalBusinessSchema from './HomepageLocalBusinessSchema';
import HomepageNew from '../src/views/HomepageNew';

export const revalidate = 3600;

export const metadata = {
  title: 'Web Design for Bath Trades — £250 | SEO Kings Bath',
  description: 'Fast website design + Google Business Profile for trades in Bath, Keynsham & Midsomer Norton. From £250. Get found on Google. Free audit — no card needed.',
  alternates: { canonical: 'https://seo-kings.co.uk/' },
  other: {
    'trustpilot-one-time-domain-verification-id': '7d8c84ad-2a23-4a65-8cf6-2ac075ac9030',
  },
};

export default function HomePage() {
  return (
    <>
      <HomepageLocalBusinessSchema />
      <HomePageFAQSchema />
      <HomepageNew />
    </>
  );
}
