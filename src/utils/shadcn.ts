import type { GeneratedPaletteColor } from "./tailwindColors"
import { TAILWIND_COLORS } from "./tailwindColors"

function hexToHslString(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min

  let h = 0
  const l = (max + min) / 2
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1))

  if (d !== 0) {
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60
    else if (max === g) h = ((b - r) / d + 2) * 60
    else h = ((r - g) / d + 4) * 60
  }

  return `${Math.round(h * 10) / 10} ${Math.round(s * 1000) / 10}% ${Math.round(l * 1000) / 10}%`
}

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return 0.299 * r + 0.587 * g + 0.114 * b
}

function shd(colorName: string, shade: number): string {
  const c = TAILWIND_COLORS[colorName]
  if (!c) return "0 0% 50%"
  const key = `hex${shade}` as keyof typeof c
  return hexToHslString((c as unknown as Record<string, string>)[key] ?? c.hex500)
}

function findColorBySemantic(colors: GeneratedPaletteColor[], semantic: string): GeneratedPaletteColor | undefined {
  return colors.find((c) => c.semanticName === semantic)
}

export interface ShadcnConfig {
  light: string
  dark: string
  combined: string
}

export function generateShadcnCSS(colors: GeneratedPaletteColor[]): ShadcnConfig {
  const primary = findColorBySemantic(colors, "primary") ?? colors[0]
  const secondary = findColorBySemantic(colors, "secondary") ?? colors[1] ?? primary
  const accent = findColorBySemantic(colors, "accent") ?? colors[2] ?? primary
  const destructive = findColorBySemantic(colors, "warning") ?? colors.find((c) => c.tailwindName === "red") ?? colors[0]
  const neutral = findColorBySemantic(colors, "neutral") ?? colors.find((c) => TAILWIND_COLORS[c.tailwindName]?.category === "neutral") ?? colors[0]

  const pName = primary.tailwindName
  const sName = secondary.tailwindName
  const aName = accent.tailwindName
  const dName = destructive.tailwindName
  const nName = neutral.tailwindName

  const p500 = shd(pName, 500)
  const p600 = shd(pName, 600)
  const p400 = shd(pName, 400)
  const pFgLight = luminance(TAILWIND_COLORS[pName]?.hex500 ?? "#000") > 0.4 ? "0 0% 4%" : "0 0% 98%"
  const pFgDark = luminance(TAILWIND_COLORS[pName]?.hex400 ?? "#000") > 0.4 ? "0 0% 4%" : "0 0% 98%"

  const s100 = shd(sName, 100)
  const s800 = shd(sName, 800)
  const sFg = shd(sName, 900)

  const a100 = shd(aName, 100)
  const a800 = shd(aName, 800)
  const aFg = shd(aName, 900)

  const dBg = shd(dName, 600)
  const dFg = "0 0% 98%"

  const n50 = shd(nName, 50)
  const n100 = shd(nName, 100)
  const n200 = shd(nName, 200)
  const n300 = shd(nName, 300)
  const n500 = shd(nName, 500)
  const n700 = shd(nName, 700)
  const n800 = shd(nName, 800)
  const n900 = shd(nName, 900)
  const n950 = shd(nName, 950)

  const ring = shd(pName, 500)

  const light = `@layer base {
  :root {
    --background: ${n50};
    --foreground: ${n900};
    --card: ${n50};
    --card-foreground: ${n900};
    --popover: ${n50};
    --popover-foreground: ${n900};
    --primary: ${p500};
    --primary-foreground: ${pFgLight};
    --secondary: ${s100};
    --secondary-foreground: ${sFg};
    --muted: ${n100};
    --muted-foreground: ${n500};
    --accent: ${a100};
    --accent-foreground: ${aFg};
    --destructive: ${dBg};
    --destructive-foreground: ${dFg};
    --border: ${n200};
    --input: ${n200};
    --ring: ${ring};
    --radius: 0.5rem;
    --chart-1: ${p500};
    --chart-2: ${shd(sName, 500)};
    --chart-3: ${shd(aName, 500)};
    --chart-4: ${shd(dName, 500)};
    --chart-5: ${shd(pName, 300)};
    --sidebar-background: ${n50};
    --sidebar-foreground: ${n700};
    --sidebar-primary: ${p600};
    --sidebar-primary-foreground: ${pFgLight};
    --sidebar-accent: ${n100};
    --sidebar-accent-foreground: ${n900};
    --sidebar-border: ${n200};
    --sidebar-ring: ${ring};
  }
}`

  const dark = `  .dark {
    --background: ${n950};
    --foreground: ${n50};
    --card: ${luminance(TAILWIND_COLORS[nName]?.hex900 ?? "#000") > 0.5 ? n800 : n950};
    --card-foreground: ${n50};
    --popover: ${n950};
    --popover-foreground: ${n50};
    --primary: ${p400};
    --primary-foreground: ${pFgDark};
    --secondary: ${s800};
    --secondary-foreground: ${n50};
    --muted: ${n800};
    --muted-foreground: ${n300};
    --accent: ${a800};
    --accent-foreground: ${n50};
    --destructive: ${dBg};
    --destructive-foreground: ${dFg};
    --border: ${n800};
    --input: ${n800};
    --ring: ${shd(pName, 400)};
    --chart-1: ${shd(pName, 400)};
    --chart-2: ${shd(sName, 600)};
    --chart-3: ${shd(aName, 600)};
    --chart-4: ${shd(dName, 400)};
    --chart-5: ${shd(pName, 500)};
    --sidebar-background: ${n900};
    --sidebar-foreground: ${n200};
    --sidebar-primary: ${shd(pName, 400)};
    --sidebar-primary-foreground: ${pFgDark};
    --sidebar-accent: ${n800};
    --sidebar-accent-foreground: ${n50};
    --sidebar-border: ${n800};
    --sidebar-ring: ${ring};
  }`

  const combined = `${light}

${dark}
}`

  return { light, dark: `@layer base {\n${dark}\n}`, combined }
}

export function generateTailwindThemeCSS(colors: GeneratedPaletteColor[]): string {
  const lines: string[] = ["@theme {", "  /* Color palette */", ""]

  for (const color of colors) {
    const name = color.tailwindName
    lines.push(`  /* ${color.semanticName} — ${name} */`)
    const keys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
    for (const shade of keys) {
      lines.push(`  --color-${name}-${shade}: ${color.shades[shade]};`)
    }
    lines.push("")
  }

  lines.push("}")
  return lines.join("\n")
}
