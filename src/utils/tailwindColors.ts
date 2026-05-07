export interface TailwindColor {
  name: string
  hex50: string; hex100: string; hex200: string; hex300: string
  hex400: string; hex500: string; hex600: string; hex700: string
  hex800: string; hex900: string; hex950: string
  oklchHue: number
  category: "warm" | "cool" | "neutral"
}

export const TAILWIND_COLORS: Record<string, TailwindColor> = {
  red:      { name:"red",      hex50:"#fef2f2",hex100:"#fee2e2",hex200:"#fecaca",hex300:"#fca5a5",hex400:"#f87171",hex500:"#ef4444",hex600:"#dc2626",hex700:"#b91c1c",hex800:"#991b1b",hex900:"#7f1d1d",hex950:"#450a0a",oklchHue:25.3,category:"warm"},
  orange:   { name:"orange",   hex50:"#fff7ed",hex100:"#ffedd5",hex200:"#fed7aa",hex300:"#fdba74",hex400:"#fb923c",hex500:"#f97316",hex600:"#ea580c",hex700:"#c2410c",hex800:"#9a3412",hex900:"#7c2d12",hex950:"#431407",oklchHue:47.6,category:"warm"},
  amber:    { name:"amber",    hex50:"#fffbeb",hex100:"#fef3c7",hex200:"#fde68a",hex300:"#fcd34d",hex400:"#fbbf24",hex500:"#f59e0b",hex600:"#d97706",hex700:"#b45309",hex800:"#92400e",hex900:"#78350f",hex950:"#451a03",oklchHue:70.1,category:"warm"},
  yellow:   { name:"yellow",   hex50:"#fefce8",hex100:"#fef9c3",hex200:"#fef08a",hex300:"#fde047",hex400:"#facc15",hex500:"#eab308",hex600:"#ca8a04",hex700:"#a16207",hex800:"#854d0e",hex900:"#713f12",hex950:"#422006",oklchHue:86.0,category:"warm"},
  lime:     { name:"lime",     hex50:"#f7fee7",hex100:"#ecfccb",hex200:"#d9f99d",hex300:"#bef264",hex400:"#a3e635",hex500:"#84cc16",hex600:"#65a30d",hex700:"#4d7c0f",hex800:"#3f6212",hex900:"#365314",hex950:"#1a2e05",oklchHue:130.9,category:"cool"},
  olive:    { name:"olive",    hex50:"#f8faf7",hex100:"#f0f3ed",hex200:"#dfe5d7",hex300:"#c7d0ba",hex400:"#96a47e",hex500:"#626e40",hex600:"#4e5733",hex700:"#3e4629",hex800:"#2f3520",hex900:"#242919",hex950:"#151710",oklchHue:107.3,category:"cool"},
  green:    { name:"green",    hex50:"#f0fdf4",hex100:"#dcfce7",hex200:"#bbf7d0",hex300:"#86efac",hex400:"#4ade80",hex500:"#22c55e",hex600:"#16a34a",hex700:"#15803d",hex800:"#166534",hex900:"#14532d",hex950:"#052e16",oklchHue:149.6,category:"cool"},
  emerald:  { name:"emerald",  hex50:"#ecfdf5",hex100:"#d1fae5",hex200:"#a7f3d0",hex300:"#6ee7b7",hex400:"#34d399",hex500:"#10b981",hex600:"#059669",hex700:"#047857",hex800:"#065f46",hex900:"#064e3b",hex950:"#022c22",oklchHue:162.5,category:"cool"},
  teal:     { name:"teal",     hex50:"#f0fdfa",hex100:"#ccfbf1",hex200:"#99f6e4",hex300:"#5eead4",hex400:"#2dd4bf",hex500:"#14b8a6",hex600:"#0d9488",hex700:"#0f766e",hex800:"#115e59",hex900:"#134e4a",hex950:"#042f2e",oklchHue:182.5,category:"cool"},
  cyan:     { name:"cyan",     hex50:"#ecfeff",hex100:"#cffafe",hex200:"#a5f3fc",hex300:"#67e8f9",hex400:"#22d3ee",hex500:"#06b6d4",hex600:"#0891b2",hex700:"#0e7490",hex800:"#155e75",hex900:"#164e63",hex950:"#083344",oklchHue:215.2,category:"cool"},
  sky:      { name:"sky",      hex50:"#f0f9ff",hex100:"#e0f2fe",hex200:"#bae6fd",hex300:"#7dd3fc",hex400:"#38bdf8",hex500:"#0ea5e9",hex600:"#0284c7",hex700:"#0369a1",hex800:"#075985",hex900:"#0c4a6e",hex950:"#082f49",oklchHue:237.3,category:"cool"},
  blue:     { name:"blue",     hex50:"#eff6ff",hex100:"#dbeafe",hex200:"#bfdbfe",hex300:"#93c5fd",hex400:"#60a5fa",hex500:"#3b82f6",hex600:"#2563eb",hex700:"#1d4ed8",hex800:"#1e40af",hex900:"#1e3a8a",hex950:"#172554",oklchHue:259.8,category:"cool"},
  indigo:   { name:"indigo",   hex50:"#eef2ff",hex100:"#e0e7ff",hex200:"#c7d2fe",hex300:"#a5b4fc",hex400:"#818cf8",hex500:"#6366f1",hex600:"#4f46e5",hex700:"#4338ca",hex800:"#3730a3",hex900:"#312e81",hex950:"#1e1b4b",oklchHue:277.1,category:"cool"},
  violet:   { name:"violet",   hex50:"#f5f3ff",hex100:"#ede9fe",hex200:"#ddd6fe",hex300:"#c4b5fd",hex400:"#a78bfa",hex500:"#8b5cf6",hex600:"#7c3aed",hex700:"#6d28d9",hex800:"#5b21b6",hex900:"#4c1d95",hex950:"#2e1065",oklchHue:292.7,category:"cool"},
  purple:   { name:"purple",   hex50:"#faf5ff",hex100:"#f3e8ff",hex200:"#e9d5ff",hex300:"#d8b4fe",hex400:"#c084fc",hex500:"#a855f7",hex600:"#9333ea",hex700:"#7e22ce",hex800:"#6b21a8",hex900:"#581c87",hex950:"#3b0764",oklchHue:303.9,category:"cool"},
  fuchsia:  { name:"fuchsia",  hex50:"#fdf4ff",hex100:"#fae8ff",hex200:"#f5d0fe",hex300:"#f0abfc",hex400:"#e879f9",hex500:"#d946ef",hex600:"#c026d3",hex700:"#a21caf",hex800:"#86198f",hex900:"#701a75",hex950:"#4a044e",oklchHue:322.2,category:"warm"},
  pink:     { name:"pink",     hex50:"#fdf2f8",hex100:"#fce7f3",hex200:"#fbcfe8",hex300:"#f9a8d4",hex400:"#f472b6",hex500:"#ec4899",hex600:"#db2777",hex700:"#be185d",hex800:"#9d174d",hex900:"#831843",hex950:"#500724",oklchHue:354.3,category:"warm"},
  rose:     { name:"rose",     hex50:"#fff1f2",hex100:"#ffe4e6",hex200:"#fecdd3",hex300:"#fda4af",hex400:"#fb7185",hex500:"#f43f5e",hex600:"#e11d48",hex700:"#be123c",hex800:"#9f1239",hex900:"#881337",hex950:"#4c0519",oklchHue:16.4,category:"warm"},

  slate:    { name:"slate",    hex50:"#f8fafc",hex100:"#f1f5f9",hex200:"#e2e8f0",hex300:"#cbd5e1",hex400:"#94a3b8",hex500:"#64748b",hex600:"#475569",hex700:"#334155",hex800:"#1e293b",hex900:"#0f172a",hex950:"#020617",oklchHue:257.4,category:"neutral"},
  gray:     { name:"gray",     hex50:"#f9fafb",hex100:"#f3f4f6",hex200:"#e5e7eb",hex300:"#d1d5db",hex400:"#9ca3af",hex500:"#6b7280",hex600:"#4b5563",hex700:"#374151",hex800:"#1f2937",hex900:"#111827",hex950:"#030712",oklchHue:264.4,category:"neutral"},
  zinc:     { name:"zinc",     hex50:"#fafafa",hex100:"#f4f4f5",hex200:"#e4e4e7",hex300:"#d4d4d8",hex400:"#a1a1aa",hex500:"#71717a",hex600:"#52525b",hex700:"#3f3f46",hex800:"#27272a",hex900:"#18181b",hex950:"#09090b",oklchHue:285.9,category:"neutral"},
  neutral:  { name:"neutral",  hex50:"#fafafa",hex100:"#f5f5f5",hex200:"#e5e5e5",hex300:"#d4d4d4",hex400:"#a3a3a3",hex500:"#737373",hex600:"#525252",hex700:"#404040",hex800:"#262626",hex900:"#171717",hex950:"#0a0a0a",oklchHue:0,category:"neutral"},
  stone:    { name:"stone",    hex50:"#fafaf9",hex100:"#f5f5f4",hex200:"#e7e5e4",hex300:"#d6d3d1",hex400:"#a8a29e",hex500:"#78716c",hex600:"#57534e",hex700:"#44403c",hex800:"#292524",hex900:"#1c1917",hex950:"#0c0a09",oklchHue:58.1,category:"neutral"},
  taupe:    { name:"taupe",    hex50:"#fafaf9",hex100:"#f5f5f4",hex200:"#e7e5e4",hex300:"#d6d3d1",hex400:"#a8a29e",hex500:"#78716c",hex600:"#635852",hex700:"#4e4540",hex800:"#3b3430",hex900:"#2c2623",hex950:"#191412",oklchHue:43.1,category:"neutral"},
  mauve:    { name:"mauve",    hex50:"#f8f7f9",hex100:"#f0eef2",hex200:"#e0d9e4",hex300:"#cbbdce",hex400:"#a493a8",hex500:"#77667a",hex600:"#5f5162",hex700:"#4c404f",hex800:"#39313c",hex900:"#2c2630",hex950:"#1a161d",oklchHue:322.5,category:"neutral"},
  mist:     { name:"mist",     hex50:"#f6f8f8",hex100:"#eaefef",hex200:"#d6dfdf",hex300:"#b9c7c8",hex400:"#929fa1",hex500:"#758a8e",hex600:"#5e6f73",hex700:"#4d5b5f",hex800:"#3b474a",hex900:"#2d3739",hex950:"#1b2223",oklchHue:213.5,category:"neutral"},
}

