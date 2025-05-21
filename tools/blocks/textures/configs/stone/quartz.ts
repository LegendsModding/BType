/** */
export const quartzConfig: StoneConfig = {
  name: "quartz",
  colors: {
    main: "#F4F4F4", // Slightly off-white to represent clear quartz
    secondary: "#E6E6E6", // Light gray for soft transitions
    tertiary: "#D3D3D3", // More muted gray for depth
    quaternary: "#B4B4B4", // Smoky quartz accents
  },
  noise: {
    octaves: 6,
    persistence: 0.65,
    scale: 1.0,
    roughness: 0.75,
    lacunarity: 2.5,
    displacement: 0.15,
    frequencyMod: 1.2,
    gradientStrength: 0.1,
    edgeSharpness: 0.9,
    bias: 0.0,
    contrast: 0.9,
    warp: 0.15,
    ridge: false,
    colorBlendPower: 0.8,
    roughnessRange: [60, 120],
    metalnessRange: [8, 16],
  },
};
