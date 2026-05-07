import { generatePalette, deduplicateColors } from "./utils/tailwindColors"
import type { GeneratedPaletteColor } from "./utils/tailwindColors"
import type { StarterPalette } from "./utils/presets"
import type { PersistedState } from "./utils/persistence"
import { saveState, loadState, saveToHistory } from "./utils/persistence"
import { encodePaletteURL } from "./utils/persistence"
import { useState, useCallback, useEffect, useRef } from "react"
import { PaletteBar } from "./components/PaletteBar"
import { ColorInfo } from "./components/ColorInfo"
import { TailwindPanel } from "./components/TailwindPanel"
import { ShadeViewer } from "./components/ShadeViewer"
import { UIPreview } from "./components/UIPreview"
import { ContrastChecker } from "./components/ContrastChecker"
import { ColorBlindnessPreview } from "./components/ColorBlindnessPreview"
import { GradientPreview } from "./components/GradientPreview"
import { PaletteHistory } from "./components/PaletteHistory"
import { Header } from "./components/Header"
import { HomePage } from "./components/HomePage"
import { Credits } from "./components/Credits"

type View = "home" | "palette" | "shades" | "preview" | "contrast"

export default function App() {
  const [result, setResult] = useState<PersistedState>(() => {
    const saved = loadState()
    if (saved) return saved
    return generatePalette()
  })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [view, setView] = useState<View>("home")
  const [undoStack, setUndoStack] = useState<PersistedState[]>([])
  const initialized = useRef(false)

  const pushUndo = useCallback((state: PersistedState) => {
    setUndoStack((prev) => [state, ...prev].slice(0, 30))
  }, [])

  const undo = useCallback(() => {
    setUndoStack((prev) => {
      if (prev.length === 0) return prev
      const [previous, ...rest] = prev
      setResult(previous)
      setSelectedIndex(null)
      return rest
    })
  }, [])

  const doGenerate = useCallback(() => {
    setResult((prev: PersistedState) => {
      pushUndo(prev)
      const { colors: _, strategy } = generatePalette()
      const lockedNames = new Set(prev.colors.filter((c) => c.locked).map((c) => c.tailwindName))
      const freshPool: GeneratedPaletteColor[] = []
      let attempts = 0

      while (freshPool.length < prev.colors.filter((c) => !c.locked).length && attempts < 20) {
        const { colors: batch } = generatePalette()
        for (const c of batch) {
          if (!lockedNames.has(c.tailwindName) && !freshPool.some((f) => f.tailwindName === c.tailwindName)) {
            freshPool.push(c)
          }
        }
        attempts++
      }

      let freshIdx = 0
      const mixed = prev.colors.map((c) =>
        c.locked ? c : { ...(freshPool[freshIdx++] ?? generatePalette().colors[0]), locked: false }
      )

      const newState = { colors: deduplicateColors(mixed), strategy }
      return newState
    })
  }, [pushUndo])

  const toggleLock = useCallback((index: number) => {
    setResult((prev: PersistedState) => {
      pushUndo(prev)
      return {
        ...prev,
        colors: prev.colors.map((c, i) =>
          i === index ? { ...c, locked: !c.locked } : c
        ),
      }
    })
  }, [pushUndo])

  const selectColor = useCallback((index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index))
  }, [])

  const cycleShade = useCallback((index: number, dir: 1 | -1) => {
    setResult((prev: PersistedState) => {
      pushUndo(prev)
      const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
      const color = prev.colors[index]
      const idx = shades.indexOf(color.shade)
      const next = shades[(idx + dir + shades.length) % shades.length]
      return {
        ...prev,
        colors: prev.colors.map((c, i) =>
          i === index ? { ...c, shade: next, hex: c.shades[next] } : c
        ),
      }
    })
  }, [pushUndo])

  const addColor = useCallback(() => {
    setResult((prev: PersistedState) => {
      if (prev.colors.length >= 10) return prev
      pushUndo(prev)
      const usedNames = new Set(prev.colors.map((c) => c.tailwindName))
      for (let i = 0; i < 10; i++) {
        const { colors: fresh } = generatePalette()
        const unique = fresh.find((c) => !usedNames.has(c.tailwindName))
        if (unique) {
          return { ...prev, colors: [...prev.colors, { ...unique, locked: false }] }
        }
      }
      return prev
    })
  }, [pushUndo])

  const removeColor = useCallback(() => {
    setResult((prev: PersistedState) => {
      if (prev.colors.length <= 2) return prev
      pushUndo(prev)
      const unlocked = prev.colors.filter((c) => !c.locked)
      if (unlocked.length > 0) {
        const lastUnlockedIdx = prev.colors.findLastIndex((c) => !c.locked)
        return { ...prev, colors: prev.colors.filter((_, i) => i !== lastUnlockedIdx) }
      }
      return { ...prev, colors: prev.colors.slice(0, -1) }
    })
    setSelectedIndex(null)
  }, [pushUndo])

  const copyAllHex = useCallback(() => {
    navigator.clipboard.writeText(result.colors.map((c) => c.hex).join(", "))
  }, [result.colors])

  const copyAllClasses = useCallback(() => {
    navigator.clipboard.writeText(result.colors.map((c) => `bg-${c.tailwindName}-${c.shade}`).join(" "))
  }, [result.colors])

  const loadPreset = useCallback((preset: StarterPalette) => {
    setResult((prev: PersistedState) => {
      pushUndo(prev)
      return { colors: preset.colors.map((c) => ({ ...c, locked: false })), strategy: preset.strategy }
    })
    setSelectedIndex(null)
    setView("palette")
  }, [pushUndo])

  const goToGenerator = useCallback(() => {
    setResult(generatePalette())
    setSelectedIndex(null)
    setView("palette")
  }, [])

  const goHome = useCallback(() => { setView("home"); setSelectedIndex(null) }, [])

  const handleStrategyChange = useCallback(() => {
    doGenerate()
  }, [doGenerate])

  const handleLoadHistory = useCallback((state: PersistedState) => {
    setResult((prev: PersistedState) => { pushUndo(prev); return state })
    setSelectedIndex(null)
    setView("palette")
  }, [pushUndo])

  const handleColorChange = useCallback((index: number, color: GeneratedPaletteColor) => {
    setResult((prev: PersistedState) => {
      pushUndo(prev)
      return {
        ...prev,
        colors: prev.colors.map((c, i) => i === index ? color : c),
      }
    })
  }, [pushUndo])

  // Persist to localStorage
  useEffect(() => {
    if (!initialized.current) { initialized.current = true; return }
    saveState(result.colors, result.strategy)
  }, [result])

  // Save to history when strategy changes (new palette generated)
  useEffect(() => {
    if (!initialized.current) return
    if (view !== "home") {
      saveToHistory(result)
    }
  }, [result.strategy, view])

  // URL sharing
  const shareURL = useCallback(() => {
    const url = encodePaletteURL(result.colors, result.strategy)
    navigator.clipboard.writeText(url)
  }, [result.colors, result.strategy])

  // Keyboard shortcuts
  useEffect(() => {
    if (view === "home") return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target !== document.body && e.target !== document.documentElement) return

      if (e.code === "Space") {
        e.preventDefault()
        doGenerate()
      } else if (e.key === "l" || e.key === "L") {
        e.preventDefault()
        if (selectedIndex !== null) toggleLock(selectedIndex)
      } else if ((e.key === "ArrowUp" || e.key === "ArrowDown") && selectedIndex !== null) {
        e.preventDefault()
        cycleShade(selectedIndex, e.key === "ArrowUp" ? 1 : -1)
      } else if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && selectedIndex !== null) {
        e.preventDefault()
        const dir = e.key === "ArrowRight" ? 1 : -1
        const nextIdx = (selectedIndex + dir + result.colors.length) % result.colors.length
        setSelectedIndex(nextIdx)
      } else if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault()
        undo()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [view, doGenerate, selectedIndex, toggleLock, cycleShade, undo, result.colors.length])

  const colors = result.colors

  if (view === "home") {
    return (
      <div className="flex flex-col h-screen bg-gray-950 text-white">
        <Header view={view} setView={setView} onGenerate={goToGenerator} onHome={goHome} strategy={result.strategy} />
        <HomePage onSelectPreset={loadPreset} />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      <Header
        view={view} setView={setView} onGenerate={() => doGenerate()} onHome={goHome}
        strategy={result.strategy} onStrategyChange={handleStrategyChange}
        onUndo={undo} canUndo={undoStack.length > 0}
      />

      {view === "palette" && (
        <>
          <PaletteBar
            colors={colors} selectedIndex={selectedIndex}
            onSelect={selectColor} onToggleLock={toggleLock}
            onCycleShade={cycleShade}
          />
          {selectedIndex !== null && (
            <ColorInfo
              color={colors[selectedIndex]}
              onChange={(c) => handleColorChange(selectedIndex, c)}
            />
          )}

          <div className="bg-gray-900 border-t border-gray-800 px-4 sm:px-6 py-2 shrink-0 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <button onClick={removeColor} disabled={colors.length <= 2} className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-30 text-white text-lg cursor-pointer transition-colors">−</button>
              <span className="text-sm text-gray-400 min-w-[4ch] text-center">{colors.length}</span>
              <button onClick={addColor} disabled={colors.length >= 10} className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-30 text-white text-lg cursor-pointer transition-colors">+</button>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-600 hidden md:block">
                <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 font-mono text-[11px]">Space</kbd> gen ·
                <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 font-mono text-[11px]">L</kbd> lock ·
                <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 font-mono text-[11px]">↑↓</kbd> shade ·
                <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 font-mono text-[11px]">Ctrl+Z</kbd> undo
              </span>
              <button onClick={copyAllHex} className="px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded text-gray-300 transition-colors cursor-pointer">Copy HEX</button>
              <button onClick={copyAllClasses} className="px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded text-gray-300 transition-colors cursor-pointer">Copy Classes</button>
              <button onClick={shareURL} className="px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded text-gray-300 transition-colors cursor-pointer">Share URL</button>
            </div>
          </div>

          <TailwindPanel colors={colors} strategy={result.strategy} />
        </>
      )}

      {view === "shades" && (
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <PaletteHistory onLoad={handleLoadHistory} />
            <ShadeViewer colors={colors} />
            <ColorBlindnessPreview colors={colors} />
          </div>
        </div>
      )}

      {view === "preview" && (
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <PaletteHistory onLoad={handleLoadHistory} />
            <GradientPreview colors={colors} />
            <UIPreview colors={colors} />
          </div>
        </div>
      )}

      {view === "contrast" && (
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <PaletteHistory onLoad={handleLoadHistory} />
            <ContrastChecker colors={colors} />
            <ColorBlindnessPreview colors={colors} />
          </div>
        </div>
      )}

      {view !== "palette" && <Credits />}
    </div>
  )
}
