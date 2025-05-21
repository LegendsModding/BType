/**
 * Ash Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // A light, grayish ash soil.
 */
export const ashSoilConfig: SoilTextureConfig = {
  name: "ash",
  noise: {
    scale: 2.2,
    octaves: 5,
    persistence: 0.3,
    lacunarity: 2.0,
    contrast: 0.7,
    bias: 0.0,
    colorBlendPower: 0.8,
  },
  colors: {
    primary: "#4A3D33", // Cold ash base
    secondary: "#7A6E66", // Pale gray
    tertiary: "#B0A090", // Silver highlight
  },
};
