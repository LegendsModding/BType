/**
 * Biotite Schist: Schist rich in black mica
 * @constant schistBiotiteConfig
 */
export const schistBiotiteConfig: StoneConfig = {
  name: "schist_biotite",
  colors: {
    main: "#3C3C3C", // Dark base
    secondary: "#AA8A58", // Weathered surfaces
    tertiary: "#8C847B", // Biotite clusters
    quaternary: "#1E1E1E", // Quartz veins
  },
  noise: {
    octaves: 2,
    persistence: 0.9,
    scale: 2.0,
    roughness: 0.4,
    lacunarity: 2.5,
    foliation: {
      angle: 100,
      frequency: 3,
      contrast: 1.3,
    },
    displacement: 0.2,
    contrast: 1.9,
    roughnessRange: [80, 160],
    metalnessRange: [32, 64],
    layers: [
      {
        octaves: 5,
        persistence: 0.75,
        scale: 1.4,
        roughness: 0.65,
        weight: 0.7,
      },
    ],
  },
};
