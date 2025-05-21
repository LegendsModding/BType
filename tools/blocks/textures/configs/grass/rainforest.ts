/**
 * Rainforest Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Deep, vibrant grass typical of rainforests.
 */
export const rainforestGrassConfig: GrassTextureConfig = {
  name: "rainforest",
  noise: {
    scale: 2.4,
    octaves: 6,
    persistence: 0.92,
    lacunarity: 2.0,
    displacement: 0.1,
    contrast: 0.9,
    bias: 0.0,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#0D4E0D",
    secondary: "#228B22",
    tertiary: "#32CD32",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
