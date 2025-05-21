/**
 * Blazegrass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Fiery, orange-red grass for a volcanic feel.
 */
export const blazegrassConfig: GrassTextureConfig = {
  name: "blaze",
  noise: {
    scale: 2.0,
    octaves: 5,
    persistence: 1.25,
    lacunarity: 2.0,
    displacement: 0.1,
    contrast: 0.65,
    bias: -0.05,
    colorBlendPower: 1.1,
  },
  colors: {
    primary: "#8B0000", // Dark red base
    secondary: "#FF4500", // Orange-red
    tertiary: "#FF6B6B", // Bright tomato
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
