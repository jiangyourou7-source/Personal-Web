import { Link } from 'react-router-dom';
import { personalInfo } from '../data';

export default function About() {
  return (
    <div className="page-shell py-20 lg:py-24">
      <section className="grid gap-12 border-b border-[var(--color-border)] pb-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="editorial-kicker">About</p>
          <h1 className="editorial-title mt-5">关于我</h1>
        </div>
        <div className="grid gap-6">
          <p className="text-2xl leading-10 text-[var(--color-text)]">
            我更习惯用业务语言，而不是术语堆砌，去帮助企业判断软件项目到底该怎么推进。
          </p>
          <p className="text-base leading-8 text-[var(--color-text-muted)]">
            在复杂的软件项目里，真正难的往往不是功能选择，而是业务理解、推进节奏、内部协调和最终落地。我更适合站在这个中间位置，帮企业把问题拆开，把路径看清。
          </p>
        </div>
      </section>

      <section className="grid gap-10 py-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="paper-card rounded-[28px] bg-white p-5">
          <img
            src={personalInfo.avatarSecondary}
            alt={personalInfo.name}
            className="w-full rounded-[20px] object-cover"
          />
        </div>
        <div className="grid gap-8">
          <div className="paper-card rounded-[28px] bg-white p-8">
            <h2 className="font-[var(--font-family-display)] text-3xl font-bold text-[var(--color-text)]">
              我的工作方式
            </h2>
            <div className="mt-6 grid gap-5">
              {[
                '先判断问题，再讨论系统。避免一上来就陷入产品比较。',
                '把复杂的项目语言翻译成负责人和一线都能理解的行动。',
                '更重视系统是否真正用起来，而不是只看签约或上线节点。',
              ].map((text) => (
                <div
                  key={text}
                  className="rounded-2xl bg-[var(--color-surface-soft)] px-5 py-4 text-sm leading-7 text-[var(--color-text-muted)]"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="paper-card rounded-[28px] bg-white p-8">
            <h2 className="font-[var(--font-family-display)] text-3xl font-bold text-[var(--color-text)]">
              别人为什么愿意找我合作
            </h2>
            <div className="mt-6 space-y-5">
              {[
                '不会急着推销产品，而是先帮企业判断问题。',
                '沟通成本低，既能和业务负责人交流，也能和实施团队对话。',
                '会把项目推进、培训和复盘当成完整服务，而不是只看前端签约。',
              ].map((text) => (
                <blockquote
                  key={text}
                  className="border-l-2 border-[var(--color-primary)] pl-5 text-base leading-8 text-[var(--color-text-muted)]"
                >
                  {text}
                </blockquote>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-[var(--color-primary)] px-8 py-10 text-white">
            <p className="editorial-kicker !text-white/80">Next Step</p>
            <h2 className="mt-4 font-[var(--font-family-display)] text-4xl font-bold leading-tight">
              如果你正在推进一个软件项目，我们可以先从一次简短沟通开始。
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85">
              你不需要一次把所有材料准备完整，先把目前的困扰讲清楚，我来帮你判断更适合从需求梳理、选型还是推进管理开始。
            </p>
            <Link
              to="/rfq"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-4 text-sm font-bold text-[var(--color-primary)]"
            >
              发起咨询
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
