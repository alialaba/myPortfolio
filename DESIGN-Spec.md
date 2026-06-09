# [Project Name] — Design & Interaction Specification

## Design System

| Token        | Value           |
|--------------|-----------------|
| Primary      | `#27b7a5`       |
| Background   | `#0a0a0a`       |
| Text         | `#f5f5f5`       |
| Font Display | `"PP Neue Montreal", sans-serif` |
| Font Body    | `"Inter", sans-serif` |
| Base Radius  | `12px`          |
| Transition   | `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)` |

---

## Section: [Section Name e.g. Header / Nav]

### Layout
- Height: `80px`
- Padding: `0 48px`
- Position: `fixed`, `top: 0`, `z-index: 100`
- Background: `transparent` → `rgba(0,0,0,0.8)` on scroll

### Elements
| Element     | Property      | Value     |
|-------------|---------------|-----------|
| Logo        | font-size     | `18px`    |
| Logo        | font-weight   | `700`     |
| Nav links   | font-size     | `14px`    |
| Nav links   | letter-spacing| `0.08em`  |
| Menu button | width/height  | `44px`    |

### States

#### Default State
- Nav links: `color: #f5f5f5`, `opacity: 0.7`
- Menu icon: static, no transform

#### Hover State
- Nav links: `opacity: 1`, underline slides in from left
```css
  /* Implementation */
  .nav-link::after {
    content: '';
    width: 0;
    transition: width 0.3s ease;
  }
  .nav-link:hover::after { width: 100%; }
```
- Menu icon: rotates `90deg`
```css
  .menu-icon:hover { transform: rotate(90deg); transition: transform 0.4s ease; }
```

#### Active / Pressed State
- Menu button: scales down slightly to give tactile feel
```css
  .menu-btn:active { transform: scale(0.92); }
```

#### Transition State (Menu Open)
- Trigger: click `.menu-btn`
- Overlay slides in from top or fades in with `clip-path` reveal
- Nav links stagger in with `animation-delay: 0.1s` per item
- Icon morphs from hamburger → X using CSS transforms
```js
  // Implementation
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    menuBtn.classList.toggle('is-active');
  });
```
```css
  .nav { clip-path: inset(0 0 100% 0); transition: clip-path 0.6s cubic-bezier(...); }
  .nav.is-open { clip-path: inset(0 0 0% 0); }
```

#### Focus State (Accessibility)
- Visible `outline: 2px solid #27b7a5` on keyboard focus
- `outline-offset: 4px`

---

## Section: Hero

### Layout
- Height: `100vh`
- Padding: `0 48px`
- Content: vertically centered

### Elements
| Element     | Property      | Value       |
|-------------|---------------|-------------|
| Heading     | font-size     | `clamp(48px, 8vw, 120px)` |
| Heading     | line-height   | `0.95`      |
| Heading     | font-weight   | `800`       |
| Scroll label| font-size     | `12px`      |
| Scroll label| letter-spacing| `0.15em`    |

### States

#### Scroll Parallax
- Hero image moves at `0.5x` scroll speed (parallax)
```js
  window.addEventListener('scroll', () => {
    heroImg.style.transform = `translateY(${scrollY * 0.5}px)`;
  });
```

#### Page Load Animation
- Heading words split and slide up with stagger
```css
  .word { opacity: 0; transform: translateY(40px); animation: reveal 0.8s forwards; }
```

---

## Implementation Notes

- Use `will-change: transform` on animated elements for GPU acceleration
- Prefer `transform` and `opacity` for animations (compositor-only, no reflow)
- Use `prefers-reduced-motion` media query to disable animations for accessibility
- All transitions use `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for consistency