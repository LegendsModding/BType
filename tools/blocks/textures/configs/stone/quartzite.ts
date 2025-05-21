/**
 * Quartzite: Metamorphosed sandstone with interlocking quartz grains
 * @constant quartziteConfig
 */
export const quartziteConfig: StoneConfig = {
  name: "quartzite",
  colors: {
    main: "#E8E6E1", // Pure quartz white
    secondary: "#D1CDC5", // Grain boundaries
    tertiary: "#F4F3F0", // Crystal faces
    quaternary: "#B8B2A6", // Iron oxide staining
  },
  noise: {
    octaves: 9,
    persistence: 0.6,
    scale: 1.5,
    roughness: 0.3,
    lacunarity: 2.0,
    contrast: 1.0,
    edgeSharpness: 0.95,
    warp: 1.3,
    roughnessRange: [64, 128],
    metalnessRange: [24, 48],
    layers: [
      {
        octaves: 6,
        persistence: 0.55,
        scale: 1.5,
        roughness: 0.65,
        weight: 0.55,
      },
    ],
  },
};
