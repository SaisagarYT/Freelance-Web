# Design System Specification & Color Tokens
> Reference: High-Converting SaaS Portfolio & Promotional Landing Page
> Aesthetic: Deep Royal Indigo Aurora transitioning into Clean Porcelain White

## 🎨 Official Color Palette

```json
{
  "colors": {
    "canvas": {
      "heroDeep": "#0A0E2A",
      "heroNavy": "#12184B",
      "bodyLight": "#FFFFFF",
      "surfaceMuted": "#F8FAFC",
      "cardBackground": "#FFFFFF",
      "cardBorder": "#E2E8F0"
    },
    "accents": {
      "electricCobalt": "#2948FF",
      "royalIndigo": "#4338CA",
      "ambientGlow": "#6366F1",
      "lavenderMist": "#C7D2FE",
      "auroraFade": "#EEF2FF",
      "emeraldGrowth": "#10B981"
    },
    "text": {
      "heroWhite": "#FFFFFF",
      "heroMuted": "#94A3B8",
      "bodyDark": "#0F172A",
      "bodyMuted": "#64748B"
    },
    "gradients": {
      "heroMesh": "radial-gradient(ellipse at 80% 20%, #3152FF 0%, #171E5A 45%, #0A0E2A 100%)",
      "heroTransition": "linear-gradient(180deg, #0A0E2A 0%, #161E58 50%, #EEF2FF 85%, #FFFFFF 100%)",
      "iridescent3D": "linear-gradient(135deg, #FF6584 0%, #7C5CFC 50%, #43BFFF 100%)"
    }
  }
}
```

## 📐 Typography Hierarchy
- **Primary Sans (Structure & Tech)**: `Plus Jakarta Sans` or `Inter` (geometric, ultra-clean, modern SaaS)
- **Signature Italic Serif (Editorial Accent)**: `Playfair Display` or `Instrument Serif` (Italic, e.g. *"Engineering that* ***elevates your*** *Vision"*)

## 🏛️ Layout Architecture (Mirroring Reference)
1. **Hero Header (Deep Aurora)**:
   - Deep royal indigo mesh with vibrant cobalt light bloom.
   - Floating frosted pill navigation bar with `Let's Contact ↗` CTA.
   - Two-tone punchy headline with italic accent word.
   - Primary white pill CTA + secondary translucent glass pill CTA.
   - Floating 3D dynamic tactile element with soft shadow.
2. **Seamless Aurora-to-White Fade**:
   - Soft lavender ambient gradient dissolving gracefully into pure clean white canvas.
3. **Client / Collaboration Marquee**:
   - Sleek monochrome ticker on clean white.
4. **Interactive Projects & Capabilities Cards**:
   - Large rounded cards (`rounded-3xl`), pure white, soft ambient elevation (`box-shadow: 0 20px 40px -15px rgba(0,0,0,0.05)`).
   - High-contrast metric callouts (`99%`, `<200ms`, `100/100`).
