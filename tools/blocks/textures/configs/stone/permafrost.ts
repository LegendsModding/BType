/**
 * Permafrost: A frozen, icy rock with cool, crystalline hues and a slightly fractured, frost-covered texture.
 * @constant permafrostConfig
 */
export const permafrostConfig: StoneConfig = {
  name: "permafrost",
  colors: {
    main: "#B0C4DE", // Muted icy blue, less saturated for a more natural frozen earth feel
    secondary: "#A2B2BA", // Frosted gray-blue, softer and less metallic
    tertiary: "#6D7A80", // Desaturated cold gray, representing frozen sediment
    quaternary: "#3E5F7D", // Deep, dark steel blue for underlying permafrost layers
  },
  noise: {
    octaves: 5,
    persistence: 0.45,
    scale: 2.0,
    roughness: 0.25,
    lacunarity: 2.0,
    contrast: 0.8,
    stratification: {
      strength: 0.19,
      layerFrequency: 1.15,
      layerWarp: 0.28,
    },
    roughnessRange: [80, 140],
    metalnessRange: [0, 4], // Non-metallic, icy texture
  },
};
