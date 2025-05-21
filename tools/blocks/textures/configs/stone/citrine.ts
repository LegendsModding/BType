/**
 * @constant citrineConfig
 * @name citrineConfig
 * @description Enhanced configuration for generating a realistic citrine texture.
 *
 * This configuration captures the warm, golden clarity of citrine—a quartz variant known for its
 * brilliant golden hues and glassy, vitreous luster. The color palette has been chosen to reflect
 * a range from soft pastel golds to deep amber accents, while the noise parameters simulate a
 * smooth, polished gemstone surface with finely defined crystalline facets.
 * @notes
 * - Colors: A refined blend of light golden and amber tones to mimic natural citrine.
 * - Noise: Lower octaves, gentle roughness, and high edge sharpness yield a smooth, gem-like finish.
 * - Crystalline: High density and sharpness produce well-defined internal facets.
 * - Stratification & Layers: Very subtle variations add natural, almost imperceptible internal depth.
 * @example
 * // Usage in texture generation:
 * generateStoneTexture(citrineConfig);
 */
export const citrineConfig: StoneConfig = {
  name: "citrine",
  colors: {
    main: "#F7DC6F", // A soft, bright golden yellow base.
    secondary: "#F4D03F", // A vivid golden tone enhancing the gem’s brilliance.
    tertiary: "#F1C40F", // Classic citrine yellow with rich, warm amber hints.
    quaternary: "#E67E22", // Burnt orange accent for depth and contrast.
  },
  noise: {
    octaves: 6, // Reduced octaves for a smooth, polished surface.
    persistence: 0.6, // Balanced influence of detail across frequencies.
    scale: 2.0, // Moderate scale to highlight fine crystal facets.
    roughness: 0.7, // Low roughness to mimic the glassy, clear nature of citrine.
    lacunarity: 2.0, // Moderate frequency variation for natural internal texture.
    displacement: 0.1, // Minimal displacement to maintain a refined surface.
    frequencyMod: 0.5, // Slight modulation for organic, subtle irregularities.
    edgeSharpness: 0.85, // High edge definition to accentuate crystal facets.
    bias: 0.0, // Slight bias to brighten the overall texture.
    contrast: 0.6, // Increased contrast to emphasize facet detail.
    warp: 0.1, // Minimal warp preserves the integrity of the gem’s polish.
    ridge: true, // Enables facet-like ridges for a refined crystalline effect.
    colorBlendPower: 1.2, // Smooth blending between the chosen hues.
    roughnessRange: [5, 72], // Tight range to ensure a consistent, polished appearance.
    metalnessRange: [40, 80], // Elevated luster mimicking the vitreous quality of quartz.
    stratification: {
      strength: 0.1, // Extremely subtle layering—just enough to add depth.
      layerFrequency: 2, // Minimal layering to keep the gem surface uniform.
      layerWarp: 0.05, // Almost imperceptible distortion for natural variation.
    },
    layers: [
      {
        octaves: 3,
        persistence: 0.6,
        scale: 1.2,
        roughness: 0.25,
        weight: 0.7,
      },
      {
        octaves: 2,
        persistence: 0.5,
        scale: 1.0,
        roughness: 0.3,
        weight: 0.3,
      },
    ],
  },
};
