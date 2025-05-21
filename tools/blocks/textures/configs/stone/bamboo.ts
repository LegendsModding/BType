export const bambooConfig: StoneConfig = {
  name: "bamboo",
  colors: {
    main: "#5a7f5a", // Muted green
    secondary: "#7f9e7f", // Soft light green
    tertiary: "#3d5d3d", // Dark forest green
    quaternary: "#8fbf8f", // Pale mint accent,
  },
  noise: {
    octaves: 4,
    persistence: 0.6,
    scale: 1.5,
    roughness: 0.7,
    lacunarity: 2.5,
    foliation: {
      angle: 30,
      frequency: 8,
      contrast: 1.2,
    },
    roughnessRange: [96, 160], // Layered texture
    metalnessRange: [0, 8], // Non-metallic
  },
};
