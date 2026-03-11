'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { BASE_URL } from '../constants/sitemap';

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
          'Our website design starts from £399 for a one-page trade site and includes the basics that help you rank.',
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
          'Our local SEO service helps you get found in the map pack and for "near me" searches.',
          'Start with your Google Business Profile: make sure it’s claimed, complete, and accurate. Then look at your website: does it clearly state where you serve and what you do? From there, consistency across directories and a plan to get more Google reviews will strengthen your local visibility. If you’d like a free audit of your current setup, we’re happy to take a look and show you where the opportunities are.',
        ],
      },
    ],
  },
  'get-more-google-reviews-bath': {
    slug: 'get-more-google-reviews-bath',
    title: 'How to Get More Google Reviews in Bath (Without Breaking the Rules)',
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
  'gbp-trades-losing-customers': {
    slug: 'gbp-trades-losing-customers',
    title: 'Why Trades Lose Customers When They\'re Not on Google',
    description: 'Plumbers, electricians and trades in Bath and North East Somerset lose jobs every day because they\'re not in the map pack or don\'t have a proper Google Business Profile. Here\'s how to stop losing customers to competitors.',
    date: '2026-02-21',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'trades losing customers, Google Business Profile trades, not on Google map pack, plumber electrician Bath, GBP for trades',
    sections: [
      {
        heading: 'When you\'re not on Google, someone else gets the job',
        paragraphs: [
          'When someone in Bath, Keynsham or North East Somerset searches "plumber near me", "electrician Keynsham" or "roofer Bath", Google shows a map with three businesses at the top. If you\'re not in that map pack — or you don\'t have a Google Business Profile at all — you\'re invisible. The click goes to a competitor. The job goes to them. Trades lose customers every day simply because they\'re not there when people search.',
          'A lot of trades rely on word of mouth or repeat customers. That\'s great until someone needs you in a hurry, doesn\'t have your number, or is new to the area. They search Google. If your name doesn\'t show up with a map, a phone number and opening hours, they pick someone who does.',
        ],
      },
      {
        heading: 'Why a missing or poor GBP costs you work',
        paragraphs: [
          'Your Google Business Profile is how you show up in the map pack and on Google Maps. If it\'s not claimed, not verified, or half-empty — wrong category, no services, no description — Google has less reason to show you. Even when you do appear, an incomplete or outdated profile looks less trustworthy. People skip past and call the next one.',
          'Trades with a complete, accurate GBP — right category, services listed, areas covered, photos and reviews — get more visibility and more calls. The ones without, or with a messy listing, lose those customers to competitors who bothered to set theirs up.',
        ],
      },
      {
        heading: 'What happens when customers search and you\'re not there',
        paragraphs: [
          'Someone has a burst pipe, a power cut or a leaky roof. They grab their phone and search. They don\'t scroll through pages; they look at the map, maybe the first three results, and they call. If you\'re not in that mix, you\'re not in the running. It doesn\'t matter how good your work is if nobody can find you.',
          'The same goes for "near me" searches. Google uses the searcher\'s location. If your GBP isn\'t set up with the right area and categories, you won\'t show for those searches. You\'re losing customers you never even had a chance to quote.',
        ],
      },
      {
        heading: 'Getting your GBP set up so you stop losing customers',
        paragraphs: [
          'Claim and verify your Google Business Profile. Choose the right primary category (e.g. Plumber, Electrician, Roofer). Fill in your services, areas, hours, phone number and website. Write a clear description that says what you do and where you serve. Add photos and ask happy customers for reviews. Keep your details consistent with your website and any other listings.',
          'Once your profile is complete and accurate, Google can match you to the right searches. You won\'t win every job, but you\'ll be in the game instead of invisible. For trades in Bath and North East Somerset, that often means getting into the map pack and showing up for "plumber Bath", "electrician Keynsham" and "near me" searches.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a trade in Bath, Keynsham, Midsomer Norton, Radstock or the surrounding area and you don\'t have a Google Business Profile — or yours is incomplete or out of date — you\'re almost certainly losing customers to competitors who do. We can do a free check of your current setup and show you what to fix. We also set up and optimise GBP as part of our website and local SEO packages. Get in touch for a free chat or see our Google Business Profile page below.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/google-business-profile', label: 'Google Business Profile' },
      { href: '/local-seo', label: 'Local SEO' },
      { href: '/contact', label: 'Free GBP check' },
    ],
  },
  'google-business-profile-for-trades': {
    slug: 'google-business-profile-for-trades',
    title: 'What is a Google Business Profile and Why Trades Need One',
    description: 'Your Google Business Profile is how you show up on Google Maps and in the map pack when people search for plumbers, electricians and trades. Here\'s what it is and why it matters for Bath and North East Somerset.',
    date: '2026-02-22',
    readTime: '4 min read',
    author: 'SEO Kings',
    keywords: 'Google Business Profile, GBP for trades, what is GBP, Google Maps trades, plumber electrician Bath',
    sections: [
      {
        heading: 'What is a Google Business Profile?',
        paragraphs: [
          'Your Google Business Profile (GBP) is the listing Google shows when someone searches for your business by name, or when they search for a service in your area — like "plumber Bath" or "electrician Keynsham". It\'s the box that appears with your business name, address, phone number, opening hours, website link, photos and reviews. It\'s also what powers your presence on Google Maps.',
          'If you\'ve ever searched for a local business and seen a map with three results at the top, those three are Google Business Profiles. The businesses that show there have claimed and filled out their profile so Google can match them to the search.',
        ],
      },
      {
        heading: 'Where your GBP shows up',
        paragraphs: [
          'Your profile can appear in the local map pack (the three businesses with a map on the main search results), on Google Maps when people search or browse by area, and in the "Knowledge Panel" when someone searches your business name. For trades in Bath, Keynsham, Midsomer Norton and North East Somerset, most new enquiries come from people searching "plumber near me", "electrician [town]" or similar — and those results are driven by GBP.',
          'If your profile isn\'t claimed or is incomplete, Google has less to show. You might not appear in the map pack at all, or you might show with wrong or missing details. Either way, you lose visibility and trust.',
        ],
      },
      {
        heading: 'Why trades need a Google Business Profile',
        paragraphs: [
          'When someone has a burst pipe, a power cut or a leaky roof, they search Google. They look at the map and the first few results. If you\'re not there — or your listing is blank or wrong — they call someone else. A complete, accurate GBP puts you in the running: right category (e.g. Plumber, Electrician), services listed, areas covered, photos, reviews and a clear way to call or visit your website.',
          'Trades who rely only on word of mouth or repeat customers miss everyone who doesn\'t already know them. A GBP gets you in front of people when they\'re actively looking for your service in your area.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you don\'t have a Google Business Profile, claim and verify yours (Google will send a postcard or you can verify by other methods). Fill in your business name, address, phone, website, hours, category, services and a short description. Add photos and ask happy customers for reviews. Keep everything consistent with your website.',
          'If you\'re a trade in Bath and North East Somerset and want help setting up or optimising your GBP, we can do a free check and show you what to fix. We also include GBP setup and optimisation in our website and local SEO packages. Get in touch or see our Google Business Profile page below.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/google-business-profile', label: 'Google Business Profile' },
      { href: '/contact', label: 'Free GBP check' },
      { href: '/local-seo', label: 'Local SEO' },
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
    title: 'New Decorating Bath: From No Web Presence to Top 8 on Google Maps in a Week',
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
    title: 'Keynsham Website Designers: Get Found on Google in Bath & North East Somerset',
    description: 'Keynsham website designers that get you found on Google. Mobile-friendly sites & local SEO for Bath, Bristol & Somerset. From £399. Free audit.',
    date: '2026-02-08',
    readTime: '12 min read',
    author: 'SEO Kings',
    keywords: 'website design Keynsham, keynsham website designers, web design Keynsham, Keynsham web designer, local web design Keynsham',
    sections: [
      {
        heading: 'Keynsham Website Designers: Get Found on Google in Bath & North East Somerset',
        paragraphs: [
          'When Dave\'s plumbing business in Keynsham lost a big job to a competitor in early 2024, he found out why: the other firm showed up first on Google when the customer searched "plumber Keynsham." Dave had no website and no Google listing. He was invisible. If you run a trade or local business in Keynsham, Bristol, or Bath and you\'re not on page 1 or in the map pack, you\'re missing calls and jobs every day. This page is for you. We\'re SEO Kings, and we help businesses in Keynsham and across Bath & North East Somerset get a proper website and get found on Google. Below you\'ll find what to expect from website design Keynsham, what it typically costs, how to choose a Keynsham web designer, and what we offer. No jargon, no long contracts.',
          'Want a free check of your current site and Google listing? Get your free audit at seo-kings.co.uk/contact. No obligation, no card required.',
        ],
      },
      {
        heading: 'Why Keynsham Businesses Need a Professional Website',
        paragraphs: [
          'Customers in Keynsham, Bristol, Bath, and across BANES search Google for local trades and services every day. If you don\'t have a clear, fast website and a Google Business Profile that shows up in the map pack, you\'re handing work to competitors who do.',
          'A professional website tells people you\'re a real, established business. It lists your services, your area, and how to contact you. For trades and local services, that often means big "Call" or "Get a quote" buttons so mobile users can tap once and ring you. Without a site, or with an old one that looks dated, many people simply move on to the next result.',
          'When someone searches "electrician Keynsham" or "website design Keynsham," Google shows a mix of organic results and the local map pack (the three businesses with map pins). Getting into that pack, and onto page 1, depends on having a proper website and a well-optimised Google Business Profile. Keynsham website designers who understand local SEO don\'t just build a pretty site; they make sure your GBP is set up and optimised so you show up when it matters.',
          'Most local searches happen on a phone. Your site has to load quickly and work on mobile. Slow or broken mobile experiences send people straight back to the search results and to your competitors. Good web design Keynsham is mobile-first: fast, simple, and built to turn visitors into calls and enquiries.',
        ],
      },
      {
        heading: 'What to Expect from Website Design in Keynsham',
        paragraphs: [
          'When you work with Keynsham website designers or a local web design team, you should get more than a static brochure. You should get a site that\'s built to help you get found and get leads.',
          'Your site should look good and work well on phones and tablets. That means readable text, tap-friendly buttons, and fast loading. We build all our sites mobile-first so Keynsham and BANES businesses perform where most of their customers are searching.',
          'A new website should be built with local search in mind from day one. That includes the right structure, clear service and area mentions (e.g. Keynsham, Bath, Somerset), and a Google Business Profile that\'s set up and optimised. Our website design packages from £399 include GBP optimisation for one service in one location so you can show up in the map pack as soon as you go live. See seo-kings.co.uk/web-design for more.',
          'You don\'t want to wait weeks or pay a developer every time you need to change a phone number or add a service. We build sites that are easy to update, and we\'re on hand to help. For businesses that want to grow visibility across more areas or keywords, we offer Local SEO as an add-on once your site is live (seo-kings.co.uk/local-seo).',
          'The goal isn\'t just to look good; it\'s to get more calls and enquiries. That means clear calls-to-action, contact forms or click-to-call buttons, and a layout that guides visitors to take the next step. We focus on conversion so your website design Keynsham investment turns into real jobs.',
        ],
      },
      {
        heading: 'Website Design Costs for Keynsham Businesses',
        paragraphs: [
          'Pricing is one of the first questions we hear. Here\'s a straight answer so you know what to expect. For a typical small business or trade in Keynsham and the surrounding area: a simple one-page or small brochure site is roughly £400–£800. Often it includes the basics: your services, area, contact details, and a mobile-friendly layout. Some packages (including ours) include Google Business Profile optimisation for one service and one location. A multi-page small business site is roughly £800–£2,500 — more pages, more services, maybe a gallery or testimonials. Still aimed at getting you found locally and generating leads. E‑commerce or complex builds run from around £2,500 upward, depending on products, payment, and functionality.',
          'SEO Kings\' website design starts at £399 for a one-page or multi-page site built to get you found on Google, with GBP optimisation included for one service in one location. No hidden catches. See our website design packages at seo-kings.co.uk/web-design for more detail.',
          'Cost depends on how many pages you need, whether you need e‑commerce, and how much content (text, images) you provide. Extra locations or services for local SEO can be added via our Local SEO service (seo-kings.co.uk/local-seo) once you\'re happy with your site. After launch, you\'ll usually have hosting (often £50–£200 a year for a small site) and optionally maintenance or support. If you add Local SEO to target more keywords or areas, that\'s a monthly fee. We\'re clear about what\'s included and what\'s optional so Keynsham businesses can plan.',
        ],
      },
      {
        heading: 'How to Choose a Web Designer in Keynsham',
        paragraphs: [
          'Not every Keynsham web designer is the same. Here\'s what to look for so you get a site that actually gets you found.',
          'Look for work with businesses like yours: trades, local services, small businesses. If they\'ve built sites for plumbers, electricians, or cleaners in Bath, Keynsham, or Somerset, they\'ll understand what you need: clear services, area coverage, and strong CTAs.',
          'You want someone who knows Keynsham, Bristol, Bath, and BANES. They\'ll understand the searches people use ("plumber Keynsham," "website design Keynsham") and how to optimise for them. And when you need help, it helps to have a team that\'s focused on your area.',
          'Ask how the project works: consultation, design, build, go live. You should get a clear timeline and know what you\'re getting at each stage. We outline everything up front so there are no surprises.',
          'Your site should be built with SEO and your Google listing in mind from the start. Ask whether Google Business Profile setup or optimisation is included, and what happens after launch. The best Keynsham website designers don\'t hand you a site and disappear; they help you get visible. See seo-kings.co.uk/google-business-profile for more.',
        ],
      },
      {
        heading: 'SEO Kings Website Design in Keynsham',
        paragraphs: [
          'We\'re a Bath & North East Somerset agency focused on getting local businesses found on Google. Keynsham is one of the areas we serve every day. We offer: website design from £399, one-page or multi-page, mobile-first, built to rank locally — our one-page package includes Google Business Profile optimisation for one service in one location (seo-kings.co.uk/google-business-profile). We set up and optimise your Google Business Profile so you show up in the map pack when people search for your trade or service in Keynsham, Bath, or BANES. And once your site is live, we can add Local SEO (seo-kings.co.uk/local-seo) to target more keywords and areas (e.g. "plumber Bath," "electrician Keynsham") with monthly reporting and ongoing optimisation.',
          'We\'ve helped over 150 businesses in the area. One of them, Peachy Cleans (seo-kings.co.uk/spotlight/peachy-cleans), went from no website and no Google presence to number one for "cleaner Midsomer Norton" and ended up fully booked and hiring. We\'re not interested in jargon or long contracts; we want you on the map and getting more calls. Ready to see what\'s possible for your business? Get your free audit at seo-kings.co.uk/contact. We\'ll look at your current website and Google listing and show you simple ways to get higher in search and Maps. No obligation, no credit card required.',
          'We\'re based in Bath & North East Somerset and we work only in this patch. That means we know the towns, the searches, and what works for trades and local services. When you work with us, you\'re not a number; you get a plan that fits your trade and your area. Next steps: 1) Get your free audit at seo-kings.co.uk/contact — we review your site and GBP and tell you what\'s holding you back in Keynsham and BANES searches. 2) We agree a plan (website, GBP, or both) and a clear price. 3) We build and optimise; you start showing up where it matters and get more enquiries.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'If you\'re looking for Keynsham website designers or website design Keynsham, the goal is simple: a professional, mobile-friendly site and a Google presence that gets you on page 1 and in the map pack. That\'s how you stop missing calls and start winning more local work. Get a site built for local search — fast, mobile-first, with clear CTAs. Get your Google Business Profile right so you show up when people search for your trade in Keynsham, Bath, or Bristol. Know the costs upfront — from around £400 for a simple, effective site; we start at £399 with GBP optimisation included. Choose a team that knows the area and that focuses on results, not jargon. SEO Kings helps trades and local businesses in Keynsham, Bath, Midsomer Norton, Radstock, Saltford, and across BANES get found on Google. Get your free audit today at seo-kings.co.uk/contact. No obligation, no credit card required.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/contact', label: 'Get your free audit' },
      { href: '/web-design', label: 'Website design' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/local-seo', label: 'Local SEO' },
      { href: '/google-business-profile', label: 'Google Business Profile' },
      { href: '/areas/keynsham', label: 'Keynsham area' },
    ],
  },
  'how-we-build-websites-keynsham': {
    slug: 'how-we-build-websites-keynsham',
    title: 'How We Build Websites in Keynsham: From Keyword Research to Launch',
    description: 'Our process for building websites for Keynsham and BS31 businesses: initial keyword research, structure, content, design and launch. So your site gets found when local customers search.',
    date: '2026-02-19',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'website build process Keynsham, keyword research Keynsham, web design Keynsham, how we build websites BS31',
    sections: [
      {
        heading: 'Why we start with keyword research',
        paragraphs: [
          'When we build a website for a business in Keynsham, Saltford, or the wider BS31 area, we don’t start with colours and layouts. We start with what your customers actually type into Google. That’s keyword research: finding out which phrases people use when they’re looking for your trade or service in your area.',
          'For a plumber in Keynsham, that might be "plumber Keynsham", "emergency plumber BS31", or "plumber near me". For an electrician, "electrician Keynsham" or "electrician Saltford". Those phrases tell us what your site needs to say and how to structure it so Google can match you to the right searches. Without that step, you end up with a nice-looking site that doesn’t rank for the things that bring in work.',
        ],
      },
      {
        heading: 'What initial keyword research looks like',
        paragraphs: [
          'We look at what people search for in your industry and in your location. We check existing search volume (how often a phrase is used), who’s already ranking for it, and how realistic it is to compete. We also look at "near me" and map-pack behaviour — because in Keynsham and the Keynsham area, a lot of jobs come from local pack and Maps, not just the main search results.',
          'From that we get a shortlist of target keywords: the phrases we want your site (and your Google Business Profile) to be built around. That list shapes your page titles, headings, service descriptions, and area content. Everything we write and build is aligned with what people are actually searching for.',
        ],
      },
      {
        heading: 'From keywords to site structure',
        paragraphs: [
          'Once we know the keywords, we plan the structure. For a one-page trade site, that might be: hero with your main offer, services (using the phrases people search for), areas you serve (Keynsham, Saltford, Bath, and so on), and a clear call to action. For a multi-page site, we might give each main service or area its own page, each optimised for relevant keywords.',
          'We keep the structure simple and logical — both for visitors and for Google. No keyword stuffing; just clear, natural content that answers what someone searching "plumber Keynsham" or "website design Keynsham" is looking for.',
        ],
      },
      {
        heading: 'Content and design',
        paragraphs: [
          'Content comes next: service descriptions, area copy, and any extra pages. We use the keyword research to guide the wording without making it sound robotic. Then we design and build: mobile-first, fast loading, with clear contact points and trust signals (reviews, credentials, contact form, click-to-call).',
          'We build so the site works with your Google Business Profile — same business name, address, phone number, service areas. Consistency across the site and GBP helps Google understand who you are and where you serve, which matters for local search in Keynsham and BS31.',
        ],
      },
      {
        heading: 'Launch and local search',
        paragraphs: [
          'After launch we submit the site to Google, set up or tidy your GBP if needed, and make sure everything is connected. We don’t stop at "the site is live" — we want it to start showing up for the searches we targeted. For many Keynsham businesses that means appearing in the map pack and for "near me" searches as well as for specific phrases like "electrician Keynsham".',
          'If you want ongoing visibility, we can add local SEO and GBP management on top. But the foundation is always the same: keyword research first, then a site built to rank for the right local searches.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you’re a tradesperson or local business in Keynsham and you’re thinking about a new website — or you want one that’s built with keyword research and local search in mind from day one — we’d be happy to talk. We serve Keynsham, Saltford, Bitton, Bath and North East Somerset. Get in touch for a free chat, or see our website design and Keynsham area pages below.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/areas/keynsham', label: 'Website design Keynsham' },
      { href: '/web-design', label: 'How we build websites' },
      { href: '/web-design-packages', label: 'Web design packages' },
      { href: '/contact', label: 'Get a free quote' },
    ],
  },
  'keynsham-gbp-keyword-research': {
    slug: 'keynsham-gbp-keyword-research',
    title: 'Google Business Profile Keyword Research for Keynsham & BS31',
    description: 'How to do keyword research for your Google Business Profile in Keynsham and the BS31 area. Find the right phrases for your category, services and description so you show up in the map pack.',
    date: '2026-02-20',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'Google Business Profile Keynsham, GBP keyword research Keynsham, Keynsham Google listing, BS31 map pack, local SEO Keynsham',
    sections: [
      {
        heading: 'Why keyword research matters for your GBP in Keynsham',
        paragraphs: [
          'Your Google Business Profile is one of the main ways you show up when people in Keynsham, Saltford, or BS31 search for your trade or service. But Google has to understand what you do and where you serve. Keyword research for your GBP means finding the phrases people actually type in — like "plumber Keynsham", "electrician BS31", or "painter and decorator Saltford" — and using them in your category, services, description and areas so Google can match you to the right searches.',
          'Without that step, your listing might be complete but not optimised for the searches that bring in work. With the right keywords in the right places, you stand a better chance of appearing in the map pack and in Google Maps when local customers search.',
        ],
      },
      {
        heading: 'What to research: category, services and location',
        paragraphs: [
          'Google uses your primary category, your services (if you add them), your description, and your service area to decide when to show your profile. So keyword research for GBP in Keynsham should cover: (1) your main category — e.g. Plumber, Electrician, Painter — and whether more specific categories exist; (2) the services you offer, phrased the way customers search; (3) the areas you serve — Keynsham, Saltford, Bath, BS31, and so on.',
          'We look at what people search for in your industry and in your location. We check what phrases have local demand, who\'s already ranking for them, and how your listing compares. From that we get a shortlist of target keywords to use in your GBP without stuffing or sounding unnatural.',
        ],
      },
      {
        heading: 'Finding the right keywords for Keynsham and BS31',
        paragraphs: [
          'For Keynsham and the BS31 area, a lot of searches include the town name ("plumber Keynsham"), the postcode area ("electrician BS31"), or nearby places like Saltford, Bitton, or Bath. "Near me" searches use the searcher\'s location, so your service area and location settings need to be accurate. We use a mix of tools and manual checks to see what phrases people use, what your competitors rank for, and what\'s realistic for a well-optimised GBP to target.',
          'Long-tail phrases — like "emergency plumber Keynsham" or "interior painter Saltford" — are often less competitive and can get you visible sooner. Your GBP description and services are the main places to use these phrases naturally so Google understands what you do and where.',
        ],
      },
      {
        heading: 'Putting keywords into your Google Business Profile',
        paragraphs: [
          'Once you have a shortlist, you use it in your GBP: choose the most accurate primary category (and secondary if relevant), add services that match the phrases people search for, write a description that includes your main keywords and areas without stuffing, and set your service area so it covers Keynsham, Saltford, and any other areas you serve. Keep your business name, address and phone consistent with your website and any other listings.',
          'Google rewards relevance and consistency. A GBP that clearly states what you do, where you do it, and how to contact you — in the language people search — is more likely to show up in the map pack for "plumber Keynsham" or "electrician near me" in BS31.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'If you\'re a tradesperson or local business in Keynsham and your Google Business Profile isn\'t set up or isn\'t bringing in enquiries, keyword research is a good first step. We can do a free audit of your current GBP and show you which keywords to target and how to add them. We also build websites that work with your GBP so the two support each other. Get in touch for a free chat, or see our Google Business Profile and Keynsham area pages below.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/google-business-profile', label: 'Google Business Profile' },
      { href: '/areas/keynsham', label: 'Keynsham area' },
      { href: '/local-seo', label: 'Local SEO' },
      { href: '/contact', label: 'Free GBP check' },
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
    title: 'Website Design in Peasedown St John, Bath & North East Somerset: What We Build for Local Businesses',
    description: 'Web design for Peasedown St John and south of Bath (BANES) — fast, mobile-friendly websites for trades and local services. Built for local search so you get found on Google.',
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
  'keynsham-farmers-market-2026': {
    slug: 'keynsham-farmers-market-2026',
    title: 'Keynsham Farmers\' Market 2026: How Traders Can Get More Customers with a Professional Website',
    description: 'The Keynsham farmers market brings the town to life every second Saturday. How a simple website and Google Business Profile help market traders get found the other 28 days — and get more customers. From SEO Kings, Keynsham.',
    date: '2026-03-11',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'Keynsham farmers market, website for traders Keynsham, local business website BS31, artisan producers Keynsham website, Keynsham market stall online sales, website design Keynsham, Google Business Profile Keynsham',
    featureImage: {
      src: '/images/blog/keynsham-farmers-market.png',
      alt: 'Busy Keynsham Farmers\' Market with green and white striped stalls, clock tower and shoppers at Market Walk',
    },
    sections: [
      {
        heading: 'The market is vibrant — but what about the other 28 days?',
        paragraphs: [
          'The Keynsham farmers market brings the town to life every second Saturday of the month. Market Walk fills with around 28 regular traders — artisan bakers, cheesemongers, butchers, veg growers, and craft producers — and visitors from Keynsham, Bristol, and Bath flock in for the real thing. It\'s vibrant, award-winning, and a brilliant shop window. But here\'s the thing: what happens on the other 28 days?',
          'Most stallholders are flat out on market day. Between markets, though, customers are still searching — for "Keynsham farmers market", for your business by name, or for the kind of produce you sell. If you\'re not easy to find online, you\'re missing those enquiries. A simple, professional website for traders in Keynsham (and a Google presence to match) turns those in-between days into extra orders and repeat customers. This post is about how a local business website in BS31 can help Keynsham market traders get more customers in 2026 — without the hard sell, just practical steps from a Keynsham-based agency that wants you to do well.',
        ],
      },
      {
        heading: 'Why Keynsham market traders need an online presence',
        paragraphs: [
          'Keynsham sits between Bristol and Bath, with the High Street, Memorial Park, and the Chocolate Quarter right on the doorstep. The Keynsham farmers market is a fixture: second Saturday of the month, Taste of the West gold awards, and a loyal crowd. But when someone can\'t make it to market day — or they\'re searching for "artisan producers Keynsham website" or "Keynsham market stall online sales" — they need to find you quickly. If you don\'t have a website or a clear Google listing, they\'ll find someone else.',
          'Website design in Keynsham doesn\'t have to be huge or expensive. It needs to do three things: show who you are and what you sell, work perfectly on phones (where most local searches happen), and help you show up when people search for you or for the market. Pair that with a Google Business Profile in Keynsham that\'s filled out properly, and you start appearing in the map pack and in search — so you\'re not invisible between market days.',
        ],
      },
      {
        heading: 'Get found when people search',
        paragraphs: [
          'When locals search "Keynsham farmers market" or "market stall Keynsham", Google shows the market, the council, and businesses that have a clear web presence. The same goes for trades that support the area — plumber Keynsham, electrician BS31, builder Keynsham — and for producers: "cheese Keynsham", "organic veg BS31", "artisan bread Keynsham". If your business has a fast, mobile-friendly site and an optimised Google Business Profile, you can show up in those results and in the map.',
          'We\'re not talking about complex tech. We\'re talking about a simple site that states your name, what you sell, where you are (Market Walk, second Saturday, plus any other collection or delivery info), and how to get in touch. Add a Google Business Profile in Keynsham with the same details, correct opening hours, and a few photos, and Google can connect you to local searches. That\'s how you get found the rest of the month.',
          'Want to see where you stand? We offer a free Keynsham SEO audit: we look at your current site and Google listing (or lack of them) and tell you what\'s holding you back. No obligation. Call 07702 264 921 or use the link at the end of this post to get your free audit.',
        ],
      },
      {
        heading: 'Sell (and take orders) between markets',
        paragraphs: [
          'A Keynsham market stall online sales setup doesn\'t have to mean a full e‑commerce site. For many traders, a single page that lists your products, your next market date, and a way to order or enquire (phone, email, or a simple form) is enough. "Order by Thursday for collection at the next market" or "Message us to reserve" can turn searchers into customers on the days you\'re not in Market Walk.',
          'An artisan producers Keynsham website that\'s clear and easy to use on a phone does two jobs: it builds trust ("this business is real and easy to contact") and it gives you a place to send people from your stall, your socials, or word of mouth. Over time, that turns into repeat orders and a mailing list — without needing a fancy shop or a huge build.',
        ],
      },
      {
        heading: 'Build trust with a professional site',
        paragraphs: [
          'First impressions matter. If someone finds you via Google and lands on a broken page, a blank listing, or nothing at all, they\'ll assume you\'re not serious or not available. A simple, professional website for traders in Keynsham — with your logo, a short story, what you sell, where and when you\'re at the market, and a clear phone number — tells people you\'re a real business they can rely on. Add a few photos (your stall, your produce, you at the market) and, if you have them, Google reviews, and you\'re already ahead of most stalls that have no web presence.',
        ],
      },
      {
        heading: 'Quick wins for Keynsham market traders',
        paragraphs: [
          'You don\'t have to do everything at once. Here are some quick wins that make a real difference.',
          '1. Claim (or create) your Google Business Profile — Use your market address or a service-area setup so you show up for "Keynsham farmers market" and related searches. Add a short description, your stall/products, and your phone number. We can check your GBP for free and tell you what to fix.',
          '2. Get a simple one-page website — From £399 we build a one-page site plus Google Business Profile optimisation for one service/location. Ideal for a local business website in BS31 that just needs to be clear, fast, and findable. See our web design packages or contact us for a quote.',
          '3. Use the same details everywhere — Same business name, phone (07702 264 921 if you\'re us!), and location on your stall, website, and GBP. Consistency helps Google (and customers) trust you.',
          '4. Add a few good photos — Stall, produce, you at the market. They go on your site and your GBP and make you more clickable in search and on Maps.',
        ],
      },
      {
        heading: 'Real result: New Decorating — no site to top 8 on Maps in a week',
        paragraphs: [
          'We don\'t make up results. One of our clients, New Decorating (painter and decorator across Bath, Keynsham, and BANES), had no website and no Google listing. We built their site and set up their Google Business Profile so the two worked together. Within a week they were in the top 8 on Google Maps for painter and decorator searches in the area. That\'s the kind of quick visibility a simple site plus a proper Google Business Profile in Keynsham (or Bath, or BANES) can deliver — not magic, just clear structure and local optimisation. Read the New Decorating case study for the full story.',
        ],
      },
      {
        heading: 'A few questions we hear from traders',
        paragraphs: [
          '"I only trade at the market — do I really need a website?" You don\'t have to, but if people search for you or for the market between Saturdays and find nothing, they\'ll go elsewhere. A one-page site and a GBP cost little and keep you visible all month.',
          '"Won\'t a website be expensive?" Our £399 starter package includes a one-page, mobile-friendly site and GBP optimisation for one service/location. It\'s built for local search so you show up when people search website design Keynsham, the market, or your type of produce. Get a free quote or ring 07702 264 921.',
          '"I\'m not technical." You don\'t need to be. We build the site and set up (or tidy up) your Google listing. You send us your wording and photos; we handle the rest. After that, you just keep your market dates and contact details up to date.',
          '"How do I get on the first page of Google?" For local searches, Google cares about: a clear website with your location and services, a complete and accurate Google Business Profile, and consistent name/address/phone everywhere. We specialise in exactly that for Keynsham and BANES — get your free Keynsham SEO audit to see what\'s missing.',
        ],
      },
      {
        heading: 'Get your free Keynsham SEO audit and next steps',
        paragraphs: [
          'We\'re SEO Kings, a Keynsham-based web design and local SEO agency (BS31 2DW). We work with trades and small businesses across Keynsham, Bath, and North East Somerset — from plumber Keynsham and electrician BS31 to builder Keynsham and, yes, market traders and artisan producers in Keynsham. We don\'t do hard sell; we do clear, affordable website design in Keynsham and Google Business Profile in Keynsham so you get found on Google and get more customers.',
          'What we offer: Free Keynsham SEO audit — we review your current site and Google listing (or the gap if you don\'t have them) and tell you what\'s holding you back. No obligation, no credit card. Starter package from £399 — one-page website plus GBP optimisation for one service/location. Ideal as a first local business website in BS31 or a website for traders in Keynsham. Phone: 07702 264 921 — call for a chat or to book your free audit.',
          'Whether you\'re at the Keynsham farmers market every second Saturday or you\'re a trade that serves the area, a professional website and a proper Google presence turn the other 28 days into more enquiries and more sales. Get your free Keynsham SEO audit and we\'ll show you exactly what to do next.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/contact', label: 'Get your free Keynsham SEO audit' },
      { href: '/web-design-packages', label: 'Web design packages from £399' },
      { href: '/areas/keynsham', label: 'Website design Keynsham' },
    ],
  },
  'keynsham-trades-losing-jobs-google': {
    slug: 'keynsham-trades-losing-jobs-google',
    title: 'Why Keynsham Trades Are Losing Jobs to Google (And How a £399 Website Fixes It)',
    description: 'Keynsham trades miss calls because they don\'t show on page 1 or Maps when people search. Why it happens and how a £399 website plus Google Business Profile gets you back in the game. From SEO Kings, Keynsham.',
    date: '2026-03-12',
    readTime: '5 min read',
    author: 'SEO Kings',
    keywords: 'plumber Keynsham, electrician BS31, builder Keynsham, roofer Keynsham, decorator Keynsham, website design Keynsham, website designer Keynsham, Google ranking Keynsham, Google Business Profile Keynsham',
    sections: [
      {
        heading: 'Why Keynsham trades are losing out',
        paragraphs: [
          'If you\'re a plumber in Keynsham, an electrician in BS31, or a builder or roofer working around the town, you\'ve probably had this happen: a customer needed someone fast, typed "plumber near me Keynsham" or "emergency builder Keynsham" into Google — and called someone else. Not because you\'re not good at your job, but because you didn\'t show up on page one or in the map. Keynsham trades are losing jobs to Google every day. The good news? It\'s fixable, and it doesn\'t have to cost a fortune.',
          'Keynsham\'s growing. With a population of around 20,000 and new homes going up off Manor Road and elsewhere, there\'s plenty of demand for plumber Keynsham, electrician BS31, builder Keynsham, roofer Keynsham, and decorator Keynsham work. People move in, they need boilers fixed, rewires, extensions, and repaints — and they search Google. The problem is simple: if you\'re not on the first page or in the map pack, you\'re invisible.',
          'What\'s going wrong for most trades? No website or an old one — a broken site or nothing at all tells customers and Google you\'re not serious. No Google Business Profile or a poor one — your free listing is how you get into the map pack; if it\'s missing or half-empty, you don\'t show up. Bigger firms and nationals have website design Keynsham and Google Business Profile Keynsham sorted and rank for "plumber Keynsham" and "emergency builder Keynsham". New residents in the developments need a plumber or electrician fast and call whoever appears first. Town centre regeneration around Market Walk, the High Street, and the Chocolate Quarter means more demand — the trades that get the work are the ones that show up when that demand turns into a Google search.',
        ],
      },
      {
        heading: 'How a £399 website fixes it',
        paragraphs: [
          'You don\'t need a £5,000 site to get found. A website designer in Keynsham who builds for local search can give you a professional, mobile-friendly site from £399 that does the job.',
          'Mobile-friendly and fast — most "plumber Keynsham" and "electrician BS31" searches happen on phones. A modern site loads quickly and works on every device. Built for local SEO — clear service pages, your areas (Keynsham, Saltford, Bitton, Longwell Green, Warmley), and the right keywords so you start showing up for Google ranking Keynsham and trade + location searches. Google Business Profile integration — your site and your GBP match; we set that up. A website design Keynsham package from £399 often includes GBP optimisation for one service and location. Easy contact — click-to-call, contact forms, and clear "Get a quote" or "Call now" so visitors reach you in one tap. That\'s how a £399 website turns "invisible on Google" into "showing up when Keynsham customers search".',
        ],
      },
      {
        heading: 'Quick wins Keynsham trades can do now',
        paragraphs: [
          '1. Claim and optimise your Google Business Profile — add business name, address, phone, website, category, services, and a short description. Use "Keynsham", "BS31", and your trade. We offer a free audit that includes a check of your GBP. 2. Get a simple one-page website — if you\'ve got nothing, a one-page site from £399 with Google Business Profile Keynsham optimisation gets you visible. See our web design packages or contact us for a quote. 3. Use the same details everywhere — same name, address, and phone on your van, website, GBP, and directories. 4. Target "trade + Keynsham" — in your GBP and on your site, use phrases like plumber Keynsham, electrician BS31, builder Keynsham, roofer Keynsham, decorator Keynsham where they fit naturally.',
        ],
      },
      {
        heading: 'Real results: New Decorating and Peachy Cleans',
        paragraphs: [
          'New Decorating (painter and decorator across Bath, Keynsham, and BANES) had no website and no Google listing. We built their site and set up their Google Business Profile. Within one week they were in the top 8 on Google Maps for painter and decorator searches. Read the New Decorating case study for the full story.',
          'Peachy Cleans (Midsomer Norton) had no web presence. We built their site and optimised their GBP. They went to number one for "cleaner Midsomer Norton" and ended up fully booked and hiring. See the Peachy Cleans spotlight. Same idea: a clear site plus a complete GBP equals more visibility, more calls, more jobs.',
        ],
      },
      {
        heading: 'A few questions we hear',
        paragraphs: [
          '"I\'ve been trading for years without a website. Do I really need one?" Your reputation is solid locally, but new customers — including people in the new Manor Road developments — don\'t know you yet. They search Google. If you\'re not there, they call someone who is. A simple site and a proper GBP cost little and keep you in the game.',
          '"Won\'t a £399 site look cheap?" Our £399 package is a one-page, mobile-friendly site built for local search, with GBP optimisation for one service/location. It\'s designed to look professional and load fast — and to get you found for website design Keynsham and trade searches in Keynsham and BS31. Get a free quote or ring 07702 264 921.',
          '"How do I get on the first page of Google?" For local searches, Google looks at: a clear website with your location and services, a complete and accurate Google Business Profile, and consistent name/address/phone everywhere. We specialise in exactly that for Keynsham and BANES. Free Keynsham SEO audit — we\'ll show you what\'s missing and what to do next.',
        ],
      },
      {
        heading: 'Get your free audit and stop losing jobs to Google',
        paragraphs: [
          'We\'re SEO Kings, a Keynsham-based web design and local SEO agency at 16a Culvers Road, BS31 2DW. We help plumber Keynsham, electrician BS31, builder Keynsham, roofer Keynsham, decorator Keynsham, and other trades across Keynsham, Saltford, Bitton, Longwell Green, Warmley, and Bath & North East Somerset get found on Google. We don\'t do hype; we do clear, affordable website design Keynsham and Google Business Profile Keynsham so you show up when it matters.',
          'What we offer: Free audit — we check your current website and Google listing (or the gap if you don\'t have them) and tell you what\'s holding you back. No obligation, no credit card. Website from £399 — one-page site plus GBP optimisation for one service/location. Phone: 07702 264 921 — call for a chat or to book your free audit. Stop losing jobs to Google. Get your free Keynsham SEO audit and we\'ll show you exactly how to get on page one and in the map.',
        ],
      },
    ],
    ctaLinks: [
      { href: '/contact', label: 'Get your free Keynsham SEO audit' },
      { href: '/web-design-packages', label: 'Web design packages from £399' },
      { href: '/areas/keynsham', label: 'Website design Keynsham' },
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
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: { '@type': 'Organization', name: post.author || 'SEO Kings' },
            publisher: { '@id': `${BASE_URL}/#organization` },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title },
            ],
          },
        ]}
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
          {post.featureImage && (
            <figure className="mt-8 rounded-xl overflow-hidden border border-white/10">
              <Image
                src={post.featureImage.src}
                alt={post.featureImage.alt}
                width={1024}
                height={576}
                className="w-full h-auto object-cover"
              />
            </figure>
          )}
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
                      {Array.isArray(paragraph) ? paragraph : paragraph}
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
