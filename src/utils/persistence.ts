import type { GeneratedPaletteColor } from "./tailwindColors"

export interface PersistedState {
  colors: GeneratedPaletteColor[]
  strategy: string
}

const STORAGE_KEY = "tailwind-palette-state"
const HISTORY_KEY = "tailwind-palette-history"
const HISTORY_MAX = 20

export function saveState(colors: GeneratedPaletteColor[], strategy: string): void {
  try {
    const data: PersistedState = {
      colors: colors.map((c) => ({ ...c, locked: false })),
      strategy,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch { /* quota exceeded */ }
}

export function loadState(): PersistedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as PersistedState
  } catch {
    return null
  }
}

export function saveToHistory(palette: PersistedState): void {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    const history: PersistedState[] = raw ? JSON.parse(raw) : []
    const deduped = history.filter(
      (p) => JSON.stringify(p.colors.map((c) => c.hex)) !== JSON.stringify(palette.colors.map((c) => c.hex))
    )
    deduped.unshift(palette)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(deduped.slice(0, HISTORY_MAX)))
  } catch { /* quota exceeded */ }
}

export function loadHistory(): PersistedState[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function clearHistory(): void {
  localStorage.removeItem(HISTORY_KEY)
}

export function encodePaletteURL(colors: GeneratedPaletteColor[], strategy: string): string {
  const data = colors.map((c) => `${c.tailwindName}:${c.shade}`).join(",")
  const params = new URLSearchParams()
  params.set("c", data)
  params.set("s", strategy)
  return `${window.location.origin}${window.location.pathname}?${params.toString()}`
}

export function decodePaletteURL(): { colors: GeneratedPaletteColor[]; strategy: string } | null {
  const params = new URLSearchParams(window.location.search)
  const data = params.get("c")
  const strategy = params.get("s")
  if (!data || !strategy) return null
  return { colors: [], strategy } as unknown as { colors: GeneratedPaletteColor[]; strategy: string }
}

export function parseURLColorData(data: string): { name: string; shade: number }[] {
  return data.split(",").map((item) => {
    const [name, shadeStr] = item.split(":")
    return { name, shade: parseInt(shadeStr, 10) || 500 }
  })
}
