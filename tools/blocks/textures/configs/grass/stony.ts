/**
 * @name stonyGrassConfig
 * @description Grass texture configuration for Stony Grass, ideal for limestone and rocky terrains.
 * @notes Exhibits cool, grey-green hues that blend seamlessly with calcareous, rocky soils.
 * @see GrassTextureConfig
 * @example
 * // Apply stonyGrassConfig in biomes with prominent limestone formations.
 */
export const stonyGrassConfig: GrassTextureConfig = {
  name: "stony",
  noise: {
    scale: 3.5,
    octaves: 4,
    persistence: 0.55,
    lacunarity: 2.0,
    displacement: 0.05,
    contrast: 1.0,
    bias: 0.0,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#3A4530", // Dark grey-green
    secondary: "#4A5A3F", // Muted, rocky tone
    tertiary: "#5C6D4C", // Soft, weathered accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
