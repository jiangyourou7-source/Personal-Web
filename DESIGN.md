# Design System: 计银瑞个人工作室

## 1. Visual Theme & Atmosphere

专业、信赖、温暖。界面融合了商务精英的严谨与个人顾问的亲和力，营造出"专业伙伴"而非"冰冷平台"的体验。

- **Mood**: 专业沉稳、温暖可亲、精致高端
- **Density**: 呼吸感充足，内容区留白大方，信息层次清晰
- **Philosophy**: "信任源于清晰"。大圆角（rounded-2xl 至 rounded-3xl）柔化商务感，金色点缀传递品质与信赖，渐变蓝传递科技与专业

## 2. Color Palette & Roles

### Primary Foundation

- **品牌蓝** (#2563EB / `primary`) — 主行动按钮、活跃导航、关键交互元素。传递专业与信赖
- **品牌蓝深** (#1D4ED8 / `primary-dark`) — 按钮悬停态、渐变终点。增强交互反馈
- **品牌蓝浅** (#DBEAFE / `primary-light`) — 浅色背景、标签底色、微弱高亮

### Accent & Brand

- **品质金** (#D4AF37 / `gold`) — 品牌标识色、边框装饰、高端点缀。传递品质与信赖
- **品质金浅** (#F5E6A3 / `gold-light`) — 金色浅底、悬停背景
- **品质金深** (#B8960C / `gold-dark`) — 金色深色变体
- **科技蓝** (#38BDF8 / `accent`) — 渐变搭档、辅助高亮、数据指标
- **翡翠绿** (#00A86B / `jade`) — 成功状态、认证标识、积极指标

### Surface & Background

- **浅色背景** — `bg-gray-50` 页面底色 / `bg-white` 卡片面 / `bg-gradient-to-r from-white to-gray-50/95` 导航栏
- **深色背景** — `dark:bg-slate-900` 页面底色 / `dark:bg-slate-800` 卡片面 / `dark:from-slate-900 dark:to-slate-900/95` 导航栏
- **深色主面** (#0F172A / `secondary`) — Hero区域、评价区、Footer的深色底

### Text Hierarchy

- **主文字** — `text-slate-900` / `dark:text-white` — 标题
- **次文字** — `text-slate-600` / `dark:text-slate-400` — 正文描述
- **辅助文字** — `text-slate-500` / `dark:text-slate-500` — 标签、元数据
- **弱化文字** — `text-slate-400` / `dark:text-slate-600` — 占位、极弱信息

### Functional States

- **成功** — `text-green-500` / `bg-green-100` / `dark:bg-green-900/30`
- **错误** — `border-red-400` / `text-red-500` / `text-red-300`（深色表单）
- **信息** — `text-primary` / `bg-primary/10`

## 3. Typography Rules

### Font Families

- **标题字体**: Noto Serif SC（`font-serif`）— 传递中文传统韵味与专业感
- **正文字体**: Noto Sans SC（`font-sans`）— 清晰易读的现代无衬线体

### Type Scale

| Level | Size | Weight | Tracking | Font | Usage |
|-------|------|--------|----------|------|-------|
| Display | 5xl-7xl (3-4.5rem) | extrabold/black | tight | serif | Hero大标题 |
| H1 | 4xl-5xl (2.25-3rem) | bold/extrabold | tight | serif | 页面主标题 |
| H2 | 3xl (1.875rem) | bold | normal | serif | 区块标题 |
| H3 | 2xl (1.5rem) | bold | normal | serif | 子区块标题 |
| H4 | xl (1.25rem) | bold | normal | sans | 卡片标题 |
| Body | base (1rem) | normal | normal | sans | 正文描述 |
| Small | sm (0.875rem) | medium | normal | sans | 辅助信息 |
| Label | xs (0.75rem) | bold/black | widset | sans | 标签、徽章 |

### Spacing Principles

- 标题使用 `tracking-tight` 或 `tracking-normal`
- 标签使用 `tracking-widest` 或 `tracking-[0.2em]`
- 正文 `leading-relaxed`（1.625）
- 大标题 `leading-tight`（1.25）

## 4. Component Stylings

### Buttons

| Type | Shape | Background | Text | Shadow | Usage |
|------|-------|-----------|------|--------|-------|
| Primary | rounded-2xl | gradient primary→primary-dark | white | shadow-xl shadow-primary/30 | 主行动（咨询、提交） |
| Primary Pill | rounded-full | gradient primary→primary-dark | white | shadow-xl shadow-primary/30 | 导航栏CTA |
| Secondary | rounded-2xl | white/dark:slate-800 + border-2 gold/30 | slate-700/dark:slate-200 | shadow-lg | 辅助行动 |
| Ghost | rounded-xl | gray-100/dark:slate-900 | slate-500 | shadow-sm | 图标按钮 |

**States**: hover:-translate-y-1, active:scale-95, disabled:opacity-60, transition-all duration-300

### Cards

| Type | Radius | Background | Border | Shadow | Usage |
|------|--------|-----------|--------|--------|-------|
| Content | rounded-3xl | white/dark:slate-800 | border gray-100/dark:slate-700 | shadow-xl | 内容卡片 |
| Profile | rounded-[2.5rem] | white/dark:slate-800 | border gray-100/dark:slate-700 | shadow-2xl | 个人资料卡 |
| Stat | rounded-2xl | gray-50/dark:slate-900 | border gray-100/dark:slate-700 | none | 数据统计块 |
| Overlay | rounded-3xl | white/10 backdrop-blur | border white/20 | shadow-2xl | 图片上浮层 |

### Inputs

- Radius: rounded-2xl
- Border: border gray-200 / dark:slate-600
- Background: bg-gray-50 / dark:bg-slate-900/50
- Focus: ring-2 ring-primary, border-transparent
- Error: border-red-400 / dark:border-red-500

### Navigation

- Sticky top-0, z-50
- Background: gradient white→gray-50/95 / dark:slate-900→slate-900/95 + backdrop-blur-xl
- Active link: text-primary + 底部渐变线 (w-full, h-0.5, primary→gold)
- Border bottom: border-b-2 border-gold/20

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px (1) | 图标与文字间距 |
| sm | 8px (2) | 紧凑元素间距 |
| md | 16px (4) | 标准内边距 |
| lg | 24px (6) | 区块内间距 |
| xl | 32px (8) | 大区块间距 |
| 2xl | 48px (12) | 区块间间距 |
| 3xl | 64px (16) | 页面级间距 |
| 4xl | 80px (20) | 大型section间距 |

### Grid

- Max width: max-w-7xl (80rem/1280px)
- Page padding: px-4 sm:px-6 lg:px-8
- Card padding: p-8 sm:p-10 lg:p-12
- Section padding: py-20 lg:py-28

### Whitespace Philosophy

- Hero区域使用超大留白（pt-36 pb-24 lg:pt-48 lg:pb-40）
- 内容区间距统一（py-20 lg:py-28）
- 卡片内边距分级（p-8 / p-10 / p-12 / p-14）

## 6. Depth & Elevation

| Level | Shadow | Usage |
|-------|--------|-------|
| 0 | none | 页面背景、平面元素 |
| 1 | shadow-sm | 小型装饰元素 |
| 2 | shadow-lg | 普通卡片、悬浮按钮 |
| 3 | shadow-xl | 重要卡片、侧边栏 |
| 4 | shadow-2xl | 弹出层、模态框、主CTA |

### Surface Hierarchy (Light)

1. 页面底色: bg-gray-50
2. 卡片面: bg-white + shadow
3. 悬浮面: bg-white + shadow-xl + border

### Surface Hierarchy (Dark)

1. 页面底色: bg-slate-900
2. 卡片面: bg-slate-800 + shadow
3. 悬浮面: bg-slate-800 + shadow-xl + border-slate-700

## 7. Do's and Don'ts

### Do ✅

- 使用 `font-serif` 作为中文标题字体，传递专业感
- 使用渐变（primary→gold, primary→accent）增加视觉层次
- 使用 `backdrop-blur` 增加玻璃质感
- 使用金色（gold）作为品牌装饰色，点缀边框和分隔线
- 保持充足的留白，避免信息过载
- 所有交互元素添加 hover/active/focus 状态
- 深色模式使用 slate 色系而非 gray

### Don't ❌

- 不要混用 rounded-2xl 和 rounded-[2.5rem] 在同类组件上
- 不要在深色背景上使用纯黑文字
- 不要使用 href="#" 作为占位链接
- 不要忽略暗色模式下的边框和背景色
- 不要在同一个页面上使用超过3种圆角大小
- 不要使用过小的点击区域（最小 44x44px）

## 8. Responsive Behavior

### Breakpoints

| Name | Min Width | Target |
|------|-----------|--------|
| sm | 640px | 大手机横屏 |
| md | 768px | 平板 |
| lg | 1024px | 小桌面 |
| xl | 1280px | 标准桌面 |

### Collapsing Strategy

- 导航: md以上显示完整导航，md以下显示汉堡菜单
- 网格: 1列(mobile) → 2列(md) → 3列(lg) → 4列(xl)
- 侧边栏: lg以上固定侧边栏，lg以下堆叠在主内容上方
- Hero图片: mobile时order-1（图片在上），lg时order-2（图片在右）

### Touch Targets

- 最小点击区域: 44x44px
- 按钮内边距: py-3 px-6（最小）至 py-5 px-12（主CTA）
- 列表项间距: py-3（最小）

## 9. Agent Prompt Guide

### Quick Color Reference

```
Primary: #2563EB | Dark: #1D4ED8 | Light: #DBEAFE
Gold: #D4AF37 | Light: #F5E6A3 | Dark: #B8960C
Accent: #38BDF8 | Jade: #00A86B
Secondary: #0F172A
```

### Ready-to-Use Prompts

**Landing Page**: "创建一个专业商务风格的落地页。浅色模式，白色卡片+柔和阴影+温暖浅灰背景。圆角 rounded-3xl。颜色：品牌蓝(#2563EB)按钮+品质金(#D4AF37)装饰。字体：Noto Serif SC标题+Noto Sans SC正文。"

**Content Page**: "创建一个内容展示页面。深色Hero区(#0F172A)+浅色内容区。卡片使用 rounded-3xl + shadow-xl + 白色/暗色slate-800背景。标签使用品质金(#D4AF37)色。"

**Form Page**: "创建一个咨询表单页面。输入框 rounded-2xl + 浅灰底。主按钮渐变蓝(#2563EB→#1D4ED8) + 白字 + 阴影。侧边栏深色(#0F172A)卡片。"
