/**
 * @constant jadeiteConfig
 * @name jadeiteConfig
 * @description Configuration for jadeite - a pyroxene mineral with vibrant green hues.
 * @notes
 * - Colors: Emerald green with subtle blue undertones.
 * - Noise: Smooth texture with high reflectivity.
 */
export const jadeiteConfig: StoneConfig = {
  name: "jadeite",
  colors: {
    main: "#50C878", // Vivid emerald green
    secondary: "#3CB371", // Medium sea green
    tertiary: "#2E8B57", // Sea green shadow
    quaternary: "#006400", // Dark green accent
  },
  noise: {
    octaves: 5,
    persistence: 0.4,
    scale: 1.5,
    roughness: 0.7,
    lacunarity: 4.0,
    frequencyMod: 0.5,
    edgeSharpness: 1.8,
    contrast: 0.4,
    warp: 0.1,
    ridge: false,
    colorBlendPower: 1.2,
    roughnessRange: [20, 60],
    metalnessRange: [64, 96],
  },
};
