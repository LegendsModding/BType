/**
 * @name calicheSoilConfig
 * @description Soil texture configuration for Caliche Soil, representing hardened desert crusts formed by cemented sand and silt.
 * @notes Ideal for arid regions where evaporation cements sediments into a dark, compact layer.
 * @see SoilTextureConfig
 * @example
 * // Use calicheSoilConfig in desert biomes featuring hard, weathered crusts.
 */
export const calicheSoilConfig: SoilTextureConfig = {
  name: "caliche",
  noise: {
    scale: 3.2,
    octaves: 4,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 1.3,
    bias: 0.08,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#4C3F35", // Dark, cemented brown
    secondary: "#66544A", // Muted, earthy taupe
    tertiary: "#7F6A5C", // Soft, weathered accent
  },
};
