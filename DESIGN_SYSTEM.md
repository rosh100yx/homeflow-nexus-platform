# Design System and Style Guide

## 1. Typography
- **Font Family**: Inter, sans-serif
- **Font Sizes**:
  - Small: 12px
  - Medium: 16px
  - Large: 20px
  - Extra Large: 24px
- **Font Weights**:
  - Regular: 400
  - Medium: 500
  - Bold: 700
- **Line Heights**:
  - Small: 1.5
  - Medium: 1.6
  - Large: 1.8

## 2. Color Palette
- **Primary Colors**:
  - Retro Navy: #1E3A8A
  - Retro Orange: #F97316
- **Secondary Colors**:
  - Green: #10B981
  - Red: #EF4444
- **Neutral Colors**:
  - Background: #F9FAFB
  - Text: #111827
  - Muted: #6B7280

## 3. Components
### Buttons
- **Variants**:
  - Primary: Solid background with white text.
  - Secondary: Outlined with primary color.
- **Sizes**:
  - Small: Height 32px, Padding 8px.
  - Medium: Height 40px, Padding 12px.
  - Large: Height 48px, Padding 16px.

### Cards
- **Structure**:
  - Header: Title and optional icon.
  - Body: Content area.
  - Footer: Actions or additional info.

### Modals
- **Usage**:
  - For critical actions or additional details.
  - Includes a close button and optional footer actions.

### Tables
- **Structure**:
  - Header: Column titles.
  - Body: Rows of data.
  - Footer: Pagination or summary.

## 4. Spacing
- **Grid System**:
  - 12-column layout.
  - Gutter: 16px.
- **Margins and Paddings**:
  - Small: 8px.
  - Medium: 16px.
  - Large: 24px.

## 5. Icons
- **Library**: Lucide Icons
- **Sizes**:
  - Small: 16px
  - Medium: 24px
  - Large: 32px

## 6. Accessibility
- **Contrast**: Ensure a minimum contrast ratio of 4.5:1.
- **Keyboard Navigation**: All interactive elements must be focusable.
- **ARIA Labels**: Use ARIA attributes for screen readers.

## 7. Code Implementation
### Example: Button Component
```tsx
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'rounded-md font-medium focus:outline-none';
  const variantStyles = {
    primary: 'bg-retro-orange text-white hover:bg-retro-orange/90',
    secondary: 'border border-retro-orange text-retro-orange hover:bg-retro-orange/10',
  };
  const sizeStyles = {
    small: 'h-8 px-3',
    medium: 'h-10 px-4',
    large: 'h-12 px-6',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
```

This document will be updated as the platform evolves.
