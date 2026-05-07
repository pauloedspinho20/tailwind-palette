import type { GeneratedPaletteColor } from "../utils/tailwindColors"

interface PaletteBarProps {
  colors: GeneratedPaletteColor[]
  selectedIndex: number | null
  onSelect: (index: number) => void
  onToggleLock: (index: number) => void
  onCycleShade?: (index: number, dir: 1 | -1) => void
}

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.55 ? "#111827" : "#f9fafb"
}

export function PaletteBar({
  colors, selectedIndex, onSelect, onToggleLock, onCycleShade,
}: PaletteBarProps) {
  return (
    <div className="flex flex-1 min-h-0">
      {colors.map((color, i) => {
        const textColor = getContrastColor(color.hex)
        const isSelected = selectedIndex === i

        return (
          <div
            key={i}
            className={`relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group ${
              isSelected ? "flex-[1.5]" : "hover:flex-[1.25]"
            }`}
            style={{ backgroundColor: color.hex }}
            onClick={() => onSelect(i)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleLock(i)
              }}
              className="absolute top-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:scale-110"
              style={{ color: textColor }}
              title={color.locked ? "Unlock color (L)" : "Lock color (L)"}
            >
              {color.locked ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v3H9V7c0-1.654 1.346-3 3-3z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
              )}
            </button>

            {onCycleShade && (
              <div className="absolute top-4 right-4 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => { e.stopPropagation(); onCycleShade(i, 1) }}
                  className="w-6 h-6 flex items-center justify-center rounded hover:bg-black/20 text-xs"
                  style={{ color: textColor }}
                  title="Lighten shade (↑)"
                >
                  ▲
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onCycleShade(i, -1) }}
                  className="w-6 h-6 flex items-center justify-center rounded hover:bg-black/20 text-xs"
                  style={{ color: textColor }}
                  title="Darken shade (↓)"
                >
                  ▼
                </button>
              </div>
            )}

            <div className="flex flex-col items-center gap-1">
              <span className="text-lg font-mono font-bold tracking-wider uppercase select-none" style={{ color: textColor }}>
                {color.hex}
              </span>
              <span className="text-base font-semibold capitalize tracking-wide select-none" style={{ color: textColor, opacity: 0.9 }}>
                {color.tailwindName}
                <span className="font-mono text-sm ml-0.5 opacity-70">-{color.shade}</span>
              </span>
              <span className="text-[10px] font-medium text-center tracking-wide opacity-50 select-none" style={{ color: textColor }}>
                {color.semanticName}
              </span>
            </div>

            {color.locked && (
              <div className="absolute bottom-6 text-[10px] font-bold tracking-widest uppercase opacity-50" style={{ color: textColor }}>
                Locked
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
