/** */
export const phylliteConfig: StoneConfig = {
  name: "phyllite",
  colors: {
    main: "#A3A3A3", // Silvery gray with a slight hint of brown, reflecting its fine-grained nature
    secondary: "#D1D1D1", // Light silver, representing the sheen of mica
    tertiary: "#7D7D7D", // Medium slate gray for deeper shadows
    quaternary: "#A8A8A8", // Subtle metallic sheen accent
  },
  noise: {
    octaves: 7,
    persistence: 0.65,
    scale: 1.0,
    roughness: 0.75,
    lacunarity: 2.0,
    displacement: 0.7,
    frequencyMod: 1.8,
    gradientStrength: 0.6,
    edgeSharpness: 1.0,
    bias: 0,
    contrast: 1.0,
    warp: 0.2,
    ridge: true,
    colorBlendPower: 1.5,
    roughnessRange: [192, 255], // Extreme volcanic roughness
    metalnessRange: [0, 16], // Molten rock appearance
    layers: [
      {
        octaves: 6,
        persistence: 0.65,
        scale: 1.0,
        roughness: 0.75,
        weight: 0.6,
      },
      {
        octaves: 4,
        persistence: 0.5,
        scale: 0.9,
        roughness: 0.95,
        weight: 0.4,
      },
    ],
  },
};
