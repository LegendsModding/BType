/**
 * Clay Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Heavy, reddish clay soil.
 */
export const claySoilConfig: SoilTextureConfig = {
  name: "clay",
  noise: {
    scale: 2.4,
    octaves: 2,
    persistence: 0.95,
    lacunarity: 4.0,
    contrast: 1.0,
    bias: 0.07,
    colorBlendPower: 0.9,
  },
  colors: {
    primary: "#7F5D47",
    secondary: "#A0522D",
    tertiary: "#CD853F",
  },
};
