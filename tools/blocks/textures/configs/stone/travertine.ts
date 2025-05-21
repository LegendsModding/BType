/** */
export const travertineConfig: StoneConfig = {
  name: "travertine",
  colors: {
    main: "#F5E6D3", // Warm ivory
    secondary: "#E8D5B5", // Aged parchment
    tertiary: "#D4C0A1", // Weathered stone
    quaternary: "#BDA58E", // Earthy accent
  },
  noise: {
    octaves: 4, // More depth in the noise
    persistence: 0.6,
    scale: 1.5,
    roughness: 0.2, // Granular texture
    lacunarity: 2.3,
    displacement: 0.15,
    frequencyMod: 0.3,
    gradientStrength: 0.25,
    edgeSharpness: 0.5,
    contrast: 0.9,
    warp: 0.3,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [128, 192], // Visible grain texture
    metalnessRange: [0, 16], // Low reflectivity
    stratification: {
      strength: 0.5,
      layerFrequency: 2.8, // More visible layers for the strata
      layerWarp: 0.1,
    },
    layers: [
      { octaves: 4, persistence: 0.7, scale: 1.2, roughness: 0.3, weight: 0.8 },
    ],
  },
};
