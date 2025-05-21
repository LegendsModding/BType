/**
 * Cursed Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // A dark, ominous soil with sinister tones.
 */
export const cursedSoilConfig: SoilTextureConfig = {
  name: "cursed",
  noise: {
    scale: 0.2,
    octaves: 5,
    persistence: 1.2,
    lacunarity: 4.0,
    contrast: 1.1,
    bias: 0.0,
    colorBlendPower: 1.2,
  },
  colors: {
    primary: "#2F2F2F", // Void black
    secondary: "#1C1C1C", // Ashen gray
    tertiary: "#2E8B57", // Deep violet
  },
};
