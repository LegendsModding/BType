/**
 * @constant topazConfig
 * @name topazConfig
 * @description Configuration for topaz - a silicate mineral with glassy luster.
 * @notes
 * - Colors: Pale yellow with hints of orange.
 * - Noise: Smooth texture with high reflectivity.
 */
export const topazConfig: StoneConfig = {
  name: "topaz",
  colors: {
    main: "#FFD700", // Golden yellow base
    secondary: "#FFA500", // Orange highlight
    tertiary: "#FFE4B5", // Pale gold shimmer
    quaternary: "#F0E68C", // Khaki shadow
  },
  noise: {
    octaves: 11,
    persistence: 1.5,
    scale: 4.0,
    roughness: 1.2,
    lacunarity: 2.0,
    contrast: 1.3,
    warp: 0.1,
    roughnessRange: [20, 60],
    metalnessRange: [64, 96],
    stratification: {
      strength: 0.05,
      layerFrequency: 1.5,
      layerWarp: 0.2,
    },
  },
};
