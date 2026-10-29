export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  tags: string[];
  siteUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  isPrivateRepo?: boolean;
  featured?: boolean;
  aiAssisted?: boolean;
  aiNote?: string;
  badgeText?: string;
  ideAssisted?: boolean;
  ideNote?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: 'Server' | 'Layout' | 'Terminal' | 'Bot';
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: 'Github' | 'Linkedin' | 'Mail';
  value: string;
}

export interface Pillar {
  title: string;
  description: string;
  iconName: 'Layers' | 'Cpu' | 'Bot';
}
