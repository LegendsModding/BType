/**
 * Mud Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // For rich, earthy mud soils.
 */
export const mudSoilConfig: SoilTextureConfig = {
  name: "mud",
  noise: {
    scale: 0.2,
    octaves: 8,
    persistence: 0.85,
    lacunarity: 4.0,
    contrast: 1.0,
    bias: 0.3,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#150F0A", // Dark mud
    secondary: "#6B4E3D", // Wet clay
    tertiary: "#705546", // Dried mud crack
  },
};
