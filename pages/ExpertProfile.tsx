import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, INSIGHTS, PROFILE } from '../constants';

const testimonials = [
  {
    quote: '最难得的是他不会急着推产品，而是先帮我们判断问题到底出在哪里。',
    role: '制造企业负责人',
  },
  {
    quote: '沟通成本很低，既能听懂业务，也能和实施团队对得上，推进起来很顺。',
    role: '信息化项目负责人',
  },
  {
    quote: '不是只看签约和上线，而是真的关心团队最终有没有把系统用起来。',
    role: '销售团队管理者',
  },
];

const ExpertProfile: React.FC = () => {
  return (
    <div>
      <section className="page-shell grid gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="max-w-4xl">
          <p className="editorial-kicker">Personal Website</p>
          <h1 className="editorial-title mt-5 text-[var(--color-text)]">{PROFILE.heroHeadline}</h1>
          <p className="editorial-subtitle mt-8 max-w-2xl">{PROFILE.heroSubheadline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/rfq"
              className="rounded-full bg-[var(--color-primary)] px-6 py-4 text-sm font-bold text-white hover:bg-[var(--color-primary-strong)]"
            >
              获取咨询建议
            </Link>
            <Link
              to="/insights"
              className="rounded-full border border-[var(--color-border-strong)] bg-white px-6 py-4 text-sm font-bold text-[var(--color-primary)] hover:border-[var(--color-primary)]"
            >
              阅读文章
            </Link>
          </div>

          <div className="mt-14 grid gap-6 border-t border-[var(--color-border)] pt-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-black text-[var(--color-primary)]">{PROFILE.stats.years}+</p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">年行业经验</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[var(--color-primary)]">{PROFILE.stats.projects}+</p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">项目推进经历</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[var(--color-primary)]">{PROFILE.stats.clients}+</p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">服务客户</p>
            </div>
          </div>
        </div>

        <div className="paper-card overflow-hidden rounded-[28px] bg-white p-4">
          <img src={PROFILE.avatar} alt={PROFILE.name} className="h-full w-full rounded-[22px] object-cover" />
        </div>
      </section>

      <section className="page-shell pb-18">
        <div className="grid gap-10 border-t border-[var(--color-border)] py-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="editorial-kicker">What I Do</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold leading-tight text-[var(--color-text)]">
              借助企业软件，但不被软件牵着走。
            </h2>
          </div>
          <div className="grid gap-6">
            <p className="text-2xl font-medium leading-10 text-[var(--color-text)]">{PROFILE.slogan}</p>
            <p className="text-base leading-8 text-[var(--color-text-muted)]">{PROFILE.description}</p>
          </div>
        </div>
      </section>

      <section className="page-shell pb-20">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="editorial-kicker">Featured Writing</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold text-[var(--color-text)]">像专栏一样展示你的观点</h2>
          </div>

          <div className="grid gap-0 border-t border-[var(--color-border)]">
            {INSIGHTS.map((article, index) => (
              <Link
                key={article.id}
                to={`/insight/${article.id}`}
                className={`grid gap-6 border-b border-[var(--color-border)] py-8 transition-colors hover:bg-[var(--color-surface-soft)] ${
                  index === 0 ? 'md:grid-cols-[220px_1fr]' : 'md:grid-cols-[140px_1fr]'
                }`}
              >
                <div className={index === 0 ? 'overflow-hidden rounded-2xl' : 'pt-1'}>
                  {index === 0 ? (
                    <img src={article.image} alt={article.title} className="h-40 w-full object-cover" />
                  ) : (
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">{article.category}</p>
                  )}
                </div>
                <div>
                  {index === 0 ? (
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">{article.category}</p>
                  ) : null}
                  <h3 className="mt-2 font-[var(--font-family-display)] text-2xl font-bold leading-snug text-[var(--color-text)] hover:text-[var(--color-primary)]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{article.excerpt}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-20">
        <div className="grid gap-8 border-t border-[var(--color-border)] pt-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="editorial-kicker">Selected Cases</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold text-[var(--color-text)]">项目案例不堆砌，重点讲清楚。</h2>
          </div>

          <div className="grid gap-0 border-t border-[var(--color-border)]">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.id}
                to={`/case/${study.id}`}
                className="grid gap-5 border-b border-[var(--color-border)] py-8 md:grid-cols-[160px_1fr] hover:bg-[var(--color-surface-soft)]"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">{study.industry}</p>
                </div>
                <div>
                  <h3 className="font-[var(--font-family-display)] text-2xl font-bold leading-snug text-[var(--color-text)]">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{study.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-[var(--color-text-soft)]">
                    {study.stats.map((stat) => (
                      <span key={stat.label}>
                        <strong className="text-[var(--color-primary)]">{stat.value}</strong> {stat.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-24">
        <div className="rounded-[32px] border border-[var(--color-border)] bg-white px-8 py-12 lg:px-12">
          <div className="max-w-3xl">
            <p className="editorial-kicker">Client Voices</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold text-[var(--color-text)]">
              客户的真实评价
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.quote} className="rounded-[24px] bg-[var(--color-surface-soft)] px-6 py-6">
                <p className="text-base leading-8 text-[var(--color-text)]">“{item.quote}”</p>
                <p className="mt-5 text-sm font-semibold text-[var(--color-primary)]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertProfile;
