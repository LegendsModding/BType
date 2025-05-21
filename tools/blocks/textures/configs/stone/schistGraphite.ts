/**
 * Graphite Schist: Carbon-rich schist with metallic luster
 * @constant schistGraphiteConfig
 */
export const schistGraphiteConfig: StoneConfig = {
  name: "schist_graphite",
  colors: {
    main: "#2D2D2D", // Graphite black
    secondary: "#4A4A4A", // Weathered surfaces
    tertiary: "#666666", // Pure graphite
    quaternary: "#1A1A1A", // Quartz inclusions
  },
  noise: {
    octaves: 7,
    persistence: 0.5,
    scale: 2.0,
    roughness: 0.6,
    lacunarity: 2.5,
    foliation: {
      angle: 80,
      frequency: 3.4,
      contrast: 1.3,
    },
    displacement: 0.25,
    contrast: 1.7,
    roughnessRange: [80, 160],
    metalnessRange: [32, 64],
    layers: [
      {
        octaves: 5,
        persistence: 0.85,
        scale: 1.4,
        roughness: 0.75,
        weight: 0.7,
      },
    ],
  },
};
