/**
 * @name fluvialGrassConfig
 * @description Grass texture configuration for Fluvial Grass, suited to moist, sediment-rich alluvial environments.
 * @notes Exhibits damp, dark green hues that resonate with nutrient-rich river deposits.
 * @see GrassTextureConfig
 * @example
 * // Use fluvialGrassConfig in biomes characterized by river deltas or frequent flooding.
 */
export const fluvialGrassConfig: GrassTextureConfig = {
  name: "fluvial",
  noise: {
    scale: 2.2,
    octaves: 5,
    persistence: 0.65,
    lacunarity: 2.0,
    displacement: 0.05,
    contrast: 0.95,
    bias: 0.05,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#36472E", // Dark, damp green
    secondary: "#4A5B3A", // Muted, riverine tone
    tertiary: "#5D6E4D", // Soft, sedimentary accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
