/**
 * Pale Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a pale, subtle tone for light forests.
 */
export const paleGrassConfig: GrassTextureConfig = {
  name: "pale",
  noise: {
    scale: 2.0,
    octaves: 8,
    persistence: 0.25,
    lacunarity: 2.4,
    displacement: 0.5,
    contrast: 0.45,
    bias: 0.2,
    colorBlendPower: 0.8,
  },
  colors: {
    primary: "#9DCD9D", // Pale green
    secondary: "#A3C7A3", // Green yellow
    tertiary: "#659865", // Aquamarine highlight
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
