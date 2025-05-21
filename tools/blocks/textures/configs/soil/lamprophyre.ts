/**
 * Lamprophyre Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // A volcanic, dark, and dense soil.
 */
export const lamprophyreSoilConfig: SoilTextureConfig = {
  name: "lamprophyre",
  noise: {
    scale: 2.0,
    octaves: 5,
    persistence: 0.5,
    lacunarity: 2.0,
    contrast: 1.15,
    bias: 0.1,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#4F3F3F", // Dark slate
    secondary: "#6F4F4F", // Weathered gray
    tertiary: "#7F5F5F", // Blue-gray
  },
};
