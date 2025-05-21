/**
 * Nether Crimson Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Intense, Nether-inspired crimson grass.
 */
export const netherCrimsonGrassConfig: GrassTextureConfig = {
  name: "crimson",
  noise: {
    scale: 2.0,
    octaves: 5,
    persistence: 0.5,
    lacunarity: 2.0,
    displacement: 0.0,
    contrast: 0.75,
    bias: -0.05,
    colorBlendPower: 1.15,
  },
  colors: {
    primary: "#6E2323",
    secondary: "#B22222",
    tertiary: "#DC143C",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
