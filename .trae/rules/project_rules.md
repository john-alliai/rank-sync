# Astro Best Practices - Cursor Rules

## Project Architecture Philosophy
This project follows Astro-native patterns prioritizing performance, maintainability, and developer experience.

## Core Principles

### 1. Astro-First Development
- **ALWAYS prefer .astro files over large React components**
- Use React/TSX only for interactive islands that require client-side state
- Pages should be thin orchestrators that compose components
- Embrace server-side rendering by default

### 2. Component Architecture
```
src/
├── pages/           # .astro files only - define routes
├── components/
│   ├── ui/         # Reusable components (Hero, CTA, FeaturesList, FAQ, etc.)
│   └── [feature]/ # Feature-specific components (duda/, home/, etc.)
├── data/           # Structured data files (.ts exports)
├── layouts/        # Page templates (.astro)
└── utils/          # Helper functions
```

### 3. Component Creation Rules

#### When creating new components:
- **Single Responsibility**: Each component should do one thing well
- **Props-driven**: Make components reusable through props, not duplication
- **TypeScript Interfaces**: Always define Props interface in frontmatter
- **Default Values**: Provide sensible defaults for optional props

#### Component Template:
```astro
---
export interface Props {
  requiredProp: string;
  optionalProp?: string;
  variant?: 'default' | 'alternate';
}

const { 
  requiredProp, 
  optionalProp = 'default value',
  variant = 'default' 
} = Astro.props;
---

<section class={`base-styles ${variant === 'alternate' ? 'alternate-styles' : ''}`}>
  <!-- Component content -->
</section>

<style>
  /* Component-scoped styles only */
</style>
```

### 4. Reusable Component Patterns

#### Before creating a new component, check if existing components can be extended:
- `Hero.astro` - For hero sections with configurable titles, subtitles, and buttons
- `FAQ.astro` - For any Q&A sections
- `CTA.astro` - For call-to-action sections  
- `FeaturesList.astro` - For feature displays (grid or list)
- `ui/` components should be usable across multiple pages

#### Reusable Component Checklist:
- [ ] Can this be parameterized with props instead of hardcoded?
- [ ] Does this pattern exist elsewhere on the site?
- [ ] Could other pages benefit from this component?
- [ ] Is the data separated from the presentation?

### 5. Page Creation Best Practices

#### Page Structure:
```astro
---
// 1. Imports
import Layout from "../layouts/Layout.astro";
import Hero from "../components/ui/Hero.astro";
import ComponentA from "../components/ui/ComponentA.astro";
import ComponentB from "../components/feature/ComponentB.astro";

// 2. Data (page-specific)
const heroConfig = {
  title: "Page Title",
  subtitle: "Page subtitle",
  buttons: [{ text: "CTA", variant: "primary" }]
};

// 3. External data imports
import { faqData } from "../data/faqs/page-name";
---

<!-- 4. Page composition -->
<Layout title="Page Title">
  <div class="page-wrapper">
    <Hero {...heroConfig} />
    <ComponentA prop={pageData.prop} />
    <ComponentB data={faqData} />
  </div>
</Layout>
```

### 6. Data Management & File Organization

#### Data Layer Structure:
```
src/data/
├── faqs/           # FAQ questions and answers
│   ├── home.ts     # Homepage FAQs
│   └── duda.ts     # Duda page FAQs
├── features/       # Feature descriptions
│   ├── homepage.ts # Homepage features
│   └── duda.ts     # Duda-specific features
├── hero/           # Hero section configurations
│   ├── homepage.ts # Homepage hero config
│   └── duda.ts     # Duda page hero config
└── [content-type]/ # Other content types
```

#### Component Layer Structure:
```
src/components/ui/
├── Hero.astro         # Renders hero data
├── FAQ.astro          # Renders FAQ data  
├── FeaturesList.astro # Renders features data
├── CTA.astro          # Renders CTA data
└── [ComponentName].astro
```

#### File Organization Rules:
- **Data files** → `/src/data/[type]/[page].ts`
- **UI components** → `/src/components/ui/[ComponentName].astro`
- **Page-specific components** → `/src/components/[page]/[ComponentName].astro`
- **One data file per page per content type**
- **One component per UI pattern**

#### Data File Template:
```typescript
// src/data/faqs/homepage.ts
export interface FAQ {
  question: string;
  answer: string;
}

export const homepageFAQs: FAQ[] = [
  {
    question: "Question text",
    answer: "Answer text"
  }
];
```

#### Component Usage Pattern:
```astro
---
// Page imports data + components
import Hero from "../components/ui/Hero.astro";
import { homepageHero } from "../data/hero/homepage";
---

<Hero {...homepageHero} />
```

#### Why This Separation?
- **Data changes** → Update `/data` files only
- **Design changes** → Update `/components` only  
- **Type safety** → Interfaces in data files
- **Reusability** → Same component, different data
- **Maintainability** → Clear separation of concerns

### 7. Performance Rules

#### Zero JavaScript by Default:
- No `client:*` directives unless absolutely necessary
- Static HTML/CSS for content display
- Interactive elements only when user interaction required

#### When to use client directives:
- `client:load` - Critical interactive components (forms, navigation)
- `client:visible` - Below-the-fold interactive components  
- `client:idle` - Non-critical enhancements

### 8. Styling Guidelines

#### CSS Strategy:
- Use Tailwind for utility classes
- Component-scoped styles in `<style>` blocks for custom styling
- Consistent design tokens (colors, spacing, typography)
- Mobile-first responsive design

### 9. File Naming Conventions

#### Components:
- PascalCase for component files: `FeaturesList.astro`
- Descriptive, action-oriented names: `CTA.astro` not `Button.astro`
- Feature folders: `duda/`, `homepage/`, etc.

#### Data Files:
- kebab-case: `homepage-features.ts`
- Descriptive: `duda-faqs.ts` not `data.ts`

### 10. Code Organization

#### Import Order:
1. Layout imports
2. UI component imports  
3. Feature-specific component imports
4. Data imports
5. Utility imports

#### Component Props:
- Required props first
- Optional props with defaults
- Destructure all props at once
- Use TypeScript interfaces

### 11. Migration Strategy (From React to Astro)

#### When refactoring existing React components:
1. **Identify reusable patterns** first
2. **Extract static sections** to .astro components
3. **Keep interactive parts** in React with `client:*`
4. **Move data** to `/data` folder
5. **Create focused components** instead of monoliths

#### Red Flags (Avoid):
- ❌ Large React components without interactivity
- ❌ Hardcoded content in components
- ❌ Duplicated component logic
- ❌ Missing TypeScript interfaces
- ❌ Unnecessary `client:load` directives

#### Green Flags (Encourage):
- ✅ Small, focused .astro components
- ✅ Props-driven reusability
- ✅ Data separated from presentation  
- ✅ Zero JavaScript for static content
- ✅ Consistent component interfaces

## Quick Decision Tree

### "Should I create a new component?"
1. Is this pattern used elsewhere? → Extend existing component
2. Is this interactive? → Consider React with `client:*`
3. Is this static content? → Create .astro component
4. Could other pages use this? → Put in `/ui` folder
5. Is this page-specific? → Put in feature folder

### "Should I use React or Astro?"
- **Static content display** → Astro
- **Forms, user input** → React with `client:load`
- **Animations, hover effects** → CSS or `client:visible`
- **Data fetching** → Astro (server-side)
- **Complex state management** → React island

## Remember: Optimize for Performance First, Developer Experience Second 