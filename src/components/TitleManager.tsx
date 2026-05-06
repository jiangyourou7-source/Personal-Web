import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeMeta } from '../data';

export default function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    let meta = routeMeta[pathname];

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
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', meta.description);
    }
  }, [location]);

  return null;
}
