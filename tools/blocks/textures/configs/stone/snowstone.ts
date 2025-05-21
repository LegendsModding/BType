/** */
export const snowstoneConfig: StoneConfig = {
  name: "snowstone",
  colors: {
    main: "#F8FDFF", // Arctic white with blue undertone
    secondary: "#E3F2FD", // Frosted ice blue
    tertiary: "#CFE9FF", // Glacial melt blue
    quaternary: "#B3D9FF", // Deep frost accent
  },
  noise: {
    octaves: 6,
    persistence: 0.75,
    scale: 3.2,
    roughness: 0.45,
    lacunarity: 2.4,
    displacement: 0.15,
    frequencyMod: 1.2,
    gradientStrength: 0.15,
    edgeSharpness: 0.6,
    contrast: 0.6,
    warp: 0.15,
    stratification: {
      strength: 0.3,
      layerFrequency: 4,
      layerWarp: 0.25,
    },
    roughnessRange: [24, 48],
    metalnessRange: [12, 32],
    layers: [
      { octaves: 4, persistence: 0.6, scale: 1.8, roughness: 0.3, weight: 0.7 },
    ],
  },
};
