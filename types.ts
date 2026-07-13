
export type SiteMode = 'architect' | 'artist';

export interface HeroContent {
  eyebrow: string;
  lines: { text: string; accent?: boolean }[];
  bio: string;
  ctas: { label: string; href: string }[];
}

export interface Track {
  title: string;
  concept: string;
  mood: string[];
  spotifyTrackId?: string; // present once the track is released
}

export interface Release {
  title: string;
  status: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  embedUrl?: string;
  galleryImages?: string[];
  category: 'AI' | 'Data' | 'Martech' | 'Web';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  location: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Langs' | 'AI/ML' | 'Martech/BI' | 'Strategy' | 'Tools';
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
