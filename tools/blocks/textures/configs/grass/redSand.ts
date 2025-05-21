/**
 * Red Sand Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a red-hued tint found on red sandy ground.
 */
export const redSandGrassConfig: GrassTextureConfig = {
  name: "sand_red",
  noise: {
    scale: 2.0,
    octaves: 3,
    persistence: 0.45,
    lacunarity: 2.0,
    displacement: -0.2,
    contrast: 0.6,
    bias: 0.2,
    colorBlendPower: 0.75,
  },
  colors: {
    primary: "#6B8E23", // Olive green
    secondary: "#8FBC8F", // Pale green
    tertiary: "#CD5C5C", // Indian red highlight
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
