/**
 * @constant anorthositeConfig
 * @name anorthositeConfig
 * @description Configuration for anorthosite - plagioclase-rich intrusive rock.
 * @notes
 * - Colors: Pale gray with blue iridescence.
 * - Noise: Coarse grain with labradorite effects.
 */
export const anorthositeConfig: StoneConfig = {
  name: "anorthosite",
  colors: {
    main: "#E4E4E4", // Lavender gray
    secondary: "#C8C8C8", // Thistle
    tertiary: "#ACACAC", // Silver
    quaternary: "#787878", // Dark gray
  },
  noise: {
    octaves: 7,
    persistence: 0.7,
    scale: 3.0,
    roughness: 1.4,
    lacunarity: 3.0,
    contrast: 0.5,
    warp: 0.3,
    colorBlendPower: 1.5,
    metalnessRange: [30, 50],
    roughnessRange: [80, 140],
    crystalline: {
      density: 4, // Plagioclase laths
      size: 0.6,
      sharpness: 7,
    },
  },
};
