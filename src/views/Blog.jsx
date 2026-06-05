'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const BLOG_SERVICES = [
  { id: 'all', label: 'All' },
  { id: 'web-design', label: 'Website Design' },
  { id: 'local-seo', label: 'Local SEO' },
  { id: 'gbp', label: 'Google Business Profile' },
];

const posts = [
  {
    slug: 'why-speed-matters-for-seo',
    title: 'Why Speed Matters for SEO: How Fast Websites Rank Better on Google',
    excerpt: 'Page speed is a ranking factor and affects user experience. Here\'s why fast websites rank better on Google and what you can do about it.',
    date: '2026-02-08',
    readTime: '5 min read',
    services: ['web-design', 'local-seo'],
  },
  {
    slug: 'free-seo-audit-what-we-check',
    title: 'What We Actually Check in Your Free Local SEO Audit',
    excerpt: 'A clear breakdown of what we look at in your free audit: GBP, website, citations, and how we turn that into a plan.',
    date: '2026-02-05',
    readTime: '5 min read',
    services: ['local-seo'],
  },
  {
    slug: 'get-more-google-reviews-bath',
    title: 'How to Get More Google Reviews in Bath (Without Breaking the Rules)',
    excerpt: 'Practical ways to ask for reviews, when to ask, and how to respond — so you build trust and stay within Google\'s guidelines.',
    date: '2026-02-05',
    readTime: '4 min read',
    services: ['gbp'],
  },
  {
    slug: 'beautiful-websites-that-rank',
    title: 'How We Build Beautiful Websites That Rank Well on Google',
    excerpt: 'We build sites that look great, load fast, and score 95+ on Lighthouse — so they rank better and convert more.',
    date: '2026-02-05',
    readTime: '4 min read',
    services: ['web-design'],
  },
  {
    slug: 'google-reviews-electrician-bath',
    title: 'How to Get More Google Reviews as an Electrician in Bath',
    excerpt: "Google reviews are one of the biggest factors in whether customers call you — here's how to get them consistently without it feeling awkward.",
    date: '2026-06-05',
    readTime: '5 min read',
    services: ['gbp', 'local-seo'],
  },
  {
    slug: 'do-i-need-a-website-plumber-bath',
    title: 'Do I Need a Website as a Plumber? (Honest Answer for Bath Trades)',
    excerpt: "Most plumbers in Bath get by on word of mouth — but there's a ceiling to that. Here's what happens when potential customers Google you and find nothing.",
    date: '2026-06-05',
    readTime: '5 min read',
    services: ['web-design'],
  },
  {
    slug: 'set-up-google-business-profile-tradesperson',
    title: 'How to Set Up Your Google Business Profile as a Tradesperson (Step-by-Step)',
    excerpt: 'Your Google Business Profile is free and is one of the most powerful things a tradesperson can do to get found online. Here is exactly how to set it up.',
    date: '2026-09-04',
    readTime: '6 min read',
    services: ['gbp', 'local-seo'],
  },
  {
    slug: 'get-trade-business-google-map-pack',
    title: 'How to Get Your Trade Business Into the Google Map Pack',
    excerpt: "The Map Pack shows three businesses at the top of every local search — and that's where most of the calls go. Here's what gets a tradesperson into those three spots.",
    date: '2027-01-08',
    readTime: '5 min read',
    services: ['local-seo', 'gbp'],
  },
];

const Blog = () => {
  const [activeService, setActiveService] = useState('all');

  const filteredPosts = useMemo(() => {
    const list = activeService === 'all'
      ? posts
      : posts.filter((post) => post.services && post.services.includes(activeService));
    return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [activeService]);

  return (
    <>
      <SEO schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://seo-kings.co.uk/blog' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': 'https://seo-kings.co.uk/blog',
            name: 'SEO Kings Blog — Local SEO & Web Design Tips',
            description: 'Tips on local SEO, web design, and getting your Bath & North East Somerset business found on Google.',
            url: 'https://seo-kings.co.uk/blog',
            isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
            publisher: { '@id': 'https://seo-kings.co.uk/#organization' },
          },
        ]} />

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

      {/* Service filters */}
      <section className="py-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-3">Filter by service</p>
          <div className="flex flex-wrap gap-2">
            {BLOG_SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveService(service.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeService === service.id
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredPosts.map((post) => (
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
