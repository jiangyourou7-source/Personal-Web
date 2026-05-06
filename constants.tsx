import { CaseStudy, InsightArticle, Project } from './types';

export const PROFILE = {
  brandName: '计银瑞工作室',
  name: '计银瑞',
  title: '软件营销顾问',
  avatar: '/images/ChatGPT.jpg',
  avatarSecondary: '/images/优化版2-自然短发.png',
  email: '529165871@qq.com',
  phone: '19883712737',
  location: '中国 · 温州',
  wechat: '扫码添加微信进一步沟通',
  stats: {
    years: 5,
    projects: 50,
    clients: 100,
    satisfaction: 98,
  },
  slogan: '深耕客户需求，提升客户满意度',
  heroHeadline: '帮你把软件项目讲清楚，也推进到可落地。',
  heroSubheadline: '5 年企业软件销售与咨询经验，聚焦 ERP、CRM、OA 等系统的选型、落地与培训。不卖术语，只讲实话。',
  description:
    '5 年企业软件销售与咨询经验，聚焦 ERP、CRM、OA 等系统的选型、落地与培训。我更擅长把复杂的软件采购问题讲清楚，让企业在投入之前看见价值、风险与推进路径。',
  newsletterTitle: '每周 5 分钟，可能改变你的项目方向',
  newsletterDescription: '订阅我的邮件通讯，每周收到一条关于企业软件选型、推进和落地的实战判断。不废话，不灌水，只讲有用的。',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'project-1',
    title: '制造企业 ERP 上线项目',
    industry: '企业软件',
    summary: '从需求梳理到系统切换，帮助制造企业完成 ERP 上线，打通采购、仓储、生产与财务数据。',
    image: '/images/case-erp.jpg',
    stats: [
      { label: '交付效率', value: '+45%' },
      { label: '数据准确率', value: '99%' },
      { label: '上线周期', value: '10 周' },
    ],
    challenge:
      '企业内部长期依赖多个 Excel 和人工汇总，订单、库存、采购、财务之间口径不一致，管理层无法快速判断真实经营情况。',
    solution:
      '通过访谈业务负责人、梳理关键流程、明确优先级，协助企业完成 ERP 选型、实施推进、关键岗位培训以及上线后的问题跟进。',
    result:
      '项目上线后，跨部门协作效率明显提升，库存与订单数据同步更及时，管理层能够按周查看核心经营指标并快速做决策。',
  },
  {
    id: 'project-2',
    title: '销售团队 CRM 重构项目',
    industry: '销售管理',
    summary: '围绕线索、商机、跟进与复盘流程，帮销售团队建立统一的 CRM 管理机制。',
    image: '/images/case-crm.jpg',
    stats: [
      { label: '转化率提升', value: '+60%' },
      { label: '复购率', value: '35%' },
      { label: '线索响应', value: '< 30 分钟' },
    ],
    challenge:
      '客户信息分散在个人微信、表格和聊天记录里，团队接手成本高，销售动作缺少统一标准，导致商机推进效率低。',
    solution:
      '协助团队定义线索分配规则、销售阶段、关键动作与复盘模板，并将流程映射到 CRM 中，结合培训提升执行一致性。',
    result:
      '团队对商机进度的判断更准确，新线索跟进速度提升，销售负责人可以按阶段复盘问题并持续优化策略。',
  },
  {
    id: 'project-3',
    title: '中型企业 OA 协同升级',
    industry: '协同办公',
    summary: '重新设计审批、协作和信息同步机制，让原本低效的行政流程真正跑起来。',
    image: '/images/case-oa.jpg',
    stats: [
      { label: '审批效率', value: '+75%' },
      { label: '员工满意度', value: '95%' },
      { label: '流程缩短', value: '7 天' },
    ],
    challenge:
      '原有审批流程依赖纸质和零散聊天工具，跨部门协作容易卡住，流程责任不清晰，导致内部推进反复返工。',
    solution:
      '围绕高频流程做优先级拆分，先优化请示、采购、报销与合同流程，再同步完善角色权限、流程节点与移动端使用体验。',
    result:
      '日常审批从"找人催办"变成"流程自动推进"，行政和业务团队都能更快看到状态，内部协作阻力明显下降。',
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'insight-1',
    title: '企业数字化不是买软件，而是重做业务协作方式',
    category: '数字化转型',
    date: '2026 年 4 月',
    excerpt:
      '很多企业把数字化理解成"采购一套系统"，但真正决定结果的往往是流程是否被重构、责任是否被重新定义。',
    image: '/images/insight-1.jpg',
    content: [
      '很多项目失败，不是因为系统不够强，而是企业还没有把自己的业务问题讲清楚。软件只是工具，真正要解决的是流程如何衔接、数据如何流动、团队如何协同。',
      '在我参与过的项目里，最有效的一步通常不是演示产品，而是和业务负责人一起把"现状流程""卡点""谁来推动"梳理出来。只要这一层不清楚，后面的选型就很容易被功能清单带偏。',
      '数字化转型应该从关键链路开始，而不是一次性全面铺开。先挑一个影响最大的业务环节，跑通之后再扩展，这样企业更容易建立信心，也更容易积累可复用的方法。',
      '软件项目最终拼的不是功能数量，而是组织是否愿意改变。能把内部协作方式慢慢改对的企业，才能真正把系统价值释放出来。',
    ],
  },
  {
    id: 'insight-2',
    title: 'CRM 真正的价值，是让团队知道下一步该做什么',
    category: '销售管理',
    date: '2026 年 4 月',
    excerpt:
      '一套 CRM 的价值，不是把客户信息搬进系统，而是让销售团队对线索、商机和跟进动作形成统一判断。',
    image: '/images/insight-2.jpg',
    content: [
      '许多销售团队用 CRM 一段时间后觉得"系统没有用"，本质上往往不是软件问题，而是没有把团队原本分散的动作标准化。',
      '当线索来源、跟进节奏、阶段定义和复盘方法都不一致时，CRM 只会沦为一个录入工具。只有把这些关键动作定义清楚，系统数据才有分析价值。',
      '一个好用的 CRM 不一定很复杂，但一定能回答几个关键问题：谁在跟进、目前到哪一步、下一步做什么、卡点是什么、负责人是谁。',
      '如果企业希望通过 CRM 提升转化率，第一步不是加更多字段，而是先减少无效动作，让一线人员更容易执行正确动作。',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'personal-website',
    title: '个人作品集网站',
    description: '基于 React + TypeScript + Tailwind CSS 构建的个人作品集网站，展示项目案例、观点文章和专业背景。',
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
