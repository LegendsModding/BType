export const frostMarbleConfig: StoneConfig = {
  name: "frost_marble",
  colors: {
    main: "#f2f6fc", // Ghost white (primary marble base)
    secondary: "#dce4f2", // Lavender (soft undertones)
    tertiary: "#a3cde8", // Powder blue (subtle cold hue)
    quaternary: "#c2c8d3", // Light gray (adds variation to veins)
  },
  noise: {
    octaves: 6,
    persistence: 0.4,
    scale: 1.5,
    roughness: 0.3,
    lacunarity: 2.0,
    displacement: 0.05,
    frequencyMod: 0.2,
    gradientStrength: 0.0,
    edgeSharpness: 2.0,
    bias: 0,
    contrast: 0.5,
    warp: 0.3,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [64, 128], // Smooth surface but retains subtle imperfections
    metalnessRange: [16, 32], // Slight reflectivity due to polished finish
    layers: [
      { octaves: 6, persistence: 0.8, scale: 2.0, roughness: 0.7, weight: 0.9 }, // Primary marble texture
      { octaves: 4, persistence: 0.4, scale: 1.0, roughness: 0.6, weight: 0.3 }, // Minor variation
      { octaves: 2, persistence: 0.4, scale: 1.0, roughness: 0.4, weight: 0.5 },
    ],
  },
};
