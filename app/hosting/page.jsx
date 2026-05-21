import Hosting from '../../src/views/Hosting';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Hosting for Trades — Bath & Somerset | 6 Months Free | SEO Kings' },
  description: 'Website hosting with SSL, daily backups, uptime monitoring and content tweaks. 6 months free with every website, then £50/year. No lock-in. Bath & Somerset.',
  alternates: { canonical: 'https://seo-kings.co.uk/hosting' },
};

export default function Page() {
  return <Hosting />;
}