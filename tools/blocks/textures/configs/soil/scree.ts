/**
 * @name screeSoilConfig
 * @description Soil texture configuration for Scree Soil, emblematic of rocky, high-altitude environments.
 * @notes Represents thin, mineral-rich, and weathered soils found among scattered rock fragments. Pairs naturally with Alpine Grass.
 * @see SoilTextureConfig
 * @example
 * // Use screeSoilConfig in mountainous or alpine regions.
 */
export const screeSoilConfig: SoilTextureConfig = {
  name: "scree",
  noise: {
    scale: 2.0,
    octaves: 6,
    persistence: 0.7,
    lacunarity: 4.0,
    contrast: 0.9,
    bias: 0.05,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#3A3A33", // Dark grey-brown reminiscent of rock debris
    secondary: "#565654", // Muted granite tone
    tertiary: "#7A7A75", // Weathered rock accent
  },
};
