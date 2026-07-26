import FreeSEOAudit from '../../src/views/FreeSEOAudit';
import BreadcrumbSchema from '../BreadcrumbSchema';
import { FreeSEOAuditSchema } from '../ServiceSchemas';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Free SEO Audit | Bath & Bristol Trades | SEO Kings' },
  description: 'Free, no-obligation SEO audit for trades in Bath, Bristol, BANES and South Glos. We check your website, Google Business Profile and local search presence — and send you a clear written report. No card, no follow-up sales pressure.',
  alternates: { canonical: 'https://seo-kings.co.uk/free-seo-audit' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Free SEO Audit', path: '/free-seo-audit' },
        ]}
      />
      <FreeSEOAuditSchema />
      <FreeSEOAudit />
    </>
  );
}
