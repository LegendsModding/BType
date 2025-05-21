/**
 * @constant kyaniteConfig
 * @name kyaniteConfig
 * @description Configuration for kyanite - a blue silicate mineral.
 * @notes
 * - Colors: Deep sapphire blue with hints of teal.
 * - Noise: Sharp edges and layered texture for crystalline appearance.
 */
export const kyaniteConfig: StoneConfig = {
  name: "kyanite",
  colors: {
    main: "#0074D9", // Sapphire blue base
    secondary: "#00BFFF", // Bright teal highlight
    tertiary: "#1E90FF", // Dodger blue shadow
    quaternary: "#A2C2DB", // Steel blue accent
  },
  noise: {
    octaves: 6,
    persistence: 0.5,
    scale: 1.2,
    roughness: 0.9,
    lacunarity: 2.0,
    frequencyMod: 0.7,
    edgeSharpness: 0.9,
    contrast: 0.65,
    ridge: true,
    colorBlendPower: 1.4,
    roughnessRange: [30, 70],
    metalnessRange: [48, 80],
    stratification: {
      strength: 0.65,
      layerFrequency: 2,
      layerWarp: 1.2,
    },
  },
};
