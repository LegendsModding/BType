/**
 * @constant garnetConfig
 * @name garnetConfig
 * @description Configuration for garnet - a silicate mineral known for its deep red tones.
 * @notes
 * - Colors: Rich burgundy with hints of brown and black accents.
 * - Noise: Moderate roughness with layered texture for natural variation.
 */
export const garnetConfig: StoneConfig = {
  name: "garnet",
  colors: {
    main: "#5C0D0C", // Deep burgundy base
    secondary: "#7A1C1A", // Brownish-red highlight
    tertiary: "#983232", // Near-black shadow
    quaternary: "#B34949", // Lighter red for reflective areas
  },
  noise: {
    octaves: 11,
    persistence: 2.0,
    scale: 4.0,
    roughness: 1.0,
    lacunarity: 2.0,
    contrast: 1.3,
    warp: 0.4,
    displacement: 0.2,
    frequencyMod: 0.5,
    edgeSharpness: 1.8,
    bias: 0.0,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [40, 80],
    metalnessRange: [32, 64],
  },
};
