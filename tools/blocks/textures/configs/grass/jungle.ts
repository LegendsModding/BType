/**
 * Jungle Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Dense, varied grass typical of a tropical jungle.
 */
export const jungleGrassConfig: GrassTextureConfig = {
  name: "jungle",
  noise: {
    scale: 2.8,
    octaves: 6,
    persistence: 0.68,
    lacunarity: 2.4,
    displacement: 0.09,
    contrast: 1.05,
    bias: 0.03,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#1A5E2E", // Deep jungle green
    secondary: "#228B22", // Forest green
    tertiary: "#32CD32", // Lime green
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
