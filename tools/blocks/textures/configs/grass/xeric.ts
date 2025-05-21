/**
 * @name xericGrassConfig
 * @description Grass texture configuration for Xeric Grass, thriving in extremely arid, caliche-rich environments.
 * @notes Features dusty, muted green tones that harmonize with hardened desert surfaces.
 * @see GrassTextureConfig
 * @example
 * // Use xericGrassConfig in desert biomes with prevalent caliche soil.
 */
export const xericGrassConfig: GrassTextureConfig = {
  name: "xeric",
  noise: {
    scale: 2.8,
    octaves: 5,
    persistence: 0.5,
    lacunarity: 2.0,
    displacement: 0.06,
    contrast: 0.9,
    bias: 0.05,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#48422F", // Dark, dusty green
    secondary: "#5A543C", // Muted, earthy olive
    tertiary: "#736757", // Warm, desiccated accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
