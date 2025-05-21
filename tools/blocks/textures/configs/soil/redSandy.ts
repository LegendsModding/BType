/**
 * @name redSandySoilConfig
 * @description Soil texture configuration for Red Sandy Soil with a dirtier base and an earthy red sand accent.
 * @notes The primary color has been shifted to a dirt-like brown (#6D4C41) and the tertiary color updated to an earthy terra cotta red (#E2725B) to better capture the essence of red sand.
 * @see SoilTextureConfig
 * @example
 * // Use redSandySoilConfig in the soil texture system.
 */
export const redSandySoilConfig: SoilTextureConfig = {
  name: "sandy_red",
  noise: {
    scale: 4.0,
    octaves: 7,
    persistence: 0.45,
    lacunarity: 4.0,
    contrast: 0.85,
    bias: 0.12,
    colorBlendPower: 0.75,
  },
  colors: {
    primary: "#6B4513", // Dirt-like brown base
    secondary: "#70522D", // Complementary earthy tone
    tertiary: "#C2725B", // Terra cotta red representing a true red sand color
  },
};
