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
    primary: "#4A324A",
    secondary: "#603F60",
    tertiary: "#7A597A",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
