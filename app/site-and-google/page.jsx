import SiteAndGoogle from '../../src/views/SiteAndGoogle';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Site + Google — £99/month Website & Google Setup for Trades | SEO Kings' },
  description:
    'A professional one-page website plus Google Business Profile optimisation, hosting, monthly Google posts and rank reports — £99/month, nothing upfront. You own your domain, buy the site out anytime. Bath, Bristol & Somerset.',
  alternates: { canonical: 'https://seo-kings.co.uk/site-and-google' },
};

export default function Page() {
  return <SiteAndGoogle />;
}
