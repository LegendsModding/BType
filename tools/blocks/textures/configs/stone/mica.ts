/**
 * @constant micaConfig
 * @name micaConfig
 * @description Configuration for mica - a phyllosilicate mineral with flaky texture.
 * @notes
 * - Colors: Silvery-gray with metallic luster.
 * - Noise: Flaky texture with sharp edges.
 */
export const micaConfig: StoneConfig = {
  name: "mica",
  colors: {
    main: "#C0C0C0", // Silvery base
    secondary: "#A9A9A9", // Darker silver highlight
    tertiary: "#D3D3D3", // Light gray shimmer
    quaternary: "#808080", // Charcoal shadow
  },
  noise: {
    octaves: 9,
    persistence: 0.85,
    scale: 1.5,
    roughness: 1.85,
    lacunarity: 2.0,
    frequencyMod: 0.8,
    edgeSharpness: 0.9,
    contrast: 1.1,
    warp: 0.2,
    ridge: false,
    colorBlendPower: 1.0,
    stratification: {
      strength: 0.2,
      layerFrequency: 4.0,
      layerWarp: 0,
    },
    roughnessRange: [30, 70],
    metalnessRange: [64, 96],
  },
};
