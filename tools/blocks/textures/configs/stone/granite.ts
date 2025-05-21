/**
 * Granite:
 * A coarse-grained igneous rock composed primarily of quartz, feldspar, and mica.
 * It features a speckled appearance with a light, almost porcelain-like background and dark mineral inclusions.
 * @constant graniteConfig
 * @name graniteConfig
 * @description Configuration for generating a realistic granite texture.
 * @notes
 * - Colors: A light, speckled base with subtle pinkish-beige tones and dark gray mineral inclusions.
 * - Noise: Configured for a coarse, granular texture with natural mineral variation and subtle stratification.
 */
export const graniteConfig: StoneConfig = {
  name: "granite",
  colors: {
    main: "#EAE0D6", // Light beige with a slight pinkish hue.
    secondary: "#F7F4ED", // Near white background.
    tertiary: "#A59A8A", // Medium gray for dark mineral crystals.
    quaternary: "#7E7A76", // Darker gray accent for contrast.
  },
  noise: {
    octaves: 7,
    persistence: 0.45,
    scale: 1.5,
    roughness: 0.85,
    lacunarity: 2.0,
    displacement: 0.15,
    frequencyMod: 1.4,
    gradientStrength: 0.05,
    edgeSharpness: 0.7,
    bias: 0,
    contrast: 0.5,
    warp: 0.0,
    ridge: false,
    colorBlendPower: 0.6,
    roughnessRange: [100, 180],
    metalnessRange: [0, 10],
    layers: [
      {
        octaves: 4,
        persistence: 0.65,
        scale: 1.4,
        roughness: 0.7,
        weight: 0.7,
      },
      {
        octaves: 3,
        persistence: 0.55,
        scale: 1.2,
        roughness: 0.8,
        weight: 0.3,
      },
    ],
  },
};
