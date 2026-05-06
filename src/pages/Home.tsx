import { Link } from 'react-router-dom';
import { personalInfo, cases, insights, testimonials } from '../data';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="page-shell grid gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="max-w-4xl">
          <p className="editorial-kicker">Personal Website</p>
          <h1 className="editorial-title mt-5 text-[var(--color-text)]">
            {personalInfo.heroHeadline}
          </h1>
          <p className="editorial-subtitle mt-8 max-w-2xl">
            {personalInfo.heroSubheadline}
          </p>
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
              <p className="text-3xl font-black text-[var(--color-primary)]">
                {personalInfo.stats.years}+
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                年行业经验
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-[var(--color-primary)]">
                {personalInfo.stats.projects}+
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                项目推进经历
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-[var(--color-primary)]">
                {personalInfo.stats.clients}+
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                服务客户
              </p>
            </div>
          </div>
        </div>
        <div className="paper-card overflow-hidden rounded-[28px] bg-white p-4">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="h-full w-full rounded-[22px] object-cover"
          />
        </div>
      </section>

      {/* What I Do */}
      <section className="page-shell pb-18">
        <div className="grid gap-10 border-t border-[var(--color-border)] py-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="editorial-kicker">What I Do</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold leading-tight text-[var(--color-text)]">
              借助企业软件，但不被软件牵着走。
            </h2>
          </div>
          <div className="grid gap-6">
            <p className="text-2xl font-medium leading-10 text-[var(--color-text)]">
              {personalInfo.slogan}
            </p>
            <p className="text-base leading-8 text-[var(--color-text-muted)]">
              {personalInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Writing */}
      <section className="page-shell pb-20">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="editorial-kicker">Featured Writing</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold text-[var(--color-text)]">
              像专栏一样展示你的观点
            </h2>
          </div>
          <div className="grid gap-0 border-t border-[var(--color-border)]">
            {insights.map((item, index) => (
              <Link
                key={item.id}
                to={`/insight/${item.id}`}
                className={`grid gap-6 border-b border-[var(--color-border)] py-8 transition-colors hover:bg-[var(--color-surface-soft)] ${
                  index === 0
                    ? 'md:grid-cols-[220px_1fr]'
                    : 'md:grid-cols-[140px_1fr]'
                }`}
              >
                <div
                  className={
                    index === 0 ? 'overflow-hidden rounded-2xl' : 'pt-1'
                  }
                >
                  {index === 0 ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-full object-cover"
                    />
                  ) : (
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                      {item.category}
                    </p>
                  )}
                </div>
                <div>
                  {index === 0 && (
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                      {item.category}
                    </p>
                  )}
                  <h3 className="mt-2 font-[var(--font-family-display)] text-2xl font-bold leading-snug text-[var(--color-text)] hover:text-[var(--color-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    {item.excerpt}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                    {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Cases */}
      <section className="page-shell pb-20">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="editorial-kicker">Selected Cases</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold text-[var(--color-text)]">
              项目案例不堆砌，重点讲清楚。
            </h2>
          </div>
          <div className="grid gap-0 border-t border-[var(--color-border)]">
            {cases.map((item) => (
              <Link
                key={item.id}
                to={`/case/${item.id}`}
                className="grid gap-5 border-b border-[var(--color-border)] py-8 md:grid-cols-[160px_1fr] hover:bg-[var(--color-surface-soft)]"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    {item.industry}
                  </p>
                </div>
                <div>
                  <h3 className="font-[var(--font-family-display)] text-2xl font-bold leading-snug text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-[var(--color-text-soft)]">
                    {item.stats.map((stat) => (
                      <span key={stat.label}>
                        <strong className="text-[var(--color-primary)]">
                          {stat.value}
                        </strong>{' '}
                        {stat.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Voices */}
      <section className="page-shell pb-24">
        <div className="rounded-[32px] border border-[var(--color-border)] bg-white px-8 py-12 lg:px-12">
          <div className="max-w-3xl">
            <p className="editorial-kicker">Client Voices</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold text-[var(--color-text)]">
              客户的真实评价
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.quote}
                className="rounded-[24px] bg-[var(--color-surface-soft)] px-6 py-6"
              >
                <p className="text-base leading-8 text-[var(--color-text)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-semibold text-[var(--color-primary)]">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
