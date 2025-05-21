/**
 * @constant syeniteConfig
 * @name syeniteConfig
 * @description Configuration for syenite - a granitic rock low in quartz.
 * @notes
 * - Colors: Pinkish-gray with alkali feldspar dominance.
 * - Noise: Coarse grain with prominent feldspar crystals.
 */
export const syeniteConfig: StoneConfig = {
  name: "syenite",
  colors: {
    main: "#D8D6D0", // Golden feldspar
    secondary: "#B5A38D", // Peach matrix
    tertiary: "#9A7F60", // Beige plagioclase
    quaternary: "#6F5D53", // Creamy veins
  },
  noise: {
    octaves: 7,
    persistence: 0.75,
    scale: 2.0,
    roughness: 0.55,
    lacunarity: 3.2,
    displacement: 0.38,
    contrast: 0.85,
    warp: 0.4,
    roughnessRange: [80, 140],
    metalnessRange: [10, 30],
    crystalline: {
      density: 7, // Alkali feldspar crystals
      size: 0.8,
      sharpness: 6,
    },
  },
};
