import { StrategySelector, type StrategyKey } from "./StrategySelector"

type View = "home" | "palette" | "shades" | "preview" | "contrast"

interface HeaderProps {
  view: View
  setView: (v: View) => void
  onGenerate: () => void
  onHome?: () => void
  strategy?: string
  onStrategyChange?: (key: StrategyKey) => void
  onUndo?: () => void
  canUndo?: boolean
}

export function Header({
  view, setView, onGenerate, onHome, strategy,
  onStrategyChange, onUndo, canUndo,
}: HeaderProps) {
  const isHome = view === "home"

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-gray-900 border-b border-gray-800 shrink-0">
      <button
        onClick={() => { if (!isHome) onHome?.() }}
        className="flex items-center gap-2.5 cursor-pointer shrink-0"
      >
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
          <rect x="1" y="1" width="10" height="26" rx="3" className="fill-violet-500" />
          <rect x="14" y="6" width="10" height="21" rx="3" className="fill-cyan-500" />
        </svg>
        <div>
          <span className="font-bold text-base tracking-tight whitespace-nowrap">
            Tailwind <span className="text-violet-400">Palette</span>
          </span>
          {strategy && !isHome && (
            <span className="block text-[9px] text-gray-500 leading-none">{strategy}</span>
          )}
        </div>
      </button>

      {!isHome && (
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5 bg-gray-800 rounded-lg p-0.5 hidden sm:flex">
            {(["palette", "shades", "preview", "contrast"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  view === v ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {v === "palette" ? "Palette" : v === "shades" ? "Shades" : v === "contrast" ? "Contrast" : "Preview"}
              </button>
            ))}
          </div>

          <div className="hidden sm:block">
            {onStrategyChange && (
              <StrategySelector active={strategy ?? "Random Harmony"} onSelect={onStrategyChange} />
            )}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        {!isHome && onUndo && (
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className="px-2 py-1.5 text-xs text-gray-400 hover:text-white disabled:opacity-30 transition-colors cursor-pointer"
            title="Undo (Ctrl+Z)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
            </svg>
          </button>
        )}
        {!isHome && (
          <button
            onClick={onHome}
            className="px-2 py-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer hidden sm:block"
          >
            Home
          </button>
        )}
        {isHome ? (
          <button
            onClick={onGenerate}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
          >
            Open Generator
          </button>
        ) : (
          <button
            onClick={onGenerate}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
          >
            Generate
          </button>
        )}
      </div>
    </header>
  )
}
