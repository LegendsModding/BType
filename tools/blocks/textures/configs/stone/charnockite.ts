/**
 * Charnockite: An igneous rock with a metamorphic history, exhibiting warm, pinkish–brown tones and a uniform grain.
 * @constant charnockiteConfig
 * @name charnockiteConfig
 * @description Enhanced configuration for generating a realistic charnockite texture.
 * The revised settings emphasize a uniform, granitic grain with subtle crystal accents typical of charnockite.
 * @notes
 * - Colors: Warm, burnt pinkish-brown base with gentle creamy and deep red–brown accents.
 * - Noise: Reduced octaves and lacunarity to achieve a uniform texture, with very modest displacement/warp.
 * - Crystalline: Low to moderate density to simulate sparse feldspar megacrysts.
 * - No stratification or foliation to preserve the rock’s uniformly granular appearance.
 * @example
 * // Usage in texture generation:
 * generateStoneTexture(charnockiteConfig);
 */
export const charnockiteConfig: StoneConfig = {
  name: "charnockite",
  colors: {
    main: "#B76E61", // Warm, burnt pinkish–brown base hue.
    secondary: "#D9B3A7", // Light, creamy pink to add subtle variation.
    tertiary: "#A25347", // Deep red–brown accent for grain definition.
    quaternary: "#C99B94", // Dusty rose highlight for mineral details.
  },
  noise: {
    octaves: 4, // Fewer octaves for a uniform, coarse-grained look.
    persistence: 0.6, // Balanced contribution across octaves.
    scale: 3.0, // Moderate scale for a visible but not overly complex grain.
    roughness: 0.4, // Soft texture reflecting uniform igneous grain.
    lacunarity: 2.5, // Lower lacunarity for reduced frequency variation.
    displacement: 0.2, // Minimal displacement to keep the texture consistent.
    frequencyMod: 1.0, // Neutral modulation.
    gradientStrength: 0.3, // Gentle gradient transitions.
    edgeSharpness: 0.5, // Moderately soft edges.
    bias: 0, // No extra bias.
    contrast: 0.9, // Slightly subdued contrast for a natural look.
    warp: 0.1, // Minimal warp to preserve uniformity.
    ridge: false, // No ridge emphasis.
    colorBlendPower: 1.0, // Smooth blending of hues.
    roughnessRange: [40, 80], // Tight range for consistent granularity.
    metalnessRange: [8, 16], // Low metallic sheen reflecting feldspar crystals.
    crystalline: {
      density: 3, // Sparse crystal density.
      size: 0.6, // Modest crystal size.
      sharpness: 4, // Soft crystalline edges.
    },
    // No stratification or foliation, keeping the texture uniformly granular.
  },
};
