/**
 * @name myceliumSoilConfig
 * @description Soil texture configuration for Mycelium Soil with a richer, darker base.
 * @notes The primary color has been updated to a deep, rich dark brown (#3E2723) to better represent the organic, earthy nature of mycelium soils.
 * @see SoilTextureConfig
 * @example
 * // Use myceliumSoilConfig in the soil texture system.
 */
export const myceliumSoilConfig: SoilTextureConfig = {
  name: "mycelium",
  noise: {
    scale: 2.3,
    octaves: 5,
    persistence: 0.6,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: -0.05,
    colorBlendPower: 1.1,
  },
  colors: {
    primary: "#3E2723", // Rich, dark brown base
    secondary: "#556B5F", // Unchanged secondary tone
    tertiary: "#8A2BE2", // Unchanged tertiary tone (vivid accent)
  },
};
