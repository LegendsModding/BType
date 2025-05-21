/**
 * Mossy Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Soil partially covered with green moss.
 */
export const mossySoilConfig: SoilTextureConfig = {
  name: "mossy",
  noise: {
    scale: 2.8,
    octaves: 7,
    persistence: 0.75,
    lacunarity: 2.0,
    contrast: 1.05,
    bias: 0.1,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#554D33", // Mossy base
    secondary: "#6B5E47", // Olive green
    tertiary: "#8FBC8F", // Light moss
  },
};
