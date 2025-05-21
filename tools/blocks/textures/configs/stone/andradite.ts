/**
 * @constant andraditeConfig
 * @name andraditeConfig
 * @description Enhanced configuration for generating an andradite stone texture.
 * The configuration aims to capture the gem-like qualities of andradite (demantoid garnet)
 * with a rich, deep green base, vibrant mid-tones, luminous highlights, and a deep accent.
 * @notes
 * - The color palette emphasizes a gemstone green with natural variation and reflective facets.
 * - Noise parameters have been tuned for a polished, crystalline appearance with subtle
 *   stratification and foliation to mimic natural mineral banding.
 * - Crystalline properties are enhanced to simulate the fine structure of garnet crystals.
 * @example
 * // Usage example in texture generation:
 * generateStoneTexture(andraditeConfig);
 */
export const andraditeConfig: StoneConfig = {
  name: "andradite",
  colors: {
    main: "#1E3F28", // Deep forest green base, evoking a rich gemstone hue.
    secondary: "#2F6A41", // Vibrant medium green to add luster and depth.
    tertiary: "#A3D2A1", // Pale, luminous green for reflective, facet-like highlights.
    quaternary: "#163C2B", // Dark, near-black green accent for definition and foliation.
  },
  noise: {
    octaves: 5, // Provides moderate detail suitable for a polished gem surface.
    persistence: 0.6, // Balances the influence of each octave.
    scale: 1.0, // Base sampling scale for the noise function.
    roughness: 0.3, // Lower roughness for a smooth, polished appearance.
    lacunarity: 2.5, // Moderate frequency scaling for a natural crystalline feel.
    displacement: 0.1, // Minimal displacement to preserve a refined surface.
    frequencyMod: 1.3, // Subtle modulation to introduce natural variability.
    gradientStrength: 0.4, // Soft gradients for smooth transitions between noise layers.
    edgeSharpness: 0.6, // Well-defined edges to highlight crystal facets.
    bias: 0.1, // Slight bias to brighten overall noise contrast.
    contrast: 1.3, // Mildly increased contrast to emphasize gem-like reflections.
    warp: 0.05, // Minimal warp preserves the integrity of the crystalline structure.
    ridge: true, // Enables ridge-like features for enhanced facet definition.
    colorBlendPower: 1.2, // Improved blending of color transitions.
    roughnessRange: [16, 48], // Tighter range to simulate a smooth, polished gemstone.
    metalnessRange: [32, 64], // Elevated metalness to mimic the reflective quality of gem surfaces.
    crystalline: {
      density: 6, // Moderate crystal density to avoid visual clutter.
      size: 0.3, // Small crystal size for fine detail.
      sharpness: 8, // High sharpness for crisp, well-defined crystalline edges.
    },
    stratification: {
      strength: 0.05, // Very subtle layering for natural mineral stratification.
      layerFrequency: 4, // A few layers per tile to simulate gentle geological variation.
      layerWarp: 0.2, // Slight distortion in layers for a natural look.
    },
    //foliation: {
    //  angle: 45, // Foliation oriented at 45° for dynamic, natural banding.
    //  frequency: 4, // Four foliation bands per tile to add intricate detail.
    //  contrast: 1.0, // Neutral contrast for balanced foliation visibility.
    //},
    layers: [
      {
        octaves: 3,
        persistence: 0.55,
        scale: 1.5,
        roughness: 0.35, // Primary noise layer with moderate roughness for base structure.
        weight: 0.6, // Dominant contribution from this layer.
      },
      {
        octaves: 2,
        persistence: 0.4,
        scale: 0.8,
        roughness: 0.45, // Secondary layer adds finer, detailed variations.
        weight: 0.4, // Subtle influence to enrich the texture.
      },
    ],
  },
};
