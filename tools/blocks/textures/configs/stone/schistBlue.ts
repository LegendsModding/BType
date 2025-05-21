/**
 * Blue Schist: High-pressure metamorphic rock with glaucophane
 * @constant schistBlueConfig
 */
export const schistBlueConfig: StoneConfig = {
  name: "schist_blue",
  colors: {
    main: "#4A647B", // Glaucophane blue
    secondary: "#6B8CA3", // Weathered surfaces
    tertiary: "#2D3C4A", // Mineral banding
    quaternary: "#8CA8B8", // Quartz veins
  },
  noise: {
    octaves: 7,
    persistence: 0.75,
    scale: 2.0,
    roughness: 0.75,
    lacunarity: 2.5,
    foliation: {
      angle: 15,
      frequency: 3,
      contrast: 1.3,
    },
    displacement: 0.2,
    contrast: 1.7,
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
