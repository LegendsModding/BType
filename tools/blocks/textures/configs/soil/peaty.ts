/**
 * Peaty Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // For dark, organic, nearly black soils.
 */
export const peatySoilConfig: SoilTextureConfig = {
  name: "peaty",
  noise: {
    scale: 2.6,
    octaves: 7,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 0.8,
    bias: 0.0,
    colorBlendPower: 1.1,
  },
  colors: {
    primary: "#2D2D2D", // Pitch black peat
    secondary: "#4E3D2E", // Midnight brown
    tertiary: "#6B6B6B", // Aged oak
  },
};
