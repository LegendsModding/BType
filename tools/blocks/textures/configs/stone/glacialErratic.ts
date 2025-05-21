/**
 * @constant glacialErraticConfig
 * @name glacialErraticConfig
 * @description Configuration for glacial erratic - mixed sedimentary rock with angular fragments.
 * @notes
 * - Colors: Varied tones from glacial transport including granite and sandstone fragments.
 * - Noise: Chaotic pattern with sharp edges and heterogeneous texture.
 */
export const glacialErraticConfig: StoneConfig = {
  name: "glacial_erratic",
  colors: {
    main: "#B8C6C4 ", // Slate-gray matrix
    secondary: "#A2B7BC", // Sandstone inclusion
    tertiary: "#F0F4F4", // Basalt fragment
    quaternary: "#708090", // Iron oxide streak,
  },
  noise: {
    octaves: 8,
    persistence: 0.9,
    scale: 1.2,
    roughness: 0.5,
    lacunarity: 6.0,
    displacement: 0.35,
    contrast: 1.1,
    warp: 1.4,
    edgeSharpness: 1.5,
    roughnessRange: [160, 220],
    metalnessRange: [0, 10],
    layers: [
      {
        octaves: 4,
        persistence: 0.7,
        scale: 0.8,
        roughness: 1.45,
        weight: 0.6,
      },
      {
        octaves: 3,
        persistence: 0.5,
        scale: 1.5,
        roughness: 0.7,
        weight: 0.4,
      },
    ],
  },
};
