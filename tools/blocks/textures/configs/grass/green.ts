/**
 * Green Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // A subtle variation of standard green grass.
 */
export const greenGrassConfig: GrassTextureConfig = {
  name: "green",
  noise: {
    scale: 4.0,
    octaves: 11,
    persistence: 0.62,
    lacunarity: 2.0,
    displacement: 0.06,
    contrast: 0.85,
    bias: 0.01,
    colorBlendPower: 0.92,
  },
  colors: {
    primary: "#006400", // Dark green
    secondary: "#2E8B57", // Sea green
    tertiary: "#3CB371", // Lime green
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
