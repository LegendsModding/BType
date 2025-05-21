/** */
export const sulphurConfig: StoneConfig = {
  name: "sulphur",
  colors: {
    main: "#FFD700", // Golden yellow
    secondary: "#FFEC8B", // Light sulfur
    tertiary: "#FFA500", // Amber depth
    quaternary: "#CD8500", // Burnt sulfur
  },
  noise: {
    octaves: 5,
    persistence: 0.85,
    scale: 1.5,
    roughness: 0.65,
    lacunarity: 2.7,
    displacement: 0.45,
    frequencyMod: 0.9,
    edgeSharpness: 0.75,
    contrast: 0.8,
    crystalline: {
      density: 10,
      size: 0.2,
      sharpness: 8,
    },
    stratification: {
      strength: 0.07,
      layerFrequency: 3.0,
      layerWarp: 0.2,
    },
    roughnessRange: [112, 208],
    metalnessRange: [32, 64],
  },
};
