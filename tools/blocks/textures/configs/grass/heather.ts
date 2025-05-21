/**
 * Heather Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass with a soft heather (purple) tone.
 */
export const heatherGrassConfig: GrassTextureConfig = {
  name: "heather",
  noise: {
    scale: 2.0,
    octaves: 9,
    persistence: 0.4,
    lacunarity: 2.4,
    displacement: 0.06,
    contrast: 0.6,
    bias: 0,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#556B2F", // Olive green
    secondary: "#6B8E23", // Khaki green
    tertiary: "#D8BFD8", // Thistle purple
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
