/**
 * Peaty Mudstone Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // A muddy blend with peaty characteristics.
 */
export const peatyMudstoneSoilConfig: SoilTextureConfig = {
  name: "peaty_mudstone",
  noise: {
    scale: 2.8,
    octaves: 7,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 0.8,
    bias: 0.0,
    colorBlendPower: 1.1,
  },
  colors: {
    primary: "#2D2D2D", // Dark mudstone
    secondary: "#4E3D2E", // Burnt umber
    tertiary: "#6F4E37", // Russet highlight
  },
};
