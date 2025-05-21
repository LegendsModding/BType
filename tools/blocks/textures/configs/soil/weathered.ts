/**
 * @name weatheredSoilConfig
 * @description Soil texture configuration for Weathered Soil, embodying the rugged and time-worn character of aged earth.
 * @notes Ideal for representing soils that have experienced extensive erosion and organic decay.
 * @see SoilTextureConfig
 * @example
 * // Integrate weatheredSoilConfig for ancient or overused farmlands.
 */
export const weatheredSoilConfig: SoilTextureConfig = {
  name: "weathered",
  noise: {
    scale: 2.0,
    octaves: 5,
    persistence: 0.6,
    lacunarity: 2.2,
    contrast: 1.1,
    bias: 0.05,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#3B3029", // Dark, timeworn brown
    secondary: "#5C514A", // Muted, weathered tone
    tertiary: "#7D736C", // Soft, faded accent
  },
};
