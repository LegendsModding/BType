/**
 * @constant moonstoneConfig
 * @name moonstoneConfig
 * @description Configuration for moonstone - a feldspar mineral with adularescence.
 * @notes
 * - Colors: Milky white with blue shimmer.
 * - Noise: Smooth texture with metallic highlights.
 */
export const moonstoneConfig: StoneConfig = {
  name: "moonstone",
  colors: {
    main: "#F2F7F9", // Milky white base
    secondary: "#D9EDF3", // Soft blue shimmer
    tertiary: "#B4D4E9", // Pale blue highlight
    quaternary: "#84C7E6", // Light cyan shadow
  },
  noise: {
    octaves: 3,
    persistence: 1.2,
    scale: 4.0,
    roughness: 0.2,
    lacunarity: 16.0,
    contrast: 0.7,
    warp: 0.4,
    frequencyMod: 3.5,
    colorBlendPower: 2.5,
    ridge: true,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
  },
};