export const NEUTRAL_NAMES = ["slate","gray","zinc","neutral","stone","taupe","mauve","mist"] as const
export const CHROMATIC_NAMES = [
  "red","orange","amber","yellow","lime","olive","green","emerald","teal",
  "cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose",
] as const
export const ALL_COLOR_NAMES = [...CHROMATIC_NAMES, ...NEUTRAL_NAMES] as const

export type NeutralName = typeof NEUTRAL_NAMES[number]
export type ChromaticName = typeof CHROMATIC_NAMES[number]
export type ColorName = typeof ALL_COLOR_NAMES[number]

export function getHueDistance(h1: number, h2: number): number {
  const d = Math.abs(h1 - h2)
  return Math.min(d, 360 - d)
}

export interface GeneratedPaletteColor {
  tailwindName: string
  semanticName: string
  shade: number
  hex: string
  shades: Record<number, string>
  locked: boolean
}

function getShades(color: TailwindColor): Record<number, string> {
  return { 50:color.hex50, 100:color.hex100, 200:color.hex200, 300:color.hex300, 400:color.hex400, 500:color.hex500, 600:color.hex600, 700:color.hex700, 800:color.hex800, 900:color.hex900, 950:color.hex950 }
}

function hexForShade(color: TailwindColor, shade: number): string {
  const key = `hex${shade}` as keyof TailwindColor
  return (color as unknown as Record<string, string>)[key] ?? color.hex500
}

