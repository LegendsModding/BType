/**
 * @constant labradoriteConfig
 * @name labradoriteConfig
 * @description Configuration for labradorite - a feldspar mineral with iridescent play-of-color.
 * @notes
 * - Colors: Blue-green base with flashes of gold and orange.
 * - Noise: Layered texture with metallic sheen for iridescence.
 */
export const labradoriteConfig: StoneConfig = {
  name: "labradorite",
  colors: {
    main: "#6FA8DC", // Base blue-green tone
    secondary: "#FFD700", // Golden flash
    tertiary: "#FFA500", // Orange highlight
    quaternary: "#00BFFF", // Bright blue accent
  },
  noise: {
    octaves: 7,
    persistence: 0.9,
    scale: 1.5,
    roughness: 0.7,
    lacunarity: 2.0,
    frequencyMod: 0.39,
    edgeSharpness: 1.3,
    bias: 0.1,
    contrast: 0.9,
    warp: 3.3,
    ridge: false,
    colorBlendPower: 2.5,
    roughnessRange: [20, 60],
    metalnessRange: [64, 96],
  },
};
