import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-section-gap px-8">
      <div className="max-w-lg text-center">
        <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-[0.28em]">404</p>
        <h1 className="font-display-xl text-display-xl text-on-surface mt-6 font-bold">这个页面暂时没有找到</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-5">
          可能是链接地址不对，也可能是页面路径已经调整。你可以回到首页继续浏览。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded hover:bg-primary-container transition-colors"
          >
            返回首页
          </Link>
          <Link
            to="/rfq"
            className="border border-outline-variant text-on-surface font-label-bold text-label-bold px-6 py-3 rounded hover:border-primary hover:text-primary transition-colors"
          >
            联系我
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
