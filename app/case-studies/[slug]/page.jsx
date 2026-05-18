import CaseStudyDetail from '../../../src/pages/CaseStudyDetail';
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
    title: 'New Decorating Bath: #1 Organic for "Exterior Painter Bath" | SEO Kings',
    description: 'Jay had no web presence at all. We built his site and optimised his Google Business Profile — within a week he ranked in the top 8 on Google Maps and hit #1 organic.',
  },
  'aurelian-massage': {
    title: 'Aurelian Massage: Ranking for "Massage Bath" | SEO Kings',
    description: 'How we got Aurelian Massage ranking on Google for competitive Bath massage searches — with a fast, mobile-first site and targeted local SEO.',
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
