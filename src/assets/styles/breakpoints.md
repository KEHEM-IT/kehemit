# Breakpoints Utility Documentation

Modern, accessible breakpoint system for responsive design using mobile-first approach and `em` units.

## 📋 Table of Contents

- [Installation](#installation)
- [Available Breakpoints](#available-breakpoints)
- [Mixins](#mixins)
- [Functions](#functions)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)
- [FAQ](#faq)

---

## 🚀 Installation

Import the breakpoints utility in your SCSS file:

```scss
@use 'path/to/breakpoints' as *;
```

Or with a custom namespace:

```scss
@use 'path/to/breakpoints' as bp;

// Usage: @include bp.break-up(md) { ... }
```

---

## 📐 Available Breakpoints

### Core Breakpoints

| Name | Value | Pixels | Use Case |
|------|-------|--------|----------|
| `xs` | `0` | `0px` | Extra small devices (base styles) |
| `sm` | `36em` | `576px` | Small devices (large phones) |
| `md` | `48em` | `768px` | Medium devices (tablets) |
| `lg` | `64em` | `1024px` | Large devices (laptops) |
| `xl` | `75em` | `1200px` | Extra large devices (desktops) |
| `2xl` | `96em` | `1536px` | 2X large devices (large desktops) |

### MASTORSCDN Custom Breakpoints

| Name | Value | Pixels | Use Case |
|------|-------|--------|----------|
| `mobile` | `32.5em` | `520px` | Mobile devices |
| `tablet` | `48em` | `768px` | Tablets |
| `laptop` | `64em` | `1024px` | Laptops |
| `desktop` | `81.25em` | `1300px` | Desktop screens |
| `wide-screen` | `96.25em` | `1540px` | Wide screens |
| `ultra` | `120em` | `1920px` | Ultra-wide/4K displays |

---

## 🛠️ Mixins

### `breakpoint($size, $type, $orientation)`

Main breakpoint mixin with full control.

**Parameters:**
- `$size` (required): Breakpoint name from `$breakpoints` map
- `$type` (optional): `'min'` (default) or `'max'`
- `$orientation` (optional): `portrait` or `landscape`

**Examples:**

```scss
// Mobile-first (min-width) - Default
.container {
  @include breakpoint(md) { // 768px+
    padding: 2rem;
  }
}

// Desktop-first (max-width)
.header {
  @include breakpoint(lg, 'max') { // 1024px and below
    height: 60px;
  }
}

// With orientation
.gallery {
  @include breakpoint(md, 'min', landscape) { // 768px+ landscape
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

### `break-up($size)`

**Mobile-first shorthand** for `min-width` queries. Applies styles from the breakpoint and up.

```scss
.card {
  padding: 1rem;
  
  @include break-up(md) { // 768px+
    padding: 2rem;
  }
  
  @include break-up(xl) { // 1200px+
    padding: 3rem;
  }
}
```

**Compiles to:**
```css
.card {
  padding: 1rem;
}

@media (min-width: 48em) { /* 768px+ */
  .card {
    padding: 2rem;
  }
}

@media (min-width: 75em) { /* 1200px+ */
  .card {
    padding: 3rem;
  }
}
```

---

### `break-down($size)`

**Desktop-first shorthand** for `max-width` queries. Applies styles up to the breakpoint.

```scss
.sidebar {
  width: 300px;
  
  @include break-down(lg) { // 1024px and below
    width: 250px;
  }
  
  @include break-down(md) { // 768px and below
    width: 100%;
  }
}
```

---

### `break-between($min-size, $max-size)`

Apply styles **between two breakpoints**.

```scss
.banner {
  @include break-between(md, xl) { // 768px to 1200px
    font-size: 2rem;
  }
}
```

**Compiles to:**
```css
@media (min-width: 48em) and (max-width: 75em) {
  .banner {
    font-size: 2rem;
  }
}
```

---

### `break-only($size)`

Apply styles **only within a specific breakpoint range** (from current breakpoint to next breakpoint - 1px).

```scss
.notification {
  @include break-only(md) { // 768px to 1023px only
    position: fixed;
  }
}
```

---

### `custom-breakpoint($width, $type)`

Use **custom width values** not in the predefined breakpoints map.

**Parameters:**
- `$width` (required): Custom width (accepts `em`, `px`, `rem`)
- `$type` (optional): `'min'` (default) or `'max'`

```scss
.special-layout {
  @include custom-breakpoint(50em) { // 800px+
    display: grid;
  }
  
  @include custom-breakpoint(900px, 'max') { // 900px and below
    display: block;
  }
}
```

---

## 📦 Functions

### `get-breakpoint($size)`

Retrieve the **value** of a breakpoint from the map.

```scss
$tablet-width: get-breakpoint(tablet); // Returns: 48em

.custom-element {
  max-width: $tablet-width;
}
```

**Use cases:**
- Store breakpoint values in variables
- Use in calculations
- Pass to JavaScript via CSS custom properties

```scss
:root {
  --breakpoint-md: #{get-breakpoint(md)};
}
```

---

## 💡 Usage Examples

### Responsive Typography

```scss
h1 {
  font-size: 1.5rem; // Mobile base
  
  @include break-up(sm) { // 576px+
    font-size: 2rem;
  }
  
  @include break-up(md) { // 768px+
    font-size: 2.5rem;
  }
  
  @include break-up(lg) { // 1024px+
    font-size: 3rem;
  }
}
```

### Responsive Grid Layout

```scss
.grid {
  display: grid;
  grid-template-columns: 1fr; // Mobile: 1 column
  gap: 1rem;
  
  @include break-up(sm) { // 576px+
    grid-template-columns: repeat(2, 1fr); // 2 columns
  }
  
  @include break-up(md) { // 768px+
    grid-template-columns: repeat(3, 1fr); // 3 columns
    gap: 2rem;
  }
  
  @include break-up(xl) { // 1200px+
    grid-template-columns: repeat(4, 1fr); // 4 columns
  }
}
```

### Navigation Menu

```scss
.nav {
  // Mobile styles
  position: fixed;
  width: 100%;
  flex-direction: column;
  
  @include break-up(lg) { // 1024px+
    position: static;
    flex-direction: row;
    justify-content: space-between;
  }
}

.nav-toggle {
  display: block;
  
  @include break-up(lg) { // 1024px+
    display: none; // Hide hamburger on desktop
  }
}
```

### Container Widths

```scss
.container {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  
  @include break-up(sm) { // 576px+
    max-width: 540px;
  }
  
  @include break-up(md) { // 768px+
    max-width: 720px;
  }
  
  @include break-up(lg) { // 1024px+
    max-width: 960px;
  }
  
  @include break-up(xl) { // 1200px+
    max-width: 1140px;
  }
  
  @include break-up(2xl) { // 1536px+
    max-width: 1320px;
  }
}
```

### Orientation-Specific Styles

```scss
.video-player {
  aspect-ratio: 16 / 9;
  
  @include breakpoint(md, 'min', landscape) { // 768px+ landscape
    aspect-ratio: 21 / 9;
  }
  
  @include breakpoint(md, 'min', portrait) { // 768px+ portrait
    aspect-ratio: 4 / 3;
  }
}
```

---

## ✅ Best Practices

### 1. **Use Mobile-First Approach**

✅ **Good:**
```scss
.element {
  font-size: 1rem; // Mobile base
  
  @include break-up(md) {
    font-size: 1.5rem; // Tablet+
  }
}
```

❌ **Avoid:**
```scss
.element {
  font-size: 1.5rem; // Desktop default
  
  @include break-down(md) {
    font-size: 1rem; // Override for mobile
  }
}
```

### 2. **Keep Breakpoint Logic Simple**

✅ **Good:**
```scss
.card {
  @include break-up(md) {
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}
```

❌ **Avoid:**
```scss
.card {
  @include break-up(md) {
    @include break-down(lg) {
      // Nested breakpoints are confusing
      padding: 2rem;
    }
  }
}
```

Use `break-between()` instead:
```scss
.card {
  @include break-between(md, lg) {
    padding: 2rem;
  }
}
```

### 3. **Consistent Naming**

Choose either **core** (`sm`, `md`, `lg`) or **custom** (`mobile`, `tablet`, `laptop`) naming throughout your project. Don't mix them unnecessarily.

### 4. **Don't Overuse Breakpoints**

Not every element needs 5+ breakpoints. Focus on critical layout shifts.

### 5. **Test on Real Devices**

`em` units respect user font-size settings. Always test with:
- Default browser settings
- Increased font sizes (accessibility)
- Different devices and orientations

---

## ❓ FAQ

### Why `em` instead of `px`?

**Accessibility:** `em` units respect user's browser font-size settings. If a user increases their font size for readability, breakpoints using `em` will adjust accordingly.

**Conversion:** `1em = 16px` (browser default)

### Can I mix `em` and `px`?

Yes! The `custom-breakpoint()` mixin accepts both:

```scss
@include custom-breakpoint(50em) { ... }  // em
@include custom-breakpoint(800px) { ... } // px
```

### What's the difference between `break-down()` and `break-up()`?

- **`break-up(md)`**: Styles apply at `768px and above` (mobile-first)
- **`break-down(md)`**: Styles apply at `768px and below` (desktop-first)

### Why does `xs: 0` exist?

It's a semantic placeholder for "base/mobile styles" that don't need a media query. You rarely use it directly, but it helps maintain consistency in the breakpoint map.

### Can I add my own breakpoints?

Yes! Just add them to the `$breakpoints` map:

```scss
$breakpoints: (
  // ... existing breakpoints
  my-custom: 90em, // 1440px
);
```

### How do I use this with CSS-in-JS or Tailwind?

This is SCSS-only. For CSS-in-JS (styled-components, emotion), you'd need to adapt the logic. For Tailwind, it has its own breakpoint system in `tailwind.config.js`.

---

## 📄 License

Free to use in personal and commercial projects.

## 🤝 Contributing

Found an issue or have a suggestion? Feel free to improve this utility!

---

**Version:** 1.0.0  
**Last Updated:** December 2025