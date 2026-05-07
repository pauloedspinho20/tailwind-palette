import { useState } from "react"
import type { GeneratedPaletteColor } from "../utils/tailwindColors"
import { generateTailwindThemeCSS, generateShadcnCSS } from "../utils/shadcn"
import { exportPaletteAsJSON, downloadFile } from "../utils/imageExport"

interface TailwindPanelProps {
  colors: GeneratedPaletteColor[]
  strategy?: string
}

type OutputFormat = "tailwind" | "shadcn" | "json"

export function TailwindPanel({ colors, strategy = "" }: TailwindPanelProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [format, setFormat] = useState<OutputFormat>("shadcn")

  const tailwindCode = generateTailwindThemeCSS(colors)
  const shadcnCode = generateShadcnCSS(colors).combined
  const jsonCode = exportPaletteAsJSON(colors, strategy)

  const codeMap: Record<OutputFormat, string> = {
    tailwind: tailwindCode,
    shadcn: shadcnCode,
    json: jsonCode,
  }
  const code = codeMap[format]

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const ext = format === "json" ? "json" : "css"
    const mime = format === "json" ? "application/json" : "text/css"
    downloadFile(code, `palette.${ext}`, mime)
  }

  return (
    <div className="bg-gray-900 border-t border-gray-800 shrink-0">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${expanded ? "rotate-90" : ""}`}>
              <path d="M9 18l6-6-6-6" />
            </svg>
            Export CSS
          </button>

          <div className="flex items-center gap-0.5 bg-gray-800 rounded-md p-0.5">
            {(["shadcn", "tailwind", "json"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                  format === f ? "bg-gray-700 text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {f === "shadcn" ? "shadcn/ui" : f === "tailwind" ? "Tailwind v4" : "JSON"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">
            {colors.length} colors · {colors.filter((c) => c.locked).length} locked
          </span>
          <button onClick={handleCopy} className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded text-gray-300 transition-colors cursor-pointer">
            {copied ? "Copied!" : "Copy"}
          </button>
          <button onClick={handleDownload} className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded text-gray-300 transition-colors cursor-pointer">
            Download
          </button>
        </div>
      </div>

      {expanded && (
        <div className="px-4 sm:px-6 pb-4">
          <pre className="bg-gray-950 rounded-lg p-4 text-sm font-mono text-gray-300 overflow-x-auto max-h-96 overflow-y-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
