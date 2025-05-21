/**
 * @constant lamprophyreConfig
 * @name lamprophyreConfig
 * @description Configuration for lamprophyre - a dark volcanic rock with phenocrysts.
 * @notes
 * - Colors: Jet-black matrix with contrasting light mineral spots.
 * - Noise: High contrast between dark base and bright phenocrysts.
 */
export const lamprophyreConfig: StoneConfig = {
  name: "lamprophyre",
  colors: {
    main: "#1A1A1A", // Pitch-black base
    secondary: "#5A5A5A", // Dark gray groundmass
    tertiary: "#E0E0E0", // White feldspar phenocrysts
    quaternary: "#3A3A3A", // Slightly lighter matrix
  },
  noise: {
    octaves: 9,
    persistence: 0.6,
    scale: 0.5,
    roughness: 0.9,
    lacunarity: 2.0,
    displacement: 0.1,
    contrast: 0.9,
    colorBlendPower: 0.8,
    warp: 0.1,
    roughnessRange: [100, 160],
    metalnessRange: [15, 35],
    layers: [
      {
        octaves: 2,
        persistence: 0.8,
        scale: 2.0,
        roughness: 0.95,
        weight: 0.6,
      },
    ],
  },
};
