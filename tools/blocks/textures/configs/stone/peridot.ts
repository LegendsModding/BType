/**
 * Peridot: A bright, olive-green gemstone with vivid color and a polished, faceted appearance.
 * @constant peridotConfig
 */
export const peridotConfig: StoneConfig = {
  name: "peridot",
  colors: {
    main: "#A3C644", // Bright olive-green
    secondary: "#8EBF26", // Vibrant lime green accent
    tertiary: "#6AA121", // Deep green for contrast
    quaternary: "#4D7A2F", // Dark forest green accent
  },
  noise: {
    octaves: 4, // Reduced octaves for a smooth, polished surface.
    persistence: 0.95, // Balanced influence of detail across frequencies.
    scale: 1.5, // Moderate scale to highlight fine crystal facets.
    roughness: 0.8, // Low roughness to mimic the glassy, clear nature of citrine.
    lacunarity: 2.0, // Moderate frequency variation for natural internal texture.
    displacement: 0.15, // Minimal displacement to maintain a refined surface.
    frequencyMod: 0.8, // Slight modulation for organic, subtle irregularities.
    gradientStrength: 0.1, // Enhanced gradients to produce smooth, reflective transitions.
    edgeSharpness: 0.6, // High edge definition to accentuate crystal facets.
    bias: 0.15, // Slight bias to brighten the overall texture.
    contrast: 1.0, // Increased contrast to emphasize facet detail.
    warp: 0.05, // Minimal warp preserves the integrity of the gem’s polish.
    ridge: true, // Enables facet-like ridges for a refined crystalline effect.
    colorBlendPower: 2.5, // Smooth blending between the chosen hues.
    roughnessRange: [40, 80], // Tight range to ensure a consistent, polished appearance.
    metalnessRange: [20, 50], // Elevated luster mimicking the vitreous quality of quartz.
    crystalline: {
      density: 4, // High density for abundant internal facet detail.
      size: 0.3, // Fine crystal size for intricate texture.
      sharpness: 9, // Very sharp facets for a brilliant, reflective finish.
    },
    stratification: {
      strength: 0.13, // Extremely subtle layering—just enough to add depth.
      layerFrequency: 1.3, // Minimal layering to keep the gem surface uniform.
      layerWarp: 0.5, // Almost imperceptible distortion for natural variation.
    },
    layers: [
      {
        octaves: 3,
        persistence: 0.6,
        scale: 1.2,
        roughness: 0.45,
        weight: 0.7,
      },
      {
        octaves: 2,
        persistence: 0.5,
        scale: 1.0,
        roughness: 0.5,
        weight: 0.3,
      },
    ],
  },
};
