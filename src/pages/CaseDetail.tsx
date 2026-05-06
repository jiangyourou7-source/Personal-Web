import { useState, type FormEvent } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { cases, personalInfo } from '../data';

export default function CaseDetail() {
  const { id } = useParams();
  const caseItem = cases.find((c) => c.id === id);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  if (!caseItem) {
    return <Navigate to="/cases" />;
  }

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError('请输入邮箱地址');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('请输入有效的邮箱地址');
      return;
    }
    setEmailError('');
    setSending(true);
    // Simulate submission
    await new Promise((r) => window.setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div>
      <main className="mx-auto max-w-[1200px] px-gutter pt-24 pb-section-gap">
        <Link
          to="/cases"
          className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
          返回案例列表
        </Link>

        <div className="mt-8">
          <p className="font-label-bold text-label-bold text-primary tracking-widest uppercase">
            {caseItem.industry}
          </p>
          <h1 className="font-display-xl text-display-xl text-on-surface mt-4 font-bold leading-[1.1] tracking-[-0.02em]">
            {caseItem.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-[1.6]">
            {caseItem.summary}
          </p>
        </div>

        <div className="mt-10 flex gap-8 border-y border-outline-variant py-6">
          {caseItem.stats.map((s) => (
            <div key={s.label}>
              <p className="font-headline-lg text-headline-lg text-primary font-bold">
                {s.value}
              </p>
              <p className="font-label-bold text-label-bold text-on-surface-variant mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </main>

      <section className="mx-auto max-w-[1200px] px-gutter pb-section-gap">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="space-y-10">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                项目挑战
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-[1.6]">
                {caseItem.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                推进方式
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-[1.6]">
                {caseItem.solution}
              </p>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                最终结果
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-[1.6]">
                {caseItem.result}
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded border border-outline-variant bg-surface p-6">
              <div className="flex items-center gap-4">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-label-bold text-label-bold text-on-surface">
                    {personalInfo.name}
                  </p>
                  <p className="font-body-md text-[14px] text-on-surface-variant">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4">
                如果你的情况和这个案例类似，我可以帮你先判断应该从哪一步开始推进。
              </p>
              <Link
                to="/rfq"
                className="mt-4 block border border-primary text-primary font-label-bold text-label-bold px-5 py-3 text-center rounded hover:bg-primary hover:text-on-primary transition-colors"
              >
                咨询类似项目
              </Link>
            </div>

            <div className="rounded bg-primary p-6 text-on-primary">
              <h2 className="font-headline-md text-[20px] font-semibold">
                获取完整案例说明
              </h2>
              {submitted ? (
                <p className="font-body-md text-body-md text-primary-fixed-dim mt-4">
                  已收到你的信息，我会尽快通过邮箱与你联系。
                </p>
              ) : (
                <form onSubmit={handleEmailSubmit} className="mt-4 space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    placeholder="输入你的邮箱地址"
                    className="w-full border-b border-white/30 bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-primary-fixed-dim focus:border-white"
                  />
                  {emailError && (
                    <p className="text-xs text-error-container">{emailError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full border border-white font-label-bold text-label-bold px-4 py-3 text-white disabled:opacity-60 hover:bg-white hover:text-primary transition-colors rounded"
                  >
                    {sending ? '提交中...' : '发送给我'}
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
