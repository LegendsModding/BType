/**
 * @name fenSoilConfig
 * @description Soil texture configuration for Fen Soil, inspired by the murky, organic, and partially decomposed substrates of fen environments.
 * @notes Characterized by dark, decayed organic tones with subtle olive accents. Perfectly paired with Fen Grass.
 * @see SoilTextureConfig
 * @example
 * // Use fenSoilConfig in low-lying, water-logged fen ecosystems.
 */
export const fenSoilConfig: SoilTextureConfig = {
  name: "fen",
  noise: {
    scale: 2.5,
    octaves: 4,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: 0.05,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#3B2F2A", // Dark organic brown
    secondary: "#5B473C", // Decayed, earthy tone
    tertiary: "#7A6650", // Muted olive accent
  },
};
