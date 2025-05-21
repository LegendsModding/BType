/** */
export const sapphireConfig: StoneConfig = {
  name: "sapphire",
  colors: {
    main: "#0F52BA", // Classic sapphire blue
    secondary: "#A3D1FF", // Darker blue for depth
    tertiary: "#1D3C6D", // Deep navy for rich tones
    quaternary: "#2D5A9A", // Crystal reflections
  },
  noise: {
    octaves: 8, // Adequate detail for a schistose texture.
    persistence: 0.3, // Balanced detail propagation.
    scale: 4.0, // Scale tuned for fine-grained metamorphic texture.
    roughness: 0.6, // Moderate roughness for a naturally weathered surface.
    lacunarity: 2.0, // Standard frequency scaling.
    displacement: 0.2, // Slight displacement to mimic subtle surface irregularities.
    frequencyMod: 1.1, // Mild modulation for organic variation.
    gradientStrength: 0.35, // Soft gradients for smooth transitions.
    edgeSharpness: 0.95, // Moderately defined edges.
    bias: 0.05, // Neutral bias.
    contrast: 1.2, // Natural, balanced contrast.
    warp: 0.25, // Minimal warp for slight irregularity.
    ridge: false, // No pronounced ridges.
    colorBlendPower: 1.0, // Even blending of tones.
    roughnessRange: [80, 140], // Range tuned for a natural metamorphic surface.
    metalnessRange: [0, 8], // Non-metallic look typical of chlorite rocks.
    stratification: {
      strength: 0.05, // Subtle layering to suggest natural foliation.
      layerFrequency: 2.0, // Few layers per tile for gentle banding.
      layerWarp: 0.25, // Minimal distortion for organic variation.
    },
  },
};
