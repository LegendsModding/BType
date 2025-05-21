/**
 * @name ferruginousSoilConfig
 * @description Soil texture configuration for Ferruginous Soil, enriched with natural iron oxides that give it a rusty, dark appearance.
 * @notes Suited for regions with high iron content, where natural oxidation produces distinctive rust hues.
 * @see SoilTextureConfig
 * @example
 * // Apply ferruginousSoilConfig in biomes with naturally occurring rust-colored soil.
 */
export const ferruginousSoilConfig: SoilTextureConfig = {
  name: "ferruginous",
  noise: {
    scale: 2.8,
    octaves: 5,
    persistence: 0.6,
    lacunarity: 2.0,
    contrast: 1.2,
    bias: 0.0,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#4A2E2A", // Deep rust brown
    secondary: "#6B3C36", // Warm, oxidized tone
    tertiary: "#8C524C", // Lighter rust accent
  },
};
