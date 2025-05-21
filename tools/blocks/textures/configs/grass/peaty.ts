/**
 * Peaty Grass Texture Configuration.
 * @constant
 * @type {GrassTextureConfig}
 * @example
 * // Grass that grows in dark, peaty environments.
 */
export const peatyGrassConfig: GrassTextureConfig = {
  name: "peaty",
  noise: {
    scale: 4.2,
    octaves: 4,
    persistence: 0.55,
    lacunarity: 2.0,
    displacement: 0.07,
    contrast: 0.7,
    bias: 0.05,
    colorBlendPower: 0.8,
  },
  colors: {
    primary: "#3D3D20",
    secondary: "#556B2F",
    tertiary: "#6B8E23",
  },
  sideTexture: {
    minHeight: 3,
    maxHeight: 6,
    bandFrequency: 1.0,
    pixelNoiseFrequency: 1.0,
  },
};
