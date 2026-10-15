
import type { Project, Experience, Skill, Certification, HeroContent } from '../types';

/**
 * Single source for everything the site publishes. The UI renders from it and
 * the Ask AI guide (api/chat.ts) builds its system prompt from it, so the guide
 * can only answer from what is on the page.
 */

export const HERO: HeroContent = {
  eyebrow: 'Senior Solutions Consultant | Pre-Sales, Customer Data & AI',
  lines: [
    { text: 'James Jullies' },
    { text: 'Martech & AI', accent: true },
    { text: 'Architect.' },
  ],
  bio: '14 years in enterprise technology delivery across fintech, banking, and retail. I lead pre-sales solutioning and customer data architecture on Braze, Amplitude, OneSignal, and DOMO, and build production GenAI tooling with the Claude API and MCP.',
  ctas: [
    { label: 'Explore Achievements', href: '#projects' },
    { label: 'Career Journey', href: '#experience' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: '2',
    title: 'Braze Implementation Architecture',
    description: 'Technical architect on two Braze implementations, a greenfield digital bank and a consumer-lending fintech. I led the SDK, REST API, webhook, and data-export architecture, including identity resolution that unified 140,000+ client identities ahead of the bank\'s launch.',
    longDescription: 'Two financial-services Braze implementations, one architect. I ran the technical sessions and advised the client engineering teams across the full Braze surface (SDK, REST API, webhooks, and data exports), so engagement tooling was stood up correctly from day one and stayed correct as the products scaled.\n\n• **The architect role**: Led the technical working sessions and acted as the standing technical advisor, translating Braze\'s SDK, API, webhook, and data-export capabilities into concrete, governed implementation decisions for each client\'s engineering team.\n• **Greenfield digital bank (inception phase)**: Engaged while the bank was still being built. I ran the sessions covering the Braze SDK, REST API, and webhooks, and advised on **SDK congruency between Braze and mParticle**, which the bank was implementing in parallel. That meant aligning identity keys and event shapes across both SDKs so the two stayed in lockstep with no double-instrumentation or identity drift.\n• **Identity resolution ahead of go-live**: Architected the identity resolution layer that unified **140,000+ client identities within three months** before launch, so every customer arrived in Braze as one clean profile.\n• **Scaled with the launch**: Post-implementation the bank scaled rapidly, passing **740,000 customers by H1 2026**. The instrumentation and identity architecture stood up at inception held cleanly through that growth.\n• **Consumer-lending fintech (full lifecycle)**: Technical architect to the lending fintech\'s team across the Braze SDK, REST API, webhooks, and **data exports (Currents)**: mapping export schemas to downstream sinks, reconciling exported volumes against in-platform engagement, and providing general troubleshooting throughout the implementation.\n• **Outcome**: A repeatable, governed Braze architecture delivered for two regulated financial-services clients. Clean identity, reliable webhooks, and trustworthy data exports their teams could build reporting and activation on.',
    tags: ['Braze SDK', 'Braze REST API', 'Identity Resolution', 'Webhooks', 'Data Exports', 'mParticle', 'Solutions Architecture'],
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
    description: 'Technical architect on a OneSignal re-implementation for an Angolan retail bank migrating off MS Dynamics 365. I led the SDK uplift, REST API and webhook architecture, plus WhatsApp template triggering and a webhook-to-SOAP SMS design.',
    longDescription: 'An Angolan retail bank was modernising its customer engagement stack: moving off MS Dynamics 365 while carrying an existing OneSignal install from 2024. As technical architect I led the re-implementation across the full OneSignal surface and the surrounding messaging channels, working with the client\'s engineering team based in Portugal.\n\n• **The architect role**: Led the SDK, REST API, and webhook architecture, and assisted the data-tagging sessions, translating OneSignal\'s capabilities into concrete, governed implementation decisions for the bank\'s engineering team.\n• **SDK uplift off a 2024 install**: Ran the technical working sessions guiding the Portugal-based dev team through updating the existing OneSignal SDKs and verifying that all SDK wiring was done correctly, so the modernised stack was instrumented cleanly from the ground up.\n• **WhatsApp template triggering**: Helped set up WhatsApp webhooks to trigger approved templates in WhatsApp Business Manager, connecting OneSignal events to the bank\'s conversational channel.\n• **Webhook-to-SOAP SMS**: Designed a plan for a webhook to talk to the bank\'s SOAP-based SMS infrastructure, bridging modern event-driven triggers to legacy telco messaging for outbound SMS.\n• **Cross-language delivery**: The client teams worked mostly in Portuguese, so I leaned heavily on AI and translation, at times in real time, to keep everyone on the same page and the technical sessions moving.',
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
    description: 'An end-to-end Olympics data app built on Domo, covering the full pipeline from raw data to interactive dashboards.',
    longDescription: 'I built this Olympics app on Domo to show what real-time data orchestration looks like in practice.\n\nI handled the whole data lifecycle myself: pulling in raw historical and live athletic data, then cleaning and reshaping it so you could actually compare performance across disciplines.\n\nThe finished app uses interactive Domo "cards" and stories, so you can drill into athlete performance, national medal counts, and historical trends. Highlights:\n\n• **Real-time Heatmaps**: Global medal distribution and performance trends at a glance.\n• **Athlete Intelligence**: Deep dives into individual athletes, their rituals, philosophies, and numbers.\n• **Country Snapshots**: Country-level views of medal history and performance.\n• **Participation Trends**: Growth across genders and nations, going all the way back to 1896.',
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
    description: 'Think Pokémon cards for your runs. Upload a GPX file and get a shareable collectible card built from your workout data.',
    longDescription: 'Run DNA Cards is a full-stack side project I built end-to-end. It touches geospatial processing, stats, algorithms, and UX, and the idea is simple: Pokémon meets running.\n\nUpload any GPX file and the app parses your route, pace, elevation, and splits, then turns them into a unique collectible card you can share or keep. The route is drawn as a custom SVG path (no D3), and cards are exported as PNGs on the server via Satori + resvg-js. Generation takes under 3 seconds and runs fully serverless.\n\nKey features:\n\n• **GPX to GeoJSON Pipeline**: `@tmcw/togeojson` extracts distance, splits, elevation, and coordinates with full fidelity.\n• **Custom SVG Route Rendering**: Pure math-based path logic, so there is no D3 bundle and the route art stays pixel-perfect on every card.\n• **Server-Side Card Generation**: Satori + `@resvg/resvg-js` produce PNGs on Vercel serverless functions with fast cold starts (<3s).\n• **Local Card Collection**: IndexedDB stores your cards in the browser through a small async wrapper. No backend needed.\n• **Native Sharing**: Web Share API for one-click posting to X and Instagram, with a clipboard fallback.\n• **Route Fingerprinting**: djb2 hashing on downsampled coordinates keeps card IDs collision-resistant.',
    tags: ['Next.js', 'TypeScript', 'Tailwind v4', 'Satori', 'SVG', 'Vercel'],
    imageUrl: './assets/images/run-dna-featured.png',
    category: 'AI',
    link: 'https://run-dna-cards.vercel.app/',
    galleryImages: [
      './assets/images/run-dna-cards-home.png',
      './assets/images/run-dna-card-grind.png',
      './assets/images/run-dna-card-comrades.png',
      './assets/images/run-dna-card-western-states.png',
      './assets/images/run-dna-battle.png'
    ]
  },
  {
    id: '6',
    title: 'Tile Predictor Pro',
    description: 'Upload a gameboard screenshot and AI predicts the next tile. Built for loyalty apps like Discovery Vitality and Starbucks Rewards.',
    longDescription: 'Tile Predictor Pro uses Google AI to read gameboard screenshots from loyalty and rewards apps and predict where the next tile is most likely to land.\n\nI built it with games like Discovery Vitality\'s activity board and Starbucks Rewards in mind. The app picks up the pattern logic from past plays visible in a screenshot and suggests the best next move. The stack is lean and fast, with no CDN dependencies and no bloat.\n\nKey features:\n\n• **Image Analysis**: Processes gameboard screenshots to map tile positions and patterns.\n• **AI Prediction Engine**: A Google AI Studio model reads the game state and outputs the highest-probability next tile.\n• **Loyalty App Focus**: Tuned for the tile mechanics you see in health and rewards gamification platforms.\n• **Optional Analytics**: Amplitude instrumentation for tracking prediction usage and accuracy.\n• **Simple Interface**: Upload a screenshot, get a prediction. No game knowledge required.',
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
    description: 'An internal Slack knowledge agent, deployed in live sales operations, that uses MCP and the Claude API to pull live context from HubSpot, Notion, and Zendesk into a single prompt, so sales and customer-success teams get a unified view of any client without platform-hopping.',
    longDescription: 'An internal tool I built to kill a daily annoyance: account research means jumping between **HubSpot** (the deal), **Notion** (the playbooks and history), and **Zendesk** (the support story), then mentally stitching three half-pictures into one. This bot does the stitching. A rep asks a question in Slack and gets back a single, reconciled answer drawn live from all three platforms. No separate logins, no tab-switching, no piecing it together by hand.\n\nIt\'s built on the **Model Context Protocol (MCP)**: each platform is wrapped as its own MCP server exposing a small set of governed tools, and the **Claude API** sits at the centre as the reasoning engine, deciding what to fetch, calling the right tools, and composing the reply. The first version ran on **Gemini Flash**; I later migrated it to Claude. The whole thing is written in **Node.js, TypeScript and Python** and was developed with **Claude Code**.\n\nKey aspects:\n\n• **One prompt, one answer**: Ask in plain language ("prep me for the Acme renewal") and the bot gathers deals, account notes, and open tickets, then returns a single coherent brief in the thread.\n• **MCP as the integration layer**: Three very different APIs sit behind one uniform protocol. Each MCP server owns its platform\'s auth and queries, so the model calls clean tools and never touches a raw API. Adding a source later means adding a server, not rewriting the bot.\n• **From Gemini Flash to the Claude API**: Gemini Flash got the prototype to conversation speed; moving the reasoning to the Claude API improved tool selection and multi-source synthesis. Because MCP keeps the integrations model-agnostic, the swap touched the brain, not the plumbing. It routes across sources, reconciles disparate facts, and de-duplicates into one picture.\n• **What each source contributes**: HubSpot gives the commercial truth (deals, pipeline, owner); Notion gives the institutional memory (plans, playbooks, QBR notes); Zendesk gives the health signal (open tickets, escalations, sentiment).\n• **Built for the daily grind**: Account research, prospect prep, and support-history lookups for sales and CS. The platform-hopping tax, removed.\n\n*Built as an internal tool; details are kept deliberately high-level.*',
    tags: ['Slack API', 'MCP (Model Context Protocol)', 'Claude API', 'Gemini Flash', 'Node.js', 'TypeScript', 'Python', 'HubSpot', 'Notion', 'Zendesk'],
    imageUrl: './assets/images/slack-bot-featured.svg',
    category: 'AI',
    galleryImages: [
      './assets/images/slack-bot-mcp-architecture.svg',
      './assets/images/slack-bot-query-flow.svg',
      './assets/images/slack-bot-knowledge-sources.svg'
    ]
  },
  {
    id: '8',
    title: 'Claude Skills Ecosystem',
    description: 'A suite of reusable Claude agent skills that automate document generation, brand-consistent output, and structured research workflows. Repeatable work written down once, then run on demand.',
    longDescription: 'A lot of my week is the same kinds of work on repeat: tailoring a CV, invoicing a client, prepping for a meeting, writing in a consistent voice. Each one used to mean re-explaining the context to an AI from scratch. So I turned them into **Claude skills**: packaged folders of instructions, reference files, scripts, and templates that Claude loads automatically when a task calls for them.\n\nThe result is a growing, independently built library where a plain-English request ("tailor my CV for this role", "invoice the client for 12 hours") produces the same high-quality output every time.\n\nKey aspects:\n\n• **Document generation**: Skills that produce finished files, such as ATS-optimised tailored CVs grounded in a master CV, branded PDF invoices, and step-by-step website build guides. Scripts handle the deterministic parts (file formats, layout, totals) so the model never improvises them.\n• **Brand-consistent output**: Brand guidelines, a written personal voice, and a social-image design system encoded as rules, so anything Claude produces is on-brand by default instead of by luck.\n• **Structured research workflows**: Interview prep sheets, recruiter outreach drafts, and syncing project status from email into a Notion tracker, each following a fixed research method and output structure.\n• **Grounded, not invented**: Each skill reads its facts from reference files (a master CV, banking details, brand rules) rather than generating them, which keeps outputs accurate and auditable.\n• **Progressive disclosure**: A short trigger description is always visible; the full instructions, references, and scripts load only when needed, so dozens of skills can coexist without bloating the context window.\n\n*Built for my own workflows; examples are kept generic.*',
    tags: ['Claude', 'Agent Skills', 'Prompt Engineering', 'Python', 'Automation', 'Document Generation'],
    imageUrl: './assets/images/claude-skills-featured.svg',
    category: 'AI',
    galleryImages: [
      './assets/images/claude-skills-anatomy.svg',
      './assets/images/claude-skills-workflow.svg'
    ]
  },
  {
    id: '4',
    title: 'Retail Analytics Ecosystem',
    description: 'A unified event taxonomy and checkout-tracking architecture for a multi-brand retail group on Salesforce Commerce Cloud, implemented end-to-end in Amplitude.',
    longDescription: 'Three storefronts, one analytics language. The brands each ran on a shared Salesforce Commerce Cloud (SFCC) platform, but had no consistent way to measure how shoppers actually moved through the buying journey. I designed the measurement layer that unified them, from data layer to funnel report.\n\n• **Salesforce Commerce Cloud foundation**: Worked across three SFCC storefronts sharing a common platform, mapping the on-site data layer for each so every brand emitted events in the same shape.\n• **Unified cross-brand taxonomy**: Wrote a single governed event spec in Object-Action naming (Product Viewed, Cart Viewed, Checkout Started, Payment Info Entered, Order Completed). One schema serves all three brands. The storefront is identified by a `brand` property rather than forking events per brand, which keeps reporting consistent and governance simple.\n• **Checkout journey event architecture**: Designed the events and properties that trace the full cart-to-order flow, structured so each step becomes a stage in an Amplitude funnel with the right properties (`cart_value`, `item_count`, `payment_method`, `currency`) attached for segmentation.\n• **Implementation guidance**: Guided the instrumentation rollout across all three brands, translating the spec into GTM/data-layer tags and Amplitude events, then checking that data landed cleanly and consistently per brand.\n• **Outcome**: Funnel reports that pinpoint exactly where shoppers drop off in checkout. The biggest leak turned out to be payment entry, where roughly 1 in 5 shoppers abandoned. A previously invisible gap became a clear, prioritised target for conversion work across the group.',
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
    period: 'Oct 2024 - Present',
    description: [
      'Lead the technical architecture practice, directing a consultancy team implementing Braze, OneSignal, InsiderOne, Amplitude, DOMO, and HubSpot for high-growth fintech and retail clients.',
      'Own pre-sales technical advisory: architecture discovery, solution design, and objection handling with prospect C-suite and IT stakeholders, contributing directly to enterprise contract closures.',
      'Orchestrated technical delivery for a consumer-lending fintech, a new digital bank, and a major Angolan bank, establishing marketing automation foundations in regulated financial environments.',
      'Architected identity resolution for a digital bank launch, unifying 140,000+ client identities within three months ahead of go-live.',
      'Designed bespoke webhook infrastructure for external SMS triggering, working around platform limitations to meet regional client requirements.',
      'Built and deployed an MCP-based Slack knowledge agent (Node.js, TypeScript, Python) integrating HubSpot, Notion, and Zendesk via the Claude API.'
    ]
  },
  {
    company: 'YOUKNOW Technologies',
    role: 'Solutions Engineer: CX & Analytics',
    period: 'Aug 2023 - Sep 2024',
    description: [
      'Guided the OneSignal implementation for a West African fintech app, enabling omnichannel messaging through rapid growth to 100,000+ active users.',
      'Deployed Amplitude Analytics across a major retail group\'s three-brand portfolio and built an automated lead-tracking pipeline in Google Tag Manager.',
      'Developed a full Olympics data application on DOMO, managing the lifecycle from acquisition through to executive visualisation.'
    ]
  },
  {
    company: 'inQuba',
    role: 'Business Analyst',
    period: 'July 2021 - Aug 2023',
    description: [
      'Designed and implemented enterprise CX programmes for banking, insurance, health, and leisure clients, including Discovery Vitality and Virgin Active.',
      'Facilitated Agile sprints, translating business requirements into the product roadmap and user journey optimisation.',
      'Managed implementation of WhatsApp CX projects for Discovery Vitality.'
    ]
  },
  {
    company: 'inQuba',
    role: 'Service Delivery Manager',
    period: 'Nov 2018 - July 2021',
    description: [
      'Led a multicultural service team supporting clients across South Africa, Australia, the USA, and the UK.',
      'Owned service delivery and post-implementation CX support for enterprise clients in insurance, retail, and hospitality, including TFG.',
      'Translated user feedback into product enhancements.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 85, category: 'Langs' },
  { name: 'JavaScript', level: 90, category: 'Langs' },
  { name: 'TypeScript / Node.js', level: 85, category: 'Langs' },
  { name: 'Claude API & MCP', level: 92, category: 'AI/ML' },
  { name: 'GenAI Agent Design', level: 90, category: 'AI/ML' },
  { name: 'Make.com / n8n', level: 85, category: 'AI/ML' },
  { name: 'Braze (8x Certified)', level: 98, category: 'Martech/BI' },
  { name: 'Amplitude (7x Certified)', level: 95, category: 'Martech/BI' },
  { name: 'DOMO (MajorDomo)', level: 95, category: 'Martech/BI' },
  { name: 'OneSignal / InsiderOne', level: 90, category: 'Martech/BI' },
  { name: 'Pre-Sales & Solution Design', level: 95, category: 'Strategy' },
  { name: 'Solutions Architecture', level: 96, category: 'Strategy' },
  { name: 'CDP & Identity Resolution', level: 93, category: 'Strategy' },
  { name: 'GTM / Event Tracking', level: 90, category: 'Tools' },
  { name: 'HubSpot / Mixpanel', level: 85, category: 'Tools' },
  { name: 'WordPress (12+ yrs)', level: 92, category: 'Tools' }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Generative AI Leader Certification', issuer: 'Google' },
  { name: '8x Certified, incl. Technical Architect', issuer: 'Braze' },
  { name: '7x Certified, Certified Delivery Partner', issuer: 'Amplitude' },
  { name: 'MajorDomo / Technical Certification', issuer: 'DOMO' },
  { name: 'HubSpot Partner', issuer: 'HubSpot' },
  { name: 'Mixpanel Partner', issuer: 'Mixpanel' },
  { name: 'Agile Project Management', issuer: 'GrowthTribe' },
  { name: 'Foundations of UX Design', issuer: 'Coursera' }
];
