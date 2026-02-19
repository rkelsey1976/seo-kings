import CaseStudyDetail from '../../../src/pages/CaseStudyDetail';
import { CASE_STUDY_SLUGS } from '../../../src/constants/sitemap';

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export default function Page({ params }) {
  return <CaseStudyDetail params={params} />;
}
