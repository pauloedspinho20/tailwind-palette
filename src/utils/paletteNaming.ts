import type { GeneratedPaletteColor } from "./tailwindColors"

const PREFIX = [
  "Deep", "Soft", "Bold", "Muted", "Vibrant", "Warm", "Cool", "Dark",
  "Light", "Rich", "Crisp", "Airy", "Calm", "Electric", "Gentle", "Bright",
  "Urban", "Rustic", "Cosmic", "Velvet", "Frosted", "Golden",
]

const SUFFIX = [
  "Horizon", "Palette", "Hue", "Tone", "Shade", "Spectrum", "Canvas",
  "Mood", "Vibe", "Collection", "Harmony", "Fusion", "Blend", "Essence",
  "Dream", "Wave", "Echo", "Nova", "Peak", "Glow", "Dusk", "Dawn",
]

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

export function generatePaletteName(colors: GeneratedPaletteColor[]): string {
  const seed = colors.map((c) => c.tailwindName + c.shade).join("")
  const h = hashString(seed)
  const prefix = PREFIX[h % PREFIX.length]
  const suffix = SUFFIX[(h * 31) % SUFFIX.length]
  return `${prefix} ${suffix}`
}
