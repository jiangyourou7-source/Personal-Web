export interface CaseItem {
  id: string;
  title: string;
  industry: string;
  summary: string;
  image: string;
  stats: { label: string; value: string }[];
  challenge: string;
  solution: string;
  result: string;
}

export const cases: CaseItem[] = [
  {
    id: 'project-1',
    title: '制造企业 ERP 上线项目',
    industry: '企业软件',
    summary:
      '从需求梳理到系统切换，帮助制造企业完成 ERP 上线，打通采购、仓储、生产与财务数据。',
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
    summary:
      '围绕线索、商机、跟进与复盘流程，帮销售团队建立统一的 CRM 管理机制。',
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
    summary:
      '重新设计审批、协作和信息同步机制，让原本低效的行政流程真正跑起来。',
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
