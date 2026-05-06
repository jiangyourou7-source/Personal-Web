---
name: Industrial Excellence
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e2'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fc'
  surface-container: '#ededf6'
  surface-container-high: '#e7e7f0'
  surface-container-highest: '#e2e2eb'
  on-surface: '#191b22'
  on-surface-variant: '#434653'
  inverse-surface: '#2e3037'
  inverse-on-surface: '#f0f0f9'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#2559bd'
  primary: '#00327d'
  on-primary: '#ffffff'
  primary-container: '#0047ab'
  on-primary-container: '#a5bdff'
  inverse-primary: '#b1c5ff'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#651f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#8b2e01'
  on-tertiary-container: '#ffaa8a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001946'
  on-primary-fixed-variant: '#00419e'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#802900'
  background: '#faf8ff'
  on-background: '#191b22'
  surface-variant: '#e2e2eb'
typography:
  display-xl:
    fontFamily: Work Sans
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  element-gap: 24px
  container-max: 1200px
  gutter: 32px
  margin: auto
---

## Brand & Style

This design system is engineered for the high-stakes world of manufacturing software, where reliability and precision are paramount. The brand personality is authoritative, "straight-talking," and technologically advanced. It strips away the clutter often found in industrial software marketing to focus on clarity and performance.

The chosen style is **Minimalist High-Contrast**. It draws inspiration from editorial-style layouts, utilizing significant negative space to frame high-impact typography. This approach mirrors the efficiency of a well-oiled production line—every element has a purpose, and there is no wasted space. By prioritizing a corporate palette of deep blues and crisp whites, the UI evokes a sense of institutional trust and modern engineering.

## Colors

The color palette is restricted to maintain a high-authority, professional atmosphere. 

- **Primary (Deep Industrial Blue):** Used for primary actions, navigation headers, and key brand moments. It represents stability and depth.
- **Secondary (Clean White):** The foundational surface color. It ensures the interface feels breathable and modern.
- **Accent (Silver/Soft Light Blue):** Reserved for subtle highlights, divider lines, and background shifts to distinguish sections without breaking the high-contrast rhythm.
- **Neutrals:** A range of slate-tinted grays is used for body text and secondary information, ensuring that even the smallest details remain legible against the white background.

## Typography

Typography is the primary vehicle for the brand’s authority. This design system utilizes a dual-font strategy:

- **Headline Font (Work Sans):** Used for all major headings. Its grounded, geometric construction conveys a sense of industrial strength. Headings should be set with tight letter spacing and bold weights to emulate a confident, editorial look.
- **Body Font (Inter):** Chosen for its exceptional legibility in technical contexts. It handles complex data and long-form marketing copy with ease.
- **Scale:** Inspired by modern long-form media, the type scale is aggressive. Large display type is used to break sections, followed by generous line heights in body copy to ensure comfortable reading of technical value propositions.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model to ensure content remains centered and readable, mimicking a premium publication. 

- **Grid:** A 12-column grid with wide gutters (32px) is used to provide structure for complex feature lists and data visualizations.
- **Vertical Rhythm:** A heavy emphasis is placed on vertical "breathing room." Section gaps are intentionally large (120px+) to force the user to focus on one value proposition at a time.
- **Alignment:** Content is primarily left-aligned to mirror the reading patterns of technical documentation, though hero sections may utilize centered "Display" type for impact.

## Elevation & Depth

This design system avoids heavy shadows or skeuomorphic effects. Instead, it uses **Low-Contrast Outlines** and **Tonal Layers** to create hierarchy:

- **Flat Depth:** Most elements sit directly on the primary white surface. 
- **Borders:** Subtle 1px borders in the Silver accent color (#E2E8F0) are used to define cards and input fields.
- **Tonal Shifts:** To separate the "Marketing" sections from "Technical" sections, the background may shift from Clean White to a Neutral Light tint (#F8FAFC).
- **Interactive Depth:** Only upon interaction (hover/active) should a subtle, diffused shadow or a slight shift in background saturation occur to provide feedback.

## Shapes

The shape language is **Soft (Level 1)**. 

While the brand is modern, manufacturing requires a feeling of structural integrity. Elements use a 0.25rem (4px) base corner radius. This is enough to feel contemporary and "software-first" without appearing too consumer-focused or "bubbly." Larger components like containers or hero images may scale up to a 0.5rem radius, but no further. Sharp corners are preferred for decorative lines and separators to maintain a technical edge.

## Components

- **Buttons:** Primary buttons are solid Deep Industrial Blue with White text. They use bold Inter typography for the label. Secondary buttons use a 1px Blue border with a transparent background.
- **Cards:** Cards are minimalist with no shadow. They feature a 1px Silver border and generous internal padding (32px). They are used primarily for case studies and feature highlights.
- **Input Fields:** To maintain the "editorial" feel, inputs are defined by a clean 1px bottom border or a subtle light gray field. Focus states utilize a 2px Deep Industrial Blue bottom border.
- **Chips/Tags:** Used for categorizing software modules (e.g., "ERP," "MES"). These are small, utilize the Silver background, and have high-letter-spacing uppercase text.
- **Industrial Accents:** Vertical and horizontal "hairlines" (thin 1px lines) are used throughout the UI to guide the eye and separate content, reinforcing the grid-based, engineering-heavy aesthetic.
- **Data Visualizations:** Charts and graphs should exclusively use the Primary Blue and its tints, ensuring they feel like a native part of the software platform rather than third-party additions.