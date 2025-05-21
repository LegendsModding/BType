/**
 * Spore Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Fungal, spore-infused soil with mysterious purples.
 */
export const sporeSoilConfig: SoilTextureConfig = {
  name: "spore",
  noise: {
    scale: 2.6,
    octaves: 7,
    persistence: 0.6,
    lacunarity: 2.4,
    contrast: 1.3,
    bias: 0.0,
    colorBlendPower: 1.15,
  },
  colors: {
    primary: "#4E3D3D", // Deep purple
    secondary: "#554E4E", // Violet spore
    tertiary: "#9370DB", // Lilac highlight
  },
};
