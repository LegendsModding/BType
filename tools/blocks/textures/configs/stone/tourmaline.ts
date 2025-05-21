/**
 * @constant tourmalineConfig
 * @name tourmalineConfig
 * @description Configuration for tourmaline - a boron silicate mineral with diverse colors.
 * @notes
 * - Colors: Multicolored palette with vibrant transitions.
 * - Noise: Smooth texture with sharp edges for clarity.
 */
export const tourmalineConfig: StoneConfig = {
  name: "tourmaline",
  colors: {
    main: "#FF69B4", // Pink base
    secondary: "#00BFFF", // Blue highlight
    tertiary: "#FFA500", // Orange streak
    quaternary: "#00FF00", // Green accent
  },
  noise: {
    octaves: 7,
    persistence: 0.9,
    scale: 4.0,
    roughness: 1.1,
    lacunarity: 4.0,
    contrast: 0.9,
    frequencyMod: 0.45,
    colorBlendPower: 0.5,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
  },
};