function randomChoice<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function shuffleArray<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function buildPaletteColor(
  tailwindName: ColorName,
  semanticName: string,
  shade?: number,
): GeneratedPaletteColor {
  const color = TAILWIND_COLORS[tailwindName]
  const appliedShade = shade ?? 500
  return {
    tailwindName,
    semanticName,
    shade: appliedShade,
    hex: hexForShade(color, appliedShade),
    shades: getShades(color),
    locked: false,
  }
}

function pickUniqueFrom<T extends string>(
  pool: readonly T[],
  used: Set<string>,
  count: number,
  prefer?: (item: T) => boolean,
): T[] {
  const available = shuffleArray(pool.filter((n) => !used.has(n)))
  const result: T[] = []
  const preferred = available.filter((n) => prefer?.(n) ?? false)
  const rest = available.filter((n) => !(prefer?.(n) ?? false))
  for (const item of [...preferred, ...rest]) {
    if (result.length >= count) break
    result.push(item)
    used.add(item)
  }
  return result
}

function hueToUniqueChromatic(hue: number, used: Set<string>): ChromaticName {
  const sorted = [...CHROMATIC_NAMES]
    .filter((n) => !used.has(n))
    .sort((a, b) => getHueDistance(hue, TAILWIND_COLORS[a].oklchHue) - getHueDistance(hue, TAILWIND_COLORS[b].oklchHue))
  const chosen = sorted[0] ?? CHROMATIC_NAMES[0]
  used.add(chosen)
  return chosen
}

