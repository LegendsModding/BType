/**
 * Alpine Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass from high, cool mountain regions.
 */
export const alpineGrassConfig: GrassTextureConfig = {
  name: "alpine",
  noise: {
    scale: 2.2,
    octaves: 8,
    persistence: 0.85,
    lacunarity: 4.0,
    displacement: 0.04,
    contrast: 0.9,
    bias: 0.07,
    colorBlendPower: 0.85,
  },
  colors: {
    primary: "#3D7D3D", // Mountain green base
    secondary: "#66CD66", // Lawn green
    tertiary: "#C1FFC1", // Soft mint highlight
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
