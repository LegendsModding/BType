/**
 * @constant granuliteConfig
 * @name granuliteConfig
 * @description Configuration for generating a realistic granulite texture.
 *
 * Granulite is a high-grade metamorphic rock dominated by granular feldspar and quartz,
 * with minor mafic minerals. The revised color palette reflects soft pinkish–beige feldspar
 * tones balanced by muted dark mineral inclusions, while the noise parameters simulate a
 * coarse, granular metamorphic texture with subtle stratification.
 * @example
 * generateStoneTexture(granuliteConfig);
 */
export const granuliteConfig: StoneConfig = {
  name: "granulite",
  colors: {
    main: "#D8B4A6", // Soft, pinkish-feldspar tone.
    secondary: "#7D7F84", // Muted gray representing mafic mineral grains.
    tertiary: "#B4AFA5", // Subtle quartz tone with light beige-gray hues.
    quaternary: "#C9A798", // Warm accent for minor mineral details.
  },
  noise: {
    octaves: 6,
    persistence: 0.65,
    scale: 1.6,
    roughness: 0.8,
    lacunarity: 3.0,
    displacement: 0.2,
    frequencyMod: 1.1,
    gradientStrength: 0.35,
    edgeSharpness: 0.85,
    bias: 0.05,
    contrast: 1.2,
    warp: 0.1,
    ridge: false,
    colorBlendPower: 1.1,
    roughnessRange: [120, 180],
    metalnessRange: [0, 16],
    crystalline: {
      density: 5,
      size: 0.35,
      sharpness: 5,
    },
    stratification: {
      strength: 0.3,
      layerFrequency: 2,
      layerWarp: 0.2,
    },
    layers: [
      {
        octaves: 4,
        persistence: 0.6,
        scale: 1.4,
        roughness: 0.75,
        weight: 0.7,
      },
    ],
  },
};
