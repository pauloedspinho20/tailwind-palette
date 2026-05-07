import { useState } from "react"
import type { GeneratedPaletteColor } from "../utils/tailwindColors"
import { ColorSliders } from "./ColorSliders"

interface ColorInfoProps {
  color: GeneratedPaletteColor
  onChange?: (color: GeneratedPaletteColor) => void
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

export function ColorInfo({ color, onChange }: ColorInfoProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 1500)
  }

  const rgb = hexToRgb(color.hex)
  const tailwindClass = `bg-${color.tailwindName}-${color.shade}`

  const formats = [
    { label: "HEX", value: color.hex },
    { label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { label: "Tailwind", value: tailwindClass },
  ]

  return (
    <div className="bg-gray-900 border-t border-gray-800 px-4 sm:px-6 py-3 shrink-0 space-y-3">
      <div className="flex items-center gap-6 max-w-4xl mx-auto flex-wrap">
        <div className="w-10 h-10 rounded-lg shrink-0 ring-1 ring-white/10" style={{ backgroundColor: color.hex }} />
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Name</span>
            <span className="text-sm text-white font-semibold">
              <span className="capitalize">{color.tailwindName}</span>
              <span className="font-mono text-gray-400 ml-0.5">-{color.shade}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Shade</span>
            <span className="text-sm text-cyan-400 font-mono font-bold">{color.shade}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Role</span>
            <span className="text-sm text-violet-400 font-medium capitalize">{color.semanticName}</span>
          </div>
          {formats.map(({ label, value }) => (
            <button
              key={label}
              onClick={() => copy(value, label)}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span className="text-xs text-gray-500 font-medium">{label}</span>
              <code className="text-sm text-gray-300 font-mono group-hover:text-white transition-colors">
                {value}
              </code>
              {copied === label && <span className="text-xs text-green-400">Copied!</span>}
            </button>
          ))}
        </div>
      </div>

      {onChange && (
        <div className="max-w-4xl mx-auto">
          <ColorSliders color={color} onChange={onChange} />
        </div>
      )}
    </div>
  )
}
