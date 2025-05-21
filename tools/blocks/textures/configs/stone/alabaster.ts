/** */
export const alabasterConfig: StoneConfig = {
  name: "alabaster",
  colors: {
    main: "#EDEAE0", // Pure white
    secondary: "#F6F4EE", // Ghost white
    tertiary: "#D8D2C4", // Snow
    quaternary: "#C2B8A8", // Light gray,
  },
  noise: {
    octaves: 8,
    persistence: 0.8,
    scale: 8.0,
    roughness: 0.4,
    lacunarity: 1.0,
    contrast: 0.3,
    warp: 0.2,
    colorBlendPower: 4.0,
    displacement: 0.9,
    roughnessRange: [32, 64], // Soft texture
    metalnessRange: [16, 32], // Translucent luster
    bias: 0.05,
    gradientStrength: 0.1,
    edgeSharpness: 0.3,
    stratification: {
      strength: 0.5,
      layerFrequency: 2,
      layerWarp: 0.3,
    },
  },
};
