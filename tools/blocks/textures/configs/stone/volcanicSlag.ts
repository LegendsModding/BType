/**
 * @constant volcanicSlagConfig
 * @name volcanicSlagConfig
 * @description Configuration for volcanic slag - glassy byproduct of eruptions.
 * @notes
 * - Colors: Black with iridescent streaks.
 * - Noise: Sharp, glassy texture with flow bands.
 */
export const volcanicSlagConfig: StoneConfig = {
  name: "volcanic_slag",
  colors: {
    main: "#1C1C1C", // Obsidian core
    secondary: "#464646", // Glassy matrix
    tertiary: "#5A5A5A", // Silvery streaks
    quaternary: "#0A0A0A", // Depth accents
  },
  noise: {
    octaves: 5,
    persistence: 0.7,
    scale: 2.0,
    roughness: 0.4,
    lacunarity: 2.0,
    displacement: 0.2,
    contrast: 1.3,
    warp: 0.1,
    metalnessRange: [60, 80],
    roughnessRange: [60, 100],
    stratification: {
      strength: 0.3,
      layerFrequency: 3,
      layerWarp: 0.2,
    },
  },
};
