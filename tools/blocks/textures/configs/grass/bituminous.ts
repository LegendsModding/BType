/**
 * @name bituminousGrassConfig
 * @description Grass texture configuration for Bituminous Grass, adapted to grow on oily, tar-rich soils.
 * @notes Exhibits subdued, dark olive hues that complement tar or industrial soils.
 * @see GrassTextureConfig
 * @example
 * // Integrate bituminousGrassConfig in regions dominated by tar soil formations.
 */
export const bituminousGrassConfig: GrassTextureConfig = {
  name: "bituminous",
  noise: {
    scale: 2.0,
    octaves: 6,
    persistence: 0.7,
    lacunarity: 2.0,
    displacement: 0.08,
    contrast: 1.0,
    bias: 0.1,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#3B3A32", // Dark, oily olive
    secondary: "#4C4B42", // Muted, industrial tone
    tertiary: "#5C5B4F", // Subtle tar-like accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
