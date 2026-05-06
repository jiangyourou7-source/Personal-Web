import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { Industry } from '../types';

const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Industry>('All');

  const filteredCases =
    activeFilter === 'All' ? CASE_STUDIES : CASE_STUDIES.filter((item) => item.industry === activeFilter);

  const industries: Array<{ name: Industry; label: string }> = [
    { name: 'All', label: '全部' },
    { name: '企业软件', label: '企业软件' },
    { name: '销售管理', label: '销售管理' },
    { name: '协同办公', label: '协同办公' },
  ];

  return (
    <div className="page-shell py-20 lg:py-24">
      <section className="max-w-4xl">
        <p className="editorial-kicker">Case Studies</p>
        <h1 className="editorial-title mt-5">项目案例</h1>
        <p className="editorial-subtitle mt-6 max-w-2xl">
          这一页改成了更接近编辑型目录页的结构。先给清楚的标题和说明，再用筛选和长列表承接案例，让用户快速找到自己关心的方向。
        </p>
      </section>

      <div className="mt-14 flex flex-wrap gap-3 border-b border-[var(--color-border)] pb-5">
        {industries.map((item) => {
          const active = activeFilter === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveFilter(item.name)}
              className={`rounded-full px-5 py-3 text-sm font-bold ${
                active
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'border border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 border-t border-[var(--color-border)]">
        {filteredCases.map((study) => (
          <Link
            key={study.id}
            to={`/case/${study.id}`}
            className="grid gap-6 border-b border-[var(--color-border)] py-9 transition-colors hover:bg-[var(--color-surface-soft)] md:grid-cols-[160px_1fr_40px]"
          >
            <div className="pt-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">{study.industry}</p>
            </div>

            <div>
              <h2 className="font-[var(--font-family-display)] text-3xl font-bold leading-snug text-[var(--color-text)]">
                {study.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">{study.summary}</p>
              <div className="mt-5 flex flex-wrap gap-6 text-sm text-[var(--color-text-soft)]">
                {study.stats.map((stat) => (
                  <span key={stat.label}>
                    <strong className="text-[var(--color-primary)]">{stat.value}</strong> {stat.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden items-start justify-end md:flex">
              <span className="material-symbols-outlined text-[var(--color-primary)]">arrow_forward</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
