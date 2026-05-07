import { useEffect, useCallback } from "react"
import type { GeneratedPaletteColor } from "../utils/tailwindColors"

interface ColorSlidersProps {
  color: GeneratedPaletteColor
  onChange: (color: GeneratedPaletteColor) => void
}

export function ColorSliders({ color, onChange }: ColorSlidersProps) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  const cycleShade = useCallback(
    (dir: 1 | -1) => {
      const idx = shades.indexOf(color.shade)
      const next = shades[(idx + dir + shades.length) % shades.length]
      onChange({ ...color, shade: next, hex: color.shades[next] })
    },
    [color, onChange],
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && e.target === document.body) {
        e.preventDefault()
        cycleShade(1)
      } else if (e.key === "ArrowDown" && e.target === document.body) {
        e.preventDefault()
        cycleShade(-1)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [cycleShade])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">Adjust shade</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => cycleShade(-1)}
            disabled={color.shade <= 50}
            className="w-6 h-6 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-30 text-white text-xs cursor-pointer"
          >
            ◀
          </button>
          <span className="text-sm text-cyan-400 font-mono font-bold min-w-[3ch] text-center">
            {color.shade}
          </span>
          <button
            onClick={() => cycleShade(1)}
            disabled={color.shade >= 950}
            className="w-6 h-6 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-30 text-white text-xs cursor-pointer"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="flex gap-1">
        {shades.map((shade) => {
          const hex = color.shades[shade]
          return (
            <button
              key={shade}
              onClick={() =>
                onChange({ ...color, shade, hex: color.shades[shade] })
              }
              className={`flex-1 h-6 rounded cursor-pointer transition-all hover:scale-110 ${
                shade === color.shade
                  ? "ring-2 ring-white scale-110 z-10"
                  : "ring-0"
              }`}
              style={{ backgroundColor: hex }}
              title={`${color.tailwindName}-${shade}`}
            />
          )
        })}
      </div>
    </div>
  )
}
