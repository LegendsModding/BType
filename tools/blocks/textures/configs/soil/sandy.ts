/**
 * @name sandySoilConfig
 * @description Soil texture configuration for Sandy Soil with a more earthy base and realistic sand accent.
 * @notes The primary color has been updated to a dirt-like brown (#8B4513) and the tertiary color has been changed to a neutral sand tone (#C2B280) to reduce the yellow bias.
 * @see SoilTextureConfig
 * @example
 * // Use sandySoilConfig in the soil texture system.
 */
export const sandySoilConfig: SoilTextureConfig = {
  name: "sandy",
  noise: {
    scale: 3.5,
    octaves: 5,
    persistence: 0.45,
    lacunarity: 4.0,
    contrast: 0.85,
    bias: 0.12,
    colorBlendPower: 0.75,
  },
  colors: {
    primary: "#6B4513", // Dirt-like brown base tone
    secondary: "#70522D", // Complementary medium brown
    tertiary: "#C2B280", // Neutral sand color replacing the overly yellow tone
  },
};
