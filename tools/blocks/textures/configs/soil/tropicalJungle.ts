/**
 * @name tropicalJungleSoilConfig
 * @description Soil texture configuration for Tropical Jungle Soil, capturing the deep, moist, and organic-rich character of dense jungles.
 * @notes Features dark, green-inflected browns and subtle earthy greens to support the lush growth of Jungle Grass.
 * @see SoilTextureConfig
 * @example
 * // Apply tropicalJungleSoilConfig in warm, humid, densely forested biomes.
 */
export const tropicalJungleSoilConfig: SoilTextureConfig = {
  name: "tropical_jungle",
  noise: {
    scale: 2.6,
    octaves: 5,
    persistence: 0.65,
    lacunarity: 2.0,
    contrast: 1.1,
    bias: 0.0,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#353F2E", // Dark olive-green, earthy tone
    secondary: "#4C5A3A", // Muted green-brown
    tertiary: "#657A52", // Soft, organic green accent
  },
};
