/**
 * @constant diatomiteConfig
 * @name diatomiteConfig
 * @description Configuration for diatomite - a siliceous sedimentary rock.
 * @notes
 * - Colors: Pale yellow-white with high porosity.
 * - Noise: Extremely fine, chalk-like texture.
 */
export const diatomiteConfig: StoneConfig = {
  name: "diatomite",
  colors: {
    main: "#EAE8E1", // Ivory base
    secondary: "#D6D2C9", // Pale gold
    tertiary: "#C2B7A5", // Beige undertones
    quaternary: "#A89F94", // Soft gray-yellow
  },
  noise: {
    octaves: 8,
    persistence: 0.4,
    scale: 6.0,
    roughness: 0.9,
    lacunarity: 2.0,
    displacement: -0.3,
    contrast: 0.4,
    warp: 0.3,
    roughnessRange: [180, 240], // Ultra-fine porosity
    metalnessRange: [0, 5],
    stratification: {
      strength: 0.15,
      layerFrequency: 4,
      layerWarp: 0.1,
    },
  },
};
