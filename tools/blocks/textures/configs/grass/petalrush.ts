/**
 * Normal Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Standard, healthy green grass.
 */
export const regularGrassConfig: GrassTextureConfig = {
  name: "grass",
  noise: {
    scale: 2.0,
    octaves: 4,
    persistence: 0.5,
    lacunarity: 2.0,
    contrast: 0.5,
    bias: 0.0,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#90EE90",
    secondary: "#FFB6C1",
    tertiary: "#DDDDDD",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
