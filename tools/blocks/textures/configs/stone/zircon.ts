/**
 * @constant zirconConfig
 * @name zirconConfig
 * @description Configuration for zircon - a silicate mineral with gem-quality brilliance.
 * @notes
 * - Colors: Colorless with flashes of yellow and blue.
 * - Noise: High reflectivity and sharp edges for gem-like clarity.
 */
export const zirconConfig: StoneConfig = {
  name: "zircon",
  colors: {
    main: "#2B3A67", // Colorless base
    secondary: "#3F517F", // Yellow flash
    tertiary: "#5A6A99", // Blue highlight
    quaternary: "#7583B3", // Silver shimmer
  },
  noise: {
    octaves: 9,
    persistence: 2.0,
    scale: 4.0,
    roughness: 1.0,
    lacunarity: 2.0,
    contrast: 1.2,
    frequencyMod: 0.4,
    warp: 0.2,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
  },
};
