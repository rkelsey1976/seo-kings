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
    keywords: 'website design Bath, web design Bath and North East Somerset, Lighthouse performance, SEO websites, fast websites',
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
          'A beautiful, fast, well-optimised website does three things: it ranks better for the searches that matter in Bath and North East Somerset, it keeps visitors on the page instead of bouncing, and it makes it easy for them to call or fill in a form. That’s how you turn “looking good” into more enquiries and more jobs.',
          'If you want a site that looks the part and ranks the part — with Lighthouse scores of 95+ to back it up — we’d be happy to talk. Get in touch for a free audit or a no-obligation chat about your next website.',
        ],
      },
    ],
  },
  'what-is-local-seo-bath': {
    slug: 'what-is-local-seo-bath',
    title: 'What Is Local SEO and Why It Matters for Bath & North East Somerset Businesses',
    description: 'Local SEO gets your business in front of people searching "near me" and in Google\'s map pack. Here\'s how it works and why it matters for Bath and North East Somerset.',
    date: '2026-02-05',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'local SEO Bath, local SEO Bath and North East Somerset, what is local SEO, map pack, near me',
    sections: [
      {
        heading: 'What is local SEO?',
        paragraphs: [
          'Local SEO is the work that helps your business show up when people search for what you do in a specific place — like "plumber Bath" or "electrician near me". It focuses on the results that appear with a map: the local map pack (the three businesses that show with a map on Google) and local listings. For tradespeople, builders, and service businesses in Bath, Keynsham, Midsomer Norton, and across Bath and North East Somerset, that’s often where the clicks and calls come from.',
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
        heading: 'Why it matters for Bath & North East Somerset',
        paragraphs: [
          'Bath and the wider Bath and North East Somerset area have strong local search demand. People look for trades and services in Bath, Keynsham, Radstock, Peasedown St John, and the villages. Local SEO helps you capture that demand instead of losing it to competitors. If you’re not in the map pack or not showing for "near me" searches, you’re missing calls and jobs. A clear local SEO strategy — GBP, website, and citations — puts you in the game.',
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
          'Google reviews influence where you appear in the map pack and how many people click through to your business. They also build trust: people read reviews before calling or filling in a form. For tradespeople and service businesses in Bath and North East Somerset, a steady flow of genuine reviews can make a real difference to enquiries and jobs.',
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
    description: 'What it takes to show up in the local map results for Bath and North East Somerset: Google Business Profile, website, and consistency.',
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
          'Your Google Business Profile is central to map pack rankings. Make sure it’s claimed, verified, and fully filled out: correct business name, address, phone, website, opening hours, and service area. Choose the right primary and secondary categories (e.g. Plumber, Electrician). Write a clear business description that includes your services and areas (Bath, Keynsham, North East Somerset). Add photos regularly and use Google Posts to share updates and offers. The more complete and active your profile, the better Google can match you to local searches.',
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
    title: 'SEO for Plumbers in Bath & North East Somerset: Get More Plumbing Jobs from Google',
    description: 'How plumbers in Bath and the surrounding area can get found for "plumber near me", boiler repairs, and emergency calls.',
    date: '2026-02-05',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'SEO for plumbers Bath, plumber SEO, plumber Google, plumber Bath and North East Somerset',
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
          'Claim and fully optimise your Google Business Profile. Use the primary category "Plumber" and add secondary categories like "Plumbing supply store" or "Central heating engineer" if they fit. Set your service area to Bath, North East Somerset, and the towns you cover. In your description, mention the services you offer — boiler repairs, emergency plumbing, bathroom installations, etc. — and the areas you serve. Add photos of your work, vans, and team. Post regularly with offers, tips, or seasonal reminders (e.g. boiler checks before winter).',
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
        heading: 'Next steps for Bath & North East Somerset plumbers',
        paragraphs: [
          'Start with your GBP: is it complete, accurate, and active? Then check your website: does it clearly list your services and areas? Keep your details consistent everywhere. If you want to see how you compare and what to improve, we offer a free local SEO audit for plumbers and other trades in Bath and North East Somerset. Get in touch and we’ll take a look.',
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
    keywords: 'free SEO audit Bath, SEO audit Bath and North East Somerset, what is an SEO audit, local SEO audit',
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
  'website-design-midsomer-norton-peachy-cleans': {
    slug: 'website-design-midsomer-norton-peachy-cleans',
    title: 'Website We Built for Peachy Cleans: Web Design in Midsomer Norton That Gets Found on Google',
    description: 'How we built a fast, simple website for Peachy Cleans in Midsomer Norton — and got them to number one on Google and the map pack for local cleaning searches. Web design for local businesses in the Somer Valley.',
    date: '2026-02-08',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'website design Midsomer Norton, web design Midsomer Norton, website for business Midsomer Norton, local business website Somer Valley, Peachy Cleans website',
    sections: [
      {
        heading: "Why we're writing about website design in Midsomer Norton",
        paragraphs: [
          'Small businesses in Midsomer Norton, Radstock, Paulton, and the Somer Valley often need a simple, professional website that loads fast and helps them show up when local customers search on Google. We built one for Peachy Cleans — a cleaning business in Midsomer Norton — and combined it with local SEO and Google Business Profile work. They now appear number one for "cleaner Midsomer Norton" on Google and near the top of the map pack. This post is about what we built and why it works for local businesses looking for website design in Midsomer Norton.',
        ],
      },
      {
        heading: 'What we built for Peachy Cleans',
        paragraphs: [
          "Peachy Cleans needed a clear online presence: a website that showed what they do, where they work, and how to get in touch. We built a single-page site at peachycleans.info that loads quickly on phones and desktops. The page lists all their services — regular home cleaning, one-off deep cleans, Airbnb changeovers, end of tenancy, commercial and builders cleans, elderly care cleaning — with big, obvious buttons to call or message for a free quote. We added photos of clean homes and kept everything on one screen so visitors aren't confused.",
          "For a local business in Midsomer Norton, that kind of website does two things: it gives potential customers a clear, trustworthy place to find you, and it gives Google clear signals about what you do and where you serve. That's the basis for ranking well in Midsomer Norton and the surrounding areas.",
        ],
      },
      {
        heading: 'Fast, mobile-friendly web design matters in Midsomer Norton',
        paragraphs: [
          "A lot of local searches happen on phones. If your website is slow or hard to use on mobile, people leave — and Google ranks slower, harder-to-use sites lower. We built the Peachy Cleans site to load fast and work well on every device. That helps both users and search: people get the information they need quickly, and Google sees a site that performs well. When you're looking for website design in Midsomer Norton, speed and mobile-friendliness should be part of the brief, not an afterthought.",
        ],
      },
      {
        heading: 'Making the website and Google listing work together',
        paragraphs: [
          "A website on its own isn't enough for local visibility. We made sure the Peachy Cleans site and their Google Business Profile supported each other. We added clear details on where they work — Midsomer Norton, Radstock, Paulton, Peasedown St John, Bath, Frome, Wells, and nearby Somerset areas — and kept the site and GBP in sync. We helped with fresh photos on Google, regular updates, and quick replies to reviews. When someone searches \"cleaner Midsomer Norton\", Peachy Cleans now shows up number one in the main results and near the top of the map pack. People searching on their phone see them straight away in Maps, which means more calls and bookings without paying for ads.",
        ],
      },
      {
        heading: 'What that means for your business',
        paragraphs: [
          "If you're a tradesperson, cleaner, or local service in Midsomer Norton or the Somer Valley and you don't have a website — or your current site is slow, outdated, or not set up for local search — a simple, fast site plus a well-optimised Google listing can make a real difference. You don't need a huge, expensive build; you need something clear, quick, and built with local search in mind.",
          "We've written more about the full project on our Client Spotlight page, including what we built, how it helps them show up on Google and Maps, and the results. You can also read the short case study. If you're interested in website design in Midsomer Norton or the wider Bath and North East Somerset area, we'd be happy to talk. We offer a free check: we look at your current website and Google listing and show you simple ways to get higher in search and the map pack. No pressure, no long contracts.",
        ],
      },
    ],
    ctaLinks: [
      { href: '/spotlight/peachy-cleans', label: 'View full Client Spotlight' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free check' },
    ],
  },
  'new-decorating-website-bath': {
    slug: 'new-decorating-website-bath',
    title: 'New Decorating: From No Web Presence to Top 8 on Google Maps in a Week',
    description: 'Jay at New Decorating had no web presence. We built his website and optimised his Google Business Profile — within a week he was ranking for long-tail keywords and in the top 8 on Google Maps. Painter & decorator Bath & North East Somerset.',
    date: '2026-02-19',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'New Decorating, painter decorator Bath, website design Bath, Google Business Profile Bath, painter and decorator Bath and North East Somerset, new-decorating.co.uk, on Google Maps in a week',
    sections: [
      {
        heading: 'What we did for Jay at New Decorating',
        paragraphs: [
          'Last week we launched a new website for Jay New — New Decorating, a painter and decorator across Bath, Keynsham, Midsomer Norton, Radstock and Bath and North East Somerset. We built the site at new-decorating.co.uk and optimised his Google Business Profile so the two work together. He’s already showing up in Google Maps and ranking well for long-tail keywords. This post is a quick look at what we delivered and why it’s working.',
          'Jay has over 25 years’ experience and wanted a clear online presence: a fast site that shows his services (interior and exterior painting, wallpaper, feature walls), his areas, and how to get a free quote. He also needed his Google listing set up and optimised so local customers can find him when they search for a painter and decorator in Bath or the surrounding areas.',
        ],
      },
      {
        heading: 'The new website',
        paragraphs: [
          'The new site is clean, mobile-friendly and built for local search. It highlights his services — interior painting, exterior painting, wallpaper and feature walls — with clear calls to action to get a quote or view his work. We included his service areas (Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Frome and surrounding villages), a gallery, FAQs, and his Google reviews so visitors can see what his customers say.',
          'We built it to load fast and work on every device. For a painter and decorator in Bath, that matters: a lot of “painter decorator near me” and “painter Bath” searches happen on phones. A fast, clear site keeps people on the page and helps Google rank you better.',
        ],
      },
      {
        heading: 'Google Business Profile optimisation',
        paragraphs: [
          'A website on its own isn’t enough for local visibility. We claimed and optimised Jay’s Google Business Profile so it matches the site: same areas, same services, same message. We made sure his category, description, hours and service area are correct and that his profile looks professional and trustworthy.',
          'When someone searches “painter and decorator Bath” or “painter decorator Keynsham”, Google can now show New Decorating in the map pack and in Maps. The site and the GBP support each other — that’s how you get found locally without relying on ads.',
        ],
      },
      {
        heading: 'Within a week: long-tail rankings and top 8 on Google Maps',
        paragraphs: [
          'We only launched a week ago, but the combination of a new, optimised site and a properly set-up Google Business Profile paid off quickly. New Decorating is now showing in the top 8 on Google Maps when people search in Bath and the surrounding areas, and the site is ranking for long-tail keywords — the kind of specific searches that turn into real enquiries.',
          'That’s exactly what we aim for: a fast site and a GBP that work together so you get visible quickly. We don’t promise overnight number-one for the most competitive terms, but we do get trades visible for the searches that matter in their area.',
        ],
      },
      {
        heading: 'What that means for your trade',
        paragraphs: [
          'If you’re a painter and decorator, or any trade in Bath and North East Somerset, and you need a new website or your Google listing isn’t working for you — we can help. We specialise in trade websites and getting local trades found on Google. We’ll build a site that looks professional and loads fast, optimise your GBP, and get the two working together so you show up in Maps and in search.',
          'Get in touch for a free audit. We’ll look at your current site and Google listing and tell you what we’d do next. No obligation.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/web-design', label: 'Website designer Bath & North East Somerset' },
      { href: '/google-business-profile', label: 'Google Business Profile' },
      { href: '/contact', label: 'Get a free audit' },
    ],
  },
  'no-web-presence-to-google-maps-week': {
    slug: 'no-web-presence-to-google-maps-week',
    title: 'From No Web Presence to Top 8 on Google Maps in a Week: How We Did It for New Decorating',
    description: 'New Decorating had no website and no Google listing. We built both — within a week Jay was ranking for long-tail keywords and in the top 8 on Google Maps. Here\'s how our website and GBP services work together.',
    date: '2026-02-20',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'website design Bath, Google Business Profile Bath, on Google Maps in a week, New Decorating, painter decorator Bath, local SEO Bath',
    sections: [
      {
        heading: 'The challenge: no web presence',
        paragraphs: [
          'Jay at New Decorating — a painter and decorator across Bath, Keynsham, Midsomer Norton, Radstock and Bath and North East Somerset — had no website and no Google Business Profile. When potential customers searched for a painter and decorator in Bath or the surrounding areas, he simply didn\'t show up. We built him a fast, mobile-friendly website at new-decorating.co.uk and set up and optimised his Google Business Profile so the two work together. Within a week he was ranking for some of his long-tail keywords and listing in the top 8 on Google Maps.',
        ],
      },
      {
        heading: 'What our website and GBP services include',
        paragraphs: [
          'Our website design gives you a clear, professional site that loads fast and is built for local search: your services, your areas, clear calls to action, and content that matches what people search for. We build from £399 — one-page or multi-page — and the one-page package includes GBP optimisation for one service in one location.',
          'Our Google Business Profile service means we claim (or verify) your listing, set the right category and services, write an optimised description, and make sure your hours, area and contact details are correct. We don\'t sell ongoing GBP on its own — it\'s included in our website packages and in our Local SEO packages. For New Decorating we did a one-off GBP optimisation as part of getting the site live.',
        ],
      },
      {
        heading: 'Why it worked so fast',
        paragraphs: [
          'When you start from zero, Google has nothing to show. As soon as we had a live website and a complete, optimised Google Business Profile, Google could start listing New Decorating for relevant searches. Long-tail keywords — like "painter and decorator Keynsham" or "interior painting Bath" — are less competitive than the single word "painter", so rankings can appear quickly. The map pack and Google Maps favour businesses with a complete profile and a website that backs it up. Within a week, New Decorating was in the top 8 on Maps and ranking for several long-tail terms.',
        ],
      },
      {
        heading: 'What that means for your business',
        paragraphs: [
          'If you\'re a trade or local service in Bath and North East Somerset and you have no web presence — or your site and Google listing are out of date — the same approach can work for you. A new website plus a properly set-up Google Business Profile gets you visible on Google and in Maps. We don\'t promise number one overnight for the most competitive terms, but we do get trades visible for the searches that matter, often within a week when you start from zero.',
          'Get in touch for a free audit. We\'ll look at your current setup and show you what we\'d do next. No obligation.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/blog/new-decorating-website-bath', label: 'Read the full New Decorating post' },
      { href: '/web-design', label: 'Website design' },
      { href: '/google-business-profile', label: 'Google Business Profile' },
      { href: '/contact', label: 'Get a free audit' },
    ],
  },
  'website-design-bath': {
    slug: 'website-design-bath',
    title: 'Website Design in Bath: What We Build for Trades and Local Businesses',
    description: 'Fast, mobile-friendly websites for Bath businesses — from one-page sites to full multi-page. Built for local search so you get found on Google and in the map pack.',
    date: '2026-02-08',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'website design Bath, web design Bath, website for business Bath, local business website Bath and North East Somerset, Bath website design',
    sections: [
      {
        heading: 'Why website design in Bath matters',
        paragraphs: [
          'Bath has strong demand for local services — plumbers, electricians, builders, cleaners, and trades. When people search "plumber Bath" or "electrician near me", they often click the map pack or the first few results. A fast, clear website plus a well-optimised Google Business Profile helps you show up there. This post is about what we build for Bath businesses and why it works for local search.',
        ],
      },
      {
        heading: 'What we build for Bath businesses',
        paragraphs: [
          'We build websites that load quickly on phones and desktops, list your services and areas clearly, and make it easy for visitors to call or message. From a simple one-page site from £399 to full multi-page sites — every site we build is set up for local search from day one. That means clear location signals, mobile-friendly design, and structure that Google can crawl and rank.',
          'For Bath businesses, that combination — a professional site plus local SEO and GBP work — is what gets you found when local customers search. You don\'t need a huge, expensive build; you need something clear, fast, and built with Bath and North East Somerset in mind.',
        ],
      },
      {
        heading: 'Fast and mobile-friendly',
        paragraphs: [
          'A lot of local searches happen on phones. If your site is slow or hard to use on mobile, people leave — and Google ranks slower sites lower. We build every Bath website to perform well on every device so you keep visitors and rank better.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or local business in Bath and you need a new website — or your current one is slow, outdated, or not set up for local search — we\'d be happy to talk. We offer a free check: we look at your current site and Google listing and show you simple ways to get higher in search and the map pack. See our web design packages or get in touch for a free quote.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/web-design', label: 'Website designer in Bath & North East Somerset' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'website-designer-bath-banes': {
    slug: 'website-designer-bath-banes',
    title: 'Website Designer Bath & North East Somerset: What to Look For (and Why We’re Different)',
    description: 'Looking for a website designer in Bath or North East Somerset? We specialise in trade websites and getting local trades found on Google. Fast sites, mobile-friendly, SEO built in — plumbers, electricians, builders.',
    date: '2026-02-12',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'website designer, website designer Bath, website designer Bath and North East Somerset, web design Bath, professional website designer, website designer for trades, hire website designer',
    sections: [
      {
        heading: 'Why “website designer” isn’t just about looks',
        paragraphs: [
          'A lot of people search for a “website designer” in Bath or North East Somerset when they really need three things: a site that looks professional, one that loads fast and works on phones, and one that helps them get found on Google. The best website designer for a local business does all three — so you don’t just get a pretty page; you get a site that brings in enquiries.',
          'We specialise in trade websites and getting local trades found on Google. We’re a website designer and local SEO agency in Bath: every site we build is mobile-first, fast, and set up for local search from day one. Plumbers, electricians, builders — we don’t hand over a site and walk away; we build something that works for Google and for your customers.',
        ],
      },
      {
        heading: 'What to look for in a website designer in Bath & North East Somerset',
        paragraphs: [
          'First, speed. Slow sites lose visitors and rank lower on Google. Ask whether your website designer builds for performance — optimised images, clean code, fast hosting. We aim for Lighthouse scores of 95+ so your site loads in seconds.',
          'Second, mobile. Most local searches happen on phones. Your site needs to look and work great on every device. A good website designer will build mobile-first, not as an afterthought.',
          'Third, local SEO. If you’re a plumber, electrician, or trade in Bath, Keynsham, or Midsomer Norton, your site should help you show up when people search “plumber Bath” or “electrician near me”. That means clear location signals, proper structure, and — ideally — a designer who also understands Google Business Profile so your website and your listing work together.',
        ],
      },
      {
        heading: 'Website designer vs DIY: when it’s worth hiring',
        paragraphs: [
          'DIY website builders are cheap, but they often produce slow, generic sites that don’t rank well. A professional website designer in Bath or North East Somerset can give you a custom site that’s fast, on-brand, and built for local search — without you spending time learning builders or fixing technical issues.',
          'We offer one-page sites from £399 and full multi-page sites for growing businesses. Every package includes SEO basics, mobile design, and 12 months’ hosting. So you get a website designer who delivers the lot: design, speed, and findability.',
        ],
      },
      {
        heading: 'How we work as your website designer',
        paragraphs: [
          'We start with a quick chat about your business, your customers, and where you want to show up (Bath, Keynsham, Radstock, Trowbridge, etc.). We then design and build your site, test it on every device, and make sure it’s set up for Google and for your area.',
          'If you already have a Google Business Profile, we can help optimise it so it works with your new site. If you don’t, we can help you claim and set it up. Website and GBP together = more visibility and more enquiries.',
        ],
      },
      {
        heading: 'Get in touch',
        paragraphs: [
          'If you’re looking for a website designer in Bath, Keynsham, Midsomer Norton, Radstock, or anywhere in Bath and North East Somerset — and you want a site that looks great, loads fast, and helps you get found on Google — we’d be happy to talk. We offer a free audit so you can see where you stand and what we’d recommend. No obligation.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/web-design', label: 'Website designer Bath & North East Somerset' },
      { href: '/web-design-packages', label: 'Website designer packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'website-design-keynsham': {
    slug: 'website-design-keynsham',
    title: 'Website Design in Keynsham: What We Build for Local Businesses',
    description: 'Web design for Keynsham and BS31 — fast, mobile-friendly websites for trades and local services. Built for local search so you get found on Google and in the map pack.',
    date: '2026-02-08',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'website design Keynsham, web design Keynsham, website for business Keynsham, local business website BS31, Keynsham website design',
    sections: [
      {
        heading: 'Why website design in Keynsham matters',
        paragraphs: [
          'Keynsham sits between Bath and Bristol, with strong local search demand for trades and services. When people in Keynsham, Saltford, or BS31 search for a plumber, electrician, or builder, they often use Google and the map pack. A fast, clear website plus a well-optimised Google Business Profile helps you show up there. This post is about what we build for Keynsham businesses and why it works for local search.',
        ],
      },
      {
        heading: 'What we build for Keynsham businesses',
        paragraphs: [
          'We build websites that load quickly on phones and desktops, list your services and areas clearly, and make it easy for visitors to call or message. From a simple one-page site from £399 to full multi-page sites — every site we build is set up for local search. That means clear location signals for Keynsham and the surrounding area, mobile-friendly design, and structure that Google can crawl and rank.',
          'For Keynsham and BS31 businesses, that combination — a professional site plus local SEO and GBP work — is what gets you found when local customers search. You don\'t need a huge build; you need something clear, fast, and built with Keynsham and Bath and North East Somerset in mind.',
        ],
      },
      {
        heading: 'Built for local search',
        paragraphs: [
          'We make sure your website and Google Business Profile work together. Clear details on where you serve — Keynsham, Saltford, Bath, and the Bristol edge — help you rank for "electrician Keynsham", "plumber BS31", and similar searches. Fast, mobile-friendly sites keep visitors on the page and send positive signals to Google.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or local business in Keynsham and you need a new website — or your current one is slow or not set up for local search — we\'d be happy to talk. We offer a free check and build websites from £399. See our web design packages or get in touch for a free quote.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/web-design', label: 'Website design services' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'website-design-bitton-keynsham': {
    slug: 'website-design-bitton-keynsham',
    title: 'Website Design in Bitton & the Keynsham Area: What We Build for Local Trades',
    description: 'Website design for Bitton and the Keynsham area (BS30/BS31). Fast, mobile-friendly sites from £399 for plumbers, electricians and trades. We serve Bitton, Keynsham, Saltford, Bath and North East Somerset.',
    date: '2026-02-12',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'website design Bitton, website design Keynsham area, Bitton Keynsham website, BS30 BS31 website',
    sections: [
      {
        heading: 'Why Bitton and the Keynsham area need good websites',
        paragraphs: [
          'Bitton sits between Keynsham and Bristol, with strong local search demand for trades and services. When people in Bitton, Keynsham, or Saltford search for a plumber, electrician, or builder, they use Google and the map pack. A clear, fast website plus a well-optimised Google Business Profile helps you show up there. If you\'re not on page one or in the map pack, you miss the calls.',
        ],
      },
      {
        heading: 'What we build for Bitton and Keynsham area businesses',
        paragraphs: [
          'We build the same for Bitton and the Keynsham area as we do for Keynsham: fast, mobile-friendly websites from £399, with Google Business Profile and local SEO as add-ons. Every site we build is set up for local search — clear location signals for Bitton, Keynsham, Saltford, and the surrounding area, mobile-friendly design, and structure that Google can crawl and rank.',
          'Areas we serve include Bitton, Keynsham, Saltford, Paulton, Bath, Midsomer Norton, Radstock and across Bath and North East Somerset. You don\'t need a huge build; you need something clear, fast, and built with the Keynsham area in mind.',
        ],
      },
      {
        heading: 'Areas we serve near Keynsham',
        paragraphs: [
          'We work with trades and local businesses across the Keynsham area and beyond: Bitton, Keynsham, Saltford, Paulton, Bath, Midsomer Norton, Radstock, Peasedown St John, Chew Magna, Temple Cloud, Clutton and across Bath and North East Somerset. Whether you\'re based in Bitton or Keynsham and serve the Bristol edge or Bath, we build websites and offer GBP and local SEO so you get found when local customers search.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or local business in Bitton or the Keynsham area and you need a new website — or your current one is slow or not set up for local search — we\'d be happy to talk. We offer a free check and build websites from £399. See our Keynsham area page, web design packages or get in touch for a free quote.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/areas/keynsham', label: 'Website design Keynsham' },
      { href: '/areas/bitton-keynsham', label: 'Bitton & Keynsham area' },
      { href: '/web-design', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'get-found-on-google-keynsham': {
    slug: 'get-found-on-google-keynsham',
    title: 'Get Found on Google in Keynsham, Bitton & the Areas We Serve',
    description: 'How trades in Keynsham and the Keynsham area get found on Google. Website from £399, Google Business Profile and local SEO. We serve Keynsham, Bitton, Saltford, Paulton, Bath and North East Somerset.',
    date: '2026-02-12',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'get found on Google Keynsham, Keynsham Google, Bitton Saltford, areas we serve Keynsham',
    sections: [
      {
        heading: 'Where your customers search',
        paragraphs: [
          'When people in Keynsham, Bitton, Saltford, Paulton, or Bath search for a plumber, electrician, or builder, they type "plumber Keynsham", "electrician BS31", or "builder near me" into Google. The businesses that show on page one and in the map pack get most of the clicks and calls. If you\'re not there, you miss them.',
        ],
      },
      {
        heading: 'What "get found" means in practice',
        paragraphs: [
          'Getting found on Google in Keynsham and the areas we serve comes down to three things: a website that loads fast and clearly says where you serve, a complete and optimised Google Business Profile, and the same areas and services everywhere so Google and your customers see a consistent picture. We do all three for Keynsham and Bath and North East Somerset — website design from £399, plus Google Business Profile and local SEO as add-ons.',
        ],
      },
      {
        heading: 'Areas we serve',
        paragraphs: [
          'We work with trades and local businesses across Keynsham, Bitton, Saltford, Paulton, Bath, Midsomer Norton, Radstock, Peasedown St John, Chew Magna, Temple Cloud, Clutton and across Bath and North East Somerset. Wherever your customers search — Keynsham, Bitton, Saltford, or the wider area — we build and optimise so you show up when it matters.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'Not sure how you show up on Google in Keynsham or the Keynsham area? We offer a free check of your website and Google listing. No obligation, no jargon — just a clear view of where you stand and simple next steps. Get in touch for a free check or find out more about our website design and local SEO services.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/areas/keynsham', label: 'Keynsham area' },
      { href: '/local-seo', label: 'Local SEO' },
      { href: '/web-design', label: 'Website design' },
      { href: '/contact', label: 'Free check' },
    ],
  },
  'website-design-radstock': {
    slug: 'website-design-radstock',
    title: 'Website Design in Radstock: What We Build for Somer Valley Businesses',
    description: 'Web design for Radstock and the Somer Valley — fast, mobile-friendly websites for trades and local services. Built for local search so you get found on Google.',
    date: '2026-02-08',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'website design Radstock, web design Radstock, website for business Radstock, Somer Valley website design, Radstock web design',
    sections: [
      {
        heading: 'Why website design in Radstock matters',
        paragraphs: [
          'Radstock and the Somer Valley — Midsomer Norton, Paulton, Peasedown St John — have strong demand for local trades and services. When people search "plumber Radstock" or "electrician Midsomer Norton", they use Google and the map pack. A fast, clear website plus a well-optimised Google Business Profile helps you show up there. This post is about what we build for Radstock and Somer Valley businesses and why it works for local search.',
        ],
      },
      {
        heading: 'What we build for Radstock and Somer Valley businesses',
        paragraphs: [
          'We build websites that load quickly on phones and desktops, list your services and areas clearly, and make it easy for visitors to call or message. From a simple one-page site from £399 to full multi-page sites — every site we build is set up for local search. That means clear location signals for Radstock, Midsomer Norton, Paulton, and the Somer Valley, mobile-friendly design, and structure that Google can crawl and rank.',
          'For Radstock businesses, that combination — a professional site plus local SEO and GBP work — is what gets you found when local customers search. You don\'t need a huge build; you need something clear, fast, and built with the Somer Valley in mind.',
        ],
      },
      {
        heading: 'Built for local search',
        paragraphs: [
          'We make sure your website and Google Business Profile work together. Clear details on where you serve — Radstock, Midsomer Norton, Paulton, Peasedown St John, Bath — help you rank for local searches. Fast, mobile-friendly sites keep visitors on the page and send positive signals to Google.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or local business in Radstock or the Somer Valley and you need a new website — or your current one is slow or not set up for local search — we\'d be happy to talk. We offer a free check and build websites from £399. See our web design packages or get in touch for a free quote.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/web-design', label: 'Website design services' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'website-design-peasedown-st-john': {
    slug: 'website-design-peasedown-st-john',
    title: 'Website Design in Peasedown St John: What We Build for Local Businesses',
    description: 'Web design for Peasedown St John and south of Bath — fast, mobile-friendly websites for trades and local services. Built for local search so you get found on Google.',
    date: '2026-02-21',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'website design Peasedown St John, web design Peasedown St John, website for business Peasedown, local business website BA2, Peasedown website design',
    sections: [
      {
        heading: 'Why website design in Peasedown St John matters',
        paragraphs: [
          'Peasedown St John and the villages south of Bath have strong demand for local trades and services. When people search "plumber Peasedown" or "electrician near me", they use Google and the map pack. A fast, clear website plus a well-optimised Google Business Profile helps you show up there. This post is about what we build for Peasedown St John businesses and why it works for local search.',
        ],
      },
      {
        heading: 'What we build for Peasedown St John businesses',
        paragraphs: [
          'We build websites that load quickly on phones and desktops, list your services and areas clearly, and make it easy for visitors to call or message. From a simple one-page site from £399 to full multi-page sites — every site we build is set up for local search. That means clear location signals for Peasedown St John, Bath, Radstock, Midsomer Norton and the surrounding area, mobile-friendly design, and structure that Google can crawl and rank.',
          'For Peasedown businesses, that combination — a professional site plus local SEO and GBP work — is what gets you found when local customers search. You don\'t need a huge build; you need something clear, fast, and built with Bath and North East Somerset in mind.',
        ],
      },
      {
        heading: 'Built for local search',
        paragraphs: [
          'We make sure your website and Google Business Profile work together. Clear details on where you serve — Peasedown St John, Bath, Radstock, Midsomer Norton, Paulton — help you rank for local searches. Fast, mobile-friendly sites keep visitors on the page and send positive signals to Google.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or local business in Peasedown St John or south of Bath and you need a new website — or your current one is slow or not set up for local search — we\'d be happy to talk. We offer a free check and build websites from £399. See our Peasedown St John area page, web design packages or get in touch for a free quote.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/areas/peasedown-st-john', label: 'Website design Peasedown St John' },
      { href: '/web-design', label: 'Website design services' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'website-design-somer-valley': {
    slug: 'website-design-somer-valley',
    title: 'Website Design for the Somer Valley: Radstock, Midsomer Norton & Paulton',
    description: 'Web design for the Somer Valley — Radstock, Midsomer Norton, Paulton and nearby. Fast, mobile-friendly websites for trades and local businesses. Built for local search so you get found on Google.',
    date: '2026-02-21',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'website design Somer Valley, website design Radstock, website design Midsomer Norton, website design Paulton, web design Somer Valley, Somer Valley website',
    sections: [
      {
        heading: 'Why website design in the Somer Valley matters',
        paragraphs: [
          'The Somer Valley — Radstock, Midsomer Norton, Paulton, and the surrounding villages — has strong demand for local trades and services. When people search "plumber Radstock", "electrician Midsomer Norton", or "builder Paulton", they use Google and the map pack. A fast, clear website plus a well-optimised Google Business Profile helps you show up there. This post is about what we build for Somer Valley businesses and why it works for local search.',
        ],
      },
      {
        heading: 'What we build for Somer Valley businesses',
        paragraphs: [
          'We build websites that load quickly on phones and desktops, list your services and areas clearly, and make it easy for visitors to call or message. From a simple one-page site from £399 to full multi-page sites — every site we build is set up for local search. That means clear location signals for Radstock, Midsomer Norton, Paulton, Peasedown St John, Bath and the Somer Valley, mobile-friendly design, and structure that Google can crawl and rank.',
          'For Somer Valley businesses, that combination — a professional site plus local SEO and GBP work — is what gets you found when local customers search. You don\'t need a huge build; you need something clear, fast, and built with the Somer Valley in mind.',
        ],
      },
      {
        heading: 'Built for local search',
        paragraphs: [
          'We make sure your website and Google Business Profile work together. Clear details on where you serve — Radstock, Midsomer Norton, Paulton, Peasedown St John, Bath — help you rank for local searches. Fast, mobile-friendly sites keep visitors on the page and send positive signals to Google.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or local business in Radstock, Midsomer Norton, Paulton or the Somer Valley and you need a new website — or your current one is slow or not set up for local search — we\'d be happy to talk. We offer a free check and build websites from £399. See our area pages for Radstock, Midsomer Norton and Paulton, web design packages or get in touch for a free quote.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/areas/radstock', label: 'Website design Radstock' },
      { href: '/areas/midsomer-norton', label: 'Website design Midsomer Norton' },
      { href: '/areas/paulton', label: 'Website design Paulton' },
      { href: '/web-design', label: 'Website design services' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'one-page-website-bath-banes': {
    slug: 'one-page-website-bath-banes',
    title: 'One-Page Website for Small Business Bath & North East Somerset: When It Works and What We Build',
    description: 'Affordable one-page website design for Bath and North East Somerset — from £399. When a single-page site works for trades and local businesses, and what we include so it ranks on Google.',
    date: '2026-02-08',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'one-page website Bath, affordable website Bath, website for trades Bath, small business website Bath and North East Somerset, one-page website design',
    sections: [
      {
        heading: 'What is a one-page website?',
        paragraphs: [
          'A one-page website is a single page that contains everything a visitor needs: your services, contact details, area you serve, and a clear way to get in touch. For tradespeople and small businesses in Bath, Keynsham, Midsomer Norton, and across Bath and North East Somerset, it can be the perfect affordable website — fast to load, easy to use on mobile, and built so it can rank on Google and in the map pack.',
        ],
      },
      {
        heading: 'When a one-page website works best',
        paragraphs: [
          'A one-page website works well when you offer a focused set of services, serve a clear area, and want a simple, professional online presence without a big budget. Plumbers, electricians, cleaners, builders, and other local trades often don\'t need dozens of pages — they need a site that looks good, loads fast, and makes it easy for customers to call or message. That\'s what we build from £399.',
        ],
      },
      {
        heading: 'What we include so your one-page site ranks',
        paragraphs: [
          'Every one-page website we build is set up for local search: clear titles and meta, your services and areas in the content, mobile-friendly design, and fast loading. We don\'t use a DIY website builder and leave you to figure out SEO — we build it so it\'s a website that ranks. Combined with a well-optimised Google Business Profile, that\'s how you get found when people search "plumber Bath" or "electrician near me".',
        ],
      },
      {
        heading: 'Affordable website design from £399',
        paragraphs: [
          'Our Starter package is a one-page website from £399 with everything a trade or small business needs: services, contact form, click-to-call, area info, SEO basics, 12 months free hosting, and SSL. It\'s affordable website design for Bath and North East Somerset — no hidden fees, no ongoing costs you didn\'t agree to. If you later need more pages, we can expand it or you can move to a larger package.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or small business in Bath, Keynsham, Midsomer Norton, Radstock, or across Bath and North East Somerset and you want an affordable one-page website that gets found on Google, we\'d be happy to talk. We offer a free check of your current setup and a no-obligation quote. See our web design packages or get in touch for a free quote.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/web-design', label: 'Website design services' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'website-design-trowbridge': {
    slug: 'website-design-trowbridge',
    title: 'Website Design in Trowbridge: What We Build for Wiltshire Businesses',
    description: 'Web design for Trowbridge and Wiltshire — fast, mobile-friendly websites for trades and local businesses. Built for local search so you get found on Google and in the map pack.',
    date: '2026-02-08',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'website design Trowbridge, web design Trowbridge, website for business Trowbridge, Wiltshire website design, Trowbridge web design',
    sections: [
      {
        heading: 'Why website design in Trowbridge matters',
        paragraphs: [
          'Trowbridge is the county town of Wiltshire with strong demand for local trades and services. When people in Trowbridge and the surrounding area search for a plumber, electrician, or builder, they use Google and the map pack. A fast, clear website plus a well-optimised Google Business Profile helps you show up there. This post is about what we build for Trowbridge and Wiltshire businesses and why it works for local search.',
        ],
      },
      {
        heading: 'What we build for Trowbridge businesses',
        paragraphs: [
          'We build websites that load quickly on phones and desktops, list your services and areas clearly, and make it easy for visitors to call or message. From a simple one-page site from £399 to full multi-page sites — every site we build is set up for local search. That means clear location signals for Trowbridge and Wiltshire, mobile-friendly design, and structure that Google can crawl and rank.',
          'For Trowbridge businesses, that combination — a professional site plus local SEO and GBP work — is what gets you found when local customers search. You don\'t need a huge build; you need something clear, fast, and built with Trowbridge and Wiltshire in mind.',
        ],
      },
      {
        heading: 'Built for local search',
        paragraphs: [
          'We make sure your website and Google Business Profile work together. Clear details on where you serve — Trowbridge, Bradford on Avon, Melksham, Westbury, and the wider Wiltshire area — help you rank for local searches. Fast, mobile-friendly sites keep visitors on the page and send positive signals to Google.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or local business in Trowbridge or Wiltshire and you need a new website — or your current one is slow or not set up for local search — we\'d be happy to talk. We offer a free check and build websites from £399. See our web design packages or get in touch for a free quote.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/web-design', label: 'Website design services' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'why-speed-matters-for-seo': {
    slug: 'why-speed-matters-for-seo',
    title: 'Why Speed Matters for SEO: How Fast Websites Rank Better on Google',
    description: 'Page speed is a ranking factor and affects user experience. Here\'s why fast websites rank better on Google and what you can do about it.',
    date: '2026-02-08',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'website speed SEO, page speed ranking, Core Web Vitals, Lighthouse 95, fast website Google, site speed Bath',
    sections: [
      {
        heading: 'Speed is a ranking factor',
        paragraphs: [
          'Google has said for years that page speed matters for search. Faster sites tend to rank better, all else equal, because they give users a better experience. If your site takes five seconds to load and a competitor\'s takes one second, Google has a signal that your page may be less satisfying. For local businesses in Bath, Keynsham, Midsomer Norton, and across Bath and North East Somerset, that can mean the difference between showing up on page one or losing clicks to faster competitors.',
        ],
      },
      {
        heading: 'Core Web Vitals: what Google measures',
        paragraphs: [
          'Google uses Core Web Vitals to judge how your page performs in the real world. Largest Contentful Paint (LCP) measures how quickly the main content appears — ideally under 2.5 seconds. Interaction to Next Paint (INP) reflects how responsive the page feels when users tap or click. Cumulative Layout Shift (CLS) measures visual stability; if things jump around as the page loads, users get frustrated and Google takes note. When we build or audit sites, we target good scores on all three so your site is both fast and stable.',
        ],
      },
      {
        heading: 'Slow sites lose visitors before they convert',
        paragraphs: [
          'Even if Google didn\'t use speed as a ranking signal, slow sites would still hurt you. Research shows that users abandon pages that take too long to load. On mobile — where most local searches happen — patience is even shorter. A slow site means more people leave before they call, fill in a form, or find your address. So speed isn\'t just about SEO; it\'s about turning visitors into customers.',
        ],
      },
      {
        heading: 'Mobile speed matters most for local search',
        paragraphs: [
          'When someone searches "plumber Bath" or "electrician near me" on their phone, they want an answer fast. If your site is slow on mobile, they\'ll tap a competitor or go back to the search results. Google\'s index is mobile-first, so the version of your site that Google primarily uses is the mobile one. If that version is slow or poorly built, you\'re at a disadvantage for local and map-pack visibility. We build every site to perform well on mobile first.',
        ],
      },
      {
        heading: 'How we optimise for performance — Lighthouse scores over 95',
        paragraphs: [
          'We optimise every site we build for performance from day one. That means optimised images (right size, format, lazy loading), minimal JavaScript, clean code, and fast hosting. We use Google\'s Lighthouse to measure performance, accessibility, best practices, and SEO — and we aim for scores of 95 and above across the board. Hitting those scores isn\'t luck; it\'s how we build. Right from the first design and the first line of code, we keep performance in mind so your site loads quickly, works for everyone, and sends the right signals to Google.',
          'That doesn\'t mean boring or plain. It means we choose the right tech and structure so your site looks great without sacrificing speed. Every site we build for Bath, Keynsham, Midsomer Norton, and across Bath and North East Somerset is built to perform — so you get a site that ranks and converts.',
        ],
      },
      {
        heading: 'What you can do: optimise or rebuild',
        paragraphs: [
          'If your current site is slow, you have two paths. First, we can audit it and suggest fixes: image optimisation, caching, trimming bloat, better hosting. Sometimes small changes make a big difference. Second, if the site is old or built on a heavy platform, a rebuild may be the better long-term option. We build fast, lightweight sites from the start so you don\'t have to fight speed issues later. Either way, improving speed helps both rankings and conversions.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you want to know how your site stacks up, we offer a free check: we look at your current website and Google listing and show you where speed (and other factors) could be improved. No obligation. Get in touch for a free audit or a chat about building a fast site that ranks.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/web-design', label: 'Website design' },
      { href: '/contact', label: 'Free speed & SEO check' },
    ],
  },
  'how-we-get-you-number-one-google-maps': {
    slug: 'how-we-get-you-number-one-google-maps',
    title: 'How We Get You to Number One on Google Maps',
    description: 'When people search for a plumber, electrician or cleaner near them, Google shows a map with three businesses at the top. Here’s how we help you get into that top spot — in plain English.',
    date: '2026-02-09',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'number one Google Maps, rank first Google Maps, map pack Bath, local search top spot, get found on Google Maps',
    sections: [
      {
        heading: 'What we mean by “number one on Google Maps”',
        paragraphs: [
          'When someone types “plumber Bath” or “cleaner near me” into Google, they often see a map with three businesses right at the top. That’s the bit we care about. Get into one of those three spots and you get more calls, more clicks and more jobs. Miss it and a lot of that work goes to someone else.',
          'So “number one” for us means: getting your business into that top map section — and ideally in the first position — when people in your area search for what you do. We do this for trades and local businesses in Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge and the surrounding areas.',
        ],
      },
      {
        heading: 'Google is basically asking: “Is this business real, relevant and good?”',
        paragraphs: [
          'Google doesn’t magic those top spots out of nowhere. It’s trying to show people businesses that are real, in the right place, and that other people have had a good experience with. So we make sure your business answers those questions clearly.',
          'That means: your name, address, phone number and website are correct and the same everywhere Google looks. It means your Google Business Profile (your free listing on Google Maps and Search) is filled out properly and kept up to date. And it means your website actually backs up what you do and where you work, so Google can join the dots.',
        ],
      },
      {
        heading: 'Your Google Business Profile has to do the heavy lifting',
        paragraphs: [
          'Your Google Business Profile is the main thing Google uses to decide whether to show you on the map. If it’s incomplete, wrong or rarely updated, you’re starting with a handicap. We get it claimed, verified and filled in properly: the right categories, a clear description of what you do and where you serve, opening hours, photos and a link to your website.',
          'We also help you keep it active. Google likes to see that a business is still going — so we use posts, updates and new photos in a way that makes sense for your business. We don’t give away every trick we use, but the idea is simple: your profile should look like a real, busy, trustworthy business that’s worth showing at the top.',
        ],
      },
      {
        heading: 'Your website has to back you up',
        paragraphs: [
          'Google looks at your website as well. If your site is slow, hard to use on a phone or doesn’t clearly say what you do and where you work, it’s harder to get to number one. We build or fix sites so they load quickly, work well on mobiles and spell out your services and areas in a way both customers and Google understand.',
          'We make sure the details on your site match your Google listing exactly. Conflicting information makes Google less confident about showing you at the top. When your website and your Google profile tell the same story, you’re in a much stronger position.',
        ],
      },
      {
        heading: 'Reviews and reputation matter',
        paragraphs: [
          'Reviews don’t just help customers choose you — they help Google decide who to put at the top. We help you get more genuine Google reviews from real customers and respond to them in a way that looks professional. We don’t buy reviews or do anything that breaks Google’s rules; we focus on asking the right people at the right time and making it easy for them to leave a review.',
          'Over time, a steady flow of good reviews and thoughtful replies sends a clear signal: this business is real, people use it and they’re happy. That’s the kind of signal that supports a top spot on the map.',
        ],
      },
      {
        heading: 'We don’t promise magic — we promise a proper plan',
        paragraphs: [
          'Nobody can guarantee you’ll be number one tomorrow. Google’s algorithm changes, and your competitors are trying too. What we do is put in place the things that actually move the needle: a complete, accurate Google Business Profile, a website that supports it, consistent details everywhere and a sensible approach to reviews and activity.',
          'We’ve done this for local businesses in Bath, North East Somerset and beyond — including getting clients to number one for their main search terms. If you want to see where you stand and what would help you most, we offer a free check of your Google listing and website. No jargon, no hard sell — just a clear picture and next steps in language you can understand.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/contact', label: 'Get a free check' },
      { href: '/local-seo', label: 'How we do local SEO' },
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
        keywords={post.keywords || 'local SEO Bath, web design Bath and North East Somerset, SEO Bath and North East Somerset'}
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
            <h3 className="text-xl font-bold text-white mb-2">
              {post.ctaLinks ? 'See the full story or get your own' : 'Ready to improve your local visibility?'}
            </h3>
            <p className="text-gray-400 mb-6">
              {post.ctaLinks
                ? 'View the full Client Spotlight, our web design packages, or get a free check of your website and Google listing.'
                : 'We offer a free local SEO audit and build websites that rank. Get in touch for a no-obligation chat.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              {post.ctaLinks ? (
                post.ctaLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className={i === 0
                      ? 'bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-center'
                      : 'border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/5 transition-colors text-center'}
                  >
                    {link.label}
                  </Link>
                ))
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
};

export default BlogPost;
