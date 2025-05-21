/**
 * @name limestoneSoilConfig
 * @description Soil texture configuration for Limestone Soil, reflecting weathered, mineral-rich terrains.
 * @notes Intended for areas with abundant limestone deposits; colors evoke a blend of dark earthy and subtle mineral tones.
 * @see SoilTextureConfig
 * @example
 * // Use limestoneSoilConfig in biomes with karst landscapes.
 */
export const limestoneSoilConfig: SoilTextureConfig = {
  name: "limestone",
  noise: {
    scale: 3.3,
    octaves: 4,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: 0.1,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#443C32", // Dark earthy gray-brown
    secondary: "#6D6659", // Subdued, weathered tone
    tertiary: "#8A8375", // Soft mineral highlight
  },
};
