import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: '计银瑞工作室｜软件营销顾问',
    description: '查看 ERP、CRM、OA 等企业软件项目案例，了解咨询、选型与落地的真实推进方式。',
  },
  '/cases': {
    title: '项目案例｜计银瑞工作室',
    description: '查看 ERP、CRM、OA 等企业软件项目案例，了解咨询、选型与落地的真实推进方式。',
  },
  '/about': {
    title: '关于我｜计银瑞工作室',
    description: '了解我的咨询背景、项目经验和服务方式，看看我如何帮助企业把软件项目做得更稳。',
  },
  '/insights': {
    title: '观点文章｜计银瑞工作室',
    description: '分享企业软件选型、销售管理和数字化转型中的真实经验与判断。',
  },
  '/rfq': {
    title: '预约沟通｜计银瑞工作室',
    description: '填写需求信息，快速获得企业软件咨询、项目推进和选型建议。',
  },
};

export function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    let meta = PAGE_META[pathname];

    if (pathname.startsWith('/case/')) {
      meta = {
        title: '案例详情｜计银瑞工作室',
        description: '查看具体项目中的挑战、推进方式与落地成果。',
      };
    } else if (pathname.startsWith('/insight/')) {
      meta = {
        title: '文章详情｜计银瑞工作室',
        description: '阅读关于企业软件与数字化项目的实践观点。',
      };
    }

    if (!meta) {
      meta = {
        title: '页面未找到｜计银瑞工作室',
        description: '抱歉，这个页面不存在或已被移动。',
      };
    }

    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', meta.description);
    }
  }, [location]);
}
