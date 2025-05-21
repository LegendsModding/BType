/**
 * @name prairieGrassConfig
 * @description Grass texture configuration for Prairie Grass, embodying the subtle, wind-swept hues of expansive grasslands.
 * @notes Offers earthy, muted tones with a balanced, natural look typical of prairie ecosystems.
 * @see GrassTextureConfig
 * @example
 * // Apply prairieGrassConfig in temperate, open grassland biomes.
 */
export const prairieGrassConfig: GrassTextureConfig = {
  name: "prairie",
  noise: {
    scale: 2.7,
    octaves: 6,
    persistence: 0.6,
    lacunarity: 2.0,
    displacement: 0.06,
    contrast: 0.9,
    bias: 0.02,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#40372F", // Dark earthy olive
    secondary: "#5A4E3C", // Subtle mid-tone brown
    tertiary: "#746856", // Soft, sun-worn accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
