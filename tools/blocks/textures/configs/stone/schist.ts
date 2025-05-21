/**
 * Schist: Medium-grade metamorphic rock with strong foliation
 * @constant schistConfig
 */
export const schistConfig: StoneConfig = {
  name: "schist",
  colors: {
    main: "#6B5D5D", // Base gray
    secondary: "#8C7B7B", // Foliation planes
    tertiary: "#544A4A", // Mineral banding
    quaternary: "#A89887", // Mica sheen
  },
  noise: {
    octaves: 7,
    persistence: 0.7,
    scale: 2.0,
    roughness: 0.7,
    lacunarity: 2.5,
    foliation: {
      angle: 80,
      frequency: 3,
      contrast: 1.3,
    },
    displacement: 0.2,
    contrast: 1.5,
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
