import BlogPost from '../../../src/pages/BlogPost';
import { BLOG_SLUGS } from '../../../src/constants/sitemap';
import { BLOG_META } from '../../../src/constants/blogMeta';

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

// Allow paths not pre-generated at build time (e.g. new slugs) so the page still runs and BlogPost can render or redirect
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const resolved = typeof params?.then === 'function' ? await params : params;
  const slug = resolved?.slug?.toLowerCase?.();
  if (!slug) return {};
  const meta = BLOG_META[slug];
  if (!meta?.title) return {};
  return {
    title: meta.title,
    description: meta.description || undefined,
  };
}

export default async function Page({ params }) {
  const resolved = typeof params?.then === 'function' ? await params : params;
  return <BlogPost params={resolved} />;
}
