import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CASE_STUDIES, PROFILE } from '../constants';

const CaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = CASE_STUDIES.find((item) => item.id === id);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!study) return <Navigate to="/cases" />;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) {
      setEmailError('请输入邮箱地址');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('请输入有效的邮箱地址');
      return;
    }
    setEmailError('');
    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div>
      <main className="mx-auto max-w-[1200px] px-gutter pt-24 pb-section-gap">
        <Link to="/cases" className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          返回案例列表
        </Link>

        <div className="mt-8">
          <p className="font-label-bold text-label-bold text-primary tracking-widest uppercase">{study.industry}</p>
          <h1 className="font-display-xl text-display-xl text-on-surface mt-4 font-bold leading-[1.1] tracking-[-0.02em]">
            {study.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-[1.6]">{study.summary}</p>
        </div>

        <div className="mt-10 flex gap-8 border-y border-outline-variant py-6">
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-headline-lg text-headline-lg text-primary font-bold">{stat.value}</p>
              <p className="font-label-bold text-label-bold text-on-surface-variant mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </main>

      <section className="mx-auto max-w-[1200px] px-gutter pb-section-gap">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="space-y-10">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">项目挑战</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-[1.6]">{study.challenge}</p>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">推进方式</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-[1.6]">{study.solution}</p>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">最终结果</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-[1.6]">{study.result}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded border border-outline-variant bg-surface p-6">
              <div className="flex items-center gap-4">
                <img src={PROFILE.avatar} alt={PROFILE.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-label-bold text-label-bold text-on-surface">{PROFILE.name}</p>
                  <p className="font-body-md text-[14px] text-on-surface-variant">{PROFILE.title}</p>
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
              <h2 className="font-headline-md text-[20px] font-semibold">获取完整案例说明</h2>
              {submitted ? (
                <p className="font-body-md text-body-md text-primary-fixed-dim mt-4">
                  已收到你的信息，我会尽快通过邮箱与你联系。
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (emailError) setEmailError('');
                    }}
                    placeholder="输入你的邮箱地址"
                    className="w-full border-b border-white/30 bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-primary-fixed-dim focus:border-white"
                  />
                  {emailError && <p className="text-xs text-error-container">{emailError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full border border-white font-label-bold text-label-bold px-4 py-3 text-white disabled:opacity-60 hover:bg-white hover:text-primary transition-colors rounded"
                  >
                    {isSubmitting ? '提交中...' : '发送给我'}
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CaseDetail;
