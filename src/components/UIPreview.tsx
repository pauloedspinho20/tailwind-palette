import { useState } from "react"
import type { GeneratedPaletteColor } from "../utils/tailwindColors"

interface UIPreviewProps {
  colors: GeneratedPaletteColor[]
}

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.55 ? "#111827" : "#f9fafb"
}

export function UIPreview({ colors }: UIPreviewProps) {
  const [selected, setSelected] = useState(0)
  const primary = colors[selected]
  const secondary = colors[(selected + 1) % colors.length]
  const neutral = colors[(selected + 2) % colors.length]
  const accent = colors[(selected + 3) % colors.length]

  if (!primary || !secondary || !neutral) return null

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">UI Preview</h2>
            <p className="text-xs text-gray-500">See how your palette looks in a real interface</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Primary:</span>
            {colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-7 h-7 rounded-md cursor-pointer ring-2 transition-all ${
                  selected === i ? "ring-white scale-110" : "ring-transparent"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.tailwindName}
              />
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl p-8 space-y-6 transition-colors border border-white/5"
          style={{ backgroundColor: neutral.shades[100] }}
        >
          <nav
            className="flex items-center justify-between px-4 h-14 rounded-xl"
            style={{ backgroundColor: primary.hex }}
          >
            <span
              className="font-bold text-lg"
              style={{ color: getContrastColor(primary.hex) }}
            >
              {primary.tailwindName}
            </span>
            <div className="flex items-center gap-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
                  style={{ color: getContrastColor(primary.hex) }}
                >
                  {item}
                </span>
              ))}
              <button
                className="px-4 py-1.5 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: getContrastColor(primary.hex),
                  color: primary.hex,
                }}
              >
                Sign Up
              </button>
            </div>
          </nav>

          <div
            className="rounded-xl p-10 text-center"
            style={{ backgroundColor: primary.shades[50] }}
          >
            <h1
              className="text-4xl font-bold mb-3"
              style={{ color: primary.shades[900] }}
            >
              Build with Tailwind Colors
            </h1>
            <p
              className="text-lg mb-6 max-w-lg mx-auto"
              style={{ color: primary.shades[700] }}
            >
              Create beautiful, consistent color palettes for your Tailwind CSS v4 projects using the default color system.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                className="px-6 py-2.5 rounded-lg font-medium text-sm shadow-lg"
                style={{
                  backgroundColor: primary.hex,
                  color: getContrastColor(primary.hex),
                }}
              >
                Get Started
              </button>
              <button
                className="px-6 py-2.5 rounded-lg font-medium text-sm border"
                style={{
                  borderColor: primary.shades[300],
                  color: primary.shades[700],
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { title: "Generate", desc: "Press spacebar to create beautiful palettes using color theory" },
              { title: "Customize", desc: "Lock colors you love, shuffle the rest, add or remove colors" },
              { title: "Export", desc: "Get Tailwind v4 @theme CSS ready to paste into your project" },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ backgroundColor: secondary.shades[50] }}
              >
                <div
                  className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: secondary.hex,
                    color: getContrastColor(secondary.hex),
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  className="font-semibold mb-1"
                  style={{ color: secondary.shades[800] }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: secondary.shades[600] }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {accent && (
            <div
              className="rounded-xl p-5 flex items-center gap-4"
              style={{ backgroundColor: accent.shades[50] }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  backgroundColor: accent.hex,
                  color: getContrastColor(accent.hex),
                }}
              >
                !
              </div>
              <div>
                <p className="font-semibold" style={{ color: accent.shades[800] }}>
                  Accent callout
                </p>
                <p className="text-sm" style={{ color: accent.shades[600] }}>
                  This is how {accent.tailwindName} looks as an accent color for alerts and highlights.
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 flex-wrap">
            {colors.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: c.shades[100],
                  color: c.shades[700],
                  border: `1px solid ${c.shades[200]}`,
                }}
              >
                {c.tailwindName}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
