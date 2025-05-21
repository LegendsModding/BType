/**
 * Mossy Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass intermingled with a mossy texture.
 */
export const mossyGrassConfig: GrassTextureConfig = {
  name: "mossy",
  noise: {
    scale: 1.0,
    octaves: 2,
    persistence: 0.4,
    lacunarity: 2.0,
    displacement: 0.07,
    contrast: 0.5,
    bias: 0.05,
    colorBlendPower: 0.85,
  },
  colors: {
    primary: "#4B5320", // Dark moss
    secondary: "#556B2F", // Olive drab
    tertiary: "#90EE90", // Light green
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
