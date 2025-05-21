/**
 * @constant pahoehoeConfig
 * @name pahoehoeConfig
 * @description Configuration for pahoehoe - smooth basaltic lava.
 * @notes
 * - Colors: Dark gray with ropy texture.
 * - Noise: Smooth gradients with subtle flow lines.
 */
export const pahoehoeConfig: StoneConfig = {
  name: "pahoehoe",
  colors: {
    main: "#2A2A2A", // Fresh basalt
    secondary: "#4B4B4B", // Oxidized surface
    tertiary: "#433837", // Cooler undertones
    quaternary: "#2C3133", // Depth shadows
  },
  noise: {
    octaves: 4, // Reduced octaves for a smooth, polished surface.
    persistence: 0.95, // Balanced influence of detail across frequencies.
    scale: 1.5, // Moderate scale to highlight fine crystal facets.
    roughness: 0.8, // Low roughness to mimic the glassy, clear nature of citrine.
    lacunarity: 2.0, // Moderate frequency variation for natural internal texture.
    displacement: 0.15, // Minimal displacement to maintain a refined surface.
    frequencyMod: 1.7, // Slight modulation for organic, subtle irregularities.
    edgeSharpness: 0.65, // High edge definition to accentuate crystal facets.
    bias: 0.02, // Slight bias to brighten the overall texture.
    contrast: 1.4, // Increased contrast to emphasize facet detail.
    warp: 0.15, // Minimal warp preserves the integrity of the gem’s polish.
    ridge: true, // Enables facet-like ridges for a refined crystalline effect.
    colorBlendPower: 2.5, // Smooth blending between the chosen hues.
    roughnessRange: [40, 80], // Tight range to ensure a consistent, polished appearance.
    metalnessRange: [20, 50], // Elevated luster mimicking the vitreous quality of quartz.
    crystalline: {
      density: 5, // High density for abundant internal facet detail.
      size: 0.2, // Fine crystal size for intricate texture.
      sharpness: 9, // Very sharp facets for a brilliant, reflective finish.
    },
    stratification: {
      strength: 0.03, // Extremely subtle layering—just enough to add depth.
      layerFrequency: 1.5, // Minimal layering to keep the gem surface uniform.
      layerWarp: 0.5, // Almost imperceptible distortion for natural variation.
    },
    layers: [
      {
        octaves: 5,
        persistence: 0.6,
        scale: 1.2,
        roughness: 0.45,
        weight: 0.7,
      },
      {
        octaves: 3,
        persistence: 0.7,
        scale: 1.0,
        roughness: 0.7,
        weight: 0.3,
      },
    ],
  },
};
