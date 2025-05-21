/**
 * Regular Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Use for a standard soil appearance.
 */
export const regularSoilConfig: SoilTextureConfig = {
  name: "soil",
  noise: {
    scale: 2.0,
    octaves: 4,
    persistence: 0.5,
    lacunarity: 2.0,
    contrast: 0.5,
    bias: 0.0,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#D47A3C", // Deep espresso
    secondary: "#FFA500", // Rich loam
    tertiary: "#FFD700", // Weathered tan
  },
};
