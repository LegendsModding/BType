/**
 * @constant cupriteConfig
 * @name cupriteConfig
 * @description Configuration for cuprite - copper oxide mineral.
 * @notes
 * - Colors: Ruby-red with metallic luster.
 * - Noise: Dense crystal aggregates.
 */
export const cupriteConfig: StoneConfig = {
  name: "cuprite",
  colors: {
    main: "#7F1E1E", // Orange-red
    secondary: "#A33F3F", // Tomato
    tertiary: "#C75F5F", // Coral
    quaternary: "#E07F7F", // Light salmon
  },
  noise: {
    octaves: 9,
    persistence: 2.0,
    scale: 4.0,
    roughness: 1.2,
    lacunarity: 2.0,
    contrast: 1.6,
    warp: 0.3,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
  },
};
