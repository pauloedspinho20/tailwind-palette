import type { GeneratedPaletteColor } from "./tailwindColors"

export function exportPaletteAsImage(
  colors: GeneratedPaletteColor[],
  width = 1200,
  height = 200,
): string {
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")
  if (!ctx) return ""

  const barWidth = width / colors.length

  colors.forEach((color, i) => {
    ctx.fillStyle = color.hex
    ctx.fillRect(i * barWidth, 0, barWidth, height)
  })

  return canvas.toDataURL("image/png")
}

export function exportPaletteAsJSON(colors: GeneratedPaletteColor[], strategy: string): string {
  return JSON.stringify(
    {
      strategy,
      colors: colors.map((c) => ({
        name: c.tailwindName,
        shade: c.shade,
        semantic: c.semanticName,
        hex: c.hex,
        shades: c.shades,
      })),
    },
    null,
    2,
  )
}

export function downloadFile(content: string, filename: string, type: string): void {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function downloadImage(dataUrl: string, filename: string): void {
  const a = document.createElement("a")
  a.href = dataUrl
  a.download = filename
  a.click()
}
