import AreaDetail from '../../../src/pages/AreaDetail';
import { AREA_SLUGS } from '../../../src/constants/sitemap';

export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export default function Page({ params }) {
  return <AreaDetail params={params} />;
}
