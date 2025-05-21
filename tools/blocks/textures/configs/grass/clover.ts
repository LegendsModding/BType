/**
 * Clover Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Bright, vibrant clover-like grass.
 */
export const cloverGrassConfig: GrassTextureConfig = {
  name: "clover",
  noise: {
    scale: 1.9,
    octaves: 4,
    persistence: 0.55,
    lacunarity: 2.0,
    displacement: 0.05,
    contrast: 0.8,
    bias: -0.02,
    colorBlendPower: 1.3,
  },
  colors: {
    primary: "#2D642D",
    secondary: "#3D9E3D",
    tertiary: "#7CFC00",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