const SHADE_SEQUENCE = [500, 300, 700, 200, 600, 400, 800, 100, 900, 50, 950]

function assignSemantics(colors: GeneratedPaletteColor[]): void {
  const chromatic = colors.filter((c) => TAILWIND_COLORS[c.tailwindName].category !== "neutral")
  const neutrals = colors.filter((c) => TAILWIND_COLORS[c.tailwindName].category === "neutral")

  const labels = ["primary", "secondary", "accent", "highlight", "tertiary", "info", "warning", "success"]
  chromatic.forEach((c, i) => { c.semanticName = labels[i % labels.length] })
  neutrals.forEach((c, i) => { c.semanticName = i === 0 ? "neutral" : `neutral-${i + 1}` })
}

// ==================== STRATEGIES ====================

export function generateComplementary(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []
  const base = randomChoice(CHROMATIC_NAMES)
  const baseHue = TAILWIND_COLORS[base].oklchHue

  const compName = hueToUniqueChromatic((baseHue + 180) % 360, new Set([base]))
  used.add(base)
  used.add(compName)

  result.push(buildPaletteColor(base, "", 500))
  result.push(buildPaletteColor(compName, "", 700))

  const extra = pickUniqueFrom(CHROMATIC_NAMES, used, count - 3)
  extra.forEach((n, i) => result.push(buildPaletteColor(n, "", [300, 600, 400, 200, 800][i % 5])))

  const neutral = pickUniqueFrom(NEUTRAL_NAMES, used, 1)
  neutral.forEach((n) => result.push(buildPaletteColor(n, "", 500)))

  assignSemantics(result)
  return result
}

export function generateAnalogous(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []
  const base = randomChoice(CHROMATIC_NAMES)
  const baseHue = TAILWIND_COLORS[base].oklchHue
  used.add(base)

  result.push(buildPaletteColor(base, "", 500))

  const step = 25 + Math.random() * 15
  const offsets = [-step * 2, -step, step, step * 2, -step * 3, step * 3]
  const needed = count - 2

  for (let i = 0; result.length - 1 < needed && i < offsets.length; i++) {
    const h = (baseHue + offsets[i] + 360) % 360
    const name = hueToUniqueChromatic(h, used)
    result.push(buildPaletteColor(name, "", SHADE_SEQUENCE[(result.length) % SHADE_SEQUENCE.length]))
  }

  const neutral = pickUniqueFrom(NEUTRAL_NAMES, used, 1)
  neutral.forEach((n) => result.push(buildPaletteColor(n, "", 500)))

  assignSemantics(result)
  return result
}

export function generateTriadic(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []
  const base = randomChoice(CHROMATIC_NAMES)
  const baseHue = TAILWIND_COLORS[base].oklchHue
  used.add(base)

  result.push(buildPaletteColor(base, "", 500))
  result.push(buildPaletteColor(hueToUniqueChromatic((baseHue + 120) % 360, used), "", 600))
  result.push(buildPaletteColor(hueToUniqueChromatic((baseHue + 240) % 360, used), "", 400))

  const extra = pickUniqueFrom(CHROMATIC_NAMES, used, count - 4)
  extra.forEach((n, i) => result.push(buildPaletteColor(n, "", [300, 700, 200, 800][i % 4])))

  const neutral = pickUniqueFrom(NEUTRAL_NAMES, used, 1)
  neutral.forEach((n) => result.push(buildPaletteColor(n, "", 500)))

  assignSemantics(result)
  return result
}

