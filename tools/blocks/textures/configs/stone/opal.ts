/**
 * @constant opalConfig
 * @name opalConfig
 * @description Configuration for opal - a hydrated silica mineral with a play-of-color effect.
 * @notes
 * - Colors: Milky white base with flashes of iridescent colors.
 * - Noise: Smooth texture with metallic highlights to simulate the play-of-color phenomenon.
 */
export const opalConfig: StoneConfig = {
  name: "opal",
  colors: {
    main: "#F8F8FF", // Pure white base
    secondary: "#E3F2FD", // Soft blue shimmer
    tertiary: "#FFEBEE", // Golden flash
    quaternary: "#F3E5F5", // Orange accent,
  },
  noise: {
    octaves: 5,
    persistence: 0.5,
    scale: 2.0,
    roughness: 0.5,
    lacunarity: 2.0,
    frequencyMod: 1.4,
    edgeSharpness: 0.6,
    contrast: 0.5,
    warp: 0.1,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [20, 60],
    metalnessRange: [64, 96],
    stratification: {
      strength: 0.1,
      layerFrequency: 2,
      layerWarp: 0.2,
    },
  },
};
