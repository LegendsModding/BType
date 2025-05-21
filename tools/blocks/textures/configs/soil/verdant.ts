/**
 * Verdant Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Lush soil with a hint of green, indicating moisture and life.
 */
export const verdantSoilConfig: SoilTextureConfig = {
  name: "verdant",
  noise: {
    scale: 2.0,
    octaves: 10,
    persistence: 0.6,
    lacunarity: 2.0,
    contrast: 1.2,
    bias: -0.08,
    colorBlendPower: 1.1,
  },
  colors: {
    primary: "#4E3B2F", // Dark moss
    secondary: "#5D4B37", // Fresh green
    tertiary: "#6B7E23", // Pale green
  },
};
