/**
 * @constant turquoiseConfig
 * @name turquoiseConfig
 * @description Configuration for turquoise - a phosphate mineral with vivid blue-green hues.
 * @notes
 * - Colors: Bright turquoise with subtle green undertones.
 * - Noise: Smooth texture with high reflectivity.
 */
export const turquoiseConfig: StoneConfig = {
  name: "turquoise",
  colors: {
    main: "#40E0D0", // Turquoise base
    secondary: "#00CED1", // Dark turquoise highlight
    tertiary: "#20B2AA", // Sea green shadow
    quaternary: "#008080", // Teal accent
  },
  noise: {
    octaves: 5,
    persistence: 0.6,
    scale: 1.5,
    roughness: 0.3,
    lacunarity: 2.0,
    displacement: 0.1,
    frequencyMod: 0.6,
    edgeSharpness: 0.9,
    contrast: 0.4,
    warp: 0.1,
    ridge: false,
    colorBlendPower: 1.2,
    roughnessRange: [20, 60],
    metalnessRange: [64, 96],
    stratification: {
      strength: 0.1,
      layerFrequency: 3,
      layerWarp: 0.3,
    },
  },
};
