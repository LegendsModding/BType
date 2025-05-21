/**
 * @constant emeraldConfig
 * @name emeraldConfig
 * @description Configuration for emerald - green beryl gemstone.
 * @notes
 * - Colors: Vivid green with chromium-rich hues.
 * - Noise: Gem clarity with hexagonal crystal structure.
 */
export const emeraldConfig: StoneConfig = {
  name: "emerald",
  colors: {
    main: "#50C878", // Emerald green
    secondary: "#3CB371", // Medium sea green
    tertiary: "#2E8B57", // Sea green
    quaternary: "#006400", // Dark green
  },
  noise: {
    octaves: 13,
    persistence: 2.4,
    scale: 4.0,
    roughness: 1.8,
    lacunarity: 2.0,
    contrast: 0.8,
    warp: 0.3,
    colorBlendPower: 1.5,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
  },
};
