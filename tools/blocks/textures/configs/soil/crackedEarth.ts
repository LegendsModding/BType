/**
 * @name crackedEarthSoilConfig
 * @description Soil texture configuration for Cracked Earth Soil with a deeper, more robust base.
 * @notes The primary color has been darkened to a richer brown (#3D2B23) to better represent the cracked, weathered earth.
 * @see SoilTextureConfig
 * @example
 * // Use crackedEarthSoilConfig in the soil texture system.
 */
export const crackedEarthSoilConfig: SoilTextureConfig = {
  name: "cracked_earth",
  noise: {
    scale: 4.0,
    octaves: 4,
    persistence: 0.8,
    lacunarity: 4.0,
    contrast: 1.8,
    bias: 0.18,
    colorBlendPower: 0.85,
  },
  colors: {
    primary: "#3D2B23", // Darker, richer brown base
    secondary: "#7F5D47", // Unchanged secondary tone
    tertiary: "#A0522D", // Unchanged tertiary tone
  },
};
