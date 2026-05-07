import type { GeneratedPaletteColor } from "../utils/tailwindColors"

interface ShadeViewerProps {
  colors: GeneratedPaletteColor[]
}

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.55 ? "#111827" : "#f9fafb"
}

const SHADE_ORDER = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

function ShadeRow({ color }: { color: GeneratedPaletteColor }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-2">
        <div
          className="w-5 h-5 rounded-md shrink-0 ring-1 ring-white/10"
          style={{ backgroundColor: color.hex }}
        />
        <span className="text-sm font-semibold text-white capitalize">
          {color.tailwindName}
        </span>
        <span className="font-mono text-xs text-cyan-400 font-bold">
          -{color.shade}
        </span>
        <span className="text-xs text-gray-600">·</span>
        <span className="text-xs text-violet-400 capitalize">{color.semanticName}</span>
        <span className="text-[10px] text-gray-600 font-mono ml-1">
          (active: {color.shade})
        </span>
        {color.locked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
            <path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v3H9V7c0-1.654 1.346-3 3-3z" />
          </svg>
        )}
      </div>
      <div className="flex rounded-xl overflow-hidden h-14 shadow-lg">
        {SHADE_ORDER.map((shade) => {
          const hex = color.shades[shade]
          const textColor = getContrastColor(hex)
          const isActive = shade === color.shade
          return (
            <div
              key={shade}
              className={`flex-1 flex flex-col items-center justify-center transition-all hover:flex-[1.8] cursor-default group relative ${
                isActive ? "flex-[1.6] ring-2 ring-white ring-inset z-10" : ""
              }`}
              style={{ backgroundColor: hex }}
              title={`${color.tailwindName}-${shade}: ${hex}${isActive ? " (active)" : ""}`}
            >
              <span
                className={`text-[11px] font-mono font-bold transition-opacity ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
                style={{ color: textColor }}
              >
                {shade}
              </span>
              <span
                className="text-[9px] font-mono opacity-0 group-hover:opacity-70 transition-opacity mt-0.5"
                style={{ color: textColor }}
              >
                {hex}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function ShadeViewer({ colors }: ShadeViewerProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white mb-1">Color Shade Scales</h2>
          <p className="text-sm text-gray-500">
            Tailwind 50–950 shade scales from the default color palette
          </p>
        </div>

        <div className="space-y-5">
          {colors.map((color, i) => (
            <ShadeRow key={i} color={color} />
          ))}
        </div>
      </div>
    </div>
  )
}
