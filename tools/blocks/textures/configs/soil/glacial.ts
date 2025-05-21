/**
 * @name glacialSoilConfig
 * @description Soil texture configuration for Glacial Soil, capturing the cool, muted tones of frozen terrains.
 * @notes Intended for regions with permafrost and cold, wind-sculpted earth.
 * @see SoilTextureConfig
 * @example
 * // Apply glacialSoilConfig in high latitude or altitude biomes.
 */
export const glacialSoilConfig: SoilTextureConfig = {
  name: "glacial",
  noise: {
    scale: 2.5,
    octaves: 5,
    persistence: 0.5,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: 0.05,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#2B3A3F", // Dark slate
    secondary: "#4C5A61", // Muted blue-grey
    tertiary: "#65737E", // Soft, frosted blue-grey
  },
};
