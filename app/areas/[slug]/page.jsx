import AreaDetail from '../../../src/pages/AreaDetail';
import { AREA_SLUGS, slugToLabel } from '../../../src/constants/sitemap';
import { AREA_META } from '../../../src/constants/areaMeta';

export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export const revalidate = 3600;

export function generateMetadata({ params }) {
  const slug = params?.slug?.toLowerCase?.();
  if (!slug) return {};
  const area = AREA_META[slug];
  return {
    title: `Website Design in ${slugToLabel(slug)} | SEO Kings`,
    description: area?.metaDescription,
  };
}

export default function Page({ params }) {
  return <AreaDetail params={params} />;
}
