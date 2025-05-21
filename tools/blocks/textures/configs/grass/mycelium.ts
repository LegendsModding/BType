/**
 * Mycelium Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a distinct fungal, mycelium-inspired coloration.
 */
export const myceliumGrassConfig: GrassTextureConfig = {
  name: "mycelium",
  noise: {
    scale: 2.5,
    octaves: 13,
    persistence: 0.75,
    lacunarity: 2.0,
    displacement: 0.08,
    contrast: 0.75,
    bias: -0.02,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#4E3D6E", // Dark purple
    secondary: "#6A5ACD", // Slate blue
    tertiary: "#9370DB", // Medium purple
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
