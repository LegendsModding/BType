/**
 * @constant perliteConfig
 * @name perliteConfig
 * @description Configuration for perlite - hydrated volcanic glass.
 * @notes
 * - Colors: Milky white with pearly luster.
 * - Noise: High roughness with onion-skin fracturing.
 */
export const perliteConfig: StoneConfig = {
  name: "perlite",
  colors: {
    main: "#FAFAFA", // Pure white base
    secondary: "#E8E8E8", // Light gray bands
    tertiary: "#D4D4D4", // Silver undertones
    quaternary: "#BEBEBE", // Metallic sheen
  },
  noise: {
    octaves: 7,
    persistence: 0.6,
    scale: 1.0,
    roughness: 0.9,
    lacunarity: 2.0,
    displacement: 0.3,
    contrast: 0.6,
    warp: 0.3,
    colorBlendPower: 1.9,
    roughnessRange: [120, 180],
    metalnessRange: [40, 60],
    crystalline: {
      density: 2, // Onion-skin fractures
      size: 0.05,
      sharpness: 8,
    },
    foliation: {
      angle: 40,
      frequency: 4,
      contrast: 1.4,
    },
  },
};
