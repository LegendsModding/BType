/**
 * @constant chertConfig
 * @name chertConfig
 * @description Configuration for chert - a microcrystalline quartz rock.
 * @notes
 * - Colors: Steel-gray with waxy luster.
 * - Noise: Dense microcrystalline texture.
 */
export const chertConfig: StoneConfig = {
  name: "chert",
  colors: {
    main: "#5A5A5A", // Dark steel-gray
    secondary: "#7A7A7A", // Medium gray
    tertiary: "#3A3A3A", // Jet-black accents
    quaternary: "#9A9A9A", // Silvery highlights
  },
  noise: {
    octaves: 7,
    persistence: 1.5,
    scale: 1.0,
    roughness: 0.05,
    lacunarity: 2.8,
    displacement: 0.2,
    contrast: 0.5,
    warp: 0.2,
    edgeSharpness: 0.75,
    metalnessRange: [40, 80], // Waxy sheen
    roughnessRange: [60, 100],
    colorBlendPower: 1.5,
    stratification: {
      strength: 0.1,
      layerFrequency: 2.0,
      layerWarp: 0.3,
    },
  },
};
