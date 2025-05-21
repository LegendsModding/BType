/**
 * Swamp Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass growing in murky swamp conditions.
 */
export const swampGrassConfig: GrassTextureConfig = {
  name: "swamp",
  noise: {
    scale: 2.1,
    octaves: 5,
    persistence: 0.6,
    lacunarity: 2.0,
    displacement: 0.08,
    contrast: 0.75,
    bias: 0.04,
    colorBlendPower: 0.85,
  },
  colors: {
    primary: "#4B4B20",
    secondary: "#556B2F",
    tertiary: "#6B8E23",
  },
  sideTexture: {
    minHeight: 1,
    maxHeight: 10,
    bandFrequency: 2.0,
    pixelNoiseFrequency: 1.4,
  },
};
