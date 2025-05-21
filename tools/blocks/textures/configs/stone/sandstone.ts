/** */
export const sandstoneConfig: StoneConfig = {
  name: "sandstone",
  colors: {
    main: "#D2B48C", // Classic tan for the core sandstone
    secondary: "#F0E1C2", // Light beige, mimicking the lighter sand
    tertiary: "#B88A61", // Deeper brownish accent to simulate graininess
    quaternary: "#C9A88D", // Subtle gold accents to represent mineral inclusions
  },
  noise: {
    octaves: 4, // More depth in the noise
    persistence: 0.7,
    scale: 1.5,
    roughness: 0.5, // Granular texture
    lacunarity: 2.3,
    displacement: 0.1,
    frequencyMod: 0.9,
    gradientStrength: 0.4,
    edgeSharpness: 0.3,
    contrast: 0.8,
    warp: 0.0,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [128, 192], // Visible grain texture
    metalnessRange: [0, 16], // Low reflectivity
    stratification: {
      strength: 0.8,
      layerFrequency: 2.5, // More visible layers for the strata
      layerWarp: 0.15,
    },
    layers: [
      { octaves: 4, persistence: 0.7, scale: 1.2, roughness: 0.5, weight: 0.8 },
    ],
  },
};
