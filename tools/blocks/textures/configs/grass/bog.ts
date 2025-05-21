/**
 * Bog Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass that thrives in murky, boggy areas.
 */
export const bogGrassConfig: GrassTextureConfig = {
  name: "bog",
  noise: {
    scale: 2.4,
    octaves: 4,
    persistence: 0.2,
    lacunarity: 2.0,
    displacement: 0.06,
    contrast: 0.75,
    bias: 0.06,
    colorBlendPower: 0.8,
  },
  colors: {
    primary: "#4B4B20",
    secondary: "#556B2F",
    tertiary: "#6B8E23",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
