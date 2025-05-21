/**
 * @constant huntstoneConfig
 * @name huntstoneConfig
 * @description Configuration for huntstone - fossilized bone conglomerate.
 * @notes
 * - Colors: Bleached white with brown organic remnants.
 * - Noise: Porous texture with embedded bone fragments.
 */
export const huntstoneConfig: StoneConfig = {
  name: "huntstone",
  colors: {
    main: "#E3D8C6", // Beige
    secondary: "#9A7F66", // Peach
    tertiary: "#6C5A4E", // Tan
    quaternary: "#B0A8A0", // Burnt sienna,
  },
  noise: {
    octaves: 7,
    persistence: 0.9,
    scale: 1.0,
    roughness: 0.9,
    lacunarity: 3.0,
    displacement: 0.2,
    contrast: 0.8,
    warp: 0.4,
    roughnessRange: [100, 160],
    metalnessRange: [0, 10],
  },
};
