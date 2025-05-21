/**
 * @constant limestoneFossiliferousConfig
 * @name limestoneFossiliferousConfig
 * @description Configuration for fossiliferous limestone - calcium carbonate with visible fossils.
 * @notes
 * - Colors: Creamy white with dark fossil impressions.
 * - Noise: Smooth base with embedded organic patterns.
 */
export const limestoneFossiliferousConfig: StoneConfig = {
  name: "limestone_fossiliferous",
  colors: {
    main: "#E1D6C9", // Cream base
    secondary: "#A38C6D", // Soft gray matrix
    tertiary: "#D1B69D", // Fossil outlines
    quaternary: "#C5C4B4", // Sandy undertones,
  },
  noise: {
    octaves: 5,
    persistence: 0.6,
    scale: 2.0,
    roughness: 0.65,
    lacunarity: 2.0,
    displacement: -0.25,
    contrast: 0.9,
    warp: 0.2,
    roughnessRange: [40, 80],
    metalnessRange: [10, 30],
    stratification: {
      strength: 0.03,
      layerFrequency: 3,
      layerWarp: 0.2,
    },
    layers: [
      {
        octaves: 4,
        persistence: 0.5,
        scale: 1.5,
        roughness: 0.2,
        weight: 0.7,
      },
    ],
  },
};
