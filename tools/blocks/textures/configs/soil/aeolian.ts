/**
 * @name aeolianSoilConfig
 * @description Soil texture configuration for Aeolian Soil, representing wind-sculpted, dune crest conditions.
 * @notes Designed for arid, shifting landscapes where fine, dust-laden sediments are moved by constant winds. Pairs well with **Dune Grass**.
 * @see SoilTextureConfig
 * @example
 * // Integrate aeolianSoilConfig in desert biomes with prominent wind erosion.
 */
export const aeolianSoilConfig: SoilTextureConfig = {
  name: "aeolian",
  noise: {
    scale: 3.5,
    octaves: 4,
    persistence: 0.4,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: 0.05,
    colorBlendPower: 0.8,
  },
  colors: {
    primary: "#5C4A33", // Dark dusty taupe
    secondary: "#7A623B", // Mid-tone sandy brown
    tertiary: "#8F7A63", // Soft weathered accent
  },
};
