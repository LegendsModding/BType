export const eclogiteConfig: StoneConfig = {
  name: "eclogite",
  colors: {
    main: "#2E5545", // Omphacite green (dominant)
    secondary: "#7F4E2F", // Garnet red (scattered inclusions)
    tertiary: "#8C8B59", // Amphibole (minor)
    quaternary: "#5A6E60", // Pyroxene highlights
  },
  noise: {
    octaves: 4,
    persistence: 0.8,
    scale: 2.0,
    roughness: 0.3,
    lacunarity: 2.0,
    displacement: 0.2,
    frequencyMod: 1.3,
    gradientStrength: 0.3,
    edgeSharpness: 0.8,
    bias: 0,
    contrast: 0.6,
    warp: 0.2,
    ridge: false,
    colorBlendPower: 1.2,
    roughnessRange: [96, 160], // Slightly uneven texture due to metamorphic compression
    metalnessRange: [8, 24], // Garnet and pyroxene reflectivity

    crystalline: {
      density: 5, // More crystalline structure than before
      size: 0.5, // Slightly larger due to distinct mineral grains
      sharpness: 8, // Well-defined crystal edges
    },

    stratification: {
      strength: 0.2, // Moderate layering due to high-pressure conditions
      layerFrequency: 4, // Slight banding from mineral alignment
      layerWarp: 0.3, // Minor distortions from metamorphic stress
    },

    layers: [
      { octaves: 4, persistence: 0.7, scale: 1.0, roughness: 0.6, weight: 0.7 },
      { octaves: 3, persistence: 0.3, scale: 1.5, roughness: 0.3, weight: 0.5 }, // Secondary depth
    ],
  },
};
