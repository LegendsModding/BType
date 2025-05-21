/**
 * Mariposite: Metamorphic rock with green phengite mica in quartz-calcite matrix
 * @constant maripositeConfig
 */
export const maripositeConfig: StoneConfig = {
  name: "mariposite",
  colors: {
    main: "#5D8C7B", // Sage green base
    secondary: "#A3C1AD", // Weathered green
    tertiary: "#3B6B5E", // Milky quartz veins
    quaternary: "#C2D6CD", // Deep emerald accents
  },
  noise: {
    octaves: 7,
    persistence: 0.88,
    scale: 1.8,
    roughness: 0.35,
    lacunarity: 2.0,
    displacement: 0.25,
    frequencyMod: 1.4,
    gradientStrength: 0.35,
    edgeSharpness: 0.75,
    contrast: 0.6,
    stratification: {
      strength: 0.3,
      layerFrequency: 3.0,
      layerWarp: 0.1,
    },
    roughnessRange: [80, 160],
    metalnessRange: [32, 64],
    layers: [
      { octaves: 5, persistence: 0.7, scale: 1.2, roughness: 0.6, weight: 0.7 },
    ],
  },
};
