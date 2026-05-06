export type Industry = '企业软件' | '销售管理' | '协同办公' | 'All';

export interface CaseStudy {
  id: string;
  title: string;
  industry: Industry;
  summary: string;
  image: string;
  stats: Array<{
    label: string;
    value: string;
    change?: string;
  }>;
  challenge: string;
  solution: string;
  result: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
}

export type ProjectStatus = 'planned' | 'in-progress' | 'completed' | 'on-hold';
export type ProjectCategory = 'web-app' | 'mobile-app' | 'tool' | 'ai' | 'other';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  category: ProjectCategory;
  tags: string[];
  startDate: string;
  targetDate?: string;
  completedDate?: string;
  link?: string;
  features: string[];
  updates: Array<{
    date: string;
    content: string;
  }>;
}
