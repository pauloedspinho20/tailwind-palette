import { useState } from "react"
import type { GeneratedPaletteColor } from "../utils/tailwindColors"
import { STARTER_PALETTES, type StarterPalette } from "../utils/presets"
import { Credits } from "./Credits"

interface HomePageProps {
  onSelectPreset: (preset: StarterPalette) => void
}

function PaletteBarMini({ colors }: { colors: GeneratedPaletteColor[] }) {
  return (
    <div className="flex h-2 rounded-full overflow-hidden">
      {colors.map((c, i) => (
        <div key={i} className="flex-1" style={{ backgroundColor: c.hex }} />
      ))}
    </div>
  )
}

function PresetCard({ preset, onSelect }: { preset: StarterPalette; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="group w-full text-left bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-xl p-5 transition-all cursor-pointer"
    >
      <div className="space-y-3">
        <PaletteBarMini colors={preset.colors} />
        <div>
          <h3 className="text-white font-semibold group-hover:text-violet-400 transition-colors">
            {preset.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
            {preset.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            {preset.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-gray-800 text-gray-400">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[10px] text-gray-600 font-medium group-hover:text-gray-500 transition-colors">
            {preset.strategy}
          </span>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {preset.colors.map((c, i) => (
            <span key={i} className="text-[10px] font-mono" style={{ color: c.hex }}>
              {c.tailwindName}-{c.shade}
              {i < preset.colors.length - 1 && <span className="text-gray-700 mx-0.5">·</span>}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

export function HomePage({ onSelectPreset }: HomePageProps) {
  const [search, setSearch] = useState("")

  const filtered = STARTER_PALETTES.filter(
    (p) =>
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">

        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Tailwind{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Palette
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Generate harmonious color palettes for Tailwind CSS v4 and shadcn/ui.
            Press <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300 font-mono text-sm">Space</kbd>,
            lock colors, and export shadcn globals.css with dark mode support.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => onSelectPreset(STARTER_PALETTES[0])}
              className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl text-white font-medium transition-colors cursor-pointer"
            >
              Start Generating
            </button>
            <button
              onClick={() => document.getElementById("featured-palettes")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-gray-300 font-medium transition-colors cursor-pointer"
            >
              Browse Palettes
            </button>
          </div>
        </section>

        <div className="flex h-2 rounded-full overflow-hidden mb-16 max-w-md mx-auto">
          {["#ef4444", "#f97316", "#f59e0b", "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"].map((hex) => (
            <div key={hex} className="flex-1" style={{ backgroundColor: hex }} />
          ))}
        </div>

        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Press Spacebar", desc: "Instantly generate a new palette using color harmony theory. Each press produces a fresh, balanced combination with varied shades." },
              { step: "02", title: "Lock & Adjust", desc: "Hover any color to lock it or cycle through 50–950 shades. Arrow keys change the shade of the selected color." },
              { step: "03", title: "Export CSS", desc: "Get shadcn/ui globals.css with light/dark mode, or Tailwind v4 @theme config, or JSON. Ready to paste into your project." },
            ].map((item) => (
              <div key={item.step} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <span className="text-xs font-mono text-violet-500 font-bold">{item.step}</span>
                <h3 className="text-white font-semibold mt-2 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="featured-palettes" className="mb-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Starter Palettes
              </h2>
              <p className="text-gray-500">
                {filtered.length} hand-crafted color combinations for real-world use cases
              </p>
            </div>
            <div className="hidden sm:block">
              <input
                type="text"
                placeholder="Search palettes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors w-48"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-gray-500 text-center py-12">
              No palettes match "{search}". Try a different search term.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((preset) => (
                <PresetCard key={preset.id} preset={preset} onSelect={() => onSelectPreset(preset)} />
              ))}
            </div>
          )}
        </section>

        <Credits />
      </div>
    </div>
  )
}
