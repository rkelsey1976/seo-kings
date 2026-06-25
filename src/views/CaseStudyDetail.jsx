'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { BASE_URL } from '../constants/sitemap';

// Case study data – real client only (no made-up figures)
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQAD8A==';

const caseStudiesData = {
  'peachy-cleans': {
    id: 1,
    slug: 'peachy-cleans',
    business: 'Peachy Cleans',
    industry: 'Cleaning Services',
    location: 'Midsomer Norton, BA3',
    logo: 'PC',
    tagline: 'Professional website and local visibility in Midsomer Norton',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    heroImageAlt: 'Professional cleaning services - Peachy Cleans Midsomer Norton website and SEO case study',
    color: 'from-pink-500 to-rose-500',
    overview: 'Peachy Cleans is a professional cleaning services business serving Midsomer Norton and the surrounding area. They came to SEO Kings with no website and no real presence on Google. We built them a clear, professional site and got them visible for local cleaning searches. They are now having fully booked weeks and have hired new staff to keep up with demand. We are now working with them to target multiple areas (Midsomer Norton, Radstock, Bath, Frome, Paulton, Peasedown St John, Wells and surrounding Somerset) and multiple keywords on Google so they show up across their full service area.',
    challenge: [
      'No website — enquiries only by word of mouth',
      'Invisible on Google for cleaning searches in the area',
      'Competing with established cleaning companies online',
      'No way for potential customers to find or contact them',
      'New business needing to build trust quickly',
    ],
    solution: [
      'Professional website built from scratch at peachycleans.info',
      'Mobile-friendly design with clear services and contact options',
      'Local SEO targeting Midsomer Norton and surrounding areas',
      'Google Business Profile setup and optimisation',
      'Clear structure and content for local cleaning keywords',
      'Ongoing: targeting multiple areas and multiple keywords on Google (Midsomer Norton, Radstock, Bath, Frome, Paulton, Peasedown St John, Wells and surrounding Somerset) so they show up across their full service area.',
    ],
    results: [
      { metric: '229', label: 'Google Maps clicks', description: 'Website clicks direct from Google Maps — Jan to May 2026' },
      { metric: '52', label: 'Clicks in May alone', description: 'Peak month — 52 people clicked through from Google Maps to the site' },
      { metric: '#1', label: 'On Google', description: 'Ranking for "cleaner Midsomer Norton" and surrounding local searches' },
      { metric: 'Fully booked', label: 'Weeks in advance', description: 'Consistent demand from local customers — had to hire new staff' },
      { metric: 'Ongoing', label: 'Multiple areas & keywords', description: 'Targeting Radstock, Bath, Frome, Paulton, Wells and more on Google' },
    ],
    timeline: [
      { month: 'Phase 1', title: 'Discovery', description: 'Brief, goals, and structure agreed' },
      { month: 'Phase 2', title: 'Design & Build', description: 'Website designed and built, content in place' },
      { month: 'Phase 3', title: 'Launch & SEO', description: 'Site live, local SEO and GBP work started' },
      { month: 'Ongoing', title: 'Results & expansion', description: 'Fully booked weeks, hiring new staff. Now targeting multiple areas and multiple keywords on Google across their full service area.' },
    ],
    testimonial: {
      quote: "SEO Kings built our website and got us visible on Google. We're now having fully booked weeks and have had to hire new staff to keep up. Professional from start to finish.",
      author: 'Peachy Cleans',
      role: 'Professional Cleaning Services, Midsomer Norton',
    },
    services: ['Website Design', 'Local SEO'],
    relatedCases: ['new-decorating', 'aurelian-massage'],
  },
  'new-decorating': {
    id: 2,
    slug: 'new-decorating',
    business: 'New Decorating',
    industry: 'Painter & Decorator',
    location: 'Bath, Keynsham, Midsomer Norton, Radstock & BANES',
    logo: 'ND',
    tagline: 'From no web presence to top 8 on Google Maps in a week',
    heroImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
    heroImageAlt: 'Painter and decorator Bath - New Decorating website and Google Business Profile case study',
    color: 'from-amber-600 to-orange-600',
    overview: 'Jay at New Decorating — a painter and decorator across Bath, Keynsham, Midsomer Norton, Radstock and Bath and North East Somerset — had no website and no Google Business Profile. When potential customers searched for a painter and decorator in Bath or the surrounding areas, he simply didn\'t show up. We built him a fast, mobile-friendly website at new-decorating.co.uk and set up and optimised his Google Business Profile so the two work together. Within a week he was ranking for long-tail keywords and listing in the top 8 on Google Maps.',
    challenge: [
      'No website — no way for customers to find or contact the business online',
      'No Google Business Profile — invisible on Google Maps and in local search',
      'Competing with established painters and decorators who already had an online presence',
      'No visibility for searches like "painter and decorator Bath" or "painter decorator Keynsham"',
      'Needed to get visible quickly without relying on word of mouth alone',
    ],
    solution: [
      'New website built from scratch at new-decorating.co.uk — fast and mobile-friendly',
      'Google Business Profile claimed, verified and fully optimised (category, services, description, hours, area)',
      'Website and GBP aligned so the same areas, services and message appear everywhere',
      'One-off GBP optimisation as part of the website launch so both went live together',
      'Clear structure and content for painter and decorator keywords across Bath and BANES',
    ],
    results: [
      { metric: '72', label: 'Google Maps clicks', description: 'Website clicks direct from Google Maps — Jan to May 2026, started from zero' },
      { metric: '24', label: 'Clicks in May', description: 'Growing month on month — up from zero in January' },
      { metric: 'Top 3', label: 'Map Pack, Bath', description: 'Ranking in the top 3 Google Maps results for exterior painter Bath' },
      { metric: '1 week', label: 'To get visible', description: 'From no web presence to appearing in Maps and search within a week' },
    ],
    timeline: [
      { month: 'Phase 1', title: 'Brief & structure', description: 'Goals, areas and services agreed; site structure and GBP plan' },
      { month: 'Phase 2', title: 'Design & build', description: 'Website designed and built; content and area pages in place' },
      { month: 'Phase 3', title: 'Launch & GBP', description: 'Site live; Google Business Profile set up and optimised' },
      { month: 'Week 1', title: 'Results', description: 'Top 8 on Google Maps and ranking for long-tail painter/decorator keywords in Bath and BANES.' },
    ],
    testimonial: {
      quote: 'We had no website and no Google listing — customers couldn\'t find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.',
      author: 'Jay',
      role: 'New Decorating, Painter & Decorator, Bath & BANES',
    },
    websiteUrl: 'https://new-decorating.co.uk',
    googleMapsUrl: 'https://www.google.com/maps/place/New+Decorating+-+Professional+Painting+and+Decorating+Services/@51.3759541,-2.3987877,11z/data=!4m10!1m2!2m1!1snew+decorating+bath!3m6!1s0x8dcb0406d73cfc5f:0xebb26563bf6fb81b!8m2!3d51.3759541!4d-2.3987877!15sChNuZXcgZGVjb3JhdGluZyBiYXRo!16s%2Fg%2F11yzn6fvqr?entry=ttu',
    services: ['Website Design', 'Google Business Profile'],
    relatedCases: ['peachy-cleans', 'aurelian-massage'],
  },
  'bath-painter': {
    id: 4,
    slug: 'bath-painter',
    business: 'Bath Painter',
    industry: 'Painter & Decorator',
    location: 'Bath & Keynsham, Somerset',
    logo: 'BP',
    tagline: 'Bespoke website for a Bath heritage specialist — enquiries up in under a week',
    heroImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
    heroImageAlt: 'Painter and decorator Bath — Bath Painter bespoke website design case study',
    color: 'from-blue-600 to-indigo-700',
    overview: 'Bath Painter is an experienced painter and decorator based in Bath, with over 20 years of expertise in interior, exterior, and heritage decorating — specialising in listed buildings, lime plaster and traditional distemper work on Georgian, Victorian and Edwardian properties across Bath and North East Somerset. The business was growing through word of mouth but had no website and no brand identity, leaving them invisible when customers searched online. We delivered a complete brand and web package: logo designed from scratch, business cards, custom social media branding toolkit, and a full bespoke website at bathpainter.co.uk. The site is built to rank for Bath, Keynsham, Midsomer Norton and the surrounding area, with dedicated service pages for interior, exterior, heritage and commercial decorating.',
    challenge: [
      'No dedicated website — potential customers searching online couldn\'t find the business',
      'Missing out on searches like "painter and decorator Bath" and "heritage property decorator Bath"',
      'Word-of-mouth only — no way to scale enquiries digitally',
      'No brand identity — nothing consistent across social media or printed materials',
      'Needed a premium look to reflect the quality of heritage and period property work',
    ],
    solution: [
      'Logo designed from scratch — clean, professional mark suited to both digital and print',
      'Business cards designed to match the brand — ready to hand out on every job',
      'Custom social media branding toolkit — branded templates for consistent Facebook and Instagram posts',
      'Full bespoke website built and live at bathpainter.co.uk — interior, exterior, heritage and commercial work',
      'Dedicated service pages targeting Bath, Keynsham, Midsomer Norton and surrounding area searches',
      'Portfolio section to display quality of finish on period and modern properties',
      'Schema markup and local SEO foundations built in from the start',
    ],
    results: [
      { metric: 'Live', label: 'bathpainter.co.uk', description: 'Full site — interior, exterior, heritage and commercial work' },
      { metric: 'Complete', label: 'Brand identity', description: 'Logo, business cards and social media toolkit delivered' },
      { metric: '20+ years', label: 'Heritage expertise', description: 'Georgian, Victorian and Edwardian properties across Bath' },
      { metric: 'Under a week', label: 'Enquiries up', description: 'Increase in enquiries within a week of launch' },
    ],
    timeline: [
      { month: 'Phase 1', title: 'Brand & identity', description: 'Logo designed, business cards and social media toolkit built' },
      { month: 'Phase 2', title: 'Design & build', description: 'Bespoke website designed and built — service pages, portfolio, contact' },
      { month: 'Phase 3', title: 'Launch', description: 'Site live at bathpainter.co.uk — schema, local SEO foundations and all service pages in place' },
      { month: 'Phase 4', title: 'Rankings', description: 'Early rankings building — local search positions being established' },
    ],
    testimonial: {
      quote: "From the very first conversation, they understood exactly what I needed — a clean, professional, local SEO-focused site that showcases my 20+ years of experience in Bath. Since the site launched, I've already noticed an increase in enquiries and it's performing well for local searches. If you're a tradesman or small business owner in need of a high-quality website that actually works, I can highly recommend SEO Kings.",
      author: 'Duncan Herron',
      role: 'Bath Painter & Decorator, Bath',
    },
    websiteUrl: 'https://bathpainter.co.uk',
    services: ['Logo Design', 'Business Cards', 'Social Media Branding', 'Website Design', 'Local SEO'],
    relatedCases: ['new-decorating', 'aurelian-massage'],
  },
  'aurelian-massage': {
    id: 3,
    slug: 'aurelian-massage',
    business: 'Aurelian Massage',
    industry: 'Massage Therapy & Wellness',
    location: 'Bath City Centre, BA2',
    logo: 'AM',
    tagline: 'New business, no online presence — live in under a week and already getting calls',
    heroImage: 'https://aurelianmassage.com/_next/image?url=%2Ftherapist-hero.png&w=1280&q=75',
    heroImageAlt: 'Aurelian Massage Bath — Swedish and aromatherapy massage therapy in Bath city centre',
    color: 'from-amber-400 to-yellow-600',
    overview: 'Ross launched Aurelian Massage in Bath city centre with no website, no social media, and no online presence of any kind. As a brand new business, every booking had to come from somewhere — and with no digital footprint, that meant relying entirely on word of mouth. We built him a full multi-page Next.js website from scratch, designed to rank for massage therapy searches in Bath and convert visitors into bookings via an integrated Fresha booking system. The site went live in under a week. Ross was already getting calls and bookings from people finding him on Google in Bath within days of launch.',
    challenge: [
      'Brand new business — no website, no social media, no online presence at all',
      'No way for potential customers in Bath to find or book a treatment',
      'Competing with established Bath spa and massage businesses',
      'Needed a professional, premium look to match the quality of the treatments',
      'Had to rank for competitive Bath wellness keywords from a standing start',
    ],
    solution: [
      'Full multi-page Next.js website built from scratch at aurelianmassage.com',
      'Premium design reflecting the luxury positioning — clean, calm, conversion-focused',
      'Individual treatment pages for every service with SEO-optimised content',
      'Fresha booking integration — customers book directly from the site',
      'Google Business Profile set up and optimised for massage therapy in Bath',
      'FAQs, About page, and testimonials structured for local search and trust',
      'Schema markup for LocalBusiness, FAQPage, and service pages',
      'Full site live and indexed in under a week from brief to launch',
    ],
    results: [
      { metric: '75', label: 'Google Maps clicks', description: 'Website clicks direct from Google Maps in just 3 months (Mar–May 2026)' },
      { metric: '32', label: 'Clicks in May', description: 'Peak month — 32 people clicked from Google Maps to the site in May alone' },
      { metric: 'Under 1 week', label: 'From brief to live', description: 'Full multi-page site designed, built and launched in under a week' },
      { metric: 'Calls & bookings', label: 'Within days', description: 'Customers finding and booking directly through the site from day one' },
      { metric: 'Fresha integrated', label: 'Online booking', description: 'Fully connected booking system live from launch' },
    ],
    timeline: [
      { month: 'Day 1', title: 'Brief & structure', description: 'Goals, services, positioning and site structure agreed with Ross' },
      { month: 'Days 2–4', title: 'Design & build', description: 'Full site designed and built — homepage, treatments, about, FAQ, contact' },
      { month: 'Day 5', title: 'Content & SEO', description: 'Treatment pages written, GBP set up, schema markup added, booking integrated' },
      { month: 'Day 6', title: 'Launch', description: 'Site live at aurelianmassage.com, submitted to Google, GBP verified' },
      { month: 'Week 1', title: 'Results', description: 'Already appearing in Google searches for massage therapy in Bath — calls and bookings coming in' },
    ],
    testimonial: {
      quote: "I honestly couldn't be happier with the work that's been done on my website and SEO. The website looks incredibly polished, clean, and professional — exactly what I had in mind, if not better. What really stood out was how quickly everything was completed without compromising on quality. It felt like a real collaboration rather than just a service. The SEO work behind the scenes has also been excellent — fast, professional, knowledgeable, and genuinely invested in delivering the best possible outcome.",
      author: 'Ross',
      role: 'Aurelian Massage, Bath City Centre',
    },
    websiteUrl: 'https://aurelianmassage.com',
    services: ['Website Design', 'Google Business Profile'],
    relatedCases: ['new-decorating', 'peachy-cleans'],
  },
  'aspect-builds': {
    id: 5,
    slug: 'aspect-builds',
    business: 'Aspect Builds & Maintenance',
    industry: 'Building & Property Maintenance',
    location: 'Bath, Somerset',
    logo: 'AB',
    tagline: 'From an Instagram page to a 40-page website — live in under two weeks',
    heroImage: 'https://aspectbuilds.co.uk/images/hero-james-bath-property-4.webp',
    heroImageAlt: 'Builder and property maintenance Bath - Aspect Builds website design case study',
    color: 'from-emerald-600 to-teal-700',
    overview: 'Aspect Builds & Maintenance Ltd is a building and property maintenance company based in Bath, covering extensions, loft conversions, heritage work, structural repairs, interiors, and property care across Bath and the surrounding area. James had built a solid reputation through word of mouth and had an Instagram page showing his work — but when people searched for builders, loft conversions, or house extensions in Bath, he was completely invisible. We built a full 40-page website at aspectbuilds.co.uk using a hub-and-spoke SEO architecture with dedicated service pages, area pages, real project photography, Schema markup, responsive images, YouTube video walkthroughs, and a Google Business Profile set up from scratch. The site launched in under two weeks and is already starting to appear in local search results.',
    challenge: [
      'No website — only an Instagram page showing work with no way to capture enquiries',
      'Completely invisible on Google for builder, extension, and loft conversion searches in Bath',
      'No Google Business Profile — not appearing on Google Maps or in local search results',
      'Word-of-mouth only — no digital presence to scale the business beyond personal referrals',
      'Multiple services (6 different trade categories) all needing their own SEO-optimised pages',
    ],
    solution: [
      'Full 40-page website built from scratch at aspectbuilds.co.uk',
      'Hub-and-spoke SEO architecture — 6 dedicated service pages, 10 area pages, blog, FAQ, projects',
      'Real project photography throughout — actual Bath properties James has worked on, not stock images',
      'YouTube video walkthrough embedded on the homepage to build trust immediately',
      'Google Business Profile claimed, verified and fully optimised with services, hours, and geotagged photos',
      'Schema markup (HomeAndConstructionBusiness) with aggregate rating, sameAs links, and geo coordinates',
      'Responsive images with srcset for Lighthouse Performance scores in the 90s',
      'Accessibility scored 98+ on Lighthouse — WCAG 2.1 AA compliant',
      'Privacy policy, favicon, Open Graph meta, and sitemap all in place for go-live',
    ],
    results: [
      { metric: '40 pages', label: 'Live at aspectbuilds.co.uk', description: 'Full site covering every service and area' },
      { metric: '0 → 1', label: 'Instagram to website', description: 'From a single social page to a complete professional presence' },
      { metric: '6 services', label: 'With dedicated pages', description: 'Extensions, lofts, heritage, structural, interiors, property care' },
      { metric: '98+', label: 'Lighthouse accessibility', description: 'WCAG 2.1 AA compliant, fully accessible' },
      { metric: '90+', label: 'Lighthouse performance', description: 'Responsive images, optimised video, fast mobile load' },
    ],
    timeline: [
      { month: 'Phase 1', title: 'Discovery & structure', description: 'Services, areas, and competitive landscape mapped out' },
      { month: 'Phase 2', title: 'Design & build', description: '40-page site designed and built with real project photography' },
      { month: 'Phase 3', title: 'Launch & SEO', description: 'Site live, Google Business Profile set up, Schema markup, sitemap submitted' },
      { month: 'Ongoing', title: 'Rankings', description: 'Starting to appear in local search results for Bath builder and trade keywords' },
    ],
    testimonial: {
      quote: "We had nothing online apart from our Instagram. SEO Kings built us a proper website — 40 pages covering every service, real photos of our work, and we're already starting to show up on Google. Proper job.",
      author: 'James',
      role: 'Aspect Builds & Maintenance, Bath',
    },
    websiteUrl: 'https://aspectbuilds.co.uk',
    googleMapsUrl: 'https://maps.place/Bath+Painter/51.3811,-2.359',
    services: ['Website Design', 'Local SEO', 'Google Business Profile'],
    relatedCases: ['bath-painter', 'new-decorating'],
  },
  'rg-extreme-pressure': {
    id: 6,
    slug: 'rg-extreme-pressure',
    business: 'RG Extreme Pressure',
    industry: 'Jet Washing & Pressure Washing',
    location: 'Bath & Bristol',
    logo: 'RG',
    tagline: 'From a Wix site to a custom 20-page website — live in under two weeks',
    heroImage: 'https://rgextremepressure.co.uk/images/wix-driveway.jpg',
    heroImageAlt: 'Jet washing Bath — RG Extreme Pressure website design case study',
    color: 'from-blue-600 to-cyan-700',
    overview: 'RG Extreme Pressure is a professional jet washing and pressure washing business serving Bath, Bristol and the surrounding area. Robert had an old Wix website that looked dated and wasn\'t generating enquiries. He had 111 five-star reviews on Google and a strong Facebook following, but his website didn\'t reflect the quality of his work. We built a completely custom 102-page website at rgextremepressure.co.uk with dedicated service pages for every cleaning type, before-and-after photo comparisons, area pages, a video showcase, and full Schema markup. The site went live in under two weeks and properly showcases a decade of professional jet washing experience.',
    challenge: [
      'Old Wix website that looked dated and didn\'t generate enquiries',
      'No dedicated service pages — all services crammed onto one page',
      'No before/after comparisons or visual proof of work quality',
      'Site wasn\'t mobile-optimised or fast-loading',
      'No Schema markup or local SEO foundations for Bath and Bristol searches',
      '102-page site needed to cover 9 different cleaning services with area pages and FAQs',
    ],
    solution: [
      'Full custom 102-page website built from scratch at rgextremepressure.co.uk',
      '9 dedicated service pages — driveway, patio, gutter, roof, render, block paving, soffit & fascia, conservatory, commercial',
      'Before-and-after photo slider comparisons on the homepage showing real work',
      'Video showcase section embedded on the homepage to build trust',
      'Two-colour brand system — blue (#0055A5) for structure, orange (#F26522) for CTAs',
      'Area pages targeting Bath and Bristol with local SEO content',
      'Schema markup (LocalBusiness) with 111 reviews, 4.8/5 rating, service area, and sameAs links',
      'Fully responsive, fast-loading static site built with Astro',
      'Contact form and click-to-call on every page for maximum conversion',
    ],
    results: [
      { metric: '102 pages', label: 'Live at rgextremepressure.co.uk', description: 'Full site covering every cleaning service, area and FAQ' },
      { metric: '9 services', label: 'With dedicated pages', description: 'Driveway, patio, gutter, roof, render, block paving, soffit, conservatory, commercial' },
      { metric: '111', label: 'Five-star Google reviews', description: 'Strong social proof carried across to the new site schema' },
      { metric: 'Under 2 weeks', label: 'From brief to live', description: 'Complete custom site designed, built and deployed' },
      { metric: 'Before & after', label: 'Visual proof', description: 'Interactive slider comparisons on the homepage — real work, not stock' },
    ],
    timeline: [
      { month: 'Phase 1', title: 'Discovery & structure', description: 'Services, areas, brand colours and competitive landscape mapped out' },
      { month: 'Phase 2', title: 'Design & build', description: '102-page site designed and built with custom before/after slider and video showcase' },
      { month: 'Phase 3', title: 'Launch & SEO', description: 'Site live, Schema markup with 111 reviews, sitemap submitted, Wix site retired' },
      { month: 'Ongoing', title: 'Rankings', description: 'Starting to appear in local search results for jet washing Bath and Bristol' },
    ],
    testimonial: {
      quote: 'SEO Kings built me a proper website — 20 pages covering every service, before and after photos of my actual work, and it loads fast on mobile. Way better than my old Wix site. Already getting more enquiries. Top bloke, knows his stuff.',
      author: 'Robert Galazka',
      role: 'RG Extreme Pressure, Jet Washing Bath & Bristol',
    },
    websiteUrl: 'https://rgextremepressure.co.uk',
    services: ['Website Design', 'Local SEO', 'Before/After Slider', 'Schema Markup'],
    relatedCases: ['aspect-builds', 'bath-painter'],
  },
};

