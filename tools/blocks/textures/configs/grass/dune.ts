/**
 * Dune Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a sandy, sun-worn appearance.
 */
export const duneGrassConfig: GrassTextureConfig = {
  name: "dune",
  noise: {
    scale: 3.2,
    octaves: 2,
    persistence: 0.35,
    lacunarity: 2.0,
    displacement: 0.02,
    contrast: 0.65,
    bias: 0.08,
    colorBlendPower: 0.8,
  },
  colors: {
    primary: "#6B8E23", // Olive drab
    secondary: "#8FBC8F", // Pale green
    tertiary: "#D2B48C", // Tan highlight
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
