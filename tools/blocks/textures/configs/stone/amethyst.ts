/**
 * @constant amethystConfig
 * @name amethystConfig
 * @description Configuration for amethyst - purple quartz variety.
 * @notes
 * - Colors: Deep purple with crystal facets.
 * - Noise: Gem-like clarity with sharp edges.
 */
export const amethystConfig: StoneConfig = {
  name: "amethyst",
  colors: {
    main: "#5D3A9B", // Rich purple
    secondary: "#8C6BB8", // Violet highlights
    tertiary: "#B39ACD", // Blue undertones
    quaternary: "#56358E", // Depth accents
  },
  noise: {
    octaves: 11,
    persistence: 2.0,
    scale: 4.0,
    roughness: 1.0,
    lacunarity: 2.0,
    contrast: 1.5,
    warp: 0.4,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
  },
};
