import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, statusConfig, categoryLabels } from '../data';

export default function Insights() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = projects.filter(
    (p) =>
      (statusFilter === 'all' || p.status === statusFilter) &&
      (categoryFilter === 'all' || p.category === categoryFilter),
  );

  const statusCounts = projects.reduce<Record<string, number>>((acc, p) => {
    acc[p.status] = (acc[p.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="page-shell py-20 lg:py-24">
      <section className="max-w-4xl">
        <p className="editorial-kicker">Projects</p>
        <h1 className="editorial-title mt-5">我的项目</h1>
        <p className="mt-6 text-lg leading-9 text-[var(--color-text-muted)]">
          这里记录了我的 Vibe Coding 项目，从构思到完成的全过程。
        </p>
      </section>

      <section className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {(['in-progress', 'completed', 'planned', 'on-hold'] as const).map(
          (status) => (
            <button
              key={status}
              onClick={() =>
                setStatusFilter(statusFilter === status ? 'all' : status)
              }
              className={`rounded-2xl border p-4 text-left transition-all ${
                statusFilter === status
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                  : 'border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/50'
              }`}
            >
              <p className="text-2xl font-bold text-[var(--color-text)]">
                {statusCounts[status] || 0}
              </p>
              <p
                className={`mt-1 text-sm font-medium ${statusConfig[status].color}`}
              >
                {statusConfig[status].label}
              </p>
            </button>
          ),
        )}
      </section>

      <section className="mt-8 flex flex-wrap gap-2">
        {['all', 'web-app', 'mobile-app', 'tool', 'ai'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              categoryFilter === cat
                ? 'bg-[var(--color-primary)] text-white'
                : 'border border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-primary)]'
            }`}
          >
            {cat === 'all' ? '全部' : categoryLabels[cat] || cat}
          </button>
        ))}
      </section>

      <section className="mt-10 space-y-6">
        {filtered.map((project) => {
          const isExpanded = expandedId === project.id;
          const status = statusConfig[project.status];

          return (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition-all hover:shadow-lg"
            >
              <div
                className="cursor-pointer p-6"
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-[var(--font-family-display)] text-xl font-bold text-[var(--color-text)]">
                        {project.title}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${status.bgColor} ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </div>
                    <p className="mt-2 text-[var(--color-text-muted)]">
                      {project.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`h-5 w-5 text-[var(--color-text-soft)] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-soft)]">进度</span>
                    <span className="font-medium text-[var(--color-text)]">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${project.progress}%`,
                        backgroundColor:
                          project.status === 'completed'
                            ? '#22c55e'
                            : project.status === 'in-progress'
                              ? '#3b82f6'
                              : project.status === 'on-hold'
                                ? '#eab308'
                                : '#9ca3af',
                      }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-surface-soft)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {isExpanded && (
                <div className="border-t border-[var(--color-border)] bg-[var(--color-surface-soft)] p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--color-text)]">
                        功能特性
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {project.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                          >
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--color-text)]">
                        最新动态
                      </h4>
                      {project.updates.length > 0 ? (
                        <ul className="mt-3 space-y-3">
                          {project.updates.map((u, i) => (
                            <li key={i} className="text-sm">
                              <p className="text-[var(--color-text-soft)]">
                                {u.date}
                              </p>
                              <p className="mt-1 text-[var(--color-text-muted)]">
                                {u.content}
                              </p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-3 text-sm text-[var(--color-text-soft)]">
                          暂无更新
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4 text-sm">
                    <div>
                      <span className="text-[var(--color-text-soft)]">
                        开始时间：
                      </span>
                      <span className="text-[var(--color-text)]">
                        {project.startDate}
                      </span>
                    </div>
                    {project.targetDate && (
                      <div>
                        <span className="text-[var(--color-text-soft)]">
                          目标完成：
                        </span>
                        <span className="text-[var(--color-text)]">
                          {project.targetDate}
                        </span>
                      </div>
                    )}
                    {project.completedDate && (
                      <div>
                        <span className="text-[var(--color-text-soft)]">
                          完成时间：
                        </span>
                        <span className="text-[var(--color-text)]">
                          {project.completedDate}
                        </span>
                      </div>
                    )}
                  </div>

                  {project.link && (
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-primary-strong)]"
                      >
                        访问项目
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-lg text-[var(--color-text-muted)]">
              没有找到符合条件的项目
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