export function generateRandomCoolors(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []
  const names = shuffleArray([...CHROMATIC_NAMES, ...NEUTRAL_NAMES.slice(0, 3)])

  let neutralAdded = false
  for (const name of names) {
    if (result.length >= count) break
    if (used.has(name)) continue

    const color = TAILWIND_COLORS[name]
    const isNeutral = color.category === "neutral"
    if (isNeutral && neutralAdded) continue

    used.add(name)
    const shade = isNeutral ? randomChoice([400, 500, 600, 700]) : SHADE_SEQUENCE[result.length % SHADE_SEQUENCE.length]
    result.push(buildPaletteColor(name, "", shade))
    if (isNeutral) neutralAdded = true
  }

  if (!neutralAdded) {
    const n = randomChoice(NEUTRAL_NAMES)
    if (!used.has(n)) {
      result.push(buildPaletteColor(n, "", 500))
      if (result.length > count) result.pop()
    }
  }

  assignSemantics(result)
  return result
}

export function generateUIKit(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []

  const primary = randomChoice(CHROMATIC_NAMES)
  used.add(primary)
  result.push(buildPaletteColor(primary, "", 500))

  const hue = TAILWIND_COLORS[primary].oklchHue
  result.push(buildPaletteColor(hueToUniqueChromatic((hue + 180) % 360, used), "", 600))

  const successRange = CHROMATIC_NAMES.filter((n) => { const h = TAILWIND_COLORS[n].oklchHue; return h > 130 && h < 170 })
  const warningRange = CHROMATIC_NAMES.filter((n) => { const h = TAILWIND_COLORS[n].oklchHue; return h > 40 && h < 75 })

  const success = pickUniqueFrom(successRange, used, 1)
  if (success[0]) result.push(buildPaletteColor(success[0], "", 500))

  const warning = pickUniqueFrom(warningRange, used, 1)
  if (warning[0]) result.push(buildPaletteColor(warning[0], "", 500))

  while (result.length < count) {
    const extra = pickUniqueFrom(CHROMATIC_NAMES, used, 1)
    if (extra.length === 0) break
    result.push(buildPaletteColor(extra[0], "", SHADE_SEQUENCE[result.length % SHADE_SEQUENCE.length]))
  }

  const neutral = pickUniqueFrom(NEUTRAL_NAMES, used, 1)
  neutral.forEach((n) => result.push(buildPaletteColor(n, "", 500)))

  assignSemantics(result)
  return result.slice(0, count + 1)
}

export function generateNature(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []

  const earth = ["emerald", "olive", "amber", "lime", "green", "orange", "yellow"] as const
  const picked = pickUniqueFrom(earth, used, count - 1)
  picked.forEach((n, i) => result.push(buildPaletteColor(n, "", SHADE_SEQUENCE[i % SHADE_SEQUENCE.length])))

  const neutrals = pickUniqueFrom(["stone", "taupe", "neutral"] as const, used, 1)
  neutrals.forEach((n) => result.push(buildPaletteColor(n, "", 500)))

  while (result.length < count) {
    const extra = pickUniqueFrom(CHROMATIC_NAMES, used, 1)
    if (extra.length === 0) break
    result.push(buildPaletteColor(extra[0], "", SHADE_SEQUENCE[result.length % SHADE_SEQUENCE.length]))
  }

  assignSemantics(result)
  return result
}

export function generatePastel(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []

  const pastels = ["sky", "pink", "violet", "teal", "yellow", "lime", "fuchsia", "blue"] as const
  const picked = pickUniqueFrom(pastels, used, count - 1)
  picked.forEach((n) => result.push(buildPaletteColor(n, "", 300)))

  const neutrals = pickUniqueFrom(["gray", "slate", "mist"] as const, used, 1)
  neutrals.forEach((n) => result.push(buildPaletteColor(n, "", 400)))

  while (result.length < count) {
    const extra = pickUniqueFrom(CHROMATIC_NAMES, used, 1)
    if (extra.length === 0) break
    result.push(buildPaletteColor(extra[0], "", 300))
  }

  assignSemantics(result)
  return result
}

export function generateBrandPalette(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []

  const cool = CHROMATIC_NAMES.filter((n) => TAILWIND_COLORS[n].category === "cool")
  const warm = CHROMATIC_NAMES.filter((n) => TAILWIND_COLORS[n].category === "warm")

  const primary = randomChoice(cool)
  used.add(primary)
  result.push(buildPaletteColor(primary, "", 500))

  const warmAvailable = warm.filter((n) => getHueDistance(TAILWIND_COLORS[n].oklchHue, TAILWIND_COLORS[primary].oklchHue) > 50)
  const sec = pickUniqueFrom(warmAvailable, used, 1)
  if (sec[0]) result.push(buildPaletteColor(sec[0], "", 600))

  const remaining = count - result.length - 1
  const extras = pickUniqueFrom([...cool, ...warm], used, remaining)
  extras.forEach((n, i) => result.push(buildPaletteColor(n, "", SHADE_SEQUENCE[(i + 2) % SHADE_SEQUENCE.length])))

  const neutral = pickUniqueFrom(NEUTRAL_NAMES, used, 1)
  neutral.forEach((n) => result.push(buildPaletteColor(n, "", 500)))

  assignSemantics(result)
  return result
}

