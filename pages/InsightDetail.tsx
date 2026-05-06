import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { INSIGHTS } from '../constants';

const InsightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = INSIGHTS.find((item) => item.id === id);

  if (!article) return <Navigate to="/insights" />;

  const relatedArticles = INSIGHTS.filter((item) => item.id !== article.id);

  return (
    <div>
      <article className="mx-auto max-w-[1200px] px-gutter pt-24 pb-section-gap">
        <Link to="/insights" className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          返回文章列表
        </Link>

        <div className="mt-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-label-bold text-label-bold text-primary tracking-widest uppercase">{article.category}</span>
            <span className="h-px w-12 bg-outline-variant"></span>
            <time className="font-label-bold text-label-bold text-on-surface-variant">{article.date}</time>
          </div>
          <h1 className="font-display-xl text-display-xl text-on-surface max-w-3xl font-bold leading-[1.1] tracking-[-0.02em]">
            {article.title}
          </h1>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6">
          {article.content.map((paragraph, i) => (
            <p key={i} className="font-body-lg text-body-lg text-on-surface-variant leading-[1.6]">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedArticles.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl border-t border-outline-variant pt-10">
            <h2 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">相关文章</h2>
            <div className="mt-6 space-y-4">
              {relatedArticles.map((related) => (
                <Link key={related.id} to={`/insight/${related.id}`} className="group block">
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors font-semibold">
                    {related.title}
                  </h3>
                  <p className="font-label-bold text-label-bold text-on-surface-variant mt-1">{related.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default InsightDetail;
