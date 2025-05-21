/**
 * @constant anthraciteConfig
 * @name anthraciteConfig
 * @description Configuration for anthracite - a high-grade metamorphic coal.
 * @notes
 * - Colors: Jet-black base with subtle graphite undertones.
 * - Noise: Dense, layered structure with metallic sheen.
 * - Metalness: Elevated to mimic carbon crystallization.
 */
export const anthraciteConfig: StoneConfig = {
  name: "anthracite",
  colors: {
    main: "#090909",
    secondary: "#252525",
    tertiary: "#8C8C8C",
    quaternary: "#131313",
  },
  noise: {
    octaves: 6,
    persistence: 0.7,
    scale: 1.5,
    roughness: 0.55,
    lacunarity: 1.0,
    displacement: 0.1,
    contrast: 0.8,
    warp: 0.15,
    metalnessRange: [180, 240],
    roughnessRange: [40, 80],
    stratification: {
      strength: 0.05,
      layerFrequency: 5,
      layerWarp: 0.2,
    },
  },
};
