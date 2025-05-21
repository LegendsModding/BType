/**
 * Muscovite Schist: Silver-white mica-rich schist
 * @constant schistMuscoviteConfig
 */
export const schistMuscoviteConfig: StoneConfig = {
  name: "schist_muscovite",
  colors: {
    main: "#D4D4D4", // Muscovite silver
    secondary: "#B8B8B8", // Weathered mica
    tertiary: "#F0F0F0", // Fresh cleavage
    quaternary: "#969696", // Quartz matrix
  },
  noise: {
    octaves: 7,
    persistence: 0.5,
    scale: 2.0,
    roughness: 0.6,
    lacunarity: 2.5,
    foliation: {
      angle: 150,
      frequency: 3.0,
      contrast: 1.4,
    },
    displacement: 0.15,
    contrast: 1.3,
    roughnessRange: [80, 160],
    metalnessRange: [32, 64],
    layers: [
      {
        octaves: 6,
        persistence: 0.75,
        scale: 1.4,
        roughness: 0.75,
        weight: 0.7,
      },
    ],
  },
};
