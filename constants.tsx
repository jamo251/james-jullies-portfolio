
import { Project, Experience, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '2',
    title: 'Braze Implementation Architecture',
    description: 'Technical architect on two **Braze** implementations — a greenfield digital bank and a consumer-lending fintech — leading the SDK, REST API, webhook, and data-export architecture, including **Braze ⇄ mParticle SDK congruency**.',
    longDescription: 'Two financial-services Braze implementations, one architect. I ran the technical sessions and advised the client engineering teams across the full Braze surface — SDK, REST API, webhooks, and data exports — so that engagement tooling was stood up correctly from day one and stayed correct as the products scaled.\n\n• **The architect role**: Led the technical working sessions and acted as the standing technical advisor — translating Braze\'s SDK, API, webhook, and data-export capabilities into concrete, governed implementation decisions for each client\'s engineering team.\n• **Greenfield digital bank (inception phase)**: Engaged while the bank was still being built. I ran the sessions covering the Braze SDK, REST API, and webhooks, and advised on **SDK congruency between Braze and mParticle**, which the bank was implementing in parallel — aligning identity keys and event shapes across both SDKs so the two stayed in lockstep with no double-instrumentation or identity drift.\n• **Scaled with the launch**: Post-implementation the bank scaled rapidly, passing roughly **470,000 customers — about 2,100 a day — within around a year of launch**. The instrumentation architecture stood up at inception held cleanly through that growth.\n• **Consumer-lending fintech (full lifecycle)**: Technical architect to the lending fintech\'s team across the Braze SDK, REST API, webhooks, and **data exports (Currents)** — mapping export schemas to downstream sinks, reconciling exported volumes against in-platform engagement, and providing general troubleshooting throughout the implementation.\n• **Outcome**: A repeatable, governed Braze architecture delivered for two regulated financial-services clients — clean identity, reliable webhooks, and trustworthy data exports their teams could build reporting and activation on.',
    tags: ['Braze SDK', 'Braze REST API', 'Webhooks', 'Data Exports', 'mParticle', 'Solutions Architecture'],
    imageUrl: './assets/images/braze-architecture-featured.svg',
    category: 'Martech',
    galleryImages: [
      './assets/images/braze-sdk-api-webhooks.svg',
      './assets/images/braze-mparticle-congruency.svg',
      './assets/images/braze-data-export-flow.svg'
    ]
  },
  {
    id: '3',
    title: 'OneSignal Migration & Messaging Architecture',
    description: 'Technical architect on a **OneSignal** re-implementation for an Angolan retail bank migrating off **MS Dynamics 365** — leading the SDK uplift, REST API and webhook architecture, plus **WhatsApp** template triggering and a **webhook-to-SOAP SMS** design.',
    longDescription: 'An Angolan retail bank was modernising its customer engagement stack — moving off MS Dynamics 365 and carrying an existing OneSignal install from 2024. As technical architect I led the re-implementation across the full OneSignal surface and the surrounding messaging channels, working with the client\'s engineering team based in Portugal.\n\n• **The architect role**: Led the SDK, REST API, and webhook architecture, and assisted the data-tagging sessions — translating OneSignal\'s capabilities into concrete, governed implementation decisions for the bank\'s engineering team.\n• **SDK uplift off a 2024 install**: Ran the technical working sessions guiding the Portugal-based dev team through updating the existing OneSignal SDKs and verifying that all SDK wiring was done correctly, so the modernised stack was instrumented cleanly from the ground up.\n• **WhatsApp template triggering**: Assisted setting up WhatsApp webhooks to trigger approved templates in WhatsApp Business Manager — connecting OneSignal events to the bank\'s conversational channel.\n• **Webhook-to-SOAP SMS**: Architected a plan for a webhook to talk to the bank\'s SOAP-based SMS infrastructure, bridging modern event-driven triggers to legacy telco messaging for outbound SMS.\n• **Cross-language delivery**: The client teams worked mostly in Portuguese, so I leaned heavily on AI and translation — at times in real time — to facilitate shared understanding and keep the technical sessions moving.',
    tags: ['OneSignal', 'SDK Architecture', 'Webhooks', 'WhatsApp Business', 'SOAP / SMS', 'Solutions Architecture'],
    imageUrl: './assets/images/onesignal-architecture-featured.svg',
    category: 'Martech',
    galleryImages: [
      './assets/images/onesignal-sdk-migration.svg',
      './assets/images/onesignal-whatsapp-webhooks.svg',
      './assets/images/onesignal-soap-sms-flow.svg'
    ]
  },
  {
    id: '1',
    title: 'Olympics Data Intelligence',
    description: 'End-to-end data application built on Domo, managing complete pipelines from acquisition to interactive dashboards.',
    longDescription: 'This comprehensive Olympics tracking application was architected to demonstrate the power of real-time data orchestration across the GCC and EMEA regions.\n\nI managed the entire data lifecycle: from the acquisition of raw historical and real-time athletic data to the sophisticated cleansing and transformation logic required for cross-discipline comparisons. \n\nThe final solution features interactive Domo "cards" and stories that allow users to drill down into athlete performance, national medal counts, and historical trends. Key features include:\n\n• **Real-time Heatmaps**: Visualizing global medal distribution and historical performance trends.\n• **Athlete Intelligence**: Deep dives into specific athlete rituals, philosophies, and performance metrics.\n• **Regional Snapshots**: Specialized views for localized insights (e.g., Bahrain, South Africa).\n• **Predictive Trends**: Analyzing participation growth across genders and nations since 1896.',
    tags: ['Domo', 'Data Engineering', 'BI', 'Analytics'],
    imageUrl: './assets/images/olympic-featured.png',
    category: 'Data',
    link: 'https://www.youknow.co.za/interactive-content/olympic-data-visualisation',
    galleryImages: [
      './assets/images/olympic-page-1.png',
      './assets/images/olympic-page-2.png',
      './assets/images/olympic-page-3.png',
      './assets/images/olympic-page-4.png',
      './assets/images/olympic-page-5.png'
    ]
  },
  {
    id: '5',
    title: 'Run DNA Cards',
    description: 'Strava GPX files meet Pokémon — upload a run and generate a shareable collectible card from your workout data.',
    longDescription: 'Run DNA Cards is a full-stack product built end-to-end as a demonstration of product mindset and practical craft across geospatial processing, stats, algorithms, and UX — think Pokémon meets running performance.\n\nUpload any GPX file and the app parses your route, pace, elevation, and splits to generate a unique collectible card you can share or keep. Route geometry is rendered as a custom SVG path (no D3), and cards are exported as server-side PNGs via Satori + resvg-js — sub-3 second generation, fully serverless.\n\nKey features:\n\n• **GPX → GeoJSON Pipeline**: `@tmcw/togeojson` extracts distance, splits, elevation, and coordinates with full fidelity.\n• **Custom SVG Route Rendering**: Pure math-based path logic — no D3 bundle, pixel-perfect route art on every card.\n• **Server-Side Card Generation**: Satori + `@resvg/resvg-js` produce PNGs on Vercel serverless functions with fast cold starts (<3s).\n• **Local Card Collection**: IndexedDB stores your cards client-side with a custom async wrapper — no backend required.\n• **Native Sharing**: Web Share API for one-click posting to X and Instagram, with clipboard fallback.\n• **Route Fingerprinting**: djb2 hashing on downsampled coordinates for collision-resistant card IDs.',
    tags: ['Next.js', 'TypeScript', 'Tailwind v4', 'Satori', 'SVG', 'Vercel'],
    imageUrl: './assets/images/run-dna-featured.png',
    category: 'AI',
    link: 'https://run-dna-cards.vercel.app/',
    galleryImages: [
      './assets/images/run-dna-cards-home.png'
    ]
  },
  {
    id: '6',
    title: 'Tile Predictor Pro',
    description: 'Upload a gameboard screenshot and AI predicts the next tile — built for loyalty apps like Discovery Vitality and Starbucks Rewards.',
    longDescription: 'Tile Predictor Pro uses Google AI to analyse gameboard screenshots from loyalty and rewards apps, then predicts the most likely next tile placement.\n\nDesigned for games like Discovery Vitality\'s activity board and Starbucks Rewards, the app learns the pattern logic from past plays visible in a screenshot and surfaces the optimal next move. Built with a lean, fast local stack — no CDN dependencies, no bloat.\n\nKey features:\n\n• **Image Analysis**: Uploads and processes gameboard screenshots to map tile positions and patterns.\n• **AI Prediction Engine**: Google AI Studio model interprets game state and outputs the highest-probability next tile.\n• **Loyalty App Focus**: Tuned for the tile mechanics common in health and rewards gamification platforms.\n• **Optional Analytics**: Amplitude instrumentation available for tracking prediction usage and accuracy.\n• **Simple Interface**: Upload a screenshot, get a prediction — no game knowledge required.',
    tags: ['React 19', 'TypeScript', 'Vite 6', 'Google AI Studio', 'Tailwind'],
    imageUrl: './assets/images/tile-predictor-featured.png',
    category: 'AI',
    link: 'https://tile-predictor-pro.vercel.app/',
    galleryImages: [
      './assets/images/tile-predictor-pro-home.png',
      './assets/images/tile-predictor-pro-board.png'
    ]
  },
  {
    id: '7',
    title: 'Sales Intelligence Slack Bot',
    description: 'An internal Slack bot that uses **MCP** to pull live context from **HubSpot**, **Notion**, and **Zendesk** into a single prompt — so sales and customer-success teams get a unified view of any client or prospect without platform-hopping.',
    longDescription: 'An internal tool I built to kill a daily annoyance: account research means jumping between **HubSpot** (the deal), **Notion** (the playbooks and history), and **Zendesk** (the support story) — then mentally stitching three half-pictures into one. This bot does the stitching. A rep asks a question in Slack and gets back a single, reconciled answer drawn live from all three platforms — no separate logins, no tab-switching, no piecing it together by hand.\n\nIt\'s built on the **Model Context Protocol (MCP)**: each platform is wrapped as its own MCP server exposing a small set of governed tools, and **Gemini Flash** sits at the centre as the reasoning engine — deciding what to fetch, calling the right tools, and composing the reply. The whole thing was developed with **Claude Code**.\n\nKey aspects:\n\n• **One prompt, one answer**: Ask in plain language — "prep me for the Acme renewal" — and the bot gathers deals, account notes, and open tickets, then returns a single coherent brief in the thread.\n• **MCP as the integration layer**: Three very different APIs sit behind one uniform protocol. Each MCP server owns its platform\'s auth and queries, so the model calls clean tools and never touches a raw API. Adding a source later means adding a server, not rewriting the bot.\n• **Gemini Flash as the brain**: Chosen for low latency, so answers come back at conversation speed — it routes across sources, reconciles disparate facts, and de-duplicates into one picture.\n• **What each source contributes**: HubSpot gives the commercial truth (deals, pipeline, owner); Notion gives the institutional memory (plans, playbooks, QBR notes); Zendesk gives the health signal (open tickets, escalations, sentiment).\n• **Built for the daily grind**: Account research, prospect prep, and support-history lookups for sales and CS — the platform-hopping tax, removed.\n\n*Built as an internal tool; details are kept deliberately high-level.*',
    tags: ['Slack API', 'MCP (Model Context Protocol)', 'Gemini Flash', 'HubSpot', 'Notion', 'Zendesk', 'Claude Code'],
    imageUrl: './assets/images/slack-bot-featured.svg',
    category: 'AI',
    galleryImages: [
      './assets/images/slack-bot-mcp-architecture.svg',
      './assets/images/slack-bot-query-flow.svg',
      './assets/images/slack-bot-knowledge-sources.svg'
    ]
  },
  {
    id: '4',
    title: 'Retail Analytics Ecosystem',
    description: 'A unified, cross-brand event taxonomy and checkout-tracking architecture for a multi-brand retail group running on **Salesforce Commerce Cloud**, implemented end-to-end in **Amplitude**.',
    longDescription: 'Three storefronts, one analytics language. The brands each ran on a shared Salesforce Commerce Cloud (SFCC) platform, but had no consistent way to measure how shoppers actually moved through the buying journey. I designed the measurement layer that unified them — from data layer to funnel report.\n\n• **Salesforce Commerce Cloud foundation**: Worked across three SFCC storefronts sharing a common platform, mapping the on-site data layer for each so every brand emitted events in the same shape.\n• **Unified cross-brand taxonomy**: Authored a single governed event spec in Object–Action naming (Product Viewed, Cart Viewed, Checkout Started, Payment Info Entered, Order Completed). One schema serves all three brands — the storefront is distinguished by a `brand` property rather than forking events per brand, which keeps reporting consistent and governance simple.\n• **Checkout journey event architecture**: Architected the events and properties that trace the full cart-to-order flow, deliberately structured so each step becomes a stage in an Amplitude funnel with the right properties (`cart_value`, `item_count`, `payment_method`, `currency`) attached for segmentation.\n• **Implementation guidance**: Guided the instrumentation rollout across all three brands — translating the spec into GTM/data-layer tags and Amplitude events, then validating that data landed cleanly and consistently per brand.\n• **Outcome**: Funnel reports that pinpoint exactly where shoppers drop off in checkout. The largest leak surfaced at payment entry — roughly 1 in 5 shoppers abandoning at that step — turning a previously invisible gap into a clear, prioritised target for conversion-rate optimisation across the group.',
    tags: ['Amplitude', 'Salesforce Commerce Cloud', 'Event Taxonomy', 'GTM', 'Funnel Analysis'],
    imageUrl: './assets/images/retail-featured.png',
    category: 'Data',
    galleryImages: [
      './assets/images/retail-ecosystem-funnel.svg',
      './assets/images/retail-ecosystem-taxonomy.svg',
      './assets/images/retail-ecosystem-architecture.svg'
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'YOUKNOW Technologies',
    role: 'Senior Solutions Consultant',
    period: 'Nov 2024 - Present',
    location: 'Bahrain / Remote',
    description: [
      'Leading solution consultants in implementing Braze, Amplitude, DOMO, and OneSignal.',
      'Architecting technical integration strategies for fintech and digital banking sectors.',
      'Designed webhook solutions for external SMS triggering and marketing automation.'
    ]
  },
  {
    company: 'YOUKNOW Technologies',
    role: 'Solutions Engineer: CX & Analytics',
    period: 'July 2023 - Oct 2024',
    location: 'South Africa / Bahrain',
    description: [
      'Built comprehensive Olympics data application using the Domo platform.',
      'Implemented custom event tracking pipelines using GTM and JavaScript.',
      'Integrated HubSpot with Amplitude using Make.com, increasing sales efficiency by 50%.'
    ]
  },
  {
    company: 'inQuba',
    role: 'Business Analyst',
    period: 'July 2021 - June 2023',
    location: 'Johannesburg, SA',
    description: [
      'Designed CX programs for key clients like Alexander Forbes and Discovery Vitality.',
      'Increased customer satisfaction by 20% within eight months for insurance and banking clients.',
      'Managed implementation of WhatsApp CX projects for Discovery Vitality.'
    ]
  },
  {
    company: 'inQuba',
    role: 'Service Delivery Manager',
    period: 'Nov 2018 - June 2021',
    location: 'Johannesburg, SA',
    description: [
      'Led service delivery for platform updates, reducing downtime by 30%.',
      'Supported major CX programs for clients including Telkom, Virgin Active, and TFG.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 85, category: 'Langs' },
  { name: 'JavaScript', level: 90, category: 'Langs' },
  { name: 'PHP', level: 88, category: 'Langs' },
  { name: 'Generative AI', level: 92, category: 'AI/ML' },
  { name: 'Machine Learning', level: 75, category: 'AI/ML' },
  { name: 'Braze (Certified)', level: 98, category: 'Martech/BI' },
  { name: 'DOMO (Certified)', level: 95, category: 'Martech/BI' },
  { name: 'Amplitude', level: 95, category: 'Martech/BI' },
  { name: 'Digital Transformation', level: 94, category: 'Strategy' },
  { name: 'Solutions Architecture', level: 96, category: 'Strategy' },
  { name: 'GTM / Analytics', level: 90, category: 'Tools' },
  { name: 'WordPress / Shopify', level: 92, category: 'Tools' }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Generative AI Leader Certification', issuer: 'Google' },
  { name: 'Technical Architect (5x Certified)', issuer: 'Braze' },
  { name: 'MajorDomo / Technical Certification', issuer: 'DOMO' },
  { name: 'Certified Delivery Partner (6x)', issuer: 'Amplitude' },
  { name: 'Agile Project Management', issuer: 'GrowthTribe' },
  { name: 'mParticle (4x Certified)', issuer: 'mParticle' }
];

export const SYSTEM_PROMPT = `
You are the AI assistant for James Jullies, a Senior Solutions Consultant and Technology Leader.
James has over 12 years of experience in digital transformation, martech architecture, and data analytics across GCC and EMEA.

Core Information:
- Location: Bahrain (Janabiya)
- Expertise: Braze, DOMO, Amplitude, OneSignal, AI/ML Applications.
- Education: PG Dip in Business Admin (GIBS), B.Comm in IT Management (UJ).
- Projects: ${JSON.stringify(PROJECTS)}
- GitHub Projects: Run DNA Cards (https://run-dna-cards.vercel.app/) — GPX-to-collectible-card app built with Claude AI and TypeScript. Tile Predictor Pro (https://tile-predictor-pro.vercel.app/) — AI gameboard tile predictor for loyalty apps built with Google AI Studio and TypeScript.
- Internal Tools: Sales Intelligence Slack Bot — an internal tool James built that uses MCP (Model Context Protocol) to unify HubSpot, Notion, and Zendesk into a single Slack prompt for sales and customer-success teams, with Gemini Flash as the reasoning engine, built with Claude Code. Kept anonymized; discuss it at a high level without internal specifics.
- Experience: ${JSON.stringify(EXPERIENCE)}
- Certifications: ${JSON.stringify(CERTIFICATIONS)}

When answering:
1. Be professional, confident, and highly technical yet accessible.
2. Emphasize James's specific success as a Braze technical architect for fintech and digital-banking clients (a greenfield digital bank and a consumer-lending fintech, both anonymized) and in multi-brand retail analytics. Do not disclose specific client names.
3. If asked about contact, mention the email (james.jullies@gmail.com) or LinkedIn.
4. Highlight his certifications, especially the Google Generative AI Leader and his master-level proficiency in Braze and DOMO.
`;
