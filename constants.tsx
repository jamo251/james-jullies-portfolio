
import { Project, Experience, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Olympics Data Intelligence',
    description: 'End-to-end data application built on Domo, managing complete pipelines from acquisition to interactive dashboards.',
    longDescription: 'This comprehensive Olympics tracking application was architected to demonstrate the power of real-time data orchestration across the GCC and EMEA regions.\n\nI managed the entire data lifecycle: from the acquisition of raw historical and real-time athletic data to the sophisticated cleansing and transformation logic required for cross-discipline comparisons. \n\nThe final solution features interactive Domo "cards" and stories that allow users to drill down into athlete performance, national medal counts, and historical trends. Key features include:\n\n• **Real-time Heatmaps**: Visualizing global medal distribution and historical performance trends.\n• **Athlete Intelligence**: Deep dives into specific athlete rituals, philosophies, and performance metrics.\n• **Regional Snapshots**: Specialized views for localized insights (e.g., Bahrain, South Africa).\n• **Predictive Trends**: Analyzing participation growth across genders and nations since 1896.',
    tags: ['Domo', 'Data Engineering', 'BI', 'Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    category: 'Data',
    link: 'https://www.youknow.co.za/interactive-content/olympic-data-visualisation',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504868584819-f8eec242350e?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '2',
    title: 'Fintech Growth Infrastructure',
    description: 'Scaled user engagement for West African and GCC fintechs like Paysika and Wonga using Braze and OneSignal.',
    longDescription: 'Architected push notification and email infrastructure that scaled Paysika from thousands to over 100k users. Implemented Braze for OM Bank, designing complex webhook solutions.',
    tags: ['Braze', 'OneSignal', 'API', 'Webhooks'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800',
    category: 'Martech',
    link: '#'
  },
  {
    id: '3',
    title: 'AI-Driven Lead Attribution',
    description: 'Automated workflow integrating HubSpot and Amplitude via JavaScript and Make.com.',
    longDescription: 'Built a custom event tracking pipeline that increased sales efficiency by 50%. Used JavaScript to bridge HubSpot form submissions with Amplitude for seamless lead tracking.',
    tags: ['JavaScript', 'Make.com', 'Amplitude', 'HubSpot'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'AI',
    link: '#'
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
- Experience: ${JSON.stringify(EXPERIENCE)}
- Certifications: ${JSON.stringify(CERTIFICATIONS)}

When answering:
1. Be professional, confident, and highly technical yet accessible.
2. Emphasize James's specific success in scaling fintech apps (Paysika, Wonga) and retail analytics (Cape Union Mart).
3. If asked about contact, mention the email (james.jullies@gmail.com) or LinkedIn.
4. Highlight his certifications, especially the Google Generative AI Leader and his master-level proficiency in Braze and DOMO.
`;
