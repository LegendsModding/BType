/**
 * Frostbite Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a frosty, cool tone.
 */
export const frostbiteGrassConfig: GrassTextureConfig = {
  name: "frostbite",
  noise: {
    scale: 0.5,
    octaves: 7,
    persistence: 0.75,
    lacunarity: 2.0,
    displacement: 0.03,
    contrast: 0.8,
    bias: 0.2,
    colorBlendPower: 0.8,
  },
  colors: {
    primary: "#48D1CC", // Medium turquoise
    secondary: "#66CDAA", // Aquamarine
    tertiary: "#AFEEEE", // Pale turquoise
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
