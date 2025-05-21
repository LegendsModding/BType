/**
 * @constant brecciaConfig
 * @name brecciaConfig
 * @description Configuration for breccia - a fragmented sedimentary rock.
 * @notes
 * - Colors: Mixed angular fragments in contrasting tones.
 * - Noise: Chaotic pattern with sharp edges.
 */
export const brecciaConfig: StoneConfig = {
  name: "breccia",
  colors: {
    main: "#5E5C58", // Gray limestone fragments
    secondary: "#8C5A44", // Sandstone pieces
    tertiary: "#C7BBA5", // Iron oxide cement
    quaternary: "#3F3B36", // Quartz inclusions
  },
  noise: {
    octaves: 8,
    persistence: 1.5,
    scale: 1.2,
    roughness: 2.1,
    lacunarity: 1.8,
    displacement: 0.25,
    contrast: 0.9,
    warp: 0.3,
    edgeSharpness: 1.8,
    roughnessRange: [160, 220],
    metalnessRange: [0, 10],
    layers: [
      {
        octaves: 5,
        persistence: 1.3,
        scale: 0.8,
        roughness: 0.9,
        weight: 0.8,
      },
      {
        octaves: 4,
        persistence: 1.0,
        scale: 1.5,
        roughness: 0.8,
        weight: 0.2,
      },
    ],
  },
};
