/**
 * @constant flintConfig
 * @name flintConfig
 * @description Configuration for flint - a hard sedimentary quartz.
 * @notes
 * - Colors: Deep black with glassy texture.
 * - Noise: Dense and smooth with conchoidal fractures.
 */
export const flintConfig: StoneConfig = {
  name: "flint",
  colors: {
    main: "#2D2B29", // Absolute black base
    secondary: "#535355", // Slightly metallic dark
    tertiary: "#72685F", // Depth accent
    quaternary: "#9A9286", // Cool highlight
  },
  noise: {
    octaves: 6,
    persistence: 0.5,
    scale: 1.5,
    roughness: 0.8,
    lacunarity: 2.0,
    displacement: 0.4,
    contrast: 0.4,
    warp: 0.1,
    metalnessRange: [180, 240], // Glass-like sheen
    roughnessRange: [20, 60],
  },
};
