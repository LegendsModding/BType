/**
 * @constant limestoneOoliticConfig
 * @name limestoneOoliticConfig
 * @description Configuration for oolitic limestone - composed of spherical carbonate grains.
 * @notes
 * - Colors: Sandy beige with granular texture.
 * - Noise: High-frequency pattern mimicking ooid structures.
 */
export const limestoneOoliticConfig: StoneConfig = {
  name: "limestone_oolitic",
  colors: {
    main: "#F2E1C6", // Antique white
    secondary: "#D1C4A1", // Moccasin
    tertiary: "#D7B96A", // Tan
    quaternary: "#C2B69A", // Khaki,
  },
  noise: {
    octaves: 9,
    persistence: 0.4,
    scale: 0.8,
    roughness: 1.85,
    lacunarity: 2.2,
    displacement: 0.4,
    contrast: 0.8,
    warp: 0.3,
    edgeSharpness: 0.5,
    roughnessRange: [100, 160],
    metalnessRange: [5, 20],
    crystalline: {
      density: 7, // Ooid grain clusters
      size: 0.15,
      sharpness: 6,
    },
  },
};
