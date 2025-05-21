/**
 * @constant coquinaConfig
 * @name coquinaConfig
 * @description Configuration for coquina - a shell fragment limestone.
 * @notes
 * - Colors: Creamy-white with tan shell fragments.
 * - Noise: Coarse texture with visible shell inclusions.
 */
export const coquinaConfig: StoneConfig = {
  name: "coquina",
  colors: {
    main: "#E8DED2", // Golden shell fragments
    secondary: "#C7A676", // Creamy matrix
    tertiary: "#D6B985", // Pale yellow accents
    quaternary: "#B59A7E", // Sandy cement
  },
  noise: {
    octaves: 4,
    persistence: 0.8,
    scale: 2.5,
    roughness: 0.85,
    lacunarity: 4.0,
    displacement: 0.3,
    contrast: 0.85,
    warp: 0.5,
    frequencyMod: 0.4,
    edgeSharpness: 2.4,
    roughnessRange: [140, 200],
    metalnessRange: [0, 10],
    layers: [
      {
        octaves: 4,
        persistence: 0.9,
        scale: 1.5,
        roughness: 0.8,
        weight: 0.1,
      },
      {
        octaves: 8,
        persistence: 0.5,
        scale: 1.5,
        roughness: 0.8,
        weight: 0.1,
      },
    ],
  },
};
