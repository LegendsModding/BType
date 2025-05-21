/**
 * @constant pegmatiteConfig
 * @name pegmatiteConfig
 * @description Configuration for pegmatite - a very coarse-grained granite.
 * @notes
 * - Colors: Variegated with large mineral crystals.
 * - Noise: Extremely large crystal features and high contrast.
 */
export const pegmatiteConfig: StoneConfig = {
  name: "pegmatite",
  colors: {
    main: "#C7A998", // Milky quartz
    secondary: "#E2D1C3", // Golden muscovite
    tertiary: "#B2A59A", // Blue tourmaline
    quaternary: "#FAF9F7", // Pink feldspar
  },
  noise: {
    octaves: 3,
    persistence: 0.6,
    scale: 4.0,
    roughness: 0.75,
    lacunarity: 2.2,
    displacement: 0.5,
    contrast: 0.9,
    warp: 0.2,
    roughnessRange: [60, 100],
    metalnessRange: [40, 60],
    crystalline: {
      density: 8, // Giant crystals
      size: 1.1,
      sharpness: 8,
    },
  },
};
