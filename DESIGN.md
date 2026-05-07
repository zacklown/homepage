---
name: Emerald Minimalist Portfolio
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3f4944'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6f7973'
  outline-variant: '#bec9c2'
  surface-tint: '#1b6b51'
  primary: '#004532'
  on-primary: '#ffffff'
  primary-container: '#065f46'
  on-primary-container: '#8bd6b7'
  inverse-primary: '#8bd6b6'
  secondary: '#575e70'
  on-secondary: '#ffffff'
  secondary-container: '#d9dff5'
  on-secondary-container: '#5c6274'
  tertiary: '#652925'
  on-tertiary: '#ffffff'
  tertiary-container: '#823f3a'
  on-tertiary-container: '#ffb4ad'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f2d1'
  primary-fixed-dim: '#8bd6b6'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#00513b'
  secondary-fixed: '#dce2f7'
  secondary-fixed-dim: '#c0c6db'
  on-secondary-fixed: '#141b2b'
  on-secondary-fixed-variant: '#404758'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ac'
  on-tertiary-fixed: '#3b0908'
  on-tertiary-fixed-variant: '#73332f'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 4.5rem
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: '500'
    lineHeight: '1.2'
  h2:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: '1.3'
  h3:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 2rem
  section-padding: 8rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style

This design system is built on a foundation of "Quiet Authority." It targets creative professionals, executives, and specialists who require a digital presence that feels curated, intellectual, and high-end. The brand personality is poised and intentional, avoiding the loudness of typical portfolios in favor of precision and clarity.

The primary design style is **Minimalism** infused with **Modern Corporate** sensibilities. It leverages generous whitespace to let content breathe, ensuring that every element on the screen serves a specific purpose. The aesthetic avoids unnecessary ornamentation, relying instead on high-quality typography and a singular, sharp accent color to guide the user's eye. The goal is to evoke a sense of calm, competence, and meticulous attention to detail.

## Colors

The color palette is strictly disciplined to maintain a professional atmosphere. 

- **Primary:** A refined Emerald Green (#065F46) is used exclusively for calls to action, active states, and essential highlights. It represents growth and stability.
- **Secondary/Deep Charcoal:** Used for primary text and dark backgrounds (#111827) to provide high contrast against neutral surfaces.
- **Neutrals:** A range of soft grays and off-whites (from #F9FAFB to #F3F4F6) creates a layered foundation that prevents the "starkness" of pure white, making the interface feel more premium.
- **Accents:** A very pale emerald tint (#ECFDF5) is used for subtle background highlights behind icons or as hover states for secondary buttons.

## Typography

This design system employs a sophisticated typographic pairing to balance tradition with modernity. 

**Newsreader** is the headline serif. It brings a literary, editorial quality to the portfolio, suggesting depth and experience. It should be used for all major headings and pull quotes.

**Manrope** is the functional sans-serif for body copy and labels. Its geometric yet approachable structure ensures high readability across all device sizes. 

- **Editorial Touch:** Use "Body-LG" for introductory paragraphs to maintain a premium feel.
- **Hierarchy:** Maintain a clear distinction between the serif headlines and sans-serif functional text. Labels should often use uppercase with slight letter spacing to act as "signposts" in the layout.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, centering content within a 1280px container to ensure maximum readability and control over line lengths. 

- **Vertical Rhythm:** Use an 8px-based spacing system. Section padding is intentionally generous (typically 128px or more) to create a "gallery" feel where each project or bio section feels isolated and important.
- **Grid:** A 12-column grid is used for project showcases. For text-heavy pages (like "About" or "Articles"), a 6-column central offset is preferred to keep line lengths comfortable for the eye.
- **Margins:** Use 2rem gutters to ensure elements never feel crowded.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than heavy gradients or borders.

1.  **Surfaces:** The base layer is the neutral-off-white. Cards and foreground elements sit on top of this using pure white backgrounds.
2.  **Shadows:** Use extremely soft, low-opacity shadows (e.g., `box-shadow: 0 10px 30px rgba(0,0,0,0.03)`). Shadows should feel like a soft glow of depth rather than a hard drop.
3.  **Borders:** Use subtle, 1px solid borders in light gray (#E5E7EB) to define boundaries where tonal contrast is insufficient. This maintains the minimalist "blueprint" aesthetic.

## Shapes

The shape language is **Soft** and architectural. 

- **Corners:** A 4px (0.25rem) base radius is applied to buttons, input fields, and small cards. This is just enough to take the "edge" off the design without making it feel bubbly or overly playful.
- **Large Elements:** Featured project images or large cards may use an 8px (0.5rem) radius.
- **Strictness:** Maintain straight lines for the majority of the layout containers to reinforce the professional, modern tone.

## Components

- **Buttons:** 
    - **Primary:** Solid Emerald Green with white text. High contrast, no gradient.
    - **Secondary:** Transparent background with a 1px border of the Primary Emerald and Emerald text.
- **Cards:** White background, subtle 1px gray border, and a soft ambient shadow. Project cards should have a "lift" effect on hover (moving 4px up with a slightly deeper shadow).
- **Inputs:** Minimalist bottom-border only, or a very light gray stroke. On focus, the border transitions to Emerald Green.
- **Chips/Tags:** Used for "Skills" or "Services." Small Manrope caps, light gray background, no border, and slightly more rounded (Pill-style) than other elements.
- **Links:** Inline links are Emerald Green with a subtle underline that disappears on hover.
- **Progress/Timeline:** For experience sections, use a thin 2px vertical line in light gray with Emerald Green dots to mark chronological points.