/**
 * Humus Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Rich, dark soil enriched with decomposing organic matter.
 */
export const humusSoilConfig: SoilTextureConfig = {
  name: "humus",
  noise: {
    scale: 0.6,
    octaves: 6,
    persistence: 0.65,
    lacunarity: 2.0,
    contrast: 1.15,
    bias: -0.15,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#4E3B2F", // Organic black
    secondary: "#5D4537", // Decomposed matter
    tertiary: "#6B503F", // Fermented brown
  },
};
