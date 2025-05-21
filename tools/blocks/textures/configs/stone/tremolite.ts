/**
 * Tremolite: Calcium-magnesium silicate mineral rock
 * @constant tremoliteConfig
 */
export const tremoliteConfig: StoneConfig = {
  name: "tremolite",
  colors: {
    main: "#A3B89E", // Fibrous green
    secondary: "#C7D4C2", // Weathered surfaces
    tertiary: "#D9E8D4", // Crystal clusters
    quaternary: "#7D8C75", // Fibrous sheen
  },
  noise: {
    octaves: 8,
    persistence: 0.5,
    scale: 3.0,
    roughness: 0.9,
    lacunarity: 2.2,
    displacement: 0.1,
    warp: 0.55,
    contrast: 0.9,
    roughnessRange: [64, 128],
    metalnessRange: [24, 48],
    layers: [
      {
        octaves: 10,
        persistence: 0.5,
        scale: 1.8,
        roughness: 0.55,
        weight: 0.75,
      },
    ],
  },
};
