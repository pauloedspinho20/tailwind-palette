import type { GeneratedPaletteColor } from "../utils/tailwindColors"

interface GradientPreviewProps {
  colors: GeneratedPaletteColor[]
}

export function GradientPreview({ colors }: GradientPreviewProps) {
  if (colors.length < 2) return null

  const start = colors[0]
  const end = colors[colors.length - 1]

  const gradient = `linear-gradient(135deg, ${start.hex}, ${colors.map((c) => c.hex).join(", ")}, ${end.hex})`

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white">Gradient Preview</h3>
      <div
        className="rounded-xl h-32 flex items-end justify-center p-4"
        style={{ background: gradient }}
      >
        <div className="flex items-center gap-2 bg-black/20 backdrop-blur rounded-lg px-3 py-1.5">
          {colors.map((c, i) => (
            <div key={i} className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full ring-1 ring-white/20"
                style={{ backgroundColor: c.hex }}
              />
              <span className="text-[10px] text-white/80 font-mono">
                {c.tailwindName}-{c.shade}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
