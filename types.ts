
export interface HeroContent {
  eyebrow: string;
  lines: { text: string; accent?: boolean }[];
  bio: string;
  ctas: { label: string; href: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  /** Label for the public-link button; the button only renders when `link` is set. */
  linkLabel?: string;
  /** Heading and one-line caption for the gallery, written per project. */
  galleryTitle?: string;
  galleryCaption?: string;
  github?: string;
  embedUrl?: string;
  galleryImages?: string[];
  category: 'AI' | 'Build' | 'Data' | 'Martech' | 'Web';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EarlierRole {
  company: string;
  role: string;
  period: string;
  summary: string;
}

export interface Education {
  qualification: string;
  institution: string;
  year: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
