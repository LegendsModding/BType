/**
 * @constant monzoniteConfig
 * @name monzoniteConfig
 * @description Configuration for monzonite - an intrusive rock with equal feldspars.
 * @notes
 * - Colors: Pinkish-gray with salt-and-pepper speckling.
 * - Noise: Balanced texture between coarse and fine grains.
 */
export const monzoniteConfig: StoneConfig = {
  name: "monzonite",
  colors: {
    main: "#A3A3A3", // Pale pink-gray base
    secondary: "#D2B4A3", // Beige plagioclase
    tertiary: "#C0B8AC", // Gray potassium feldspar
    quaternary: "#707070", // Milky quartz veins
  },
  noise: {
    octaves: 5,
    persistence: 1.3,
    scale: 1.5,
    roughness: 0.4,
    lacunarity: 2.2,
    displacement: 0.21,
    contrast: 1.1,
    warp: 0.3,
    colorBlendPower: 0.1,
    roughnessRange: [80, 140],
    metalnessRange: [10, 30],
    crystalline: {
      density: 7, // Feldspar phenocrysts
      size: 0.95,
      sharpness: 7,
    },
  },
};
