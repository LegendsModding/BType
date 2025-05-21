/**
 * @constant aquamarineConfig
 * @name aquamarineConfig
 * @description Enhanced configuration for generating an aquamarine gemstone texture.
 *
 * The configuration aims to capture the luminous, blue-green clarity of aquamarine. It uses
 * a refined color palette that reflects the gem’s transparency and vibrant hues along with
 * noise parameters that simulate a smooth, glass-like surface enriched with subtle crystalline
 * details.
 * @notes
 * - Colors: A bright, clear blue-green base with deeper accents and reflective highlights.
 * - Noise: Fewer octaves and lower roughness yield a polished, translucent appearance.
 * - Crystalline: Moderate density and sharpness simulate the internal facet boundaries.
 * - Stratification & Foliation: Very subtle to hint at natural gem internal structure without
 *   detracting from the overall clarity.
 * @example
 * // Usage in texture generation:
 * generateStoneTexture(aquamarineConfig);
 */
export const aquamarineConfig: StoneConfig = {
  name: "aquamarine",
  colors: {
    main: "#66D2D6", // Bright, clear blue-green representing the primary gem color.
    secondary: "#4EC1C4", // A slightly deeper turquoise for added depth.
    tertiary: "#29A6A9", // Rich blue-green accent to simulate internal facets.
    quaternary: "#1E8C8F", // Darker accent to enhance shadows and reflective contrast.
  },
  noise: {
    octaves: 5, // Fewer octaves for a smoother, polished gem surface.
    persistence: 0.55, // Balanced contribution from each octave.
    scale: 2.0, // Finer noise details for a refined appearance.
    roughness: 0.35, // Low roughness to emulate glass-like clarity.
    lacunarity: 2.0, // Moderate frequency scaling for natural variation.
    displacement: 0.01, // Minimal displacement to preserve surface smoothness.
    frequencyMod: 0.5, // Slight modulation for subtle irregularities.
    gradientStrength: 0.6, // Soft gradients for smooth transitions and reflective highlights.
    edgeSharpness: 0.5, // Enhanced definition to mimic the crisp edges of facets.
    bias: 0.1, // Slight bias to brighten the overall noise pattern.
    contrast: 1.2, // Mildly increased contrast to emphasize gem clarity.
    warp: 0.1, // Minimal warp to maintain the integrity of the polished surface.
    ridge: false, // No ridge effect to ensure a clean, transparent finish.
    colorBlendPower: 0.5, // Smooth blending between color transitions.
    roughnessRange: [24, 56], // Tight range for a refined, consistently smooth texture.
    metalnessRange: [24, 48], // Elevated metalness to mimic the reflective, glassy quality.
    crystalline: {
      density: 2, // Moderate crystal density for subtle internal structure.
      size: 0.3, // Small crystals to prevent over-texturing.
      sharpness: 8, // Well-defined crystal edges that simulate facet boundaries.
    },
    stratification: {
      strength: 0.3, // Very subtle layering for an internal gem structure.
      layerFrequency: 2, // Few layers to hint at natural banding.
      layerWarp: 0.4, // Minimal distortion for a clean, uniform look.
    },
    foliation: {
      angle: 120, // Slightly angled foliation to simulate light refraction.
      frequency: 1, // Sparse foliation bands for a balanced internal detail.
      contrast: 1.4, // Neutral contrast for understated variation.
    },
    layers: [
      {
        octaves: 4,
        persistence: 0.7,
        scale: 2.0,
        roughness: 0.25,
        weight: 0.6,
      },
      {
        octaves: 2,
        persistence: 0.45,
        scale: 1.5,
        roughness: 0.6,
        weight: 0.4,
      },
    ],
  },
};
