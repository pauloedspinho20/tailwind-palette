# Tailwind Palette

Generate beautiful, harmonious color palettes for [Tailwind CSS v4](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com).

🔗 **[tailwindpalette.com](https://tailwindpalette.com)**

## Features

- **10 generation strategies** — Random Harmony, Complementary, Analogous, Triadic, Brand Palette, UIKit System, Nature Tones, Pastel Dream, Dark Mode, Monochromatic
- **Keyboard-driven workflow** — Space to generate, Arrow keys to cycle shades, L to lock, Ctrl+Z to undo
- **Lock individual colors** — Lock colors you like and regenerate the rest
- **Cycle shades per color** — Arrow Up/Down to shift a single color through the 50–950 shade scale
- **Add/remove colors** — Between 2 and 10 colors per palette
- **Undo** — Up to 30 undo steps
- **Export formats** — shadcn/ui `globals.css` (light + dark mode), Tailwind v4 `@theme` CSS, JSON
- **Copy utilities** — Bulk copy HEX values or Tailwind utility classes
- **Share via URL** — Encoded palette in the query string
- **UI Preview** — Live navbar, hero, cards, badges, and callout using your palette
- **Shade Viewer** — Full 50–950 shade scales for every color
- **Contrast Checker** — WCAG AA / AAA pass/fail for normal and large text
- **Color blindness simulation** — Protanopia, deuteranopia, tritanopia, achromatopsia
- **Gradient Preview** — Linear gradient across all colors
- **23 starter palettes** — Hand-crafted presets with search and filter
- **Palette history** — Last 20 palettes saved to localStorage
- **Session persistence** — Current state survives page reloads

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript |
| **Build tool** | Vite |
| **CSS** | Tailwind CSS v4 |
| **State** | React `useState` (no external libraries) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (HMR enabled)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Usage

Press **Space** to generate a new palette. Press **L** to lock/unlock the selected color. Use **Arrow Up/Down** to cycle a color's shade. Press **Ctrl+Z** to undo.

Choose a generation strategy from the dropdown, or browse the starter palette grid on the home page. Export your palette as shadcn/ui or Tailwind v4 CSS from the panel at the bottom of the screen.

## Project Structure

```
src/
├── main.tsx                 # React entry point
├── App.tsx                  # Central state, routing, keyboard shortcuts
├── index.css                # Tailwind import
├── components/
│   ├── Header.tsx           # Nav bar, tabs, undo, generate button
│   ├── HomePage.tsx         # Landing page, starter palette grid
│   ├── PaletteBar.tsx       # Color columns with lock/shade controls
│   ├── ColorInfo.tsx        # Color detail panel (HEX, RGB, Tailwind class)
│   ├── ColorSliders.tsx     # Shade adjustment bar and arrows
│   ├── StrategySelector.tsx # Generation strategy dropdown
│   ├── TailwindPanel.tsx    # Export panel (shadcn / Tailwind / JSON)
│   ├── UIPreview.tsx        # Live UI mockup with palette colors
│   ├── ShadeViewer.tsx      # Full 50–950 shade scales
│   ├── ContrastChecker.tsx  # WCAG AA/AAA contrast checker
│   ├── ColorBlindnessPreview.tsx  # Color blindness simulation
│   ├── GradientPreview.tsx  # Gradient across all colors
│   ├── PaletteHistory.tsx   # Recent palettes list
│   └── Credits.tsx          # Footer
└── utils/
    ├── tailwindColors.ts    # Color data, generation strategies, types
    ├── shadcn.ts            # Hex-to-HSL, CSS generation
    ├── persistence.ts       # localStorage, URL encode/decode, history
    ├── presets.ts           # 23 starter palettes
    ├── imageExport.ts       # PNG/JSON export, file download
    ├── colorBlindness.ts    # LMS color space simulation
    ├── contrast.ts          # WCAG contrast ratio calculation
    └── paletteNaming.ts     # Deterministic palette name generator
```

## Credits

Made with love by [Hot Dogtor](https://hotdogtor.com). Built with Tailwind CSS v4.
