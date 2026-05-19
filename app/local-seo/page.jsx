import LocalSEO from '../../src/views/LocalSEO';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Services Bath & North East Somerset | SEO Kings' },
  description: 'Local SEO in Bath & North East Somerset. We help tradespeople and small businesses rank #1 on Google. Keyword research, on-page SEO, link building. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo' },
};

export default function Page() {
  return <LocalSEO />;
}
