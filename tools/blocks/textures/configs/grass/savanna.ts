/**
 * @name savannaGrassConfig
 * @description Grass texture configuration for Savanna Grass, adapted to dry, open plains with warm earthy tones.
 * @notes Designed to reflect the sun-baked and slightly arid conditions of savanna biomes.
 * @see GrassTextureConfig
 * @example
 * // Use savannaGrassConfig in dry, expansive grasslands.
 */
export const savannaGrassConfig: GrassTextureConfig = {
  name: "savanna",
  noise: {
    scale: 3.0,
    octaves: 4,
    persistence: 0.5,
    lacunarity: 2.0,
    displacement: 0.07,
    contrast: 1.0,
    bias: 0.05,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#5C4A2E", // Dark earthy tone
    secondary: "#7A6840", // Muted olive-brown
    tertiary: "#8F7A52", // Soft, sun-worn accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
