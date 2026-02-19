import BlogPost from '../../../src/pages/BlogPost';
import { BLOG_SLUGS } from '../../../src/constants/sitemap';

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

// Allow paths not pre-generated at build time (e.g. new slugs) so the page still runs and BlogPost can render or redirect
export const dynamicParams = true;

export default async function Page({ params }) {
  const resolved = typeof params?.then === 'function' ? await params : params;
  return <BlogPost params={resolved} />;
}
