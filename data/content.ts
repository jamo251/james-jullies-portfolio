
import type { Project, Experience, EarlierRole, Education, SkillGroup, Certification, HeroContent } from '../types';

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
    description: 'Technical architect on two Braze implementations: OM Bank, Old Mutual\'s new digital bank, and the consumer-lending fintech Wonga. I led the SDK, REST API, webhook, and data-export architecture, including identity resolution that unified 140,000+ client identities ahead of OM Bank\'s launch.',
    longDescription: 'Two financial-services Braze implementations, one architect. I ran the technical sessions and advised the client engineering teams across the full Braze surface (SDK, REST API, webhooks, and data exports), so engagement tooling was stood up correctly from day one and stayed correct as the products scaled.\n\n• **The architect role**: Led the technical working sessions and acted as the standing technical advisor, translating Braze\'s SDK, API, webhook, and data-export capabilities into concrete, governed implementation decisions for each client\'s engineering team.\n• **OM Bank (inception phase)**: Engaged while Old Mutual\'s digital bank was still being built. I ran the sessions covering the Braze SDK, REST API, and webhooks, and advised on **SDK congruency between Braze and mParticle**, which the bank was implementing in parallel. That meant aligning identity keys and event shapes across both SDKs so the two stayed in lockstep with no double-instrumentation or identity drift.\n• **Identity resolution ahead of go-live**: Architected the identity resolution layer that unified **140,000+ client identities within three months** before launch, so every customer arrived in Braze as one clean profile.\n• **Scaled with the launch**: Post-implementation OM Bank scaled rapidly, passing **740,000 customers by H1 2026**. The instrumentation and identity architecture stood up at inception held cleanly through that growth.\n• **Wonga (full lifecycle)**: Technical architect to Wonga\'s team across the Braze SDK, REST API, webhooks, and **data exports (Currents)**: mapping export schemas to downstream sinks, reconciling exported volumes against in-platform engagement, and providing general troubleshooting throughout the implementation.\n• **Outcome**: A repeatable, governed Braze architecture delivered for two regulated financial-services clients. Clean identity, reliable webhooks, and trustworthy data exports their teams could build reporting and activation on.',
    tags: ['Braze SDK', 'Braze REST API', 'Identity Resolution', 'Webhooks', 'Data Exports', 'Solutions Architecture'],
    imageUrl: './assets/images/braze-architecture-featured.svg',
    category: 'Martech',
    galleryTitle: 'Architecture diagrams',
    galleryCaption: 'SDK, REST API and webhook flows, Braze and mParticle SDK congruency, and the Currents data-export pipeline.',
    galleryImages: [
      './assets/images/braze-sdk-api-webhooks.svg',
      './assets/images/braze-mparticle-congruency.svg',
      './assets/images/braze-data-export-flow.svg'
    ]
  },
  {
    id: '3',
    title: 'OneSignal Migration & Messaging Architecture',
    description: 'Technical architect on a OneSignal re-implementation for Banco Millennium Atlântico, an Angolan bank migrating off MS Dynamics 365. I led the SDK uplift, REST API and webhook architecture, plus WhatsApp template triggering and a webhook-to-SOAP SMS design.',
    longDescription: 'Banco Millennium Atlântico was modernising its customer engagement stack: moving off MS Dynamics 365 while carrying an existing OneSignal install from 2024. As technical architect I led the re-implementation across the full OneSignal surface and the surrounding messaging channels, working with the client\'s engineering team based in Portugal.\n\n• **The architect role**: Led the SDK, REST API, and webhook architecture, and assisted the data-tagging sessions, translating OneSignal\'s capabilities into concrete, governed implementation decisions for the bank\'s engineering team.\n• **SDK uplift off a 2024 install**: Ran the technical working sessions guiding the Portugal-based dev team through updating the existing OneSignal SDKs and verifying that all SDK wiring was done correctly, so the modernised stack was instrumented cleanly from the ground up.\n• **WhatsApp template triggering**: Helped set up WhatsApp webhooks to trigger approved templates in WhatsApp Business Manager, connecting OneSignal events to the bank\'s conversational channel.\n• **Webhook-to-SOAP SMS**: Designed a plan for a webhook to talk to the bank\'s SOAP-based SMS infrastructure, bridging modern event-driven triggers to legacy telco messaging for outbound SMS.\n• **Cross-language delivery**: The client teams worked mostly in Portuguese, so I leaned heavily on AI and translation, at times in real time, to keep everyone on the same page and the technical sessions moving.',
    tags: ['OneSignal', 'SDK Architecture', 'Webhooks', 'WhatsApp Business', 'SOAP / SMS', 'Solutions Architecture'],
    imageUrl: './assets/images/onesignal-architecture-featured.svg',
    category: 'Martech',
    galleryTitle: 'Architecture diagrams',
    galleryCaption: 'The SDK uplift, WhatsApp template triggering through webhooks, and the webhook-to-SOAP SMS design.',
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
    galleryTitle: 'App screens',
    galleryCaption: 'Pages from the finished Domo app.',
    linkLabel: 'View interactive version',
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
    longDescription: 'Run DNA Cards is a full-stack side project I built end-to-end. It touches geospatial processing, stats, algorithms, and UX, and the idea is simple: Pokémon meets running.\n\nUpload any GPX file and the app parses your route, pace, elevation, and splits, then turns them into a unique collectible card you can share or keep. The route is drawn as a custom SVG path (no D3), and cards are exported as PNGs on the server via Satori + sharp. Generation takes under 3 seconds and runs fully serverless.\n\nKey features:\n\n• **GPX to GeoJSON Pipeline**: `@tmcw/togeojson` extracts distance, splits, elevation, and coordinates with full fidelity.\n• **Custom SVG Route Rendering**: Pure math-based path logic, so there is no D3 bundle and the route art stays pixel-perfect on every card.\n• **Server-Side Card Generation**: Satori + `sharp` produce PNGs on Vercel serverless functions with fast cold starts (<3s).\n• **Local Card Collection**: IndexedDB stores your cards in the browser through a small async wrapper. No backend needed.\n• **Native Sharing**: Web Share API for one-click posting to X and Instagram, with a clipboard fallback.\n• **Route Fingerprinting**: djb2 hashing on downsampled coordinates keeps card IDs collision-resistant.',
    tags: ['Next.js', 'TypeScript', 'Tailwind v4', 'Satori', 'SVG', 'Vercel'],
    imageUrl: './assets/images/run-dna-featured.png',
    category: 'Build',
    galleryTitle: 'App screens',
    galleryCaption: 'The upload screen, three generated cards and battle mode.',
    linkLabel: 'View live app',
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
    description: 'Upload gameboard screenshots, Gemini vision reads the tile scores, and the app builds a heatmap of where high scores tend to land. Built for loyalty apps like Discovery Vitality and Starbucks Rewards.',
    longDescription: 'Tile Predictor Pro reads gameboard screenshots from loyalty and rewards apps and shows where high-scoring tiles tend to land.\n\nI built it with games like Discovery Vitality\'s activity board and Starbucks Rewards in mind. The AI does one job: Gemini vision reads the score on every tile in a screenshot and returns it as structured data. The prediction itself is statistics. Each board you upload is added to a history in your browser, and the app works out how often each tile hits a high score, then flags the strongest cell as the best pick. The stack is lean and fast, with no CDN dependencies and no bloat.\n\nKey features:\n\n• **Score Extraction**: Gemini vision, called from a Vercel serverless function so the API key stays server-side, reads each tile\'s score and returns schema-validated JSON.\n• **Pattern Heatmap**: Scores from every board are aggregated into a heatmap of high-score frequency per tile, with optional extra weight on your five most recent boards.\n• **Loyalty App Focus**: Tuned for the tile mechanics you see in health and rewards gamification platforms.\n• **Optional Analytics**: Amplitude instrumentation for tracking prediction usage and accuracy.\n• **Simple Interface**: Upload screenshots, read the heatmap. No game knowledge required.',
    tags: ['React 19', 'TypeScript', 'Vite 6', 'Gemini API', 'Vercel Functions', 'Tailwind'],
    imageUrl: './assets/images/tile-predictor-featured.png',
    category: 'AI',
    galleryTitle: 'App screens',
    galleryCaption: 'The upload screen and the board heatmap.',
    linkLabel: 'View live app',
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
    galleryTitle: 'Architecture diagrams',
    galleryCaption: 'The MCP architecture, how a question moves through the bot, and what each source contributes.',
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
    galleryTitle: 'Diagrams',
    galleryCaption: 'What goes into a skill, and how one runs from a plain-English request to a finished file.',
    galleryImages: [
      './assets/images/claude-skills-anatomy.svg',
      './assets/images/claude-skills-workflow.svg'
    ]
  },
  {
    id: '4',
    title: 'Retail Analytics Ecosystem',
    description: 'A unified event taxonomy and checkout-tracking architecture across Cape Union Mart, Old Khaki and Poetry on Salesforce Commerce Cloud, implemented end-to-end in Amplitude.',
    longDescription: 'Three storefronts, one analytics language. Cape Union Mart, Old Khaki and Poetry each ran on a shared Salesforce Commerce Cloud (SFCC) platform, but had no consistent way to measure how shoppers actually moved through the buying journey. I designed the measurement layer that unified them, from data layer to funnel report.\n\n• **Salesforce Commerce Cloud foundation**: Worked across three SFCC storefronts sharing a common platform, mapping the on-site data layer for each so every brand emitted events in the same shape.\n• **Unified cross-brand taxonomy**: Wrote a single governed event spec in Object-Action naming (Product Viewed, Cart Viewed, Checkout Started, Payment Info Entered, Order Completed). One schema serves all three brands. The storefront is identified by a `brand` property rather than forking events per brand, which keeps reporting consistent and governance simple.\n• **Checkout journey event architecture**: Designed the events and properties that trace the full cart-to-order flow, structured so each step becomes a stage in an Amplitude funnel with the right properties (`cart_value`, `item_count`, `payment_method`, `currency`) attached for segmentation.\n• **Implementation guidance**: Guided the instrumentation rollout across all three brands, translating the spec into GTM/data-layer tags and Amplitude events, then checking that data landed cleanly and consistently per brand.\n• **Outcome**: Funnel reports that pinpoint exactly where shoppers drop off in checkout. The biggest leak turned out to be payment entry, where roughly 1 in 5 shoppers abandoned. A previously invisible gap became a clear, prioritised target for conversion work across the group.',
    tags: ['Amplitude', 'Salesforce Commerce Cloud', 'Event Taxonomy', 'GTM', 'Funnel Analysis'],
    imageUrl: './assets/images/retail-featured.png',
    category: 'Data',
    galleryTitle: 'Diagrams',
    galleryCaption: 'The checkout funnel (representative data), the cross-brand event taxonomy and the analytics architecture.',
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
      'Orchestrated technical delivery for Wonga, OM Bank (Old Mutual\'s digital bank), and Banco Millennium Atlântico, establishing marketing automation foundations in regulated financial environments.',
      'Architected identity resolution for the OM Bank launch, unifying 140,000+ client identities within three months ahead of go-live.',
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
      'Deployed Amplitude Analytics across the Cape Union Mart, Old Khaki and Poetry brands, and built an automated lead-tracking pipeline in Google Tag Manager.',
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

export const EARLIER_CAREER: EarlierRole[] = [
  {
    company: 'inQuba',
    role: 'Service & Operations Support Analyst',
    period: 'Mar 2017 - Oct 2018',
    summary:
      'First-line technical support through Zendesk across three time zones. Streamlined support processes, cutting response times by 20%.',
  },
  {
    company: 'Automated Outsourcing Services',
    role: 'Operations Analyst',
    period: 'Mar 2012 - Feb 2017',
    summary:
      'Operations Analyst from Jul 2013: software and data operations on Oracle Flexcube for major South African unit trusts and ETFs (ABSA, Satrix, iTransact), with gap analysis and process documentation in a regulated environment. Earlier roles: Change Management Operator; IS Operator.',
  },
];

export const EDUCATION: Education[] = [
  { qualification: 'Post Graduate Diploma in Business Administration (PGDBA)', institution: 'GIBS Business School', year: '2016' },
  { qualification: 'BCom Information Technology Management', institution: 'University of Johannesburg', year: '2014' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Pre-sales & solutioning',
    skills: ['Pre-sales & solution design', 'Solutions architecture', 'Architecture discovery', 'Objection handling', 'Stakeholder advisory'],
  },
  {
    name: 'Customer data & engagement',
    skills: [
      'Braze — 8x certified, incl. Technical Architect',
      'Amplitude — 7x certified, Certified Delivery Partner',
      'CDP & identity resolution',
      'OneSignal',
      'InsiderOne',
      'HubSpot',
      'Mixpanel',
    ],
  },
  {
    name: 'AI & automation',
    skills: ['Claude API & MCP', 'GenAI agent design', 'Claude agent skills', 'Google Generative AI Leader certified', 'Make.com', 'n8n'],
  },
  {
    name: 'Data & integration',
    skills: ['DOMO — MajorDomo certified', 'GTM & event tracking', 'Event taxonomy design', 'REST APIs & webhooks'],
  },
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript / Node.js', 'WordPress (12+ years)'],
  },
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
