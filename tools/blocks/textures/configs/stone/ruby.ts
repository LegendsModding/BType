/**
 * @constant rubyConfig
 * @name rubyConfig
 * @description Configuration for ruby - a gemstone variety of corundum with rich red hues.
 * @notes
 * - Colors: Deep crimson base with subtle pink undertones and reflective highlights.
 * - Noise: Smooth surface with sharp edges to mimic polished facets.
 */
export const rubyConfig: StoneConfig = {
  name: "ruby",
  colors: {
    main: "#9B111E", // Rich, deep red base
    secondary: "#C72C41", // Vibrant pinkish-red highlight
    tertiary: "#E03C5F", // Dark red shadow for depth
    quaternary: "#F57B85", // Soft pink glow for reflective areas
  },
  noise: {
    octaves: 11,
    persistence: 2.5,
    scale: 4.0,
    roughness: 0.5,
    lacunarity: 2.0,
    contrast: 1.0,
    colorBlendPower: 2.0,
    warp: 0.1,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
    stratification: {
      strength: 0.03,
      layerFrequency: 5,
      layerWarp: 0.1,
    },
  },
};
