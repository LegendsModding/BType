/**
 * @constant shaleConfig
 * @name shaleConfig
 * @description Configuration for shale - fine-grained sedimentary rock.
 * @notes
 * - Colors: Dark gray with laminated layers.
 * - Noise: Thinly bedded structure with smooth foliation.
 */
export const shaleConfig: StoneConfig = {
  name: "shale",
  colors: {
    main: "#2F4F4F", // Dark slate gray
    secondary: "#5A5A5A", // Medium gray
    tertiary: "#708090", // Light slate
    quaternary: "#3A3A3A", // Charcoal accents,
  },
  noise: {
    octaves: 7,
    persistence: 0.6,
    scale: 2.5,
    roughness: 1.4,
    lacunarity: 2.4,
    displacement: 0.4,
    contrast: 0.6,
    warp: 0.2,
    foliation: {
      angle: 90,
      frequency: 13,
      contrast: 1.5,
    },
    roughnessRange: [80, 140],
    metalnessRange: [0, 10],
  },
};
