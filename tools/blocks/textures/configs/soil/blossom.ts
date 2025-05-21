/**
 * @name blossomSoilConfig
 * @description Soil texture configuration for Blossom Soil with cherry blossom-inspired accents.
 * @notes The tertiary color has been updated to a more vibrant cherry blossom pink (#FFB7C5) to clearly reflect the delicate pink of cherry blossoms.
 * @see SoilTextureConfig
 * @example
 * // Use blossomSoilConfig in the soil texture system.
 */
export const blossomSoilConfig: SoilTextureConfig = {
  name: "blossom",
  noise: {
    scale: 2.2,
    octaves: 6,
    persistence: 0.4,
    lacunarity: 2.0,
    contrast: 1.1,
    bias: 0,
    colorBlendPower: 1.05,
  },
  colors: {
    primary: "#6B4E37", // Original warm brown remains
    secondary: "#A0522D", // Original secondary tone remains
    tertiary: "#FFB7C5", // Updated to a vibrant cherry blossom pink
  },
};
