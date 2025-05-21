/**
 * Glacis Slate: Fictional ice-forged metamorphic rock
 * @constant slateGlacisConfig
 */
export const slateGlacisConfig: StoneConfig = {
  name: "slate_glacis",
  colors: {
    main: "#C2D4E8", // Glacial blue base
    secondary: "#E8F0F8", // Ice crystal planes
    tertiary: "#8CA3C2", // Pressure shadows
    quaternary: "#A3B8D4", // Mineral impurities
  },
  noise: {
    octaves: 6, // Adequate detail for a schistose texture.
    persistence: 0.6, // Balanced detail propagation.
    scale: 4.0, // Scale tuned for fine-grained metamorphic texture.
    roughness: 0.45, // Moderate roughness for a naturally weathered surface.
    lacunarity: 2.0, // Standard frequency scaling.
    displacement: 0.11, // Slight displacement to mimic subtle surface irregularities.
    frequencyMod: 1.2, // Mild modulation for organic variation.
    gradientStrength: 0.25, // Soft gradients for smooth transitions.
    edgeSharpness: 0.95, // Moderately defined edges.
    bias: 0.05, // Neutral bias.
    contrast: 1.15, // Natural, balanced contrast.
    warp: 0.3, // Minimal warp for slight irregularity.
    ridge: false, // No pronounced ridges.
    colorBlendPower: 0.85, // Even blending of tones.
    roughnessRange: [80, 140], // Range tuned for a natural metamorphic surface.
    metalnessRange: [0, 8], // Non-metallic look typical of chlorite rocks.
    stratification: {
      strength: 0.1, // Subtle layering to suggest natural foliation.
      layerFrequency: 2, // Few layers per tile for gentle banding.
      layerWarp: 0.2, // Minimal distortion for organic variation.
    },
  },
};
