

# Three.js Fog Hero Section

## Overview
Replace the current CSS-based fog background in the hero section with a stunning Three.js volumetric fog animation. The hero will feature a deep black canvas with thick, swirling royal blue (#4169E1) fog particles that feel mysterious and exciting. The text content stays the same -- "Richardson Hall Presents" (typewriter), "RPL 5.0", "Rabindranath Tagore Premier League".

---

## What Changes

### 1. Install Three.js Dependencies
- Add `three` (v0.133+) and `@react-three/fiber` (v8.x for React 18) and `@react-three/drei` (v9.x)
- These enable 3D rendering directly inside React components

### 2. New Component: `HeroFogScene`
A dedicated Three.js canvas component that renders only behind the hero section. It will contain:

- **Particle fog system** -- Hundreds of semi-transparent royal blue particles that drift, swirl, and pulse across a pitch-black background
- **Volumetric light effect** -- A central blue point light that illuminates fog particles, creating depth and a "something emerging from the mist" feeling
- **Mouse interactivity** -- Fog particles gently react to mouse position, adding a sense of life
- **Smooth animation loop** -- Particles continuously flow with varying speeds and opacity for organic, mysterious movement

### 3. Update Home Page Hero Section
- Replace the current CSS fog divs in the hero with the new `HeroFogScene` Three.js canvas as an absolute background layer
- Keep all text content (Richardson Hall Presents, RPL 5.0, tagline, CTA button) layered on top with `z-index`
- Remove the large scorpion silhouette from the hero (the fog replaces it as the visual centerpiece)
- The scroll indicator at the bottom remains

### 4. Keep Existing Fog Background for Other Pages
- The current CSS-based `FogBackground` component stays for Events, Schedule, and Contact pages
- Only the Home hero section gets the Three.js upgrade, keeping other pages lightweight

---

## Technical Details

### Dependencies
```
three@>=0.133
@react-three/fiber@^8.18
@react-three/drei@^9.122.0
```

### HeroFogScene Component Architecture
- Uses `<Canvas>` from `@react-three/fiber` with transparent background set to black
- A custom `FogParticles` component using `useFrame` for the animation loop
- `THREE.Points` geometry with a custom shader material for soft, glowing particles
- Blue color `#4169E1` applied as particle color with additive blending for glow
- Camera positioned to see particles at varying depths (z-layers) for 3D feel
- `drei`'s `Float` or custom animation for gentle camera sway

### File Changes Summary
| File | Action |
|------|--------|
| `package.json` | Add three, @react-three/fiber, @react-three/drei |
| `src/components/HeroFogScene.tsx` | New -- Three.js fog particle canvas |
| `src/pages/Home.tsx` | Update hero section to use HeroFogScene as background |

### Performance Considerations
- Particle count capped at ~500-800 for smooth 60fps on most devices
- `useFrame` handles animation without re-renders
- Canvas only mounts on Home page, not globally
- Automatic pixel ratio handling via `@react-three/fiber`

