export const personalInfo = {
  name: '计银瑞',
  title: '软件营销顾问',
  avatar: '/images/ChatGPT.jpg',
  avatarSecondary: '/images/natural-hair.png',
  phone: '19883712737',
  location: '中国 · 温州',
  stats: {
    years: 5,
    projects: 50,
    clients: 100,
  },
  slogan: '深耕客户需求，提升客户满意度',
  heroHeadline: '帮你把软件项目讲清楚，也推进到可落地。',
  heroSubheadline:
    '5 年企业软件销售与咨询经验，聚焦 ERP、CRM、OA 等系统的选型、落地与培训。不卖术语，只讲实话。',
  description:
    '5 年企业软件销售与咨询经验，聚焦 ERP、CRM、OA 等系统的选型、落地与培训。我更擅长把复杂的软件采购问题讲清楚，让企业在投入之前看见价值、风险与推进路径。',
};

export const navItems = [
  { name: '首页', path: '/' },
  { name: '项目案例', path: '/cases' },
  { name: '我的项目', path: '/insights' },
  { name: '关于我', path: '/about' },
];

export const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: '计银瑞工作室｜软件营销顾问',
    description:
      '查看 ERP、CRM、OA 等企业软件项目案例，了解咨询、选型与落地的真实推进方式。',
  },
  '/cases': {
    title: '项目案例｜计银瑞工作室',
    description:
      '查看 ERP、CRM、OA 等企业软件项目案例，了解咨询、选型与落地的真实推进方式。',
  },
  '/about': {
    title: '关于我｜计银瑞工作室',
    description:
      '了解我的咨询背景、项目经验和服务方式，看看我如何帮助企业把软件项目做得更稳。',
  },
  '/insights': {
    title: '观点文章｜计银瑞工作室',
    description:
      '分享企业软件选型、销售管理和数字化转型中的真实经验与判断。',
  },
  '/rfq': {
    title: '预约沟通｜计银瑞工作室',
    description: '填写需求信息，快速获得企业软件咨询、项目推进和选型建议。',
  },
};
