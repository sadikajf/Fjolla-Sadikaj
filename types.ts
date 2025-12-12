export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum NavItem {
  HOME = '/',
  PROJECTS = '/projects',
  ABOUT = '/about',
  CONTACT = '/contact'
}

export interface Skill {
  name: string;
  category: 'Cloud' | 'Containerization' | 'IaC' | 'CI/CD' | 'Monitoring' | 'Language';
  level: number; // 1-100
}