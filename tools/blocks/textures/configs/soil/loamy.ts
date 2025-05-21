/**
 * Loamy Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // A balanced, fertile loamy soil.
 */
export const loamySoilConfig: SoilTextureConfig = {
  name: "loamy",
  noise: {
    scale: 2.1,
    octaves: 4,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: 0.0,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#4E3B2C", // Rich loam
    secondary: "#8B654D", // Earthy brown
    tertiary: "#9F654D", // Terra cotta
  },
};
