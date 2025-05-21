/**
 * @name duskGrassConfig
 * @description Grass texture configuration for Dusk Grass, evoking the subdued ambiance of twilight.
 * @notes Features cool, dark tones with a hint of purple to mimic the fading light at dusk.
 * @see GrassTextureConfig
 * @example
 * // Use duskGrassConfig in biomes that experience prolonged twilight.
 */
export const duskGrassConfig: GrassTextureConfig = {
  name: "dusk",
  noise: {
    scale: 1.8,
    octaves: 7,
    persistence: 0.65,
    lacunarity: 2.0,
    displacement: 0.08,
    contrast: 1.0,
    bias: 0.1,
    colorBlendPower: 1.1,
  },
  colors: {
    primary: "#3D3A4B", // Dark slate with purple hints
    secondary: "#55536A", // Muted, cool grey-purple
    tertiary: "#6D6B83", // Soft, dusky accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
