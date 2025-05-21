/**
 * Rich Loamy Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // For soils with abundant organic matter.
 */
export const richLoamySoilConfig: SoilTextureConfig = {
  name: "loamy_rich",
  noise: {
    scale: 1.9,
    octaves: 6,
    persistence: 0.6,
    lacunarity: 4.0,
    contrast: 1.2,
    bias: -0.05,
    colorBlendPower: 1.1,
  },
  colors: {
    primary: "#4E3B2C", // Dark organic matter
    secondary: "#6B4E37", // Fertile brown
    tertiary: "#8B4E37", // Nutrient-rich tan
  },
};
