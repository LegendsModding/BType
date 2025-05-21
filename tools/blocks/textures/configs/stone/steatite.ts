/**
 * Steatite: Massive talc rock variant
 * @constant steatiteConfig
 */
export const steatiteConfig: StoneConfig = {
  name: "steatite",
  colors: {
    main: "#B8B8A3", // Warm talc gray
    secondary: "#D4D4C7", // Weathered surfaces
    tertiary: "#96967D", // Vein networks
    quaternary: "#E8E8DC", // Pure talc areas
  },
  noise: {
    octaves: 7,
    persistence: 0.65,
    scale: 1.5,
    roughness: 0.45,
    lacunarity: 2.0,
    displacement: 0.25,
    contrast: 0.85,
    warp: 0.7,
    colorBlendPower: 1.2,
    frequencyMod: 0.1,
    roughnessRange: [32, 64],
    metalnessRange: [16, 32],
    layers: [
      {
        octaves: 6,
        persistence: 0.55,
        scale: 1.2,
        roughness: 0.55,
        weight: 0.8,
      },
    ],
  },
};
