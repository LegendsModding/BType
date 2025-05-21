/**
 * @name rustgrassConfig
 * @description Grass texture configuration for Rustgrass, adapted to grow on naturally oxidized, ferruginous soils.
 * @notes Features earthy, rusty undertones that perfectly complement high iron-content terrains.
 * @see GrassTextureConfig
 * @example
 * // Integrate rustgrassConfig in regions featuring ferruginous soil.
 */
export const rustgrassConfig: GrassTextureConfig = {
  name: "rustgrass",
  noise: {
    scale: 2.6,
    octaves: 6,
    persistence: 0.6,
    lacunarity: 2.0,
    displacement: 0.07,
    contrast: 1.0,
    bias: 0.0,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#3C322C", // Dark, earthy rust
    secondary: "#53463A", // Muted, oxidized tone
    tertiary: "#6A5A47", // Soft rust accent
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
