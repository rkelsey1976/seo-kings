import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const posts = [
  {
    slug: 'free-seo-audit-what-we-check',
    title: 'What We Actually Check in Your Free Local SEO Audit',
    excerpt: 'A clear breakdown of what we look at in your free audit: GBP, website, citations, and how we turn that into a plan.',
    date: '2026-02-05',
    readTime: '5 min read',
  },
  {
    slug: 'get-more-google-reviews-bath',
    title: 'How to Get More Google Reviews (Without Breaking the Rules)',
    excerpt: 'Practical ways to ask for reviews, when to ask, and how to respond — so you build trust and stay within Google’s guidelines.',
    date: '2026-02-05',
    readTime: '4 min read',
  },
  {
    slug: 'local-seo-bath',
    title: 'Local SEO in Bath: How to Rank in the Map Pack',
    excerpt: 'What it takes to show up in the local map results for Bath and BANES: GBP, website, and consistency.',
    date: '2026-02-05',
    readTime: '5 min read',
  },
  {
    slug: 'seo-for-plumbers-bath',
    title: 'SEO for Plumbers in Bath & BANES: Get More Plumbing Jobs from Google',
    excerpt: 'How plumbers in Bath and the surrounding area can get found for “plumber near me”, boiler repairs, and emergency calls.',
    date: '2026-02-05',
    readTime: '5 min read',
  },
  {
    slug: 'what-is-local-seo-bath',
    title: 'What Is Local SEO and Why It Matters for Bath & BANES Businesses',
    excerpt: 'Local SEO gets you in front of people searching “near me” and in the map pack. Here’s how it works and why it matters.',
    date: '2026-02-05',
    readTime: '4 min read',
  },
  {
    slug: 'beautiful-websites-that-rank',
    title: 'How We Build Beautiful Websites That Rank Well on Google',
    excerpt: 'We build sites that look great, load fast, and score 95+ on Lighthouse — so they rank better and convert more.',
    date: '2026-02-05',
    readTime: '4 min read',
  },
];

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog | Local SEO & Web Design Tips"
        description="Tips on local SEO, web design, and getting your Bath & BANES business found on Google. From the team at SEO Kings."
        keywords="SEO blog Bath, web design blog BANES, local SEO tips, Lighthouse performance"
        canonical="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Local SEO & Web Design <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tips on getting your business found on Google, building websites that convert, and staying ahead in Bath & BANES.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-dark-card border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-colors"
              >
                <time dateTime={post.date} className="text-sm text-gray-500 block mb-2">
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  {post.readTime && <span className="text-gray-600 ml-2">· {post.readTime}</span>}
                </time>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-light transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary-light hover:text-white font-medium transition-colors"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Blog;
