/**
 * Forest Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Earthy soil from a dense forest floor.
 */
export const forestSoilConfig: SoilTextureConfig = {
  name: "forest",
  noise: {
    scale: 1.0,
    octaves: 5,
    persistence: 0.6,
    lacunarity: 2.0,
    contrast: 1.25,
    bias: 0.02,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#3B2F2F", // Forest floor
    secondary: "#4E342E", // Decomposed leaves
    tertiary: "#5C4033", // Mossy brown
  },
};
