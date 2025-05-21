/**
 * Spore Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a spore-like, muted green tone.
 */
export const sporeGrassConfig: GrassTextureConfig = {
  name: "spore",
  noise: {
    scale: 3.0,
    octaves: 4,
    persistence: 0.5,
    lacunarity: 2.0,
    displacement: -0.12,
    contrast: 0.75,
    bias: 0.1,
    colorBlendPower: 0.15,
  },
  colors: {
    primary: "#556B2F", // Olive green
    secondary: "#9370DB", // Medium purple
    tertiary: "#BA55D3", // Medium orchid
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
