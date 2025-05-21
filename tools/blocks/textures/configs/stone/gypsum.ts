/**
 * @constant gypsumConfig
 * @name gypsumConfig
 * @description Configuration for gypsum - a soft sulfate mineral.
 * @notes
 * - Colors: Pale white with subtle gray veining.
 * - Noise: Very smooth texture with minimal roughness.
 */
export const gypsumConfig: StoneConfig = {
  name: "gypsum",
  colors: {
    main: "#FFFFFF", // Pure white base
    secondary: "#F8F8F8", // Off-white highlight
    tertiary: "#F0F0F0", // Subtle gray veins
    quaternary: "#D3D3D3", // Light gray shadows
  },
  noise: {
    octaves: 4,
    persistence: 0.8,
    scale: 2.0,
    roughness: 2.7,
    lacunarity: 2.0,
    frequencyMod: 0.9,
    edgeSharpness: 1.2,
    contrast: 0.4,
    warp: 0.3,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [10, 30],
    metalnessRange: [8, 16],
  },
};
