/**
 * @name tundraGrassConfig
 * @description Grass texture configuration for Tundra Grass, thriving in cold, desolate environments.
 * @notes Characterized by muted, icy greens and subtle grey undertones suitable for frigid landscapes.
 * @see GrassTextureConfig
 * @example
 * // Apply tundraGrassConfig in snowy, high-latitude biomes.
 */
export const tundraGrassConfig: GrassTextureConfig = {
  name: "tundra",
  noise: {
    scale: 2.5,
    octaves: 6,
    persistence: 0.55,
    lacunarity: 2.0,
    displacement: 0.05,
    contrast: 0.9,
    bias: 0.1,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#3B4A3D", // Dark muted green with grey hints
    secondary: "#55635A", // Dull, frosted green
    tertiary: "#6C7C73", // Soft, cool grey-green
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
