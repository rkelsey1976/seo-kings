import CaseStudyDetail from '../../../src/pages/CaseStudyDetail';
import { CASE_STUDY_SLUGS } from '../../../src/constants/sitemap';

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const resolved = typeof params?.then === 'function' ? await params : params;
  return <CaseStudyDetail params={resolved} />;
}
