/**
 * @name fenGrassConfig
 * @description Grass texture configuration for Fen Grass, suited for marshy, moisture-laden environments.
 * @notes Combines dark, organic greens with subtle, muddy undertones to evoke fen landscapes.
 * @see GrassTextureConfig
 * @example
 * // Integrate fenGrassConfig for wetland biomes.
 */
export const fenGrassConfig: GrassTextureConfig = {
  name: "fen",
  noise: {
    scale: 2.8,
    octaves: 5,
    persistence: 0.6,
    lacunarity: 2.2,
    displacement: 0.06,
    contrast: 0.95,
    bias: 0.0,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#4A5C3A", // Dark olive green
    secondary: "#687B52", // Muted moss green
    tertiary: "#7F9270", // Soft, earthy accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
