
import { Project, Experience, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Olympics Data Intelligence',
    description: 'End-to-end data application built on Domo, managing complete pipelines from acquisition to interactive dashboards.',
    longDescription: 'This comprehensive Olympics tracking application was architected to demonstrate the power of real-time data orchestration across the GCC and EMEA regions.\n\nI managed the entire data lifecycle: from the acquisition of raw historical and real-time athletic data to the sophisticated cleansing and transformation logic required for cross-discipline comparisons. \n\nThe final solution features interactive Domo "cards" and stories that allow users to drill down into athlete performance, national medal counts, and historical trends. Key features include:\n\n• **Real-time Heatmaps**: Visualizing global medal distribution and historical performance trends.\n• **Athlete Intelligence**: Deep dives into specific athlete rituals, philosophies, and performance metrics.\n• **Regional Snapshots**: Specialized views for localized insights (e.g., Bahrain, South Africa).\n• **Predictive Trends**: Analyzing participation growth across genders and nations since 1896.',
    tags: ['Domo', 'Data Engineering', 'BI', 'Analytics'],
    imageUrl: './assets/images/olympic-page-1.png',
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
    imageUrl: './assets/images/run-dna-cards-home.png',
    category: 'AI',
    link: 'https://run-dna-cards.vercel.app/'
  },
  {
    id: '6',
    title: 'Tile Predictor Pro',
    description: 'Upload a gameboard screenshot and AI predicts the next tile — built for loyalty apps like Discovery Vitality and Starbucks Rewards.',
    longDescription: 'Tile Predictor Pro uses Google AI to analyse gameboard screenshots from loyalty and rewards apps, then predicts the most likely next tile placement.\n\nDesigned for games like Discovery Vitality\'s activity board and Starbucks Rewards, the app learns the pattern logic from past plays visible in a screenshot and surfaces the optimal next move. Built with a lean, fast local stack — no CDN dependencies, no bloat.\n\nKey features:\n\n• **Image Analysis**: Uploads and processes gameboard screenshots to map tile positions and patterns.\n• **AI Prediction Engine**: Google AI Studio model interprets game state and outputs the highest-probability next tile.\n• **Loyalty App Focus**: Tuned for the tile mechanics common in health and rewards gamification platforms.\n• **Optional Analytics**: Amplitude instrumentation available for tracking prediction usage and accuracy.\n• **Simple Interface**: Upload a screenshot, get a prediction — no game knowledge required.',
    tags: ['React 19', 'TypeScript', 'Vite 6', 'Google AI Studio', 'Tailwind'],
    imageUrl: './assets/images/tile-predictor-pro-home.png',
    category: 'AI',
    link: 'https://tile-predictor-pro.vercel.app/',
    galleryImages: [
      './assets/images/tile-predictor-pro-home.png',
      './assets/images/tile-predictor-pro-board.png'
    ]
  },
  {
    id: '4',
    title: 'Retail Analytics Ecosystem',
    description: 'Data collection framework for major retail groups including Cape Union Mart and Old Khaki.',
    longDescription: 'Deployed Amplitude Analytics solutions, designing tracking specifications that established robust data-driven decision-making infrastructures for large-scale retail operations.',
    tags: ['Amplitude', 'GTM', 'Product Analytics', 'Retail'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    category: 'Data',
    link: '#'
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
- Experience: ${JSON.stringify(EXPERIENCE)}
- Certifications: ${JSON.stringify(CERTIFICATIONS)}

When answering:
1. Be professional, confident, and highly technical yet accessible.
2. Emphasize James's specific success in scaling fintech apps (Paysika, Wonga) and retail analytics (Cape Union Mart).
3. If asked about contact, mention the email (james.jullies@gmail.com) or LinkedIn.
4. Highlight his certifications, especially the Google Generative AI Leader and his master-level proficiency in Braze and DOMO.
`;
