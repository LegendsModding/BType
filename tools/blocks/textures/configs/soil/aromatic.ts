/**
 * @name aromaticSoilConfig
 * @description Soil texture configuration for Aromatic Soil, crafted to support the subtle, herbaceous nature of Lemon Grass.
 * @notes Exhibits a refined, organic loam with muted warm browns and hints of ochre—ideal for well-drained, slightly acidic environments.
 * @see SoilTextureConfig
 * @example
 * // Use aromaticSoilConfig in biomes where Lemon Grass thrives.
 */
export const aromaticSoilConfig: SoilTextureConfig = {
  name: "aromatic",
  noise: {
    scale: 2.2,
    octaves: 4,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: 0.05,
    colorBlendPower: 0.95,
  },
  colors: {
    primary: "#4A3B2F", // Dark earthy olive-brown
    secondary: "#6D5847", // Warm, subdued brown
    tertiary: "#8F7A60", // Muted ochre accent
  },
};
