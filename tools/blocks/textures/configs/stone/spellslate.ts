/** */
export const spellSlateConfig: StoneConfig = {
  name: "spell_slate",
  colors: {
    main: "#3A2E4F", // Mystic night purple
    secondary: "#6A5B8E", // Amethyst shimmer
    tertiary: "#927FBF", // Enchanted lavender
    quaternary: "#483D6B", // Shadow violet
  },
  noise: {
    octaves: 6, // Adequate detail for a schistose texture.
    persistence: 0.5, // Balanced detail propagation.
    scale: 4.0, // Scale tuned for fine-grained metamorphic texture.
    roughness: 0.5, // Moderate roughness for a naturally weathered surface.
    lacunarity: 2.0, // Standard frequency scaling.
    displacement: 0.2, // Slight displacement to mimic subtle surface irregularities.
    frequencyMod: 1.3, // Mild modulation for organic variation.
    gradientStrength: 0.5, // Soft gradients for smooth transitions.
    edgeSharpness: 0.9, // Moderately defined edges.
    bias: 0.05, // Neutral bias.
    contrast: 0.6, // Natural, balanced contrast.
    warp: 0.15, // Minimal warp for slight irregularity.
    ridge: false, // No pronounced ridges.
    colorBlendPower: 0.7, // Even blending of tones.
    roughnessRange: [80, 140], // Range tuned for a natural metamorphic surface.
    metalnessRange: [0, 8], // Non-metallic look typical of chlorite rocks.
    stratification: {
      strength: 0.1, // Subtle layering to suggest natural foliation.
      layerFrequency: 2.5, // Few layers per tile for gentle banding.
      layerWarp: 0.4, // Minimal distortion for organic variation.
    },
  },
};
