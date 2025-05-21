/**
 * Humidifern Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Lush, vibrant grass found in humid fern environments.
 */
export const humidifernGrassConfig: GrassTextureConfig = {
  name: "humidifern",
  noise: {
    scale: 1.9,
    octaves: 5,
    persistence: 0.7,
    lacunarity: 2.0,
    displacement: 0.08,
    contrast: 0.9,
    bias: 0.02,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#0F4D0F",
    secondary: "#228B22",
    tertiary: "#32CD32",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