export function generateDarkMode(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []

  const vibrant = ["indigo", "violet", "cyan", "emerald", "rose", "amber", "blue", "pink"] as const
  const picked = pickUniqueFrom(vibrant, used, count - 2)
  picked.forEach((n, i) => result.push(buildPaletteColor(n, "", [400, 500, 300, 600, 400][i % 5])))

  const neutrals = pickUniqueFrom(["slate", "zinc", "gray"] as const, used, 2)
  neutrals.forEach((n, i) => result.push(buildPaletteColor(n, "", i === 0 ? 800 : 600)))

  while (result.length < count) {
    const extra = pickUniqueFrom(CHROMATIC_NAMES, used, 1)
    if (extra.length === 0) break
    result.push(buildPaletteColor(extra[0], "", SHADE_SEQUENCE[result.length % SHADE_SEQUENCE.length]))
  }

  assignSemantics(result)
  return result
}

export function generateMonochromatic(count = 5): GeneratedPaletteColor[] {
  const used = new Set<string>()
  const result: GeneratedPaletteColor[] = []

  const base = randomChoice(CHROMATIC_NAMES)
  const baseHue = TAILWIND_COLORS[base].oklchHue
  used.add(base)

  const shades = [500, 300, 700, 200, 800, 400, 600, 100]
  shades.slice(0, count - 1).forEach((s) => result.push(buildPaletteColor(base, "", s)))

  const nearby = CHROMATIC_NAMES.filter((n) => !used.has(n))
    .sort((a, b) => getHueDistance(TAILWIND_COLORS[a].oklchHue, baseHue) - getHueDistance(TAILWIND_COLORS[b].oklchHue, baseHue))
  if (nearby.length > 0) {
    used.add(nearby[0])
    result.push(buildPaletteColor(nearby[0], "", 500))
  }

  const neutral = pickUniqueFrom(NEUTRAL_NAMES, used, 1)
  neutral.forEach((n) => result.push(buildPaletteColor(n, "", 500)))

  assignSemantics(result)
  return result.slice(0, count + 1)
}

// ==================== REGISTRY ====================

type StrategyKey =
  | "random" | "complementary" | "analogous" | "triadic"
  | "brand" | "uikit" | "nature" | "pastel"
  | "dark" | "mono"

const ALL_STRATEGIES: StrategyKey[] = [
  "random", "complementary", "analogous", "triadic",
  "brand", "uikit", "nature", "pastel", "dark", "mono",
]

const STRATEGY_LABELS: Record<StrategyKey, string> = {
  random: "Random Harmony",
  complementary: "Complementary",
  analogous: "Analogous",
  triadic: "Triadic",
  brand: "Brand Palette",
  uikit: "UIKit System",
  nature: "Nature Tones",
  pastel: "Pastel Dream",
  dark: "Dark Mode",
  mono: "Monochromatic",
}

const STRATEGY_GENERATORS: Record<StrategyKey, () => GeneratedPaletteColor[]> = {
  random: generateRandomCoolors,
  complementary: generateComplementary,
  analogous: generateAnalogous,
  triadic: generateTriadic,
  brand: generateBrandPalette,
  uikit: generateUIKit,
  nature: generateNature,
  pastel: generatePastel,
  dark: generateDarkMode,
  mono: generateMonochromatic,
}

export function generatePalette(): { colors: GeneratedPaletteColor[]; strategy: string } {
  const strategy = ALL_STRATEGIES[Math.floor(Math.random() * ALL_STRATEGIES.length)]
  const colors = STRATEGY_GENERATORS[strategy]()
  const deduped = deduplicateColors(colors)
  return { colors: deduped, strategy: STRATEGY_LABELS[strategy] }
}

export function deduplicateColors(colors: GeneratedPaletteColor[]): GeneratedPaletteColor[] {
  const seen = new Set<string>()
  return colors.filter((c) => {
    const key = c.tailwindName
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
