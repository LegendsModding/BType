/**
 * @constant jetConfig
 * @name jetConfig
 * @description Configuration for jet - a type of lignite with high gloss.
 * @notes
 * - Colors: Deep black with mirror-like luster.
 * - Noise: Ultra-smooth texture with conchoidal fractures.
 */
export const jetConfig: StoneConfig = {
  name: "jet",
  colors: {
    main: "#121212", // Pure black
    secondary: "#353535", // Slightly metallic dark
    tertiary: "#201817", // Cool highlight
    quaternary: "#1F1F1F", // Depth accent,
  },
  noise: {
    octaves: 5,
    persistence: 0.6,
    scale: 2.0,
    roughness: 0.3,
    lacunarity: 2.4,
    displacement: -0.5,
    contrast: 0.9,
    colorBlendPower: 0.7,
    warp: 0.2,
    metalnessRange: [180, 240],
    roughnessRange: [20, 60],
  },
};
