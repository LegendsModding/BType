/**
 * @constant dolomiteConfig
 * @name dolomiteConfig
 * @description Configuration for dolomite - a carbonate rock with magnesium.
 * @notes
 * - Colors: Pinkish-gray with crystalline texture.
 * - Noise: Smooth with rhombohedral crystal patterns.
 */
export const dolomiteConfig: StoneConfig = {
  name: "dolomite",
  colors: {
    main: "#C8A99B", // Golden-pink base
    secondary: "#B8A487", // Peach tones
    tertiary: "#A67D6E", // Pale pink matrix
    quaternary: "#9C938A", // Creamy veins
  },
  noise: {
    octaves: 5,
    persistence: 1.3,
    scale: 2.0,
    roughness: 0.7,
    lacunarity: 3.0,
    displacement: 0.2,
    contrast: 0.65,
    warp: 0.1,
    roughnessRange: [60, 100],
    metalnessRange: [20, 40],
  },
};
