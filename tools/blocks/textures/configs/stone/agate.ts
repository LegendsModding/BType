/**
 * @constant agateConfig
 * @name agateConfig
 * @description Configuration for agate - banded chalcedony.
 * @notes
 * - Colors: Earthy tones with concentric bands.
 * - Noise: Smooth gradients and layered bands.
 */
export const agateConfig: StoneConfig = {
  name: "agate",
  colors: {
    main: "#603B30", // Terra cotta
    secondary: "#8A5E4B", // Burnt sienna
    tertiary: "#B18468", // Tan bands
    quaternary: "#D48782", // Chocolate accents
  },
  noise: {
    octaves: 3,
    persistence: 0.1,
    scale: 1.5,
    roughness: 0.5,
    lacunarity: 4.0,
    displacement: -0.1,
    contrast: 1.2,
    warp: 0.3,
    colorBlendPower: 1.2,
    stratification: {
      strength: 0.14,
      layerFrequency: 2.0,
      layerWarp: 0.9,
    },
    roughnessRange: [60, 100],
    metalnessRange: [40, 60],
  },
};
