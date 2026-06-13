# [Portofolio ] — Design & Interaction Specification

## Design System

| Token        | Value           |
|--------------|-----------------|
| Primary      | `#0C1016`       |
| Background   | `#f0f6f8`       |
| Secondary    | `#d9e0e3`       |
| Text Gray    | `#a5abad`       |
| Font         | `"Inter", sans-serif` |
| Base Radius  | `12px`          |
| Transition   | `cubic-bezier(0.22, 0.68, 0, 1)` |
| Transition II| `cubic-bezier(0.22, 0.68, 0, 1.5)`          |

---

## Section: [Header / Nav]

### Layout
- Padding: `2.5rem 3rem`(Desktop) `1.5rem 1rem` (Mobile)
- Position: `fixed`, `top: 0`, `z-index: 1997`
- Background: `transparent` → `transparent` on scroll

### Elements
| Element     | Property      | Value     |
|-------------|---------------|-----------|
| Logo        | Width         | `5rem` on Mob & `9rem` on Desktop    |
| Nav links   | font-size     | `1.8rem` on Mob  `3rem` on Desktop    |
| Nav links   | letter-spacing| `0.08em`  |

### States

#### Default State
- Nav links: `color: #1e242c`, `opacity: 0.7`
- Menu icon: static, no transform

#### Hover State
- Header Chat Link: `transform: scale(1.1)`, icon translate on X Axis from -250% to 250%
```css
  /* Implementation */
  .chat-icon .icon-hover{
    position: absolute;
    transform: translateX(-250%);
}
.header__chat:hover .icon-base{
    transform: translateX(250%);
}
.header__chat:hover .icon-hover{
    transform: translateX(0);
}
```
- Menu Button:`transform: scale(1.1)`, rotates dot svg by `90deg`
```css
.header__menu-dot svg {transition: transform 500ms var(--ease-cubic-bounce);}
  .header__menu:hover .header__menu-dot svg{transform: rotate(90deg);}
  
```
- Menu icon: rotates `90deg`
```css
  .menu-icon:hover { transform: rotate(90deg); transition: transform 0.4s ease; }
```

#### Active / Pressed State
- Header Chat Link: Slowly Pop Up the Contact page Section 
```css
```
- Menu Button: Menu Text fade Up and Displays `Close` Text and open Menu 

#### Transition State (Menu Open)
- Trigger: click `.menu-btn`
- A box includes nav links bounce in from left Showing the Nav Links, So user can click

```js
  // Implementation
 menuButton.addEventListener("click", ()=>{
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen))
    mainNav.setAttribute("aria-hidden", String(isOpen))
    mainNav.classList.toggle("is-open")
    
})
```
```css
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