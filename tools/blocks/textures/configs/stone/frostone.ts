/**
 * @constant frostoneConfig
 * @name frostoneConfig
 * @description Configuration for frostone - fictional icy volcanic stone.
 * @notes
 * - Colors: Glacial blue with volcanic ash.
 * - Noise: Frost patterns over vesicular texture.
 */
export const frostoneConfig: StoneConfig = {
  name: "frostone",
  colors: {
    main: "#A2DDD6", // Ice blue base
    secondary: "#5A7374", // Frosted highlights
    tertiary: "#A1D0DD", // Volcanic inclusions
    quaternary: "#52706C", // Ash streaks
  },
  noise: {
    octaves: 5,
    persistence: 0.3,
    scale: 3.0,
    roughness: 1.8,
    lacunarity: 7.5,
    displacement: 0.5,
    contrast: 0.6,
    edgeSharpness: 1.1,
    warp: 0.3,
    frequencyMod: 0.3,
    metalnessRange: [20, 40],
    roughnessRange: [100, 160],
    layers: [
      {
        octaves: 7,
        persistence: 0.6,
        scale: 1.2,
        roughness: 0.45,
        weight: 0.1,
      },
      {
        octaves: 11,
        persistence: 0.4,
        scale: 1.0,
        roughness: 2.5,
        weight: 0.4,
      },
      {
        octaves: 5,
        persistence: 2.2,
        scale: 2.0,
        roughness: 3.0,
        weight: 0.5,
      },
    ],
  },
};
