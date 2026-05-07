import type { GeneratedPaletteColor, ColorName } from "./tailwindColors"
import { buildPaletteColor } from "./tailwindColors"

function pc(name: ColorName, semantic: string, shade = 500): GeneratedPaletteColor {
  return buildPaletteColor(name, semantic, shade)
}

export interface StarterPalette {
  id: string
  name: string
  description: string
  tags: string[]
  strategy: string
  colors: GeneratedPaletteColor[]
}

export const STARTER_PALETTES: StarterPalette[] = [
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    description: "Cool blues and teals reminiscent of tropical waters. Perfect for SaaS dashboards and health tech products.",
    tags: ["cool", "professional", "saas", "health"],
    strategy: "Analogous",
    colors: [pc("blue", "primary", 500), pc("cyan", "secondary", 500), pc("teal", "accent", 400), pc("sky", "highlight", 300), pc("slate", "neutral", 500)],
  },
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    description: "Warm oranges, roses and ambers that evoke golden hour. Ideal for food brands, travel apps, and lifestyle blogs.",
    tags: ["warm", "vibrant", "food", "lifestyle"],
    strategy: "Analogous",
    colors: [pc("orange", "primary", 500), pc("rose", "secondary", 600), pc("amber", "accent", 400), pc("red", "highlight", 700), pc("stone", "neutral", 500)],
  },
  {
    id: "corporate-blue",
    name: "Corporate Blue",
    description: "Trustworthy blues and indigos with a neutral anchor. The go-to palette for enterprise, finance, and B2B platforms.",
    tags: ["professional", "enterprise", "finance", "b2b"],
    strategy: "Brand Palette",
    colors: [pc("blue", "primary", 600), pc("indigo", "secondary", 500), pc("cyan", "accent", 400), pc("sky", "highlight", 300), pc("gray", "neutral", 600)],
  },
  {
    id: "forest-calm",
    name: "Forest Calm",
    description: "Natural greens and earthy tones for a grounded, organic feel. Great for wellness apps, sustainability brands, and outdoor gear.",
    tags: ["nature", "wellness", "sustainable", "earthy"],
    strategy: "Nature Tones",
    colors: [pc("emerald", "primary", 600), pc("green", "secondary", 500), pc("teal", "accent", 400), pc("lime", "highlight", 300), pc("stone", "neutral", 500)],
  },
  {
    id: "creative-spark",
    name: "Creative Spark",
    description: "Bold purples, fuchsias, and violets for design-forward brands. Perfect for creative agencies, social apps, and artistic portfolios.",
    tags: ["creative", "bold", "agency", "social"],
    strategy: "Analogous",
    colors: [pc("violet", "primary", 500), pc("purple", "secondary", 600), pc("fuchsia", "accent", 500), pc("pink", "highlight", 400), pc("mauve", "neutral", 500)],
  },
  {
    id: "warm-earth",
    name: "Warm Earth",
    description: "Rich amber, orange, and warm neutrals. Ideal for artisan brands, coffee shops, and handmade goods marketplaces.",
    tags: ["earthy", "artisan", "cozy", "handmade"],
    strategy: "Nature Tones",
    colors: [pc("amber", "primary", 600), pc("orange", "secondary", 500), pc("yellow", "accent", 400), pc("red", "highlight", 700), pc("taupe", "neutral", 500)],
  },
  {
    id: "royal-night",
    name: "Royal Night",
    description: "Deep indigos, violets and dark slates for a premium, luxurious feel. Great for high-end fashion, fintech, and luxury hospitality.",
    tags: ["luxury", "premium", "fashion", "fintech"],
    strategy: "Complementary",
    colors: [pc("indigo", "primary", 700), pc("violet", "secondary", 600), pc("purple", "accent", 500), pc("amber", "highlight", 400), pc("slate", "neutral", 800)],
  },
  {
    id: "fresh-mint",
    name: "Fresh Mint",
    description: "Crisp emeralds and teals with a light touch. Great for productivity apps, education platforms, and clean UI design systems.",
    tags: ["fresh", "clean", "productivity", "education"],
    strategy: "Analogous",
    colors: [pc("emerald", "primary", 500), pc("teal", "secondary", 400), pc("cyan", "accent", 300), pc("lime", "highlight", 400), pc("mist", "neutral", 400)],
  },
  {
    id: "bold-statement",
    name: "Bold Statement",
    description: "High-contrast reds and oranges for maximum impact. Best for CTA-driven platforms, gaming, and entertainment websites.",
    tags: ["bold", "gaming", "entertainment", "cta"],
    strategy: "Complementary",
    colors: [pc("red", "primary", 600), pc("orange", "secondary", 500), pc("rose", "accent", 700), pc("cyan", "highlight", 400), pc("zinc", "neutral", 800)],
  },
  {
    id: "tech-startup",
    name: "Tech Startup",
    description: "Modern indigo, cyan, and violet for the quintessential startup landing page. Works for SaaS, AI tools, and crypto platforms.",
    tags: ["startup", "tech", "saas", "ai"],
    strategy: "UIKit System",
    colors: [pc("indigo", "primary", 600), pc("cyan", "secondary", 500), pc("violet", "accent", 400), pc("emerald", "success", 500), pc("slate", "neutral", 700)],
  },
  {
    id: "pastel-dream",
    name: "Pastel Dream",
    description: "Soft sky, pink, and violet tones for a gentle, approachable aesthetic. Ideal for beauty brands, wellness apps, and children's products.",
    tags: ["soft", "beauty", "wellness", "kids"],
    strategy: "Pastel Dream",
    colors: [pc("sky", "primary", 300), pc("pink", "secondary", 300), pc("violet", "accent", 300), pc("teal", "highlight", 300), pc("gray", "neutral", 300)],
  },
  {
    id: "minimal-mono",
    name: "Minimal Mono",
    description: "Clean grays and zinc with a single accent pop. The ultimate palette for minimal portfolios, documentation sites, and editorial design.",
    tags: ["minimal", "monochrome", "portfolio", "docs"],
    strategy: "Monochromatic",
    colors: [pc("gray", "primary", 600), pc("zinc", "secondary", 400), pc("slate", "accent", 700), pc("blue", "highlight", 500), pc("neutral", "neutral", 300)],
  },
  {
    id: "tropical-heat",
    name: "Tropical Heat",
    description: "Vivid coral, lime, and teal inspired by tropical paradises. Great for travel booking sites, resort brands, and summer campaigns.",
    tags: ["tropical", "vibrant", "travel", "summer"],
    strategy: "Triadic",
    colors: [pc("rose", "primary", 500), pc("lime", "secondary", 500), pc("teal", "accent", 500), pc("amber", "highlight", 400), pc("stone", "neutral", 400)],
  },
  {
    id: "midnight-aurora",
    name: "Midnight Aurora",
    description: "Dark slate backdrop with neon cyan, violet, and pink accents. Perfect for developer tools, terminal apps, and cyberpunk aesthetics.",
    tags: ["dark", "developer", "cyberpunk", "terminal"],
    strategy: "Dark Mode",
    colors: [pc("slate", "primary", 900), pc("cyan", "secondary", 400), pc("violet", "accent", 500), pc("pink", "highlight", 500), pc("zinc", "neutral", 800)],
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    description: "Warm terracotta, deep blue, and sandy neutrals. Evokes coastal villages and ceramic crafts. Great for hospitality and interior design.",
    tags: ["coastal", "hospitality", "interior", "craft"],
    strategy: "Complementary",
    colors: [pc("blue", "primary", 700), pc("orange", "secondary", 500), pc("amber", "accent", 400), pc("teal", "highlight", 600), pc("taupe", "neutral", 500)],
  },
  {
    id: "arctic-frost",
    name: "Arctic Frost",
    description: "Icy blues, cool grays, and crisp whites. Clean, clinical, and modern. Ideal for medical tech, cloud services, and Scandinavian design.",
    tags: ["clean", "medical", "cloud", "scandinavian"],
    strategy: "Analogous",
    colors: [pc("sky", "primary", 400), pc("blue", "secondary", 300), pc("cyan", "accent", 300), pc("indigo", "highlight", 500), pc("mist", "neutral", 200)],
  },
  {
    id: "autumn-harvest",
    name: "Autumn Harvest",
    description: "Deep burgundy, golden amber, and olive greens. Rich, seasonal warmth for food blogs, wineries, and rustic marketplaces.",
    tags: ["seasonal", "rustic", "food", "wine"],
    strategy: "Nature Tones",
    colors: [pc("rose", "primary", 700), pc("amber", "secondary", 600), pc("olive", "accent", 600), pc("orange", "highlight", 500), pc("stone", "neutral", 600)],
  },
  {
    id: "neon-pop",
    name: "Neon Pop",
    description: "Electric fuchsia, lime, and cyan on dark background. Maximum energy for music platforms, event pages, and Gen Z brands.",
    tags: ["electric", "music", "events", "genz"],
    strategy: "Dark Mode",
    colors: [pc("fuchsia", "primary", 500), pc("lime", "secondary", 400), pc("cyan", "accent", 400), pc("yellow", "highlight", 400), pc("gray", "neutral", 950)],
  },
  {
    id: "botanical-garden",
    name: "Botanical Garden",
    description: "Layered greens from lime to emerald with earthy undertones. Perfect for plant shops, organic brands, and gardening communities.",
    tags: ["botanical", "organic", "garden", "earth"],
    strategy: "Analogous",
    colors: [pc("emerald", "primary", 600), pc("green", "secondary", 500), pc("lime", "accent", 400), pc("olive", "highlight", 600), pc("stone", "neutral", 400)],
  },
  {
    id: "retrowave",
    name: "Retrowave",
    description: "Synthwave-inspired neon pink, cyan, and deep purple. Nostalgic 80s aesthetic for gaming channels, music producers, and retro brands.",
    tags: ["retro", "80s", "synthwave", "gaming"],
    strategy: "Complementary",
    colors: [pc("purple", "primary", 700), pc("pink", "secondary", 500), pc("cyan", "accent", 400), pc("fuchsia", "highlight", 600), pc("slate", "neutral", 900)],
  },
  {
    id: "coastal-fog",
    name: "Coastal Fog",
    description: "Muted grays, misty blues, and soft greens. Subtle and atmospheric. Ideal for architecture firms, fine art, and editorial photography.",
    tags: ["atmospheric", "architecture", "fine-art", "editorial"],
    strategy: "Pastel Dream",
    colors: [pc("mist", "primary", 300), pc("slate", "secondary", 300), pc("teal", "accent", 200), pc("sky", "highlight", 200), pc("gray", "neutral", 400)],
  },
  {
    id: "desert-dusk",
    name: "Desert Dusk",
    description: "Sandy taupes, warm terracottas, and deep indigo sunsets. Earthy and dramatic. Great for outdoor brands and adventure travel.",
    tags: ["desert", "adventure", "outdoor", "dramatic"],
    strategy: "Brand Palette",
    colors: [pc("orange", "primary", 600), pc("indigo", "secondary", 700), pc("amber", "accent", 500), pc("rose", "highlight", 600), pc("taupe", "neutral", 500)],
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    description: "Delicate pinks, soft mauves, and light neutrals. Romantic and airy. Perfect for wedding planners, florists, and beauty editorial.",
    tags: ["romantic", "wedding", "floral", "beauty"],
    strategy: "Analogous",
    colors: [pc("pink", "primary", 300), pc("rose", "secondary", 300), pc("fuchsia", "accent", 300), pc("red", "highlight", 400), pc("mauve", "neutral", 200)],
  },
  {
    id: "cyber-security",
    name: "Cyber Security",
    description: "Military green, alert red, and tactical gray. Authoritative and serious. Built for cybersecurity dashboards, threat monitoring, and defense.",
    tags: ["security", "military", "dashboard", "monitoring"],
    strategy: "UIKit System",
    colors: [pc("slate", "primary", 700), pc("green", "success", 600), pc("red", "warning", 600), pc("amber", "accent", 500), pc("zinc", "neutral", 600)],
  },
]
