/**
 * @constant felsiteConfig
 * @name felsiteConfig
 * @description Configuration for felsite - a fine-grained volcanic rock.
 * @notes
 * - Colors: Uniform light pink-gray with subtle flow bands.
 * - Noise: High-frequency pattern for fine-grained texture.
 */
export const felsiteConfig: StoneConfig = {
  name: "felsite",
  colors: {
    main: "#E0D6D0", // Pale pink-gray base
    secondary: "#F0E6E0", // Soft white highlight
    tertiary: "#C0B6B0", // Muted taupe
    quaternary: "#D0C6C0", // Gray-pink transition
  },
  noise: {
    octaves: 8,
    persistence: 0.7,
    scale: 0.8,
    roughness: 0.4,
    lacunarity: 3.0,
    displacement: 0.05,
    contrast: 0.9,
    warp: 0.15,
    roughnessRange: [60, 100],
    metalnessRange: [10, 30],
    stratification: {
      strength: 0.05,
      layerFrequency: 5,
      layerWarp: 0.2,
    },
  },
};
