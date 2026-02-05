'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const blogPosts = {
  'beautiful-websites-that-rank': {
    slug: 'beautiful-websites-that-rank',
    title: 'How We Build Beautiful Websites That Rank Well on Google',
    description: 'We build websites that look great, load fast, and score 95+ on Lighthouse — so they rank better on Google and convert more customers.',
    date: '2026-02-05',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'website design Bath, web design BANES, Lighthouse performance, SEO websites, fast websites',
    sections: [
      {
        heading: 'Beautiful design and strong rankings — not either/or',
        paragraphs: [
          'A lot of businesses assume they have to choose: either a website that looks good or one that ranks on Google. We don’t think that way. Every site we build is designed to be both: clear, modern, and on-brand, and built from the ground up so Google can crawl it, understand it, and rank it.',
          'That means clean code, fast loading, proper structure, and content that matches what people search for. It also means a layout and visuals that make visitors want to stay, read, and get in touch. When you get both right, you get more traffic and more conversions.',
        ],
      },
      {
        heading: 'Built for speed and performance',
        paragraphs: [
          'Slow sites hurt rankings and lose customers. We build every website with performance in mind from day one: optimised images, minimal bloat, and a stack that loads quickly on mobile and desktop. We aim for Lighthouse performance scores of 95 and above so your site is fast, efficient, and favoured by both users and Google.',
          'That doesn’t mean boring or plain. It means we choose the right tech, assets, and structure so your site looks great without sacrificing speed. Fast, beautiful, and rankable.',
        ],
      },
      {
        heading: 'Optimised for Google from the start',
        paragraphs: [
          'Every page we build is set up for search: clear titles and meta descriptions, sensible headings, semantic HTML, and content that answers the questions your customers are typing into Google. We don’t bolt SEO on afterwards — it’s part of how we design and build.',
          'We also make sure your site works well on every device, is easy for Google to crawl, and has the right technical foundations (canonicals, schema, clean URLs). So when we say “websites that rank well”, we mean they’re built to rank, not just to look good.',
        ],
      },
      {
        heading: 'Lighthouse scores of 95+',
        paragraphs: [
          'We use Google’s Lighthouse to measure performance, accessibility, best practices, and SEO. Our target is 95 and above across the board. That means your site loads quickly, works for people with different needs, follows modern best practices, and is set up for search.',
          'Hitting those scores isn’t luck — it’s how we build. Right from the first design and the first line of code, we keep performance and SEO in mind so your site doesn’t just look professional; it performs like it.',
        ],
      },
      {
        heading: 'What that means for your business',
        paragraphs: [
          'A beautiful, fast, well-optimised website does three things: it ranks better for the searches that matter in Bath and BANES, it keeps visitors on the page instead of bouncing, and it makes it easy for them to call or fill in a form. That’s how you turn “looking good” into more enquiries and more jobs.',
          'If you want a site that looks the part and ranks the part — with Lighthouse scores of 95+ to back it up — we’d be happy to talk. Get in touch for a free audit or a no-obligation chat about your next website.',
        ],
      },
    ],
  },
  'what-is-local-seo-bath': {
    slug: 'what-is-local-seo-bath',
    title: 'What Is Local SEO and Why It Matters for Bath & BANES Businesses',
    description: 'Local SEO gets your business in front of people searching "near me" and in Google\'s map pack. Here\'s how it works and why it matters for Bath and BANES.',
    date: '2026-02-05',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'local SEO Bath, local SEO BANES, what is local SEO, map pack, near me',
    sections: [
      {
        heading: 'What is local SEO?',
        paragraphs: [
          'Local SEO is the work that helps your business show up when people search for what you do in a specific place — like "plumber Bath" or "electrician near me". It focuses on the results that appear with a map: the local map pack (the three businesses that show with a map on Google) and local listings. For tradespeople, builders, and service businesses in Bath, Keynsham, Midsomer Norton, and across BANES, that’s often where the clicks and calls come from.',
        ],
      },
      {
        heading: 'Why the map pack matters',
        paragraphs: [
          'When someone searches for a plumber, roofer, or cleaner in Bath, Google often shows a map with three local businesses at the top. Getting into that map pack means more visibility, more clicks, and more enquiries. Local SEO is what gets you there: a well-optimised Google Business Profile, a website that supports your location and services, and consistent information about your business across the web.',
        ],
      },
      {
        heading: '"Near me" and local intent',
        paragraphs: [
          'A lot of local searches don’t even say the town name — people search "plumber near me" or "emergency electrician near me". Google uses their location to show nearby businesses. If your Google Business Profile and website are set up correctly for your area, you can show up for those searches. That’s why getting your location, service areas, and categories right is so important.',
        ],
      },
      {
        heading: 'Why it matters for Bath & BANES',
        paragraphs: [
          'Bath and the wider BANES area have strong local search demand. People look for trades and services in Bath, Keynsham, Radstock, Peasedown St John, and the villages. Local SEO helps you capture that demand instead of losing it to competitors. If you’re not in the map pack or not showing for "near me" searches, you’re missing calls and jobs. A clear local SEO strategy — GBP, website, and citations — puts you in the game.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'Start with your Google Business Profile: make sure it’s claimed, complete, and accurate. Then look at your website: does it clearly state where you serve and what you do? From there, consistency across directories and a plan to get more Google reviews will strengthen your local visibility. If you’d like a free audit of your current setup, we’re happy to take a look and show you where the opportunities are.',
        ],
      },
    ],
  },
  'get-more-google-reviews-bath': {
    slug: 'get-more-google-reviews-bath',
    title: 'How to Get More Google Reviews (Without Breaking the Rules)',
    description: 'Practical ways to ask for Google reviews, when to ask, and how to respond — so you build trust and stay within Google\'s guidelines.',
    date: '2026-02-05',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'Google reviews Bath, get more reviews, review strategy, GBP reviews',
    sections: [
      {
        heading: 'Why Google reviews matter for local visibility',
        paragraphs: [
          'Google reviews influence where you appear in the map pack and how many people click through to your business. They also build trust: people read reviews before calling or filling in a form. For tradespeople and service businesses in Bath and BANES, a steady flow of genuine reviews can make a real difference to enquiries and jobs.',
        ],
      },
      {
        heading: 'Ask at the right time',
        paragraphs: [
          'The best time to ask for a review is when the customer is happy — right after a completed job, a successful repair, or a positive follow-up. Don’t wait weeks. Send a quick message or mention it in person while the experience is fresh. Make it easy: give them a direct link to your Google Business Profile review form so they don’t have to search for it.',
        ],
      },
      {
        heading: 'Make it easy with a direct link',
        paragraphs: [
          'Google provides a short link that takes customers straight to the review form for your business. Add it to your email signature, your job-completion messages, or a simple "Leave us a review" page on your website. The fewer steps between "I’ll leave a review" and actually leaving one, the more reviews you’ll get.',
        ],
      },
      {
        heading: 'Respond to every review',
        paragraphs: [
          'Reply to both positive and negative reviews. Thank people for kind words; it shows you care and encourages others to leave feedback. For negative reviews, respond calmly and professionally — offer to put things right where you can. Google and potential customers notice when a business engages with reviews.',
        ],
      },
      {
        heading: 'What not to do',
        paragraphs: [
          'Don’t offer incentives in exchange for reviews — Google’s guidelines prohibit it and it can lead to penalties. Don’t ask only happy customers to review while pressuring unhappy ones to stay quiet. Don’t buy fake reviews or get friends to leave reviews if they haven’t used your business. Stick to asking real customers, at the right time, with a direct link. It’s the right way and the sustainable way.',
        ],
      },
    ],
  },
  'local-seo-bath': {
    slug: 'local-seo-bath',
    title: 'Local SEO in Bath: How to Rank in the Map Pack',
    description: 'What it takes to show up in the local map results for Bath and BANES: Google Business Profile, website, and consistency.',
    date: '2026-02-05',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'local SEO Bath, SEO Bath, rank Bath, map pack Bath',
    sections: [
      {
        heading: 'What is the map pack?',
        paragraphs: [
          'When someone searches for a service in Bath — "plumber Bath", "electrician Bath", "roofer near me" — Google often shows a map with three local businesses at the top of the results. That’s the local map pack. Getting into those three spots means more visibility, more clicks to your website or "Call" button, and more enquiries. Local SEO is how you get there.',
        ],
      },
      {
        heading: 'Optimise your Google Business Profile',
        paragraphs: [
          'Your Google Business Profile is central to map pack rankings. Make sure it’s claimed, verified, and fully filled out: correct business name, address, phone, website, opening hours, and service area. Choose the right primary and secondary categories (e.g. Plumber, Electrician). Write a clear business description that includes your services and areas (Bath, Keynsham, BANES). Add photos regularly and use Google Posts to share updates and offers. The more complete and active your profile, the better Google can match you to local searches.',
        ],
      },
      {
        heading: 'A website that supports local search',
        paragraphs: [
          'Your website should clearly state where you work and what you do. Have a dedicated area page or section for Bath and the towns you serve. Use location and service keywords naturally in your titles, headings, and content. Make sure your site is fast, mobile-friendly, and easy for Google to crawl. NAP (name, address, phone) on your site should match your GBP exactly. A strong website reinforces your profile and helps you rank for more local searches.',
        ],
      },
      {
        heading: 'Consistency and citations',
        paragraphs: [
          'Google checks other sites (directories, trade bodies, social profiles) to confirm your business details. Inconsistent names, addresses, or phone numbers can hurt your local rankings. Keep your NAP the same everywhere. If you find old or wrong listings, correct them or get them removed. Consistency builds trust and helps Google show your business for the right searches.',
        ],
      },
      {
        heading: 'Reviews and ongoing effort',
        paragraphs: [
          'Reviews affect both trust and rankings. Encourage happy customers to leave Google reviews and respond to every one. Keep your GBP updated with posts, photos, and accurate info. Local SEO in Bath is competitive; the businesses that stay on top are the ones that keep their profile and website in good shape over time. If you want a clear picture of where you stand and what to do next, a free local SEO audit can help.',
        ],
      },
    ],
  },
  'seo-for-plumbers-bath': {
    slug: 'seo-for-plumbers-bath',
    title: 'SEO for Plumbers in Bath & BANES: Get More Plumbing Jobs from Google',
    description: 'How plumbers in Bath and the surrounding area can get found for "plumber near me", boiler repairs, and emergency calls.',
    date: '2026-02-05',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'SEO for plumbers Bath, plumber SEO, plumber Google, plumber BANES',
    sections: [
      {
        heading: 'Why plumbers need to show up locally',
        paragraphs: [
          'Most people search for a plumber when they have a problem — a leak, a broken boiler, a blocked drain. They search "plumber Bath", "emergency plumber near me", or "boiler repair Keynsham". If your business doesn’t appear in the map pack or at the top of local results, you miss those jobs. Local SEO gets your name in front of people at the moment they’re looking.',
        ],
      },
      {
        heading: 'Google Business Profile for plumbers',
        paragraphs: [
          'Claim and fully optimise your Google Business Profile. Use the primary category "Plumber" and add secondary categories like "Plumbing supply store" or "Central heating engineer" if they fit. Set your service area to Bath, BANES, and the towns you cover. In your description, mention the services you offer — boiler repairs, emergency plumbing, bathroom installations, etc. — and the areas you serve. Add photos of your work, vans, and team. Post regularly with offers, tips, or seasonal reminders (e.g. boiler checks before winter).',
        ],
      },
      {
        heading: 'Website content that matches searches',
        paragraphs: [
          'Your website should answer what people search for. Create clear service pages for boiler repair, emergency plumbing, bathroom fitting, and any other main services. Include the areas you cover — Bath, Keynsham, Midsomer Norton, Radstock, and so on — so Google and visitors know where you work. Make your phone number and "Call" button easy to find, especially on mobile. A fast, mobile-friendly site with the right content helps you rank and converts more visitors into calls.',
        ],
      },
      {
        heading: 'Reviews and trust',
        paragraphs: [
          'Plumbers rely on trust. Google reviews help you rank and help customers choose you. Ask satisfied customers to leave a review and give them a direct link to your Google review form. Respond to every review, good or bad. Over time, a solid number of genuine reviews will support your visibility and credibility.',
        ],
      },
      {
        heading: 'Next steps for Bath & BANES plumbers',
        paragraphs: [
          'Start with your GBP: is it complete, accurate, and active? Then check your website: does it clearly list your services and areas? Keep your details consistent everywhere. If you want to see how you compare and what to improve, we offer a free local SEO audit for plumbers and other trades in Bath and BANES. Get in touch and we’ll take a look.',
        ],
      },
    ],
  },
  'free-seo-audit-what-we-check': {
    slug: 'free-seo-audit-what-we-check',
    title: 'What We Actually Check in Your Free Local SEO Audit',
    description: 'A clear breakdown of what we look at in your free audit: Google Business Profile, website, citations, and how we turn that into a plan.',
    date: '2026-02-05',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'free SEO audit Bath, SEO audit BANES, what is an SEO audit, local SEO audit',
    sections: [
      {
        heading: 'What is a local SEO audit?',
        paragraphs: [
          'A local SEO audit is a review of how your business appears in local search — on Google Maps, in the map pack, and on your website. We look at what’s working, what’s missing, and what’s holding you back. The goal is to give you a clear picture and a practical plan, not a pile of jargon.',
        ],
      },
      {
        heading: 'Your Google Business Profile',
        paragraphs: [
          'We check whether your GBP is claimed and verified, and whether it’s fully filled out: business name, address, phone, website, hours, and service area. We look at your categories (primary and secondary), your business description, and whether it matches what you do and where you serve. We also check how active you are — photos, posts, Q&A — because an up-to-date profile tends to perform better.',
        ],
      },
      {
        heading: 'Your website',
        paragraphs: [
          'We look at whether your site clearly states your location and services, and whether it’s set up for search. That includes titles and meta descriptions, headings, and content that answers the kinds of questions your customers search for. We check technical basics: speed, mobile-friendliness, and whether your name, address, and phone number on the site match your GBP exactly.',
        ],
      },
      {
        heading: 'Citations and consistency',
        paragraphs: [
          'We see where your business is listed around the web — directories, trade sites, social profiles — and whether your details are consistent. Wrong or outdated information can confuse Google and hurt your local rankings. We note any inconsistencies and suggest what to correct or remove.',
        ],
      },
      {
        heading: 'What you get from the audit',
        paragraphs: [
          'You get a straightforward report that explains what we found and what to do next. No fluff, no mystery. We’ll tell you the quick wins and the longer-term steps so you can prioritise. If you want help implementing the plan, we can talk about that too. The audit is free and no-obligation — it’s a way to see where you stand and decide what you want to do next. Get in touch to request yours.',
        ],
      },
    ],
  },
};

const BlogPost = ({ params: staticParams }) => {
  const dynamicParams = useParams();
  const slug = staticParams?.slug ?? dynamicParams?.slug;
  const post = slug ? blogPosts[slug] : null;

  const router = useRouter();
  useEffect(() => {
    if (!post) router.replace('/blog');
  }, [post, router]);
  if (!post) return null;

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        keywords={post.keywords || 'local SEO Bath, web design BANES, SEO BANES'}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title },
        ]}
        article={{
          type: 'Article',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: post.author,
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
            Blog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            {post.readTime && <span>· {post.readTime}</span>}
            {post.author && <span>· {post.author}</span>}
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-6 sm:p-8 bg-dark-card border border-white/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to improve your local visibility?</h3>
            <p className="text-gray-400 mb-6">
              We offer a free local SEO audit and build websites that rank. Get in touch for a no-obligation chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Get a free audit
              </Link>
              <Link
                href="/local-seo"
                className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/5 transition-colors text-center"
              >
                View our local SEO services
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
};

export default BlogPost;
