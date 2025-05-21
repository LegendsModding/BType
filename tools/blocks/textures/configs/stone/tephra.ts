/**
 * @constant tephraConfig
 * @name tephraConfig
 * @description Configuration for tephra - pyroclastic fragments.
 * @notes
 * - Colors: Mixed volcanic debris.
 * - Noise: Chaotic pattern with angular fragments.
 */
export const tephraConfig: StoneConfig = {
  name: "tephra",
  colors: {
    main: "#595959", // Ash base
    secondary: "#8E8E8E", // Lapilli
    tertiary: "#B3B3B3", // Bombs
    quaternary: "#D8D8D8", // Pumice chunks
  },
  noise: {
    octaves: 9,
    persistence: 0.3,
    scale: 1.0,
    roughness: 1.3,
    lacunarity: 4.5,
    displacement: 0.6,
    contrast: 0.8,
    warp: 0.4,
    colorBlendPower: 2.5,
    edgeSharpness: 1.6,
    roughnessRange: [160, 220],
    metalnessRange: [0, 10],
  },
};
