/**
 * @constant peridotiteConfig
 * @name peridotiteConfig
 * @description Configuration for peridotite - an ultramafic rock rich in olivine.
 * @notes
 * - Colors: Olive-green base with dark pyroxene streaks.
 * - Noise: Coarse texture with prominent mineral grains.
 */
export const peridotiteConfig: StoneConfig = {
  name: "peridotite",
  colors: {
    main: "#5A6F50", // Olive-green olivine matrix
    secondary: "#3A4F30", // Dark green pyroxene
    tertiary: "#7A8F70", // Black magnetite streaks
    quaternary: "#192310", // Lighter serpentine accents
  },
  noise: {
    octaves: 4,
    persistence: 0.6,
    scale: 3.0,
    roughness: 0.8,
    lacunarity: 4.4,
    displacement: 0.35,
    contrast: 0.4,
    frequencyMod: 4.0,
    warp: 0.4,
    roughnessRange: [160, 220],
    metalnessRange: [0, 10],
    crystalline: {
      density: 5, // Large olivine crystals
      size: 0.9,
      sharpness: 6,
    },
    foliation: {
      angle: 30,
      frequency: 1.0,
      contrast: 1.9,
    },
  },
};
