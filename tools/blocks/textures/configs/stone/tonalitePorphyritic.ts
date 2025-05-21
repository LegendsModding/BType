/**
 * @constant tonalitePorphyriticConfig
 * @name tonalitePorphyriticConfig
 * @description Configuration for porphyritic tonalite - a granitic rock with phenocrysts.
 * @notes
 * - Colors: Light gray with dark biotite phenocrysts.
 * - Noise: Layered structure showing crystal inclusions.
 */
export const tonalitePorphyriticConfig: StoneConfig = {
  name: "tonalite_porphyritic",
  colors: {
    main: "#2C2C2C", // Light gray matrix
    secondary: "#F8E8DC", // Dark biotite phenocrysts
    tertiary: "#B4B4B4", // Quartz veins
    quaternary: "#E0E0E0", // Feldspar transition
  },
  noise: {
    octaves: 6,
    persistence: 0.9,
    scale: 1.0,
    roughness: 0.3,
    lacunarity: 3.2,
    displacement: 0.2,
    contrast: 0.6,
    frequencyMod: 1.1,
    warp: 0.1,
    roughnessRange: [90, 150],
    metalnessRange: [10, 30],
    layers: [
      {
        octaves: 4,
        persistence: 0.7,
        scale: 0.6,
        roughness: 0.7,
        weight: 0.7,
      },
    ],
  },
};
