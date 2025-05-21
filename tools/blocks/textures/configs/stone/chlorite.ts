/**
 * Chlorite: A metamorphic rock characterized by its muted, earthy greens and subtle foliated texture.
 * @constant chloriteConfig
 * @name chloriteConfig
 * @description Enhanced configuration for generating a realistic chlorite texture.
 * The revised settings capture the natural, schistose look of chlorite-bearing rocks with subdued, earthy greens,
 * avoiding an overly directional or “vertical bamboo” appearance.
 * @notes
 * - Colors: Deep, muted olive greens with soft mossy and pale olive accents.
 * - Noise: Balanced to provide a slightly rough surface with gentle stratification.
 * - Stratification: Included to simulate natural layering, but kept subtle.
 * - Foliation: Lower frequency and a more oblique angle to avoid exaggerated vertical banding.
 * @example
 * // Usage in texture generation:
 * generateStoneTexture(chloriteConfig);
 */
export const chloriteConfig: StoneConfig = {
  name: "chlorite",
  colors: {
    main: "#4A6C41", // Deep, muted olive green base.
    secondary: "#6B8C5A", // Soft mossy green for gentle variation.
    tertiary: "#3B5A36", // Dark green accent for depth.
    quaternary: "#8DA98D", // Subtle pale olive for reflective highlights.
  },
  noise: {
    octaves: 6, // Adequate detail for a schistose texture.
    persistence: 0.5, // Balanced detail propagation.
    scale: 4.0, // Scale tuned for fine-grained metamorphic texture.
    roughness: 0.3, // Moderate roughness for a naturally weathered surface.
    lacunarity: 2.0, // Standard frequency scaling.
    displacement: 0.2, // Slight displacement to mimic subtle surface irregularities.
    frequencyMod: 1.1, // Mild modulation for organic variation.
    gradientStrength: 0.3, // Soft gradients for smooth transitions.
    edgeSharpness: 0.9, // Moderately defined edges.
    bias: 0.05, // Neutral bias.
    contrast: 1.0, // Natural, balanced contrast.
    warp: 0.2, // Minimal warp for slight irregularity.
    ridge: false, // No pronounced ridges.
    colorBlendPower: 1.0, // Even blending of tones.
    roughnessRange: [80, 140], // Range tuned for a natural metamorphic surface.
    metalnessRange: [0, 8], // Non-metallic look typical of chlorite rocks.
    stratification: {
      strength: 0.1, // Subtle layering to suggest natural foliation.
      layerFrequency: 2, // Few layers per tile for gentle banding.
      layerWarp: 0.2, // Minimal distortion for organic variation.
    },
  },
};
