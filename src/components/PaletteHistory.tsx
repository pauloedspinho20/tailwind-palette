import { useState } from "react"
import type { PersistedState } from "../utils/persistence"
import { loadHistory, clearHistory } from "../utils/persistence"

interface PaletteHistoryProps {
  onLoad: (state: PersistedState) => void
}

export function PaletteHistory({ onLoad }: PaletteHistoryProps) {
  const [history, setHistory] = useState<PersistedState[]>(loadHistory)

  const handleClear = () => {
    clearHistory()
    setHistory([])
  }

  if (history.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-sm text-gray-500">No saved palettes yet.</p>
        <p className="text-xs text-gray-600 mt-1">
          Palettes you generate and view will appear here.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">
          Recent Palettes ({history.length})
        </h3>
        <button
          onClick={handleClear}
          className="text-[11px] text-gray-500 hover:text-red-400 transition-colors cursor-pointer"
        >
          Clear all
        </button>
      </div>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {history.map((p, i) => (
          <button
            key={i}
            onClick={() => onLoad(p)}
            className="w-full text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-5 rounded-full overflow-hidden flex-1">
                {p.colors.slice(0, 8).map((c) => (
                  <div
                    key={c.tailwindName + c.shade}
                    className="flex-1"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
              <span className="text-[10px] text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {p.strategy}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-1.5 flex-wrap">
              {p.colors.map((c, j) => (
                <span key={c.tailwindName + c.shade} className="text-[10px] text-gray-400 font-mono">
                  {c.tailwindName}-{c.shade}
                  {j < p.colors.length - 1 && (
                    <span className="text-gray-700 mx-0.5">·</span>
                  )}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
