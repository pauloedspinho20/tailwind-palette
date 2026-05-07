export type BlindnessType = "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia"

const L_RED = 0.2126
const L_GREEN = 0.7152
const L_BLUE = 0.0722

function rgbToLms(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255
  const l = 0.31399022 * r + 0.63951294 * g + 0.04649755 * b
  const m = 0.15537241 * r + 0.75789446 * g + 0.08670142 * b
  const s = 0.01775239 * r + 0.10944209 * g + 0.87256922 * b
  return [l, m, s]
}

function lmsToRgb(l: number, m: number, s: number): { r: number; g: number; b: number } {
  let r = 5.47221206 * l - 4.6419601 * m + 0.16963708 * s
  let g = -1.1252419 * l + 2.29317098 * m - 0.1678952 * s
  let b_ = 0.02980165 * l - 0.19318073 * m + 1.16364789 * s
  r = Math.round(Math.max(0, Math.min(1, r)) * 255)
  g = Math.round(Math.max(0, Math.min(1, g)) * 255)
  b_ = Math.round(Math.max(0, Math.min(1, b_)) * 255)
  return { r, g, b: b_ }
}

const MATRICES: Record<BlindnessType, number[][]> = {
  protanopia: [[0.0, 1.05118294, -0.05116099], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0]],
  deuteranopia: [[1.0, 0.0, 0.0], [0.9513092, 0.0, 0.04866992], [0.0, 0.0, 1.0]],
  tritanopia: [[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [-0.86744736, 1.86727089, 0.0]],
  achromatopsia: [[L_RED, L_GREEN, L_BLUE], [L_RED, L_GREEN, L_BLUE], [L_RED, L_GREEN, L_BLUE]],
}

export function simulateColorBlindness(hex: string, type: BlindnessType): string {
  const { r, g, b } = (() => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (!result) return { r: 0, g: 0, b: 0 }
    return { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
  })()

  const lms = rgbToLms(r, g, b)
  const matrix = MATRICES[type]
  const simLms: [number, number, number] = [
    matrix[0][0] * lms[0] + matrix[0][1] * lms[1] + matrix[0][2] * lms[2],
    matrix[1][0] * lms[0] + matrix[1][1] * lms[1] + matrix[1][2] * lms[2],
    matrix[2][0] * lms[0] + matrix[2][1] * lms[1] + matrix[2][2] * lms[2],
  ]
  const sim = lmsToRgb(simLms[0], simLms[1], simLms[2])
  return `#${[sim.r, sim.g, sim.b].map((x) => x.toString(16).padStart(2, "0")).join("")}`
}

export const BLINDNESS_LABELS: Record<BlindnessType, string> = {
  protanopia: "Protanopia (red-blind)",
  deuteranopia: "Deuteranopia (green-blind)",
  tritanopia: "Tritanopia (blue-blind)",
  achromatopsia: "Achromatopsia (total)",
}
