/** */
export const vitrophyreConfig: StoneConfig = {
  name: "vitrophyre",
  colors: {
    main: "#2C3539", // Obsidian black
    secondary: "#454B4E", // Volcanic glass
    tertiary: "#5F6769", // Smoked quartz
    quaternary: "#1A1E20", // Pitch black
  },
  noise: {
    octaves: 6,
    persistence: 0.65,
    scale: 0.8,
    roughness: 1.25,
    lacunarity: 2.2,
    displacement: 0.3,
    frequencyMod: 1.2,
    edgeSharpness: 0.9,
    contrast: 1.4,
    warp: 0.1,
    roughnessRange: [160, 255],
    metalnessRange: [8, 96],
    layers: [
      {
        octaves: 3,
        persistence: 0.85,
        scale: 2.0,
        roughness: 0.7,
        weight: 0.8,
      },
    ],
  },
};
