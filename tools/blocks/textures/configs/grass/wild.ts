/**
 * Wild Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Lively, unkempt wild grass.
 */
export const wildGrassConfig: GrassTextureConfig = {
  name: "wild",
  noise: {
    scale: 2.3,
    octaves: 5,
    persistence: 0.65,
    lacunarity: 2.0,
    displacement: 0.09,
    contrast: 0.95,
    bias: 0.03,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#2D5E2D",
    secondary: "#3CB371",
    tertiary: "#7CFC00",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
