/**
 * @constant pyroclastConfig
 * @name pyroclastConfig
 * @description Configuration for pyroclastic rock - volcanic fragment aggregate.
 * @notes
 * - Colors: Mixed dark and light volcanic debris.
 * - Noise: Chaotic texture with angular fragments.
 */
export const pyroclastConfig: StoneConfig = {
  name: "pyroclast",
  colors: {
    main: "#3E3E3E", // Basaltic fragments
    secondary: "#7F4F2F", // Pumice inclusions
    tertiary: "#A0522D", // Scoria pieces
    quaternary: "#C0A080", // Ash matrix
  },
  noise: {
    octaves: 8,
    persistence: 0.9,
    scale: 0.8,
    roughness: 0.95,
    lacunarity: 3.2,
    displacement: 0.6,
    contrast: 0.4,
    frequencyMod: 0.4,
    warp: 0.6,
    edgeSharpness: 1.9,
    roughnessRange: [180, 240],
    metalnessRange: [0, 10],
  },
};
