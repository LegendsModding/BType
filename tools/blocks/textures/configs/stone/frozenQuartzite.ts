export const frozenQuartziteConfig: StoneConfig = {
  name: "frozen_quartzite",
  colors: {
    main: "#e0ffff", // Azure (primary, light cyan base)
    secondary: "#f0ffff", // Light cyan (a soft frosty hue)
    tertiary: "#87ceeb", // Sky blue (subtle highlights)
    quaternary: "#4682b4", // Steel blue (accent veins)
  },
  noise: {
    octaves: 5,
    persistence: 0.6,
    scale: 1.5,
    roughness: 0.4,
    lacunarity: 3.0,
    displacement: 0.2, // Small displacement, maintaining the smooth texture
    frequencyMod: 1.2,
    gradientStrength: 0.25,
    edgeSharpness: 0.8,
    bias: 0,
    contrast: 1.2, // Balanced contrast for smooth icy appearance
    warp: 0.1,
    ridge: false,
    colorBlendPower: 1.0, // Soft blending for icy hues
    roughnessRange: [32, 64], // Glacial polish with minor variations
    metalnessRange: [16, 32], // Light, icy sheen but not overly reflective

    crystalline: {
      density: 5, // High density of fine crystalline features
      size: 0.3, // Small crystal size (subtle texture)
      sharpness: 7, // Well-defined, sharp edges of quartz
    },

    stratification: {
      strength: 0.2, // Very subtle stratification
      layerFrequency: 4, // Light banding, almost invisible
      layerWarp: 0.1, // Minor distortions in layers
    },
  },
};
