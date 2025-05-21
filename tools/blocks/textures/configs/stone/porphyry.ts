/**
 * @constant porphyryConfig
 * @name porphyryConfig
 * @description Configuration for porphyry - a rock with large phenocrysts.
 * @notes
 * - Colors: Dark matrix with contrasting light phenocrysts.
 * - Noise: Multiple layers for crystal-matrix contrast.
 */
export const porphyryConfig: StoneConfig = {
  name: "porphyry",
  colors: {
    main: "#5D1E2F", // Dark gray groundmass
    secondary: "#8C2B3E", // White feldspar phenocrysts
    tertiary: "#B08C7D", // Medium gray matrix
    quaternary: "#3A2C2B", // Transition tones
  },
  noise: {
    octaves: 5,
    persistence: 2.2,
    scale: 1.5,
    roughness: 0.55,
    lacunarity: 6.0,
    displacement: 0.2,
    contrast: 0.9,
    warp: 0.2,
    roughnessRange: [120, 180],
    metalnessRange: [15, 35],
    layers: [
      {
        octaves: 3,
        persistence: 0.5,
        scale: 0.8,
        roughness: 0.8,
        weight: 0.6,
      },
    ],
  },
};
