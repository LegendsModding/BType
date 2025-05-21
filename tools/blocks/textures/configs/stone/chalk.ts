/**
 * @constant chalkConfig
 * @name chalkConfig
 * @description Configuration for chalk - a soft limestone.
 * @notes
 * - Colors: Bright white with subtle gray marbling.
 * - Noise: Fine-grained and porous texture.
 */
export const chalkConfig: StoneConfig = {
  name: "chalk",
  colors: {
    main: "#F2F1E8", // Pure white base
    secondary: "#BDB5A1", // Off-white variation
    tertiary: "#CFC9B8", // Light gray marbling
    quaternary: "#E8E3D3", // Subtle silver veins
  },
  noise: {
    octaves: 6,
    persistence: 0.5,
    scale: 4.0,
    roughness: 0.2,
    lacunarity: 2.0,
    displacement: 0.5,
    contrast: 0.3,
    colorBlendPower: 1.1,
    warp: 0.3,
    roughnessRange: [100, 160],
    metalnessRange: [0, 5],
    stratification: {
      strength: 0.1,
      layerFrequency: 6,
      layerWarp: 0.3,
    },
  },
};
