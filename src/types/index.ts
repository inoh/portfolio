export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  years: number;
  description: string;
  icon?: string;
}

export interface MainSkill extends Skill {
  certifications?: string[];
  highlights: string[];
}

export interface Article {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  likes: number;
  tags: string[];
  excerpt?: string;
}

export interface Achievement {
  title: string;
  description: string;
  impact?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  nameEn: string;
  title: string;
  catchphrase: string;
  description: string;
  email: string;
  location: string;
  yearsOfExperience: number;
  socialLinks: SocialLink[];
  achievements: Achievement[];
}