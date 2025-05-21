/**
 * @constant jasperRedConfig
 * @name jasperRedConfig
 * @description Configuration for red jasper - a microcrystalline quartz with vibrant red bands.
 * @notes
 * - Colors: Deep blood-red base with earthy undertones and subtle banding.
 * - Noise: Layered structure with smooth transitions between red hues.
 */
export const jasperRedConfig: StoneConfig = {
  name: "jasper_red",
  colors: {
    main: "#9B3D3D", // Rich crimson base
    secondary: "#D57D3C", // Lighter indian red
    tertiary: "#7E4B32", // Dark burgundy for depth
    quaternary: "#6A1C1C", // Rust undertones for natural variation
  },
  noise: {
    octaves: 6,
    persistence: 0.7,
    scale: 1.5,
    roughness: 0.55,
    lacunarity: 3.0,
    displacement: 0.1,
    contrast: 1.5,
    warp: 0.3,
    stratification: {
      strength: 0.55,
      layerFrequency: 4,
      layerWarp: 0.9,
    },
    roughnessRange: [60, 100],
    metalnessRange: [20, 40],
    crystalline: {
      density: 3, // Fine quartz crystallization
      size: 0.3,
      sharpness: 6,
    },
  },
};
