/**
 * Adobe Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Earthy grass growing in adobe soil regions.
 */
export const adobeGrassConfig: GrassTextureConfig = {
  name: "adobe",
  noise: {
    scale: 2.4,
    octaves: 7,
    persistence: 0.7,
    lacunarity: 2.4,
    displacement: 0.1,
    contrast: 0.5,
    bias: 0.06,
    colorBlendPower: 2.55,
  },
  colors: {
    primary: "#6B8E23", // Olive drab base
    secondary: "#8FBC8F", // Pale green
    tertiary: "#CD853F", // Adobe soil highlight
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
