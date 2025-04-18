# React Styling Examples

This repository demonstrates different approaches to styling React components, including CSS Modules, Styled Components, and Tailwind CSS. Each implementation shows how to create and style a simple button component using these different methodologies.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles
│   └── registry.tsx        # Styled-components registry
├── components/
│   ├── css-modules/        # CSS Modules implementation
│   │   ├── button.tsx
│   │   └── button.module.css
│   ├── styled-components/  # Styled-components implementation
│   │   └── button.tsx
│   └── tailwind/           # Tailwind CSS implementation
│       └── button.tsx
└── styles/
    └── styled.d.ts         # Styled-components TypeScript definitions
```

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the fancy buttons in action.

## Styling Solutions

### 1. CSS Modules

CSS Modules allow you to write traditional CSS with locally scoped class names. This prevents style conflicts and provides better CSS organization.

Example usage:

```tsx
import styles from './button.module.css';

const Button = ({
  variant,
  size,
  disabled,
  loading,
  icon,
  children,
  onClick,
}: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
```

### 2. Styled Components

Styled Components provide a way to write CSS-in-JS with a component-based approach. This allows for more dynamic and reusable styles.

Example usage:

```tsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
```

### 3. Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build complex designs with a minimal amount of code.

Example usage:

```tsx
import { Button } from '@/components/tailwind/button';

export function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click me
    </button>
  );
}
```

## 🔍 Key Benefits & Trade-offs

Here’s a quick breakdown of the pros and cons for each styling solution used in this repo:

---

### 🧩 CSS Modules

**✅ Pros**

- Simple, scoped styles with zero runtime
- Familiar for developers coming from traditional CSS
- SSR and React Server Component–friendly by default
- No extra dependencies or config needed

**⚠️ Trade-offs**

- No built-in support for variants or themes
- Can get messy as components grow
- Requires extra tooling or patterns to scale
- Styling dynamic states can feel verbose or repetitive

---

### 🎀 Tailwind CSS + `tailwind-variants`

**✅ Pros**

- Utility-first styling = fast prototyping and predictable output
- Scales well for large teams and design systems
- `tailwind-variants` makes managing variants clean and composable
- Supports theming via `@theme` and native CSS variables in v4
- Minimal runtime, great performance

**⚠️ Trade-offs**

- Readability can suffer with long class lists
- Requires strong conventions to stay maintainable
- Custom theming in CSS can get messy without structure
- Learning curve for new team members unfamiliar with utility-first CSS

---

### 💅 Styled Components

**✅ Pros**

- Dynamic styles based on props
- Built-in theming via `ThemeProvider`
- Highly expressive and colocated with component logic
- Great for deeply interactive or animated components

**⚠️ Trade-offs**

- Runtime style injection = performance cost
- Not compatible with React Server Components (relies on context)
- Hydration risks in SSR setups (like Next.js)
- Officially in maintenance mode — alternatives like Emotion or vanilla-extract may be better for new projects

---

## About This Repo

This repo was created for my talk at **React Miami 2025** — _“Styled & SASSy: Choosing the Right Styling Solution in React.”_

In this talk, I walk through how the styling landscape is shifting with React 19, Tailwind v4, and modern CSS and how three popular approaches hold up: CSS Modules, Tailwind CSS, and Styled Components.

I’m Bree Hall, a software engineer, developer advocate, and your tech bestie ✨  
I love helping devs make smarter styling decisions and build beautiful things with confidence.

👉 If you found this helpful, [follow me](https://x.com/bytesofbree) for more styling tips, dev resources, and cozy frontend content 😊!

[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@bytesofbree) [![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/bytesofbree) [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/bytesofbree) [![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@bytesofbree)
