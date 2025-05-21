/**
 * @constant olivineConfig
 * @name olivineConfig
 * @description Configuration for olivine - a magnesium iron silicate mineral with a glassy luster.
 * @notes
 * - Colors: Rich olive-green base with subtle yellow undertones and darker accents.
 * - Noise: Smooth texture with sharp edges to mimic crystalline structure and gem-like clarity.
 */
export const olivineConfig: StoneConfig = {
  name: "olivine",
  colors: {
    main: "#6B8E23", // Vibrant olive-green base
    secondary: "#8FBC8F", // Yellow-green highlight
    tertiary: "#556B2F", // Dark green shadow
    quaternary: "#9ACD32", // Pale green shimmer,
  },
  noise: {
    octaves: 13,
    persistence: 0.8,
    scale: 1.5,
    roughness: 1.5,
    lacunarity: 16.0,
    displacement: 0.1,
    frequencyMod: 0.4,
    edgeSharpness: 0.9,
    contrast: 0.55,
    warp: 0.1,
    ridge: true,
    colorBlendPower: 1.4,
    roughnessRange: [30, 70],
    metalnessRange: [64, 96],
    stratification: {
      strength: 0.05,
      layerFrequency: 6,
      layerWarp: 0.2,
    },
  },
};
