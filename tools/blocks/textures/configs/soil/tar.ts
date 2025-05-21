/**
 * @name tarSoilConfig
 * @description Soil texture configuration for Tar Soil, a viscous, oil-infused earth with a dense, matte finish.
 * @notes Designed to simulate soil enriched with natural bitumen deposits, exuding an oily sheen.
 * @see SoilTextureConfig
 * @example
 * // Utilize tarSoilConfig in biomes with natural asphalt or tar pits.
 */
export const tarSoilConfig: SoilTextureConfig = {
  name: "tar",
  noise: {
    scale: 0.4,
    octaves: 4,
    persistence: 0.9,
    lacunarity: 3.5,
    contrast: 1.2,
    bias: 0.2,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#2E2B27", // Deep, oily brown
    secondary: "#4A423B", // Dark taupe
    tertiary: "#6A5F57", // Muted clay
  },
};
