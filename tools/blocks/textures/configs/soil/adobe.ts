/**
 * Adobe Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Sun-baked, reddish adobe soil.
 */
export const adobeSoilConfig: SoilTextureConfig = {
  name: "adobe",
  noise: {
    scale: 2.4,
    octaves: 7,
    persistence: 0.7,
    lacunarity: 4.0,
    contrast: 1.05,
    bias: 0.03,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#8B4513",
    secondary: "#A0522D",
    tertiary: "#CD853F",
  },
};
