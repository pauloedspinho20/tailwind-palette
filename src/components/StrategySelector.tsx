import { useState } from "react"

const STRATEGIES = [
  { key: "random", label: "Random Harmony", desc: "Shuffled pick with smart constraints" },
  { key: "complementary", label: "Complementary", desc: "Opposites on the color wheel" },
  { key: "analogous", label: "Analogous", desc: "Neighbors along the wheel" },
  { key: "triadic", label: "Triadic", desc: "Three equally spaced hues" },
  { key: "brand", label: "Brand Palette", desc: "Cool primary + warm secondary" },
  { key: "uikit", label: "UIKit System", desc: "Primary, success, warning, neutral" },
  { key: "nature", label: "Nature Tones", desc: "Earthy greens and warm tones" },
  { key: "pastel", label: "Pastel Dream", desc: "Soft, desaturated shades" },
  { key: "dark", label: "Dark Mode", desc: "Dark surfaces + vibrant accents" },
  { key: "mono", label: "Monochromatic", desc: "One hue, many shades" },
] as const

export type StrategyKey = typeof STRATEGIES[number]["key"]

interface StrategySelectorProps {
  active: string
  onSelect: (key: StrategyKey) => void
}

export function StrategySelector({ active, onSelect }: StrategySelectorProps) {
  const [open, setOpen] = useState(false)

  const current = STRATEGIES.find((s) => s.label === active) ?? STRATEGIES[0]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs text-gray-300 transition-colors cursor-pointer"
      >
        <span className="text-violet-400 font-medium">{current.label}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 w-72 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-20 max-h-80 overflow-y-auto">
            <div className="p-2 space-y-0.5">
              {STRATEGIES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => { onSelect(s.key); setOpen(false) }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                    s.label === active
                      ? "bg-violet-600/20 text-violet-300"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <div className="font-medium">{s.label}</div>
                  <div className="text-[11px] opacity-60 mt-0.5">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { STRATEGIES }
