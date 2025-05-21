/**
 * @constant greywackeConfig
 * @name greywackeConfig
 * @description Configuration for greywacke - a hard sandstone with sharp grains.
 * @notes
 * - Colors: Dark gray with mica flecks and angular quartz grains.
 * - Noise: Coarse texture with high contrast between matrix and clasts.
 */
export const greywackeConfig: StoneConfig = {
  name: "greywacke",
  colors: {
    main: "#3F4A50", // Dark matrix
    secondary: "#6A6B42", // Medium gray clasts
    tertiary: "#7D5B4C", // Brownish mica
    quaternary: "#A8A9A5", // Jet-black accents,
  },
  noise: {
    octaves: 7,
    persistence: 0.85,
    scale: 1.0,
    roughness: 0.85,
    lacunarity: 2.8,
    displacement: 0.2,
    contrast: 0.3,
    warp: 0.2,
    edgeSharpness: 1.2,
    roughnessRange: [120, 180],
    metalnessRange: [5, 20],
    stratification: {
      strength: 0.7,
      layerFrequency: 3,
      layerWarp: 0.75,
    },
  },
};
