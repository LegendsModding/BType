/**
 * Mud Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass growing in muddy conditions.
 */
export const mudGrassConfig: GrassTextureConfig = {
  name: "mud",
  noise: {
    scale: 2.0,
    octaves: 7,
    persistence: 0.5,
    lacunarity: 4.0,
    displacement: 0.07,
    contrast: 0.6,
    bias: 0.08,
    colorBlendPower: 0.75,
  },
  colors: {
    primary: "#556B2F", // Olive green
    secondary: "#6B8E23", // Khaki green
    tertiary: "#8FBC8F", // Pale green
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
