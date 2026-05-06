import React, { useState } from 'react';
import { PROFILE } from '../constants';

const RFQ: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    wechat: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputClass = (field: string) =>
    `w-full rounded-2xl border bg-white px-4 py-4 text-sm outline-none transition-colors ${
      errors[field]
        ? 'border-red-400'
        : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
    }`;

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = '请输入你的姓名';
    if (!formData.email.trim()) next.email = '请输入联系邮箱';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = '请输入有效的邮箱地址';
    if (!formData.projectType) next.projectType = '请选择项目类型';
    if (!formData.description.trim()) next.description = '请简单描述当前问题';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="page-shell py-24">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-[var(--color-border)] bg-white px-8 py-12 text-center shadow-[0_10px_30px_rgba(29,78,216,0.06)]">
          <span className="material-symbols-outlined text-[64px] text-[var(--color-primary)]">check_circle</span>
          <h1 className="mt-6 font-[var(--font-family-display)] text-4xl font-bold text-[var(--color-text)]">信息已收到</h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
            我会尽快通过你留下的联系方式与你沟通。通常情况下，24 小时内会给到第一轮反馈。
          </p>
          <button
            onClick={() => {
              setFormData({ company: '', name: '', email: '', wechat: '', projectType: '', budget: '', timeline: '', description: '' });
              setIsSubmitted(false);
            }}
            className="mt-8 rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
          >
            继续填写
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell py-20 lg:py-24">
      <section className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="editorial-kicker">Contact</p>
          <h1 className="editorial-title mt-5">预约沟通</h1>


          <div className="mt-10 grid gap-4 text-sm text-[var(--color-text-muted)]">
              <p>{PROFILE.phone}</p>
            <p>{PROFILE.location}</p>
          </div>
        </div>

        <div className="paper-card rounded-[30px] bg-white p-7 lg:p-9">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-bold text-[var(--color-text)]">公司名称</label>
                <input name="company" value={formData.company} onChange={handleChange} className={inputClass('company')} placeholder="例如：某制造企业" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--color-text)]">姓名</label>
                <input name="name" value={formData.name} onChange={handleChange} className={inputClass('name')} placeholder="你的姓名" />
                {errors.name && <p className="mt-2 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--color-text)]">邮箱</label>
                <input name="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="you@example.com" />
                {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-bold text-[var(--color-text)]">微信号</label>
                <input name="wechat" value={formData.wechat} onChange={handleChange} className={inputClass('wechat')} placeholder="方便的话可以留下微信" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--color-text)]">项目类型</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange} className={inputClass('projectType')}>
                  <option value="">请选择</option>
                  <option value="erp">ERP 项目</option>
                  <option value="crm">CRM 项目</option>
                  <option value="oa">OA / 协同办公</option>
                  <option value="other">其他企业软件相关需求</option>
                </select>
                {errors.projectType && <p className="mt-2 text-xs text-red-500">{errors.projectType}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--color-text)]">预算区间</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass('budget')}>
                  <option value="">暂未确定</option>
                  <option value="1-5">1 万 - 5 万</option>
                  <option value="5-20">5 万 - 20 万</option>
                  <option value="20-50">20 万 - 50 万</option>
                  <option value="50+">50 万以上</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[var(--color-text)]">计划时间</label>
              <input name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass('timeline')} placeholder="例如：希望 2 个月内启动" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[var(--color-text)]">问题描述</label>
              <textarea
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                className={`${inputClass('description')} resize-none`}
                placeholder="例如：公司正在评估 ERP，但内部需求还不统一，想先判断推进路径。"
              />
              {errors.description && <p className="mt-2 text-xs text-red-500">{errors.description}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-full bg-[var(--color-primary)] px-6 py-4 text-sm font-bold text-white hover:bg-[var(--color-primary-strong)] disabled:opacity-60"
            >
              {isSubmitting ? '提交中...' : '发送咨询信息'}
            </button>

            <p className="text-xs leading-6 text-[var(--color-text-soft)]">
              你提交的信息只会用于本次沟通，不会被公开。
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RFQ;
