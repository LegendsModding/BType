/**
 * @constant limestoneConfig
 * @name limestoneConfig
 * @description Configuration for limestone - a soft calcium carbonate rock.
 * @notes
 * - Colors: Uniform pale gray with subtle marbling.
 * - Noise: Fine-grained texture with smooth layering.
 */
export const limestoneConfig: StoneConfig = {
  name: "limestone",
  colors: {
    main: "#F5F5DC", // Ghost white
    secondary: "#D3D3D3", // Lavender blush
    tertiary: "#BCAAA4", // Light gray veins
    quaternary: "#8B8680", // Soft blue undertones,
  },
  noise: {
    octaves: 6,
    persistence: 0.3,
    scale: 3.0,
    roughness: 0.35,
    lacunarity: 2.4,
    displacement: 0.2,
    contrast: 0.35,
    warp: 0.1,
    colorBlendPower: 1.8,
    stratification: {
      strength: 0.02,
      layerFrequency: 4,
      layerWarp: 0.3,
    },
    roughnessRange: [50, 90],
    metalnessRange: [0, 10],
  },
};
