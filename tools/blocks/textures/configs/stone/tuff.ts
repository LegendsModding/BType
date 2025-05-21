/** */
export const tuffConfig: StoneConfig = {
  name: "tuff",
  colors: {
    main: "#6D6552", // Volcanic ash gray
    secondary: "#8B8378", // Weathered stone
    tertiary: "#A9A091", // Light ash
    quaternary: "#544C41", // Basalt black
  },
  noise: {
    octaves: 5,
    persistence: 0.75,
    scale: 0.9,
    roughness: 0.85,
    lacunarity: 2.8,
    displacement: 0.4,
    frequencyMod: 1.4,
    contrast: 0.5,
    stratification: {
      strength: 0.1,
      layerFrequency: 5,
      layerWarp: 0.2,
    },
    roughnessRange: [144, 224],
    metalnessRange: [0, 12],
    layers: [
      {
        octaves: 3,
        persistence: 0.7,
        scale: 0.7,
        roughness: 0.8,
        weight: 0.65,
      },
    ],
  },
};
