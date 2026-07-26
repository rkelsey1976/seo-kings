import SEOAudit from '../../../src/views/SEOAudit';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Free SEO Audit for Trades | SEO Kings' },
  description: 'A free SEO audit for trades in Bath, Bristol & North East Somerset — Google Business Profile, website, citations and competitors, checked and reported back. No obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/tools/seo-audit' },
};

export default function Page() {
  return <SEOAudit />;
}
