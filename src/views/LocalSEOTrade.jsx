'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';

const tradesData = {
  plumbers: {
    name: 'Plumbers',
    headline: 'Local SEO for Plumbers in Bath & North East Somerset',
    intro: 'When someone in Bath or Keynsham searches "plumber near me" or "emergency plumber Bath", they\'re ready to hire. If you\'re not on page one of Google, your competitors are getting those calls. We help plumbers across Bath and North East Somerset rank higher so you get more enquiries and more jobs.',
    whatWeDo: [
      'Keyword research for "plumber Bath", "plumber Keynsham" and every area you serve',
      'Google Business Profile optimisation so you appear in the map pack',
      'Website SEO: service pages, location pages, and content that ranks',
      'Local citations and backlinks from relevant directories',
      'Review growth and professional responses to every review',
      'Monthly reporting so you see rankings, calls and form leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a plumber?', a: 'Our local SEO packages start from £150/month. We tailor the plan to your area and competition. Every plumber gets a free audit first so you know exactly what we\'d do and what it would cost.' },
      { q: 'How long until I see results?', a: 'Most plumbers see noticeable improvements within 3–6 months. Quick wins like Google Business Profile optimisation can show results in weeks. Competitive terms like "plumber Bath" may take a few months to reach page one.' },
      { q: 'Do you work with one-man bands?', a: 'Yes. We work with sole traders, small teams, and larger plumbing firms across Bath and North East Somerset. The goal is the same: get you found when local customers search for a plumber.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset. We focus only on local SEO in Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Plumbers in Bath & North East Somerset',
    metaDescription: 'Get more plumbing jobs from Google. We help plumbers in Bath, Keynsham, Midsomer Norton and Bath and North East Somerset rank #1 for local searches. Free audit.',
  },
  electricians: {
    name: 'Electricians',
    headline: 'Local SEO for Electricians in Bath & North East Somerset',
    intro: 'Searches like "electrician Bath" and "electrician Keynsham" are made by people ready to book. If you\'re not on the first page of Google, you\'re missing those jobs. We help electricians across Bath and North East Somerset get found, get more calls, and win more work.',
    whatWeDo: [
      'Target the exact terms your customers search: "electrician [area]", "emergency electrician"',
      'Optimise your Google Business Profile so you show in the map pack',
      'Website SEO: service pages, areas you cover, and content that ranks',
      'Local citations and quality backlinks',
      'Review strategy and professional responses',
      'Monthly reports: rankings, traffic, calls and leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for an electrician?', a: 'Our local SEO packages start from £150/month. We offer a free audit first: we\'ll check your current rankings, your Google Business Profile and your website, then give you a clear plan and quote.' },
      { q: 'How long until I rank on Google?', a: 'Many electricians see improvements within 3–6 months. Google Business Profile optimisation can bring quick wins. Ranking for competitive terms may take a few months of consistent work.' },
      { q: 'Do you do websites as well?', a: 'Yes. We build fast, mobile-friendly websites that are optimised for local search. We can do website + SEO together so you have one team handling everything.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset. We specialise in local SEO for this area only.' },
    ],
    metaTitle: 'Local SEO for Electricians in Bath & North East Somerset',
    metaDescription: 'Get more electrical jobs from Google. We help electricians in Bath, Keynsham, Radstock and Bath and North East Somerset rank #1 for local searches. Free audit.',
  },
  roofers: {
    name: 'Roofers',
    headline: 'Local SEO for Roofers in Bath & North East Somerset',
    intro: 'Homeowners searching "roofer Bath" or "roofing Keynsham" are looking for someone now. We help roofers across Bath and North East Somerset rank on Google so you appear when it matters and get more enquiries.',
    whatWeDo: [
      'Keyword research for "roofer Bath", "roofing [area]" and related searches',
      'Google Business Profile setup and optimisation for the map pack',
      'Website SEO: services, areas, and content that ranks for local roofing searches',
      'Local citations and backlinks',
      'Review growth and professional responses',
      'Monthly reporting: rankings, calls and leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a roofer?', a: 'Our local SEO packages start from £150/month. We tailor everything to your area and competition. You get a free audit first so you know exactly what we\'d do and the cost.' },
      { q: 'How long until I see more enquiries?', a: 'Many roofers see a clear increase in enquiries within 3–6 months. Google Business Profile and basic website SEO can show results sooner. Competitive terms take longer but last longer too.' },
      { q: 'I\'m a sole trader — is SEO worth it?', a: 'Yes. Local SEO helps you compete with bigger firms. When someone searches "roofer Midsomer Norton", they often call the first few results. We get you into those spots.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Roofers in Bath & North East Somerset',
    metaDescription: 'Get more roofing jobs from Google. We help roofers in Bath, Midsomer Norton, Keynsham and Bath and North East Somerset rank #1 for local searches. Free audit.',
  },
  builders: {
    name: 'Builders',
    headline: 'Local SEO for Builders in Bath & North East Somerset',
    intro: 'People searching "builder Bath" or "building company Keynsham" are planning big projects — extensions, renovations, new builds. They research carefully before choosing. We help builders across Bath and North East Somerset appear at the top of Google so you win those larger, higher-value jobs.',
    whatWeDo: [
      'Keyword research for "builder Bath", "extension builder [area]" and project-specific terms',
      'Google Business Profile optimisation — project photos, service areas, review strategy',
      'Website SEO: service pages for extensions, renovations, new builds; area pages for each location',
      'Content strategy: planning guides, project showcases, before-and-after galleries',
      'Local citations from construction directories and trade associations',
      'Monthly reporting: rankings, enquiries, and which services generate the most leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a builder?', a: 'Our local SEO packages start from £150/month. Builder projects tend to be high-value, so even one extra enquiry a month from SEO can pay for itself many times over. We give you a free audit first with a clear plan and cost.' },
      { q: 'How long until I see more enquiries?', a: 'Most builders see noticeable improvements within 3–6 months. Google Business Profile optimisation can bring leads sooner. Ranking for competitive terms like "builder Bath" takes consistent work over a few months.' },
      { q: 'Can you help with my website too?', a: 'Yes. We build fast, mobile-friendly websites designed for builders — service pages, project galleries, testimonials and clear calls to action. We can do website and SEO together so everything works as one.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Builders in Bath & North East Somerset',
    metaDescription: 'Get more building enquiries from Google. We help builders in Bath, Keynsham, Midsomer Norton and Bath and North East Somerset rank #1 for local searches. Free audit.',
  },
  landscapers: {
    name: 'Landscapers',
    headline: 'Local SEO for Landscapers & Gardeners in Bath & North East Somerset',
    intro: 'Garden projects start with a Google search. "Landscaper Bath", "garden designer Keynsham", "patio builder Midsomer Norton" — these are high-intent searches from people ready to spend. We help landscapers and gardeners across Bath and North East Somerset rank higher and win more projects.',
    whatWeDo: [
      'Keyword research for "landscaper Bath", "garden [area]", "driveway [area]" and seasonal terms',
      'Google Business Profile optimisation with project photos and seasonal posts',
      'Website SEO: service pages for landscaping, garden design, driveways, fencing; area pages for each location',
      'Content strategy: seasonal guides, project galleries, plant and material advice',
      'Local citations from gardening and landscaping directories',
      'Monthly reporting: rankings, calls and form leads by service type',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a landscaper?', a: 'Our local SEO packages start from £150/month. Landscaping projects often run into thousands, so one extra job from Google more than covers the cost. Free audit first — no obligation.' },
      { q: 'How long until I see results?', a: 'Most landscapers see improvements in 3–6 months. Seasonal keywords like "garden clearance spring" can rank faster. GBP optimisation often brings results within weeks.' },
      { q: 'Do you work with one-man bands?', a: 'Yes. Many of our clients are sole traders or small teams. Local SEO levels the playing field — a well-optimised one-man band can outrank a bigger company in the map pack.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Landscapers in Bath & North East Somerset',
    metaDescription: 'Get more landscaping jobs from Google. We help landscapers and gardeners in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  cleaners: {
    name: 'Cleaning Services',
    headline: 'Local SEO for Cleaning Services in Bath & North East Somerset',
    intro: 'When someone searches "cleaner Bath" or "cleaning services Keynsham", they want someone reliable and local. The cleaning industry is competitive — but most competitors have poor SEO. We help cleaning businesses across Bath and North East Somerset rank higher with the right strategy.',
    whatWeDo: [
      'Keyword research for "cleaner Bath", "cleaning services [area]", "domestic cleaner" and niche terms',
      'Google Business Profile optimisation with service area coverage and frequent posts',
      'Website SEO: service pages for domestic, commercial, end-of-tenancy, oven cleaning; area pages for each location',
      'Review strategy: build trust with consistent five-star reviews and professional responses',
      'Local citations from cleaning directories and community listings',
      'Monthly reporting: rankings, calls and form leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped Peachy Cleans get found on Google — website and local SEO in Midsomer Norton that brought in consistent local enquiries.",
    },
    faqs: [
      { q: 'How much does SEO cost for a cleaning business?', a: 'Our local SEO packages start from £150/month. Cleaning services often see a fast return — even two extra regular clients a month covers your SEO investment. Free audit with no obligation.' },
      { q: 'How long until I get more enquiries?', a: 'Cleaning businesses often see results quickly. Google Business Profile optimisation can bring enquiries within weeks. Full website rankings typically improve over 3–6 months.' },
      { q: 'Can you help me get more reviews?', a: 'Yes. We set up a review generation system that makes it easy for happy customers to leave five-star reviews on Google. More reviews means higher rankings and more trust.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Cleaning Services in Bath & North East Somerset',
    metaDescription: 'Get more cleaning enquiries from Google. We help cleaners in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  'painters-decorators': {
    name: 'Painters & Decorators',
    headline: 'Local SEO for Painters & Decorators in Bath & North East Somerset',
    intro: 'Bath has more period properties than almost anywhere in the UK. Searches like "painter decorator Bath", "decorator Keynsham" and "heritage painting Midsomer Norton" come from homeowners planning real projects. We help painters and decorators across Bath and North East Somerset rank higher and win more work.',
    whatWeDo: [
      'Keyword research for "painter decorator Bath", "decorator [area]", "interior painting [area]" and heritage terms',
      'Google Business Profile optimisation with before-and-after project photos',
      'Website SEO: service pages for interior, exterior, heritage, wallpaper; area pages for each location',
      'Content strategy: project showcases, colour guides, period property advice',
      'Local citations from decorating directories and trade associations',
      'Monthly reporting: rankings, enquiries and most popular services',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a painter and decorator?', a: 'Our local SEO packages start from £150/month. A typical painting job runs into hundreds or thousands — one extra job from Google pays for months of SEO. Free audit first, no obligation.' },
      { q: 'How long until I see more enquiries?', a: 'Most painters see improvements in 3–6 months. Google Business Profile and local citations can bring faster results. Full website SEO rankings build steadily over a few months.' },
      { q: 'I specialise in period properties — can you target that?', a: 'Yes. Bath is full of Georgian and Victorian homes, and there\'s good search volume for "heritage painter Bath" and "period property decorator". We target the specific terms your ideal customers search for.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Painters & Decorators in Bath & North East Somerset',
    metaDescription: 'Get more painting and decorating jobs from Google. We help painters in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  'kitchen-fitters': {
    name: 'Kitchen Fitters',
    headline: 'Local SEO for Kitchen Fitters in Bath & North East Somerset',
    intro: 'Kitchen renovations are big-ticket projects — homeowners research carefully before choosing a fitter. When they search "kitchen fitter Bath" or "kitchen installation Keynsham", they need to find you. We help kitchen fitters across Bath and North East Somerset rank higher and win those high-value jobs.',
    whatWeDo: [
      'Keyword research for "kitchen fitter Bath", "kitchen installation [area]" and project-specific terms',
      'Google Business Profile optimisation with project photos and before/after galleries',
      'Website SEO: service pages for kitchen fitting, kitchen design, worktops, appliances; area pages for each location',
      'Content strategy: kitchen design guides, material comparisons, project showcases',
      'Local citations from kitchen and interior design directories',
      'Monthly reporting: rankings, enquiries and which services generate the most leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a kitchen fitter?', a: 'Our local SEO packages start from £150/month. Kitchen projects are high-value — one extra enquiry a month from SEO can pay for itself many times over. Free audit first, no obligation.' },
      { q: 'How long until I see more enquiries?', a: 'Most kitchen fitters see improvements within 3–6 months. Google Business Profile optimisation can bring results sooner. Competitive terms like "kitchen fitter Bath" take consistent work over a few months.' },
      { q: 'Can you help with my website too?', a: 'Yes. We build fast, mobile-friendly websites with project galleries, service pages and clear calls to action. Most kitchen fitters need a website that showcases their work visually — we specialise in that.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Kitchen Fitters in Bath & North East Somerset',
    metaDescription: 'Get more kitchen fitting enquiries from Google. We help kitchen fitters in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  'bathroom-fitters': {
    name: 'Bathroom Fitters',
    headline: 'Local SEO for Bathroom Fitters in Bath & North East Somerset',
    intro: 'Bathroom renovations are one of the most searched-for home improvements. "Bathroom fitter Bath", "bathroom installation Keynsham" — these are high-intent searches from homeowners ready to spend. We help bathroom fitters across Bath and North East Somerset rank higher and win more projects.',
    whatWeDo: [
      'Keyword research for "bathroom fitter Bath", "bathroom installation [area]" and related terms',
      'Google Business Profile optimisation with project photos and area coverage',
      'Website SEO: service pages for bathroom fitting, wet rooms, tiling, underfloor heating; area pages for each location',
      'Content strategy: bathroom design guides, before/after galleries, material advice',
      'Local citations from bathroom and home improvement directories',
      'Monthly reporting: rankings, enquiries and lead sources',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a bathroom fitter?', a: 'Our local SEO packages start from £150/month. Bathroom projects are high-value — one extra job from Google covers months of SEO. Free audit first, no obligation.' },
      { q: 'How long until I rank on Google?', a: 'Most bathroom fitters see improvements within 3–6 months. Google Business Profile optimisation can bring quicker wins. Full website rankings build steadily over a few months.' },
      { q: 'Should I have a gallery on my website?', a: 'Absolutely. Bathroom fitting is visual — homeowners want to see your work. A gallery of completed bathrooms is one of the most important conversion tools on your website.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Bathroom Fitters in Bath & North East Somerset',
    metaDescription: 'Get more bathroom fitting enquiries from Google. We help bathroom fitters in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  'heating-engineers': {
    name: 'Heating Engineers',
    headline: 'Local SEO for Heating Engineers in Bath & North East Somerset',
    intro: 'Boiler breakdowns, annual services, heat pump installations — heating jobs come from urgent searches. "Heating engineer Bath", "boiler repair Keynsham", "gas engineer Midsomer Norton" — these are people who need you now. We help heating engineers across Bath and North East Somerset rank higher and get those calls.',
    whatWeDo: [
      'Keyword research for "heating engineer Bath", "boiler repair [area]", "gas safe engineer" and heat pump terms',
      'Google Business Profile optimisation with Gas Safe badge, service areas and emergency callout info',
      'Website SEO: service pages for boiler repair, boiler installation, servicing, heat pumps; area pages for each location',
      'Content strategy: boiler guides, heat pump advice, energy efficiency tips',
      'Local citations from heating and plumbing directories',
      'Monthly reporting: rankings, emergency call leads and service bookings',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a heating engineer?', a: 'Our local SEO packages start from £150/month. Emergency boiler repairs alone can generate hundreds per job — SEO pays for itself quickly. Free audit first, no obligation.' },
      { q: 'How long until I rank for "boiler repair Bath"?', a: 'Google Business Profile optimisation can get you into the map pack within weeks. Full website rankings for competitive heating terms typically take 3–6 months of consistent SEO work.' },
      { q: 'Can you target emergency boiler repair searches?', a: 'Yes. Emergency boiler repair is one of the highest-value local searches. We optimise your Google Business Profile and website so you appear when someone searches "emergency boiler repair Bath" at 2am.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Heating Engineers in Bath & North East Somerset',
    metaDescription: 'Get more boiler and heating jobs from Google. We help heating engineers in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  plasterers: {
    name: 'Plasterers',
    headline: 'Local SEO for Plasterers in Bath & North East Somerset',
    intro: 'Plastering work comes from renovators, builders, and homeowners doing up period properties. "Plasterer Bath", "plastering Keynsham", "skim plasterer Midsomer Norton" — these searches lead to real jobs. We help plasterers across Bath and North East Somerset rank higher and win more work.',
    whatWeDo: [
      'Keyword research for "plasterer Bath", "plastering [area]", "skimming" and rendering terms',
      'Google Business Profile optimisation with project photos and service area coverage',
      'Website SEO: service pages for skimming, rendering, dry lining, artex removal; area pages for each location',
      'Content strategy: plastering guides, before/after photos, period property plastering advice',
      'Local citations from plastering and building directories',
      'Monthly reporting: rankings, calls and form leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a plasterer?', a: 'Our local SEO packages start from £150/month. Plastering jobs add up — even a few extra enquiries a month more than covers your SEO. Free audit first, no obligation.' },
      { q: 'How long until I see more enquiries?', a: 'Most plasterers see improvements in 3–6 months. Google Business Profile optimisation can bring faster results. Full website rankings build over a few months of consistent work.' },
      { q: 'Should I mention artex removal on my website?', a: 'Yes. Artex removal is a high-demand search term, especially in areas with 1970s and 80s housing. It\'s a specific service that homeowners search for directly — a dedicated page ranks well.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Plasterers in Bath & North East Somerset',
    metaDescription: 'Get more plastering jobs from Google. We help plasterers in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  'gas-engineers': {
    name: 'Gas Engineers',
    headline: 'Local SEO for Gas Engineers in Bath & North East Somerset',
    intro: 'Gas Safe registration is your biggest trust signal — but it means nothing if customers cannot find you. "Gas engineer Bath", "boiler repair Keynsham", "gas safe plumber Midsomer Norton" — these emergency and installation searches are high-intent and high-value. We help gas engineers across Bath and North East Somerset rank higher and get more calls.',
    whatWeDo: [
      'Keyword research for "gas engineer Bath", "boiler repair [area]", "gas safe" and heating terms',
      'Google Business Profile optimisation with Gas Safe badge, emergency hours and service area',
      'Website SEO: dedicated boiler repair, boiler installation, gas safety certificate pages; area pages for each location',
      'Content strategy: boiler buyer guides, gas safety advice, annual service reminders',
      'Local citations from Gas Safe Register, Trustatrader, heating directories',
      'Monthly reporting: rankings, calls and form leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a gas engineer?', a: 'Our local SEO packages start from £150/month. A single boiler installation from a Google lead covers months of SEO. Free audit first, no obligation.' },
      { q: 'Should I have a separate page for boiler repair and boiler installation?', a: 'Yes. Repair and installation are different search intents. Someone searching "boiler repair Bath" needs help now; someone searching "new boiler Bath" is researching. Separate pages rank for both.' },
      { q: 'Does my Gas Safe number help with SEO?', a: 'Indirectly, yes. Showing your Gas Safe registration number builds trust, reduces bounce rates and increases conversions. We make sure it is prominent on every page.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Gas Engineers in Bath & North East Somerset',
    metaDescription: 'Get more boiler repair and gas engineer enquiries from Google. We help Gas Safe engineers in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  'loft-conversions': {
    name: 'Loft Conversion Specialists',
    headline: 'Local SEO for Loft Conversion Specialists in Bath & North East Somerset',
    intro: 'Loft conversions are one of the highest-value home improvement searches in Bath. Period properties, restricted space, planning complexity — homeowners search specifically for "loft conversion Bath", "dormer loft Keynsham", "velux conversion Midsomer Norton". We help loft converters across Bath and North East Somerset rank higher and win these big jobs.',
    whatWeDo: [
      'Keyword research for "loft conversion Bath", "dormer loft [area]", "velux conversion" and extension terms',
      'Google Business Profile optimisation with project photos, before/after and service area coverage',
      'Website SEO: dedicated dormer, velux, hip-to-gable pages; planning permission pages; area pages for each location',
      'Content strategy: loft conversion cost guides, planning permission advice, before/after showcases',
      'Local citations from building and renovation directories',
      'Monthly reporting: rankings, calls and form leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a loft conversion company?', a: 'Our local SEO packages start from £150/month. A single loft conversion from a Google lead is worth thousands — your SEO pays for itself quickly. Free audit first, no obligation.' },
      { q: 'Should I mention planning permission on my website?', a: 'Absolutely. Planning permission is the number one concern for homeowners considering a loft conversion, especially in Bath conservation areas. A dedicated planning permission page answers the question and builds trust.' },
      { q: 'Do before and after photos help with SEO?', a: 'Yes — image search drives traffic for "loft conversion before and after", and a strong gallery keeps visitors on your site longer, which signals quality to Google.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Loft Conversion Specialists in Bath & North East Somerset',
    metaDescription: 'Get more loft conversion enquiries from Google. We help loft converters in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  'extension-builders': {
    name: 'Extension Builders',
    headline: 'Local SEO for Extension Builders in Bath & North East Somerset',
    intro: 'Home extensions in Bath are big business — £30-80k projects from homeowners who search "house extension Bath", "rear extension Keynsham", "side return extension Midsomer Norton". These are considered, high-value searches. We help extension builders across Bath and North East Somerset rank higher and win these contracts.',
    whatWeDo: [
      'Keyword research for "house extension Bath", "extension builder [area]", "single storey extension" and planning terms',
      'Google Business Profile optimisation with project photos, planning expertise and service area',
      'Website SEO: dedicated single-storey, double-storey, wrap-around pages; planning permission pages; area pages',
      'Content strategy: extension cost guides, planning advice, project timelines, before/after showcases',
      'Local citations from building and renovation directories',
      'Monthly reporting: rankings, calls and form leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for an extension builder?', a: 'Our local SEO packages start from £150/month. One extension contract from a Google lead is worth tens of thousands — your SEO pays for itself many times over. Free audit first, no obligation.' },
      { q: 'Should I focus on planning permission content?', a: 'Yes. Bath has conservation areas and listed buildings that complicate planning. A planning permission page positions you as an expert and captures search traffic from homeowners at the research stage.' },
      { q: 'Do I need separate pages for different extension types?', a: 'Yes. "Single storey extension" and "double storey extension" are different searches. Dedicated pages let you target both and give homeowners the detail they want.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Extension Builders in Bath & North East Somerset',
    metaDescription: 'Get more extension enquiries from Google. We help extension builders in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
  'drainage-engineers': {
    name: 'Drainage Engineers',
    headline: 'Local SEO for Drainage Engineers in Bath & North East Somerset',
    intro: 'Drainage problems are urgent. "Drain unblocking Bath", "drainage engineer Keynsham", "CCTV drain survey Midsomer Norton" — these are emergency searches from people who need help now. We help drainage engineers across Bath and North East Somerset rank higher and capture these high-intent calls.',
    whatWeDo: [
      'Keyword research for "drain unblocking Bath", "drainage engineer [area]", "CCTV drain survey" and emergency terms',
      'Google Business Profile optimisation with 24/7 availability, emergency hours and service area',
      'Website SEO: dedicated drain unblocking, CCTV survey, drain repair pages; emergency page; area pages',
      'Content strategy: drainage advice guides, warning signs, prevention tips',
      'Local citations from drainage and emergency services directories',
      'Monthly reporting: rankings, calls and form leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a drainage engineer?', a: 'Our local SEO packages start from £150/month. Emergency drainage calls are high-value — even one extra call a week covers your SEO. Free audit first, no obligation.' },
      { q: 'Should I include an emergency page?', a: 'Essential. Blocked drains are urgent. A dedicated emergency page with your 24/7 phone number captures "drain unblocking near me" searches when people are desperate.' },
      { q: 'Does CCTV drain survey content help with SEO?', a: 'Yes. "CCTV drain survey" is a specific search with less competition. A dedicated page positions you as a professional service, not just someone with a rod.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Drainage Engineers in Bath & North East Somerset',
    metaDescription: 'Get more drainage enquiries from Google. We help drainage engineers in Bath, Keynsham, Midsomer Norton and BANES rank #1 for local searches. Free audit.',
  },
};

const LocalSEOTrade = ({ params: staticParams }) => {
  const dynamicParams = useParams();
  const tradeSlug = staticParams?.tradeSlug ?? dynamicParams?.tradeSlug;
  const router = useRouter();
  const trade = tradeSlug ? tradesData[tradeSlug] : null;

  useEffect(() => {
    if (!trade) router.replace('/local-seo');
  }, [trade, router]);

  if (!trade) return null;

  return (
    <>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/local-seo" className="hover:text-white transition-colors">Local SEO</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-light">For {trade.name}</li>
            </ol>
          </nav>
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
            Local SEO for {trade.name}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {trade.headline}
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
            {trade.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center">
              Get a Free Website Quote
            </Link>
            <a href="tel:07702264921" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3" aria-label="Call SEO Kings on 07702 264 921">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              07702 264 921
            </a>
          </div>
        </div>
      </section>

      {/* What we do for [trade] */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">What we do for {trade.name}</h2>
          <ul className="space-y-4">
            {trade.whatWeDo.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas we serve */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">Areas we serve</h2>
          <p className="text-gray-400 mb-6">
            We help {trade.name.toLowerCase()} in Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and across Bath and North East Somerset.
          </p>
          <Link href="/areas" className="inline-flex items-center gap-2 text-primary-light hover:text-white font-medium transition-colors">
            View all areas we cover
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* Case study CTA */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">Real results for {trade.name.toLowerCase()}</h2>
          <p className="text-gray-400 mb-6">
            {trade.caseStudy.snippet}
          </p>
          <Link href={`/case-studies/${trade.caseStudy.slug}`} className="inline-flex items-center gap-2 text-primary-light hover:text-white font-medium transition-colors">
            Read the {trade.caseStudy.business} case study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">SEO for {trade.name} – FAQs</h2>
            <p className="text-gray-400">Common questions about local SEO for {trade.name.toLowerCase()} in Bath & North East Somerset.</p>
          </div>
          <FAQAccordion faqs={trade.faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default LocalSEOTrade;
