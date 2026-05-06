export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed' | 'on-hold';
  progress: number;
  category: string;
  tags: string[];
  startDate: string;
  targetDate?: string;
  completedDate?: string;
  link?: string;
  features: string[];
  updates: { date: string; content: string }[];
}

export const projects: ProjectItem[] = [
  {
    id: 'personal-website',
    title: '个人作品集网站',
    description:
      '基于 React + TypeScript + Tailwind CSS 构建的个人作品集网站，展示项目案例、观点文章和专业背景。',
    status: 'completed',
    progress: 100,
    category: 'web-app',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    startDate: '2026-03',
    completedDate: '2026-04',
    link: 'https://jinyinrui.com',
    features: [
      '响应式设计，适配移动端',
      '项目案例展示',
      '观点文章系统',
      '联系表单',
      '动画效果',
    ],
    updates: [
      { date: '2026-04-15', content: '完成所有页面开发和部署' },
      { date: '2026-04-01', content: '添加动画效果和交互优化' },
      { date: '2026-03-15', content: '完成基础框架搭建' },
    ],
  },
];

export const statusConfig: Record<
  string,
  { label: string; color: string; bgColor: string }
> = {
  planned: { label: '计划中', color: 'text-gray-600', bgColor: 'bg-gray-100' },
  'in-progress': {
    label: '进行中',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  completed: {
    label: '已完成',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  'on-hold': {
    label: '已暂停',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
};

export const categoryLabels: Record<string, string> = {
  'web-app': 'Web 应用',
  'mobile-app': '移动应用',
  tool: '工具',
  ai: 'AI 应用',
  other: '其他',
};
