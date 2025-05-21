/**
 * Migmatite: High-grade metamorphic rock with swirled appearance
 * @constant migmatiteConfig
 */
export const migmatiteConfig: StoneConfig = {
  name: "migmatite",
  colors: {
    main: "#6B5D5D", // Gneissic base
    secondary: "#D9C7B0", // Leucosome bands
    tertiary: "#A89887", // Melanosome streaks
    quaternary: "#292424", // Transition zones
  },
  noise: {
    octaves: 8,
    persistence: 0.95,
    scale: 2.2,
    roughness: 0.8,
    lacunarity: 4.0,
    displacement: 0.05,
    frequencyMod: 0.5,
    contrast: 0.9,
    colorBlendPower: 0.4,
    warp: 0.15,
    stratification: {
      strength: 0.1,
      layerFrequency: 2,
      layerWarp: 0.8,
    },
    roughnessRange: [96, 192],
    metalnessRange: [16, 48],
    layers: [
      { octaves: 6, persistence: 0.8, scale: 1.5, roughness: 0.7, weight: 0.6 },
    ],
  },
};
