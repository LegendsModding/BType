/**
 * Slag Soil Texture Configuration.
 * @constant
 * @type {SoilTextureConfig}
 * @example
 * // Designed for dark, metallic-tinged slag soils.
 */
export const slagSoilConfig: SoilTextureConfig = {
  name: "slag",
  noise: {
    scale: 4.2,
    octaves: 5,
    persistence: 0.45,
    lacunarity: 4.0,
    contrast: 1.3,
    bias: 0.15,
    colorBlendPower: 0.85,
  },
  colors: {
    primary: "#1A1A1A", // Charcoal base
    secondary: "#333333", // Graphite midtone
    tertiary: "#5C3D2E", // Smoldering ember
  },
};
