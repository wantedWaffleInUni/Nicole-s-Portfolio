export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  duration: string;
  image: string;
  overview: string;
  objectives: string[];
  deliverables: string[];
  outcomes: string[];
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialMetric {
  label: string;
  value: string;
}

export interface SocialPost {
  id: string;
  platform: 'Instagram' | 'TikTok' | 'LinkedIn';
  type: 'Reel' | 'Post' | 'Carousel';
  caption: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  link: string;
}