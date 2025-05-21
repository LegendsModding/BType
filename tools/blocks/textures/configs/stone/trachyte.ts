/**
 * @constant trachyteConfig
 * @name trachyteConfig
 * @description Configuration for trachyte - fine-grained volcanic rock.
 * @notes
 * - Colors: Light gray with greenish tinge from alkali feldspar.
 * - Noise: Smooth texture with subtle flow bands.
 */
export const trachyteConfig: StoneConfig = {
  name: "trachyte",
  colors: {
    main: "#B8A58B", // Pale gray base
    secondary: "#6A7F4E", // Soft green-gray
    tertiary: "#82786D", // Muted sage
    quaternary: "#4A493F", // Darker green bands
  },
  noise: {
    octaves: 7,
    persistence: 0.6,
    scale: 1.0,
    roughness: 0.2,
    lacunarity: 5.4,
    displacement: 0.1,
    contrast: 0.7,
    warp: 0.05,
    frequencyMod: 0.85,
    stratification: {
      strength: 0.05,
      layerFrequency: 4,
      layerWarp: 0.3,
    },
    roughnessRange: [60, 100],
    metalnessRange: [20, 40],
  },
};
