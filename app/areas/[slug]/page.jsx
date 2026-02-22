import AreaDetail from '../../../src/pages/AreaDetail';
import { AREA_SLUGS } from '../../../src/constants/sitemap';
import { AREA_META } from '../../../src/constants/areaMeta';

export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const slug = params?.slug?.toLowerCase?.();
  if (!slug) return {};
  const area = AREA_META[slug];
  if (!area?.metaTitle) return {};
  // Strip trailing " – SEO Kings" so layout template adds " | SEO Kings" once
  const title = area.metaTitle.replace(/\s*–\s*SEO Kings\s*$/, '').trim();
  return {
    title,
    description: area.metaDescription || undefined,
  };
}

export default function Page({ params }) {
  return <AreaDetail params={params} />;
}
