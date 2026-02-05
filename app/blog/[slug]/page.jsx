import BlogPost from '../../../src/pages/BlogPost';

export function generateStaticParams() {
  return [
    { slug: 'beautiful-websites-that-rank' },
    { slug: 'what-is-local-seo-bath' },
    { slug: 'get-more-google-reviews-bath' },
    { slug: 'local-seo-bath' },
    { slug: 'seo-for-plumbers-bath' },
    { slug: 'free-seo-audit-what-we-check' },
  ];
}

export default function Page({ params }) {
  return <BlogPost params={params} />;
}