const CaseStudyDetail = ({ params: staticParams }) => {
  const dynamicParams = useParams();
  const slug = staticParams?.slug ?? dynamicParams?.slug;
  const caseStudy = caseStudiesData[slug];

  const router = useRouter();
  useEffect(() => {
    if (!caseStudy) router.replace('/case-studies');
  }, [caseStudy, router]);
  if (!caseStudy) return null;

  const relatedCases = caseStudy.relatedCases
    .map(relatedSlug => caseStudiesData[relatedSlug])
    .filter(Boolean);

  return (
    <>
      <SEO schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${caseStudy.business} Case Study | SEO Kings`,
            description: `How we helped ${caseStudy.business} in ${caseStudy.location} achieve strong local SEO results.`,
            image: caseStudy.heroImage,
            datePublished: '2025-01-15',
            dateModified: '2026-01-28',
            author: { '@type': 'Organization', '@id': `${BASE_URL}/#organization` },
            publisher: { '@id': `${BASE_URL}/#organization` },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/case-studies/${caseStudy.slug}` },
            about: {
              '@type': 'LocalBusiness',
              name: caseStudy.business,
              description: `${caseStudy.industry} in ${caseStudy.location}`,
              ...(caseStudy.websiteUrl ? { url: caseStudy.websiteUrl } : {}),
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
              { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${BASE_URL}/case-studies` },
              { '@type': 'ListItem', position: 3, name: caseStudy.business },
            ],
          },
        ]} />

      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 overflow-hidden`}>
        {/* Background Image */}
        {caseStudy.heroImage && (
          <Image
            src={`${caseStudy.heroImage}?w=1920&h=600&fit=crop&auto=format&q=75`}
            alt={`${caseStudy.industry} Website Design in ${caseStudy.location} — ${caseStudy.business} case study`}
            width={1920}
            height={600}
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-80`} />
        <div className="absolute inset-0 bg-dark/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              {caseStudy.logo}
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {caseStudy.business}
              </h1>
              <p className="text-white/80 text-lg">
                {caseStudy.industry} · {caseStudy.location}
              </p>
            </div>
          </div>

          <p className="text-2xl sm:text-3xl font-medium text-white/90 max-w-3xl">
            {caseStudy.tagline}
          </p>

          {(caseStudy.websiteUrl || caseStudy.googleMapsUrl) && (
            <div className="flex flex-wrap gap-4 mt-6">
              {caseStudy.websiteUrl && (
                <a
                  href={caseStudy.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  View website
                </a>
              )}
              {caseStudy.googleMapsUrl && (
                <a
                  href={caseStudy.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  View on Google
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-8 bg-dark-lighter border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1">{result.metric}</div>
                <div className="text-white font-medium">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
          <p className="text-lg text-gray-400 leading-relaxed">{caseStudy.overview}</p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">The Challenge</h2>
              </div>
              <ul className="space-y-3">
                {caseStudy.challenge.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Our Solution</h2>
              </div>
              <ul className="space-y-3">
                {caseStudy.solution.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">The Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-dark-card border border-white/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{result.metric}</div>
                <div className="text-white font-medium mb-2">{result.label}</div>
                <div className="text-sm text-gray-500">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Project Timeline</h2>
          <div className="space-y-6">
            {caseStudy.timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${caseStudy.color}`} />
                  {index < caseStudy.timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-white/10 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="text-sm text-primary-light font-medium mb-1">{item.month}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 md:p-12 relative">
            <div className="absolute -top-4 left-8">
              <div className={`w-8 h-8 bg-gradient-to-br ${caseStudy.color} rounded-lg flex items-center justify-center`}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 pt-4">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${caseStudy.color} flex items-center justify-center text-white font-bold`}>
                {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-white">{caseStudy.testimonial.author}</div>
                <div className="text-gray-500">{caseStudy.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Services Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {caseStudy.services.map((service, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-dark border border-white/10 rounded-full text-white font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Full spotlight CTA when no related case studies */}
      {relatedCases.length === 0 && (
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">See the full story</h2>
            <p className="text-gray-400 mb-6">
              Our Client Spotlight page has the full breakdown: what we built, how it helps them show up on Google, and proof from search and Maps.
            </p>
            <Link
              href="/spotlight/peachy-cleans"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-dark px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              View full Client Spotlight
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
};

export default CaseStudyDetail;
