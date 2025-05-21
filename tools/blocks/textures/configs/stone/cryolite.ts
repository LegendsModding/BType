/**
 * @constant cryoliteConfig
 * @name cryoliteConfig
 * @description Configuration for cryolite - rare sodium fluoride.
 * @notes
 * - Colors: Snow-white with glassy texture.
 * - Noise: Translucent layers with sharp edges.
 */
export const cryoliteConfig: StoneConfig = {
  name: "cryolite",
  colors: {
    main: "#F0F8FF", // Pure white
    secondary: "#E6F0FF", // Off-white
    tertiary: "#DCE8FF", // Light gray
    quaternary: "#D2E0FF", // Silver
  },
  noise: {
    octaves: 5,
    persistence: 1.6,
    scale: 4.0,
    roughness: 1.0,
    lacunarity: 2.0,
    contrast: 1.5,
    warp: 0.4,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
  },
};
