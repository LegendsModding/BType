/**
 * Blue Fescue Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a distinctive blue hue.
 */
export const blueFescueGrassConfig: GrassTextureConfig = {
  name: "blue_fescue",
  noise: {
    scale: 1.5,
    octaves: 16,
    persistence: 0.5,
    lacunarity: 2.0,
    displacement: 0.2,
    contrast: 0.45,
    bias: -0.05,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#2E5E7E", // Steel blue base
    secondary: "#5FBEA0", // Cadet blue
    tertiary: "#87CEFA", // Sky blue
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
