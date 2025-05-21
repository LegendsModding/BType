/**
 * @constant marcasiteConfig
 * @name marcasiteConfig
 * @description Configuration for marcasite - an iron sulfide mineral with metallic luster.
 * @notes
 * - Colors: Dark gray with golden highlights.
 * - Noise: Rough texture with metallic sheen.
 */
export const marcasiteConfig: StoneConfig = {
  name: "marcasite",
  colors: {
    main: "#8C7B3D", // Dark gray base
    secondary: "#B2A061", // Golden highlight
    tertiary: "#D6C086", // Mid-gray shadow
    quaternary: "#F0DEA0", // Silver shimmer
  },
  noise: {
    octaves: 4,
    persistence: 0.7,
    scale: 1.2,
    roughness: 0.3,
    lacunarity: 2.0,
    frequencyMod: 1.3,
    edgeSharpness: 0.4,
    contrast: 0.5,
    warp: 0.1,
    ridge: false,
    colorBlendPower: 1.2,
    roughnessRange: [60, 120],
    metalnessRange: [96, 128],
    stratification: {
      strength: 0.25,
      layerFrequency: 3,
      layerWarp: 0.5,
    },
  },
};
