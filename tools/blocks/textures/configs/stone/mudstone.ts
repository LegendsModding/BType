/**
 * Mudstone: A fine-grained sedimentary rock with earthy tones and subtle bedding.
 * @constant mudstoneConfig
 */
export const mudstoneConfig: StoneConfig = {
  name: "mudstone",
  colors: {
    main: "#6B4D3A", // Muted earthy brown
    secondary: "#8A6E55", // Sienna for warm depth
    tertiary: "#A58E74", // Light brown/beige for subtle variation
    quaternary: "#726458", // Dark goldenrod accent
  },
  noise: {
    octaves: 5,
    persistence: 0.6,
    scale: 2.0,
    roughness: 0.65,
    lacunarity: 2.5,
    stratification: {
      strength: 0.15,
      layerFrequency: 3,
      layerWarp: 0.35,
    },
    roughnessRange: [150, 210],
    metalnessRange: [0, 4], // Non-metallic, organic texture
  },
};
