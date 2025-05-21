/**
 * Blossom Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with soft, cherry-blossom inspired hues.
 */
export const blossomGrassConfig: GrassTextureConfig = {
  name: "blossom",
  noise: {
    scale: 8.0,
    octaves: 3,
    persistence: 0.4,
    lacunarity: 2.0,
    displacement: 0.1,
    contrast: 1.1,
    bias: 0,
    colorBlendPower: 1.05,
  },
  colors: {
    primary: "#2E8B57", // Gold base
    secondary: "#3CB371", // Light pink
    tertiary: "#FFB6C1", // Misty rose
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
