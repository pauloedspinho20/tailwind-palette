import type { GeneratedPaletteColor } from "../utils/tailwindColors"
import { simulateColorBlindness, BLINDNESS_LABELS, type BlindnessType } from "../utils/colorBlindness"

interface ColorBlindnessPreviewProps {
  colors: GeneratedPaletteColor[]
}

export function ColorBlindnessPreview({ colors }: ColorBlindnessPreviewProps) {
  const types: BlindnessType[] = ["protanopia", "deuteranopia", "tritanopia", "achromatopsia"]

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white">Color Blindness Simulation</h3>
      {types.map((type) => (
        <div key={type} className="space-y-1">
          <div className="text-[11px] text-gray-500">{BLINDNESS_LABELS[type]}</div>
          <div className="flex h-8 rounded-lg overflow-hidden">
            {colors.map((color, i) => {
              const sim = simulateColorBlindness(color.hex, type)
              return (
                <div
                  key={i}
                  className="flex-1 flex items-center justify-center"
                  style={{ backgroundColor: sim }}
                  title={`${color.tailwindName}-${color.shade} → ${sim}`}
                >
                  <span className="text-[9px] font-mono opacity-0 hover:opacity-100 text-white mix-blend-difference">
                    {sim}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
