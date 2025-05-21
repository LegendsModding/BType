/**
 * Sand Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass growing in sandy areas with a muted tone.
 */
export const sandGrassConfig: GrassTextureConfig = {
  name: "sand",
  noise: {
    scale: 2.0,
    octaves: 5,
    persistence: 0.65,
    lacunarity: 2.0,
    displacement: -0.1,
    contrast: 0.8,
    bias: 0.05,
    colorBlendPower: 1,
  },
  colors: {
    primary: "#6B8E23", // Olive green
    secondary: "#8FBC8F", // Pale green
    tertiary: "#D2B48C", // Tan highlight
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
