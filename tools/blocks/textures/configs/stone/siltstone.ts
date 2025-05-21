/** */
export const siltstoneConfig: StoneConfig = {
  name: "siltstone",
  colors: {
    main: "#D2B48C", // Light tan
    secondary: "#CD853F", // Wheat-like beige
    tertiary: "#D2B48C", // Tan, matching base tone
    quaternary: "#F5DEB3", // Peru for subtle variations
  },
  noise: {
    octaves: 4,
    persistence: 0.75,
    scale: 2.3,
    roughness: 0.65, // Smooth, fine-grain texture
    lacunarity: 2.0,
    colorBlendPower: 0.2,
    edgeSharpness: 0.7,
    contrast: 0.8,
    stratification: {
      strength: 0.15,
      layerFrequency: 3, // Noticeable stratification
      layerWarp: 0.1,
    },
    roughnessRange: [128, 192], // Fine-grained texture
    metalnessRange: [0, 8], // Non-metallic
  },
};
