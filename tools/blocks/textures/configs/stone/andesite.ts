/**
 * @constant andesiteConfig
 * @name andesiteConfig
 * @description Configuration for generating an andesite texture.
 * Andesite is a fine-grained volcanic rock with a dark gray to gray-green color.
 * This config emphasizes medium-grained texture with subtle mineral variation.
 * @notes
 * - Colors: Dark gray-green base with muted olive and slate accents.
 * - Noise: Moderate roughness and octaves for volcanic texture.
 * - Crystalline: Sparse phenocrysts to mimic natural mineral inclusions.
 */
export const andesiteConfig: StoneConfig = {
  name: "andesite",
  colors: {
    main: "#4A4E4D", // Dark slate-gray base
    secondary: "#5C6B5A", // Muted olive-green for mineral variation
    tertiary: "#3A3F3E", // Deep charcoal accent
    quaternary: "#7A8B78", // Soft sage highlight
  },
  noise: {
    octaves: 5,
    persistence: 0.85,
    scale: 1.2,
    roughness: 0.6,
    lacunarity: 2.0,
    displacement: 0.15,
    contrast: 1.1,
    frequencyMod: 1.2,
    warp: 0.1,
    roughnessRange: [120, 180],
    metalnessRange: [10, 30],
    layers: [
      {
        octaves: 7,
        persistence: 0.7,
        scale: 1.0,
        roughness: 0.6,
        weight: 0.8,
      },
    ],
  },
};
