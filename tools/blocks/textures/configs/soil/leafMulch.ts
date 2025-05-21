/**
 * @name leafMulchSoilConfig
 * @description Soil texture configuration for Leaf Mulch Soil now using autumn/dead leaf colors.
 * @notes The color palette has been updated to reflect autumnal tones: a deep saddle brown (#8B4513) for the base, firebrick red (#B22222) for the dried leaves, and a burnt orange/chocolate hue (#D2691E) as an accent.
 * @see SoilTextureConfig
 * @example
 * // Use leafMulchSoilConfig in the soil texture system.
 */
export const leafMulchSoilConfig: SoilTextureConfig = {
  name: "leaf_mulch",
  noise: {
    scale: 2.0,
    octaves: 11,
    persistence: 0.7,
    lacunarity: 2.2,
    contrast: 1.2,
    bias: 0.0,
    colorBlendPower: 1.05,
  },
  colors: {
    primary: "#5C3A1E", // Deep saddle brown, representing the soil base
    secondary: "#642F1E", // Firebrick red, capturing the tone of dried autumn leaves
    tertiary: "#BA491C", // Burnt orange/chocolate accent tone
  },
};
