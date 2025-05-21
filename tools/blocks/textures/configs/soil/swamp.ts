/**
 * Swamp Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Dark, murky soil from swampy environments.
 */
export const swampSoilConfig: SoilTextureConfig = {
  name: "swampy",
  noise: {
    scale: 2.8,
    octaves: 7,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: -0.05,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#3B2F2F", // Murky black
    secondary: "#4E342E", // Swamp brown
    tertiary: "#556B2F", // Algae green
  },
};
