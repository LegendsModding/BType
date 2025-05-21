/**
 * @constant brecciaVolcanicConfig
 * @name brecciaVolcanicConfig
 * @description Configuration for volcanic breccia - fragmented volcanic rock.
 * @notes
 * - Colors: Dark matrix with contrasting angular clasts.
 * - Noise: High roughness and layered fragments.
 */
export const brecciaVolcanicConfig: StoneConfig = {
  name: "breccia_volcanic",
  colors: {
    main: "#3A3A3A", // Basaltic matrix
    secondary: "#7A7A7A", // Andesite fragments
    tertiary: "#5A5A5A", // Scoria inclusions
    quaternary: "#9A9A9A", // Ash-filled voids
  },
  noise: {
    octaves: 6,
    persistence: 0.9,
    scale: 1.2,
    roughness: 1.4,
    lacunarity: 3.0,
    displacement: 0.3,
    contrast: 0.6,
    warp: 0.4,
    edgeSharpness: 1.5,
    frequencyMod: 1.2,
    roughnessRange: [160, 220],
    metalnessRange: [0, 10],
    layers: [
      {
        octaves: 4,
        persistence: 0.7,
        scale: 0.8,
        roughness: 1.2,
        weight: 0.6,
      },
      {
        octaves: 3,
        persistence: 0.5,
        scale: 1.5,
        roughness: 1.3,
        weight: 0.4,
      },
    ],
  },
};
