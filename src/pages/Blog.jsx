import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const posts = [
  {
    slug: 'no-web-presence-to-google-maps-week',
    title: 'From No Web Presence to Top 8 on Google Maps in a Week: How We Did It for New Decorating',
    excerpt: 'New Decorating had no website and no Google listing. We built both — within a week Jay was ranking for long-tail keywords and in the top 8 on Google Maps. Here\'s how our website and GBP services work together.',
    date: '2026-02-20',
    readTime: '5 min read',
  },
  {
    slug: 'new-decorating-website-bath',
    title: 'New Decorating: From No Web Presence to Top 8 on Google Maps in a Week',
    excerpt: 'Jay at New Decorating had no web presence. We built his website and optimised his Google Business Profile — within a week he was ranking for long-tail keywords and in the top 8 on Google Maps.',
    date: '2026-02-19',
    readTime: '4 min read',
  },
  {
    slug: 'how-we-get-you-number-one-google-maps',
    title: 'How We Get You to Number One on Google Maps',
    excerpt: 'When people search for a plumber, electrician or cleaner near them, Google shows a map with three businesses at the top. Here’s how we help you get into that top spot — in plain English.',
    date: '2026-02-09',
    readTime: '5 min read',
  },
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
    excerpt: 'What it takes to show up in the local map results for Bath and North East Somerset: GBP, website, and consistency.',
    date: '2026-02-05',
    readTime: '5 min read',
  },
  {
    slug: 'seo-for-plumbers-bath',
    title: 'SEO for Plumbers in Bath & North East Somerset: Get More Plumbing Jobs from Google',
    excerpt: 'How plumbers in Bath and the surrounding area can get found for “plumber near me”, boiler repairs, and emergency calls.',
    date: '2026-02-05',
    readTime: '5 min read',
  },
  {
    slug: 'what-is-local-seo-bath',
    title: 'What Is Local SEO and Why It Matters for Bath & North East Somerset Businesses',
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
  {
    slug: 'website-design-midsomer-norton-peachy-cleans',
    title: 'Website We Built for Peachy Cleans: Web Design in Midsomer Norton That Gets Found on Google',
    excerpt: 'How we built a fast, simple website for Peachy Cleans in Midsomer Norton — and got them to #1 on Google and the map pack. Web design for local businesses in the Somer Valley.',
    date: '2026-02-08',
    readTime: '5 min read',
  },
  {
    slug: 'website-design-bath',
    title: 'Website Design in Bath: What We Build for Trades and Local Businesses',
    excerpt: 'Fast, mobile-friendly websites for Bath businesses — from one-page sites to full multi-page. Built for local search so you get found on Google and in the map pack.',
    date: '2026-02-08',
    readTime: '4 min read',
  },
  {
    slug: 'website-design-keynsham',
    title: 'Website Design in Keynsham: What We Build for Local Businesses',
    excerpt: 'Web design for Keynsham and BS31 — fast sites that rank. We build for trades and local services so you get found on Google and convert more visitors into customers.',
    date: '2026-02-08',
    readTime: '4 min read',
  },
  {
    slug: 'website-design-bitton-keynsham',
    title: 'Website Design in Bitton & the Keynsham Area: What We Build for Local Trades',
    excerpt: 'Website design for Bitton and the Keynsham area (BS30/BS31). Fast, mobile-friendly sites from £399 for plumbers, electricians and trades. We serve Bitton, Keynsham, Saltford, Bath and North East Somerset.',
    date: '2026-02-12',
    readTime: '4 min read',
  },
  {
    slug: 'get-found-on-google-keynsham',
    title: 'Get Found on Google in Keynsham, Bitton & the Areas We Serve',
    excerpt: 'How trades in Keynsham and the Keynsham area get found on Google. Website from £399, Google Business Profile and local SEO. We serve Keynsham, Bitton, Saltford, Paulton, Bath and North East Somerset.',
    date: '2026-02-12',
    readTime: '4 min read',
  },
  {
    slug: 'website-design-radstock',
    title: 'Website Design in Radstock: What We Build for Somer Valley Businesses',
    excerpt: 'Web design for Radstock and the Somer Valley — fast, mobile-friendly websites for trades and local services. Built for local search so you get found on Google.',
    date: '2026-02-08',
    readTime: '4 min read',
  },
  {
    slug: 'website-design-peasedown-st-john',
    title: 'Website Design in Peasedown St John: What We Build for Local Businesses',
    excerpt: 'Web design for Peasedown St John and south of Bath — fast, mobile-friendly websites for trades and local services. Built for local search so you get found on Google.',
    date: '2026-02-21',
    readTime: '4 min read',
  },
  {
    slug: 'website-design-somer-valley',
    title: 'Website Design for the Somer Valley: Radstock, Midsomer Norton & Paulton',
    excerpt: 'Web design for the Somer Valley — Radstock, Midsomer Norton, Paulton and nearby. Fast, mobile-friendly websites for trades and local businesses.',
    date: '2026-02-21',
    readTime: '4 min read',
  },
  {
    slug: 'website-design-trowbridge',
    title: 'Website Design in Trowbridge: What We Build for Wiltshire Businesses',
    excerpt: 'Web design for Trowbridge and Wiltshire — fast sites for trades and local businesses. Built for local search so you get found on Google and in the map pack.',
    date: '2026-02-08',
    readTime: '4 min read',
  },
  {
    slug: 'one-page-website-bath-banes',
    title: 'One-Page Website for Small Business Bath & North East Somerset: When It Works and What We Build',
    excerpt: 'Affordable one-page website design for Bath and North East Somerset — from £399. When a single-page site works for trades and local businesses, and what we include so it ranks on Google.',
    date: '2026-02-08',
    readTime: '4 min read',
  },
  {
    slug: 'why-speed-matters-for-seo',
    title: 'Why Speed Matters for SEO: How Fast Websites Rank Better on Google',
    excerpt: 'Page speed is a ranking factor and affects user experience. Here\'s why fast websites rank better on Google and what you can do about it.',
    date: '2026-02-08',
    readTime: '5 min read',
  },
];

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog | Local SEO & Web Design Tips"
        description="Tips on local SEO, web design, and getting your Bath & North East Somerset business found on Google. From the team at SEO Kings."
        keywords="SEO blog Bath, web design blog Bath and North East Somerset, local SEO tips, Lighthouse performance"
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
            Tips on getting your business found on Google, building websites that convert, and staying ahead in Bath & North East Somerset.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[...posts]
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((post) => (
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
