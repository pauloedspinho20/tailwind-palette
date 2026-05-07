import { useState } from "react"
import type { GeneratedPaletteColor } from "../utils/tailwindColors"
import { contrastRatio, type ContrastResult } from "../utils/contrast"

interface ContrastCheckerProps {
  colors: GeneratedPaletteColor[]
}

function ResultBadge({ result }: { result: ContrastResult }) {
  const passes = result.aa
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <span
          className={`px-2 py-0.5 rounded text-[11px] font-bold ${
            passes ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
          }`}
        >
          {passes ? "AA Pass" : "AA Fail"}
        </span>
        <span
          className={`px-2 py-0.5 rounded text-[11px] font-bold ${
            result.aaa ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
          }`}
        >
          {result.aaa ? "AAA Pass" : "AAA Fail"}
        </span>
      </div>
      <div className="flex items-center gap-4 text-[11px] text-gray-500">
        <span>Normal text: {result.aa ? "✓ AA" : "✗ AA"} · {result.aaa ? "✓ AAA" : "✗ AAA"}</span>
        <span>Large text: {result.aaLarge ? "✓ AA" : "✗ AA"} · {result.aaaLarge ? "✓ AAA" : "✗ AAA"}</span>
      </div>
    </div>
  )
}

export function ContrastChecker({ colors }: ContrastCheckerProps) {
  const [fgIdx, setFgIdx] = useState(0)
  const [bgIdx, setBgIdx] = useState(1)

  const fg = colors[fgIdx]
  const bg = colors[bgIdx]
  if (!fg || !bg) return null

  const result = contrastRatio(fg.hex, bg.hex)

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white">Contrast Checker</h3>

      <div className="flex items-center gap-4">
        {(["FG", "BG"] as const).map((label, idx) => {
          const colorIdx = idx === 0 ? fgIdx : bgIdx
          return (
            <div key={label} className="flex-1">
              <div className="text-[10px] text-gray-500 mb-1">{label}</div>
              <div className="flex items-center gap-2">
                <select
                  value={colorIdx}
                  onChange={(e) =>
                    (idx === 0 ? setFgIdx : setBgIdx)(Number(e.target.value))
                  }
                  className="flex-1 bg-gray-800 text-white text-xs rounded px-2 py-1.5 border border-gray-700 cursor-pointer"
                >
                  {colors.map((c, i) => (
                    <option key={i} value={i}>
                      {c.tailwindName}-{c.shade} ({c.semanticName})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )
        })}
      </div>

      <div
        className="rounded-xl p-6 text-center"
        style={{ backgroundColor: bg.hex }}
      >
        <div className="flex items-center justify-center gap-4 mb-3">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: fg.hex }}
          />
          <span className="font-mono text-2xl font-bold" style={{ color: fg.hex }}>
            {result.ratio}:1
          </span>
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: bg.hex, border: `1px solid ${fg.hex}` }}
          />
        </div>
        <p className="text-sm" style={{ color: fg.hex }}>
          The quick brown fox jumps over the lazy dog.
        </p>
        <p className="text-lg font-semibold mt-1" style={{ color: fg.hex }}>
          Sample Heading Text
        </p>
        <div className="mt-3 flex justify-center">
          <ResultBadge result={result} />
        </div>
      </div>
    </div>
  )
}
