/**
 * Oasis Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Lush, vibrant grass from an oasis.
 */
export const oasisGrassConfig: GrassTextureConfig = {
  name: "oasis",
  noise: {
    scale: 1.0,
    octaves: 6,
    persistence: 0.68,
    lacunarity: 2.0,
    displacement: -0.1,
    contrast: 0.75,
    bias: 0.02,
    colorBlendPower: 1,
  },
  colors: {
    primary: "#008000", // Pure green
    secondary: "#3CB371", // Medium spring green
    tertiary: "#00FF7F", // Spring green
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
