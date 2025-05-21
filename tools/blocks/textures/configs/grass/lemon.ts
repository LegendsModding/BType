/**
 * Lemongrass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a fresh, lemon-yellow tint.
 */
export const lemongrassConfig: GrassTextureConfig = {
  name: "lemon",
  noise: {
    scale: 2.0,
    octaves: 9,
    persistence: 0.4,
    lacunarity: 4.0,
    displacement: 0.08,
    contrast: 0.65,
    bias: 0.1,
    colorBlendPower: 1.2,
  },
  colors: {
    primary: "#6B8E23", // Olive drab
    secondary: "#7FFF00", // Chartreuse (toned down)
    tertiary: "#9ACD32", // Yellow green (softer)
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
