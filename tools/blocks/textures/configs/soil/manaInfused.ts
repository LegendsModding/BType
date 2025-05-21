/**
 * @name manaInfusedSoilConfig
 * @description Soil texture configuration for Mana Infused Soil with warmer, earthier tones.
 * @notes The primary and secondary colors have been shifted from purples to warmer browns (#5D4037 and #8B5E3C, respectively) to give a more natural, earthy appearance while preserving a magical touch with the tertiary accent.
 * @see SoilTextureConfig
 * @example
 * // Use manaInfusedSoilConfig in the soil texture system.
 */
export const manaInfusedSoilConfig: SoilTextureConfig = {
  name: "mana_infused",
  noise: {
    scale: 2.4,
    octaves: 5,
    persistence: 0.55,
    lacunarity: 4.0,
    contrast: 1.4,
    bias: 0.0,
    colorBlendPower: 1.25,
  },
  colors: {
    primary: "#5D4037", // Warm brown replacing the deep indigo
    secondary: "#8B5E3C", // Richer brown replacing royal purple
    tertiary: "#00CED1", // Magical accent remains unchanged
  },
};
