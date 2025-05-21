/**
 * Heath Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass from heathlands, blending earthy and green tones.
 */
export const heathGrassConfig: GrassTextureConfig = {
  name: "heath",
  noise: {
    scale: 3.0,
    octaves: 3,
    persistence: 0.45,
    lacunarity: 2.0,
    displacement: 0.05,
    contrast: 0.75,
    bias: 0.07,
    colorBlendPower: 0.75,
  },
  colors: {
    primary: "#556B2F", // Olive green base
    secondary: "#6B8E23", // Khaki green
    tertiary: "#CD853F", // Heath highlight
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
