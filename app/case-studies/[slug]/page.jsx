import CaseStudyDetail from '../../../src/views/CaseStudyDetail';
import { CASE_STUDY_SLUGS } from '../../../src/constants/sitemap';

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export const revalidate = 3600;
export const dynamicParams = false;

const CASE_STUDY_META = {
  'peachy-cleans': {
    title: 'Peachy Cleans: Map Pack #1 for "Cleaning Midsomer Norton" | SEO Kings',
    description: 'How we built a one-page site for Peachy Cleans and got them to the top of Google Maps for cleaning searches in Midsomer Norton — within weeks of launch.',
  },
  'new-decorating': {
    title: 'New Decorating Bath: Top 3 Map Pack for "Exterior Painter Bath" | SEO Kings',
    description: 'Jay had no web presence at all. We built his site and optimised his Google Business Profile — within a week he ranked in the top 8 on Google Maps and ranked in the top 3 on Google Maps.',
  },
  'aurelian-massage': {
    title: 'Aurelian Massage: Ranking for "Massage Bath" | SEO Kings',
    description: 'How we got Aurelian Massage ranking on Google for competitive Bath massage searches — with a fast, mobile-first site and targeted local SEO.',
  },
  'bath-painter': {
    title: 'Bath Painter: Bespoke Website for a Heritage Decorator | SEO Kings',
    description: 'How we built a bespoke website and brand identity for Bath Painter — a heritage specialist serving Bath, Keynsham and BANES with 20+ years of experience in period and listed properties.',
  },
  'aspect-builds': {
    title: 'Aspect Builds: 40-Page Website for a Bath Builder — From Instagram to Google | SEO Kings',
    description: 'How we built a full 40-page website for Aspect Builds & Maintenance — from just an Instagram page to a complete professional presence with hub-and-spoke SEO, real photography, and 98+ Lighthouse accessibility.',
  },
  'rg-extreme-pressure': {
    title: 'RG Extreme Pressure: Custom 102-Page Jet Washing Website from Wix | SEO Kings',
    description: 'How we replaced an outdated Wix site with a custom 102-page website for RG Extreme Pressure — 9 service pages, area pages, before/after slider, video showcase, and Schema markup with 111 five-star reviews. Live in under two weeks.',
  },
};

export async function generateMetadata({ params }) {
  const resolved = typeof params?.then === 'function' ? await params : params;
  const slug = resolved?.slug;
  const meta = CASE_STUDY_META[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://seo-kings.co.uk/case-studies/${slug}` },
  };
}

export default async function Page({ params }) {
  const resolved = typeof params?.then === 'function' ? await params : params;
  return <CaseStudyDetail params={resolved} />;
}
