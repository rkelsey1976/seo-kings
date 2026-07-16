/**
 * Bristol industry SEO pages — data-driven content for /seo/bristol/[slug]/
 *
 * Each industry page targets a long-tail commercial query (e.g. "SEO for
 * plumbers Bristol") and links back up to /seo/bristol with exact-match
 * anchor text. The cluster of N industry pages passes authority to the
 * parent /seo/bristol — the hub — which is our target for the head term
 * "SEO Bristol".
 *
 * To add a new industry: add an entry below + a `slug` in the SAME order
 * as generateStaticParams() in app/seo/bristol/[industry]/page.jsx.
 */

export const BASE_URL = 'https://seo-kings.co.uk';

// Plumbers, electricians, builders, roofers, cleaners — Phase 1 (5 industries)
// Heating engineers, landscapers, bathroom fitters, kitchen fitters, plasterers
// — Phase 2 (add when Phase 1 ranks).
export const BRISTOL_INDUSTRIES = {
  plumbers: {
    name: 'Plumbers',
    plural: 'Plumbers',
    singular: 'Plumber',
    slug: 'plumbers',
    metaTitle: 'SEO for Plumbers in Bristol | Get More Calls from Google | SEO Kings',
    metaDescription:
      'SEO for plumbers in Bristol. Get your plumbing business ranking in the Google Map Pack and on page one for "plumber Bristol" searches. From £150/month. Free audit.',
    badge: 'SEO for Plumbers · Bristol · BS1–BS16',
    h1: 'SEO for Plumbers in Bristol',
    heroDescription:
      'When a Bristol homeowner has a burst pipe at 9pm, they don\'t scroll past page one. We get Bristol plumbers ranking for the searches that turn into emergency callouts — Map Pack, organic results, and the long-tail terms that bring in steady work between emergencies.',
    intro:
      'Plumbing is the most competitive trade in Bristol search. Every plumber, every drainage company, every bathroom installer is fighting for the same handful of Map Pack slots. Most lose. The ones that win aren\'t bigger — they have a faster website, properly structured service pages, a managed Google Business Profile, and reviews that build month on month. That\'s what we do. We\'re based 20 minutes from Bristol, we work exclusively with trades, and we rank #1 organically for "SEO Bristol" — so we know what it takes to win in this market.',
    services: [
      'Emergency plumber SEO — rank for "emergency plumber Bristol", "plumber Bristol" and "24 hour plumber BS*" across all BS postcodes',
      'Google Business Profile optimisation — claim the Map Pack for your service area with proper categories, services, photos and review velocity',
      'Service page SEO — dedicated pages for boiler repair, leak detection, bathroom installs, drain unblocking, boiler servicing and central heating',
      'Location pages — rank in BS1 to BS16 postcodes and surrounding areas like Kingswood, Hanham, Brislington, Filton and Stapleton',
      'Review generation — systematic Google review requests after every job to build the review count and rating that wins the Map Pack',
      'Citation building — listings on Checkatrade, TrustATrader, Yell, MyBuilder, Rated People and Bristol-specific directories',
    ],
    keywords: [
      'plumber Bristol',
      'emergency plumber Bristol',
      'boiler repair Bristol',
      'plumber BS1',
      'plumber BS5',
      'plumber BS7',
      'plumber Kingswood',
      'plumber Hanham',
      '24 hour plumber Bristol',
      'drain unblocking Bristol',
      'boiler service Bristol',
      'bathroom fitter Bristol',
    ],
    result: 'Page one for "plumber Bristol" within 4 months',
    resultDetail:
      'Average client result: ranking improvements across 8-12 keyword terms in the first quarter, with Map Pack visibility for the primary "plumber + location" term within 8-12 weeks.',
    proof: 'Ranks #1 organically for "SEO Bristol" — proven the system on the most competitive keyword in the South West.',
    faqs: [
      {
        q: 'How long does SEO take for a plumber in Bristol?',
        a: 'Google Business Profile changes show in Bristol Map Pack within 2-6 weeks. On-page SEO for terms like "plumber Bristol" or "emergency plumber BS5" typically shows ranking movement within 2-4 months. Competitive head terms can take 4-6 months but steady work from location-specific terms often starts in month two. We report monthly so you see exactly what\'s moving.',
      },
      {
        q: 'What does SEO cost for a Bristol plumbing business?',
        a: 'Our SEO packages start at £150/month with a free audit first. Most Bristol plumbers are on the £150 or £200 tier — enough to cover technical SEO, Google Business Profile management, content and citation building. We don\'t do lock-in contracts. If it\'s not working, you leave.',
      },
      {
        q: 'Do I need a new website for SEO to work for my plumbing business?',
        a: 'Not always. If your current site is fast and has clean code, SEO alone can move you. Most plumber websites are slow WordPress builds with bloated themes — if that\'s you, a new site is the faster route. We build fast, mobile-first trade sites from £250. Many clients do website + SEO together as one campaign.',
      },
      {
        q: 'How do I rank in the Google Map Pack as a plumber in Bristol?',
        a: 'Three things matter: (1) a verified and fully optimised Google Business Profile with the right primary and secondary categories, services, photos and opening hours; (2) consistent NAP (name, address, phone) across all directory listings; (3) a steady flow of new Google reviews. We handle all three as part of the local SEO work and we build it into the monthly reporting so you can see the Map Pack ranking movement.',
      },
      {
        q: 'Can you guarantee I\'ll rank #1 for "plumber Bristol"?',
        a: 'No — anyone who guarantees a specific ranking is lying. What we can say is that we rank #1 organically for "SEO Bristol" (proving the system works on a much more competitive term), and our clients typically see Map Pack visibility within 8-12 weeks and page-one organic rankings within 3-6 months. The results are real but they\'re not instant.',
      },
    ],
  },

  electricians: {
    name: 'Electricians',
    plural: 'Electricians',
    singular: 'Electrician',
    slug: 'electricians',
    metaTitle: 'SEO for Electricians in Bristol | Get Found on Google | SEO Kings',
    metaDescription:
      'SEO for electricians in Bristol. Rank for "electrician Bristol", EICR, EV charger install and emergency callout searches. From £150/month. Free audit.',
    badge: 'SEO for Electricians · Bristol · BS1–BS16',
    h1: 'SEO for Electricians in Bristol',
    heroDescription:
      'Bristol electricians are competing harder than ever — new build contracts, EICR demand, EV charger installs and emergency callouts all have their own search behaviour. We build SEO campaigns that target each of these properly, so the right customers find you at the right time.',
    intro:
      'Electrician search in Bristol splits into two camps: emergency work ("emergency electrician Bristol", "power cut BS7") and project work ("EICR Bristol", "EV charger install Bristol", "rewire Bristol"). The Map Pack wins the emergencies; organic results win the projects. You need both, and most electrician websites have neither. We fix that. Based in Keynsham, 20 minutes from Bristol, we rank #1 for "SEO Bristol" — so the methodology is proven at the highest level.',
    services: [
      'Emergency electrician SEO — rank for "emergency electrician Bristol", "electrician BS*" and 24-hour electrical callout terms',
      'EICR and landlord certificate SEO — dedicated pages for "EICR Bristol", "landlord electrical certificate", "electrical safety certificate"',
      'EV charger installer SEO — rank for "EV charger installer Bristol", "OZEV approved installer", "Tesla wall connector Bristol"',
      'Rewire and consumer unit SEO — pages for "house rewire Bristol", "consumer unit replacement", "fuse board upgrade"',
      'Location pages — rank across BS1–BS16 plus Keynsham, Kingswood, Stapleton, Filton, Downend and Staple Hill',
      'Google Business Profile optimisation with electrical-specific categories and services',
    ],
    keywords: [
      'electrician Bristol',
      'emergency electrician Bristol',
      'EICR Bristol',
      'landlord electrical certificate Bristol',
      'EV charger installer Bristol',
      'house rewire Bristol',
      'consumer unit replacement Bristol',
      'electrician BS1',
      'electrician BS5',
      'electrician BS7',
      'electrician BS16',
    ],
    result: 'Page one for "electrician Bristol" within 4 months',
    resultDetail:
      'Map Pack visibility for the primary "electrician + location" term typically achieved within 6-10 weeks. EICR and EV charger terms rank in 2-3 months because commercial intent is high and the competition is weaker.',
    proof: 'Ranked #1 organically for "SEO Bristol" — applied the same system that works on a £3k+/month keyword.',
    faqs: [
      {
        q: 'How long does SEO take for an electrician in Bristol?',
        a: 'Map Pack rankings for "electrician + Bristol area" usually show within 4-8 weeks once Google Business Profile is properly optimised. Organic rankings for head terms like "electrician Bristol" take 3-6 months. EICR and EV charger terms rank faster — typically 2-3 months — because the commercial intent is clear and the competition is less developed.',
      },
      {
        q: 'How much does SEO cost for Bristol electricians?',
        a: '£150/month starting price, with most electricians on the £150 or £200 tier. That covers technical SEO, GBP management, content creation for your service pages, citation building and monthly reports. We don\'t do lock-in contracts — you stay because it works.',
      },
      {
        q: 'My current electrician website isn\'t getting any calls. Will SEO fix it?',
        a: 'Probably, but it depends why. If the site is slow, has no service pages, or has thin content, SEO alone will struggle. We do a free audit first and tell you honestly whether you need a new website, SEO on the existing one, or both. Many electricians do both — new site from £250 plus SEO from £150/month.',
      },
      {
        q: 'Should I target EICR and EV charger searches as well as emergency work?',
        a: 'Yes — these are lower-competition terms with very high commercial intent. An electrician ranking for "EICR Bristol" gets a steady stream of landlord and homebuyer enquiries that convert at high rates because the customer has already decided to book. We build dedicated pages for these terms and they typically rank within 2-3 months.',
      },
      {
        q: 'Do you build websites for electricians too?',
        a: 'Yes. We build fast, mobile-first electrician websites from £250 with proper service pages, EICR landing pages, location pages and a structure that\'s ready to rank on day one. Many clients do website + SEO as one campaign because the cost of doing them separately is higher and the results take longer.',
      },
    ],
  },

  builders: {
    name: 'Builders',
    plural: 'Builders',
    singular: 'Builder',
    slug: 'builders',
    metaTitle: 'SEO for Builders in Bristol | Get More Enquiries | SEO Kings',
    metaDescription:
      'SEO for builders in Bristol. Rank for "builder Bristol", extensions, loft conversions and renovation searches. From £150/month. Free audit.',
    badge: 'SEO for Builders · Bristol · BS1–BS16',
    h1: 'SEO for Builders in Bristol',
    heroDescription:
      'Bristol builders are missing out on high-value project enquiries because their websites aren\'t ranking. Extensions, loft conversions, renovations — these are searches with serious budget attached. We get Bristol builders ranking for the terms that bring in £20k+ projects.',
    intro:
      'Bristol has a chronic housing shortage and a steady flow of homeowners looking to extend, convert or renovate rather than move. That\'s a long tail of high-value searches — "extension Bristol", "loft conversion Bristol", "renovation BS6" — and most builders are invisible for all of them. The ones that win have done two things: built proper service pages for each project type, and built location pages for the postcodes they actually work in. We do both, plus the technical SEO and content depth that gets Google to take the site seriously.',
    services: [
      'Extension builder SEO — dedicated pages for rear extensions, side extensions, wraparound extensions and double-storey extensions across Bristol',
      'Loft conversion SEO — rank for "loft conversion Bristol", "dormer conversion BS*", "hip to gable" and "mansard loft conversion"',
      'Renovation SEO — full property renovation, kitchen extension + renovation, period property restoration (lots of Georgian/Victorian stock in Clifton and Redland)',
      'General building SEO — "builder Bristol", "building company BS*", "local builder near me" with proper Map Pack optimisation',
      'Location pages — BS1–BS16 plus Clifton, Redland, Cotham, Bishopston, Westbury-on-Trym, Henleaze and Shirehampton',
      'Project gallery and case study SEO — image-optimised project pages that rank in Google Images and convert browsers into enquiries',
    ],
    keywords: [
      'builder Bristol',
      'extension Bristol',
      'loft conversion Bristol',
      'renovation Bristol',
      'building company Bristol',
      'rear extension Bristol',
      'dormer conversion Bristol',
      'builder BS1',
      'builder BS6',
      'builder BS8',
      'builder Clifton Bristol',
      'builder Redland Bristol',
    ],
    result: 'Page one for "extension Bristol" or "loft conversion Bristol" within 4 months',
    resultDetail:
      'Project-type terms like "extension Bristol" and "loft conversion Bristol" typically reach page one within 3-5 months. Location-specific terms like "builder Clifton" often rank in 6-10 weeks. Head term "builder Bristol" is 4-6 months.',
    proof: '#1 organic ranking for "SEO Bristol" — the most competitive local SEO term in the South West.',
    faqs: [
      {
        q: 'How long does SEO take for a Bristol builder?',
        a: 'Location-specific terms like "builder Clifton" or "extension BS6" often rank within 6-10 weeks. Project-type terms like "extension Bristol" or "loft conversion Bristol" take 3-5 months. The head term "builder Bristol" is 4-6 months because it\'s the most competitive. We report monthly so you see exactly what\'s moving.',
      },
      {
        q: 'How much does SEO cost for a builder?',
        a: '£150/month starting price. Most Bristol builders are on the £150 or £200 tier — that covers technical SEO, content creation, location pages, citation building and Google Business Profile management. No lock-in contracts.',
      },
      {
        q: 'I get most of my work from recommendations. Do I really need SEO?',
        a: 'Recommendations are great but they cap your growth. SEO gives you a consistent stream of new enquiries from homeowners actively searching for the project you do. Bristol has high property values and a chronic housing shortage — homeowners extend, convert and renovate rather than move. They search for builders online. If you\'re not there, your competitors are.',
      },
      {
        q: 'Should I have separate pages for each project type I do?',
        a: 'Yes. A single "services" page can\'t rank for "extension Bristol", "loft conversion Bristol" and "renovation Bristol" simultaneously. Each project type needs its own page with proper structure, location context, project photos and internal links. We build these as part of the campaign and they\'re the highest-converting pages on the site.',
      },
      {
        q: 'Do you build websites for builders?',
        a: 'Yes — fast, mobile-first builder websites from £250 with proper service pages, project gallery, location pages and case study structure. Most builders do website + SEO together because the combined cost is lower than doing them separately and the results compound.',
      },
    ],
  },

  roofers: {
    name: 'Roofers',
    plural: 'Roofers',
    singular: 'Roofer',
    slug: 'roofers',
    metaTitle: 'SEO for Roofers in Bristol | Storm Damage, Repairs & Re-roofs | SEO Kings',
    metaDescription:
      'SEO for roofers in Bristol. Rank for "roofer Bristol", storm damage, roof repairs and re-roof searches. From £150/month. Free audit.',
    badge: 'SEO for Roofers · Bristol · BS1–BS16',
    h1: 'SEO for Roofers in Bristol',
    heroDescription:
      'Storm damage calls, emergency repairs, re-roof quotes — Bristol roofers need to be visible the moment a homeowner searches. We build SEO campaigns that put you in the Map Pack for emergency work and on page one for the high-value re-roof and replacement terms.',
    intro:
      'Roofing is brutally competitive in Bristol search. Every storm puts a spike in "roof repair near me" and every roofer within 30 miles chases the same customers. The roofers that win aren\'t the ones with the biggest adspend — they\'re the ones with the best Google Business Profile, the most recent reviews, and a website that ranks for both emergency terms and project terms. We build that system. Based in Keynsham, 20 minutes from Bristol, working exclusively with trades — and we rank #1 for "SEO Bristol" to prove the system works.',
    services: [
      'Emergency roof repair SEO — rank for "emergency roof repair Bristol", "storm damage roofer", "leaking roof BS*"',
      'Google Business Profile optimisation — roofing-specific categories, services, photo updates after every job, review velocity',
      'Re-roof and replacement SEO — pages for "re-roof Bristol", "new roof Bristol", "tiled roof replacement", "slate roof Bristol"',
      'Roof repair SEO — "roof repair Bristol", "leaking roof repair", "chimney repointing", "lead flashing repair"',
      'Location pages — BS1–BS16 plus Keynsham, Kingswood, Hanham, Downend, Staple Hill, Winterbourne and Yate',
      'Storm response SEO — fast updates to GBP posts and service pages when severe weather hits Bristol to capture emergency demand',
    ],
    keywords: [
      'roofer Bristol',
      'roof repair Bristol',
      'emergency roofer Bristol',
      're-roof Bristol',
      'new roof Bristol',
      'storm damage roofer Bristol',
      'leaking roof repair Bristol',
      'roofer BS1',
      'roofer BS5',
      'roofer BS7',
      'roofing company Bristol',
      'chimney repair Bristol',
    ],
    result: 'Map Pack for "roofer + Bristol area" within 6-10 weeks',
    resultDetail:
      'Map Pack rankings for emergency terms typically achieved within 6-10 weeks. Organic rankings for "re-roof Bristol" and "new roof Bristol" within 3-5 months. Storm response GBP posts can bring same-day enquiries during severe weather.',
    proof: '#1 organic ranking for "SEO Bristol" — the most competitive local SEO keyword in the region.',
    faqs: [
      {
        q: 'How long does SEO take for a Bristol roofer?',
        a: 'Map Pack rankings for "roofer + Bristol area" terms usually appear within 6-10 weeks once GBP is properly optimised. Organic rankings for project terms like "re-roof Bristol" or "new roof Bristol" take 3-5 months. Emergency terms rank faster when GBP is active and review velocity is steady.',
      },
      {
        q: 'How much does SEO cost for a roofing business?',
        a: '£150/month starting price. Most roofers are on the £150 or £200 tier. That covers GBP management, technical SEO, content, citation building and review generation. No lock-in contracts.',
      },
      {
        q: 'I already get storm damage work from word of mouth. Do I need SEO?',
        a: 'Word of mouth is unpredictable. SEO gives you a consistent baseline of enquiries from people actively searching. After a storm, "emergency roofer Bristol" search volume spikes 5-10x. If you\'re ranking for that term and your GBP is active, you take the lion\'s share of those calls. The roofers that rank during storms are the ones whose GBP has been built up steadily over months.',
      },
      {
        q: 'Can you help during a storm event?',
        a: 'Yes — as part of the monthly SEO we post GBP updates and update service pages during severe weather. We can also push out emergency-service content within 24-48 hours when storms hit Bristol. This is the difference between capturing storm demand and losing it to a competitor who happens to be ranking that week.',
      },
      {
        q: 'Do you build websites for roofers?',
        a: 'Yes — fast, mobile-first roofer websites from £250 with proper service pages, before/after galleries, location pages and GBP integration. Many roofers do website + SEO together because the new site is built to rank from day one and the SEO work compounds faster.',
      },
    ],
  },

  cleaners: {
    name: 'Cleaners',
    plural: 'Cleaners',
    singular: 'Cleaner',
    slug: 'cleaners',
    metaTitle: 'SEO for Cleaners in Bristol | Domestic, End of Tenancy & Commercial | SEO Kings',
    metaDescription:
      'SEO for cleaners in Bristol. Rank for "cleaner Bristol", end of tenancy, deep clean and commercial cleaning searches. From £150/month. Free audit.',
    badge: 'SEO for Cleaners · Bristol · BS1–BS16',
    h1: 'SEO for Cleaners in Bristol',
    heroDescription:
      'Bristol cleaners compete in a busy local market — domestic cleans, end of tenancy, deep cleans, office cleaning. We build SEO campaigns that put you in front of each customer type at the moment they\'re searching, with Map Pack visibility for local work and organic rankings for the higher-value commercial terms.',
    intro:
      'Cleaning is volume-driven. You need 10-20 new enquiries a month to keep a team busy, and the customers searching in Bristol are split between domestic (regular weekly cleans), end of tenancy (one-off high-value), deep cleans (one-off) and commercial (contracts). Each of these has different search behaviour and different conversion rates. We build SEO campaigns that target all four — separate service pages, separate GBP service entries, separate review strategies. Peachy Cleans, our most recent case study, went from invisible to 234 monthly GBP clicks in under six months using this exact approach.',
    services: [
      'Domestic cleaning SEO — rank for "cleaner Bristol", "weekly cleaner BS*", "house cleaner near me"',
      'End of tenancy cleaning SEO — dedicated pages for "end of tenancy cleaning Bristol", "tenancy clean BS*", "move out cleaner"',
      'Deep cleaning SEO — "deep clean Bristol", "spring clean", "one-off clean", "carpet clean Bristol"',
      'Commercial cleaning SEO — "office cleaning Bristol", "commercial cleaning company", "contract cleaner BS*"',
      'Google Business Profile optimisation with cleaning-specific categories and seasonal service updates',
      'Review generation — steady review flow across domestic, end of tenancy and commercial customers to win the Map Pack',
    ],
    keywords: [
      'cleaner Bristol',
      'end of tenancy cleaning Bristol',
      'deep clean Bristol',
      'domestic cleaner Bristol',
      'house cleaner Bristol',
      'office cleaning Bristol',
      'commercial cleaning Bristol',
      'cleaner BS1',
      'cleaner BS3',
      'cleaner BS5',
      'cleaner BS7',
      'carpet cleaning Bristol',
    ],
    result: '234 GBP clicks/month (Peachy Cleans case study)',
    resultDetail:
      'Peachy Cleans went from invisible in the Map Pack to 234 monthly GBP clicks in under 6 months, ranking #1 in the Map Pack for "cleaner Midsomer Norton" and top 3 for several Bristol cleaning terms. The methodology is repeatable.',
    proof: 'Real case study with real GBP Insights data — 234 clicks, zero ad spend, six months from launch.',
    faqs: [
      {
        q: 'How long does SEO take for a Bristol cleaning company?',
        a: 'Map Pack rankings for "cleaner + Bristol area" typically appear within 4-8 weeks. Organic rankings for "end of tenancy cleaning Bristol" and "deep clean Bristol" within 2-4 months because commercial intent is high and competition is lower. Head term "cleaner Bristol" takes 3-6 months. Peachy Cleans went from zero to 234 monthly clicks in under 6 months — that\'s the realistic timeline.',
      },
      {
        q: 'How much does SEO cost for a cleaning business?',
        a: '£150/month starting price. Most cleaning companies are on the £150 or £200 tier. The maths work because a single new domestic cleaning contract pays for 2-3 months of SEO. No lock-in contracts.',
      },
      {
        q: 'I get most of my cleaning work from Facebook and Nextdoor. Do I need SEO too?',
        a: 'Social is great for short bursts but unreliable as your main source of enquiries. SEO gives you a consistent, compounding stream of customers actively searching for cleaning in Bristol. The customers from search convert at much higher rates because they\'ve already decided to book — they\'re not browsing, they\'re buying. Pair SEO with social for the best of both.',
      },
      {
        q: 'Should I target end of tenancy separately from regular domestic cleaning?',
        a: 'Yes — completely different customers, different search terms, different value. End of tenancy customers search in a panic (their deposit is at stake) and pay premium rates. We build a dedicated end of tenancy page that ranks for these high-value terms. Same for deep cleans and commercial cleaning. Each service type gets its own page, its own GBP entry and its own review strategy.',
      },
      {
        q: 'Can you show me a real case study of SEO for a Bristol cleaning business?',
        a: 'Yes — Peachy Cleans. We rebuilt their site, fixed their GBP, built proper service pages and location pages. Within 6 months they were getting 234 clicks/month from their Google Business Profile alone, ranking #1 in the Map Pack for "cleaner Midsomer Norton", and picking up steady work from Bristol. Zero ad spend. View the full case study on the site.',
      },
    ],
  },
};

// Sibling industries for cross-linking on each page — each industry page
// links to 2-3 others so the cluster is fully connected. Order matters:
// first 3 in the array are the "siblings" shown on each page.
export const INDUSTRY_SIBLINGS = {
  plumbers: ['electricians', 'builders', 'heating-engineers'],
  electricians: ['plumbers', 'builders', 'heating-engineers'],
  builders: ['roofers', 'electricians', 'plumbers'],
  roofers: ['builders', 'cleaners', 'plumbers'],
  cleaners: ['builders', 'roofers', 'electricians'],
};

// Industries that exist but are not yet built (Phase 2). Referenced for
// the "coming soon" indicator if you add them in the future.
export const PHASE_2_INDUSTRIES = [
  'heating-engineers',
  'landscapers',
  'bathroom-fitters',
  'kitchen-fitters',
  'plasterers',
  'drainage-engineers',
  'gas-engineers',
  'extension-builders',
  'loft-conversions',
  'painters-decorators',
];

// Used by generateStaticParams() in app/seo/bristol/[industry]/page.jsx.
// Keep in sync with BRISTOL_INDUSTRIES keys.
export const BRISTOL_INDUSTRY_SLUGS = Object.keys(BRISTOL_INDUSTRIES);
