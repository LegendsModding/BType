/**
 * Talc: Ultra-soft hydrated magnesium silicate
 * @constant talcConfig
 */
export const talcConfig: StoneConfig = {
  name: "talc",
  colors: {
    main: "#F0F0E6", // Pure talc white
    secondary: "#D4D4C7", // Aggregate boundaries
    tertiary: "#B8B8A3", // Fresh cleavage
    quaternary: "#FFFFF5", // Impurity veining
  },
  noise: {
    octaves: 3,
    persistence: 0.35,
    scale: 1.1,
    roughness: 0.2,
    lacunarity: 1.8,
    contrast: 0.45,
    frequencyMod: 1.0,
    displacement: 0.29,
    colorBlendPower: 1.1,
    roughnessRange: [16, 32],
    metalnessRange: [0, 8],
    warp: 0.7,
    layers: [
      {
        octaves: 16,
        persistence: 0.35,
        scale: 0.9,
        roughness: 0.4,
        weight: 0.9,
      },
    ],
  },
};
