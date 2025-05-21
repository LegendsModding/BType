/**
 * @name alluvialSoilConfig
 * @description Soil texture configuration for Alluvial Soil, formed from river deposits and characterized by a rich, fine-grained structure.
 * @notes Perfect for floodplains and riverbanks where seasonal sedimentation creates a nutrient-rich layer.
 * @see SoilTextureConfig
 * @example
 * // Use alluvialSoilConfig in biomes featuring river deltas or floodplain environments.
 */
export const alluvialSoilConfig: SoilTextureConfig = {
  name: "alluvial",
  noise: {
    scale: 2.4,
    octaves: 4,
    persistence: 0.65,
    lacunarity: 2.1,
    contrast: 1.1,
    bias: 0.05,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#3D2E27", // Dark, rich earthy tone
    secondary: "#5A4737", // Deep, textured brown
    tertiary: "#7A6652", // Soft, sedimentary accent
  },
};
