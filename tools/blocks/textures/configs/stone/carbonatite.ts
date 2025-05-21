/**
 * @constant carbonatiteConfig
 * @name carbonatiteConfig
 * @description Configuration for generating a carbonatite texture.
 * Carbonatite is a rare carbonate-rich rock with calcite/dolomite crystals.
 * @notes
 * - Colors: Creamy white with golden-beige veining.
 * - Noise: Smooth texture with low roughness for carbonate clarity.
 * - Crystalline: High density for calcite crystal clusters.
 */
export const carbonatiteConfig: StoneConfig = {
  name: "carbonatite",
  colors: {
    main: "#F5F0E6",
    secondary: "#FFEDCC",
    tertiary: "#E0D5C4",
    quaternary: "#D4C4A4",
  },
  noise: {
    octaves: 6,
    persistence: 0.4,
    scale: 2.5,
    roughness: 0.5,
    lacunarity: 2.5,
    displacement: 0.05,
    contrast: 0.8,
    warp: 0.05,
    roughnessRange: [40, 80],
    metalnessRange: [20, 40],
    crystalline: {
      density: 6,
      size: 0.7,
      sharpness: 3,
    },
    stratification: {
      strength: 0.1,
      layerFrequency: 3,
      layerWarp: 0.5,
    },
  },
};
