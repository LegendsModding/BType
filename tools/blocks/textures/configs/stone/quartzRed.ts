/**
 * @constant quartzRedConfig
 * @name quartzRedConfig
 * @description Configuration for red quartzite - metamorphosed sandstone.
 * @notes
 * - Colors: Vibrant red with glassy texture.
 * - Noise: High roughness and metalness for vitreous luster.
 */
export const quartzRedConfig: StoneConfig = {
  name: "quartz_red",
  colors: {
    main: "#C0392B", // Bright red base
    secondary: "#E74C3C", // Tomato-red highlights
    tertiary: "#FADBD8", // Coral undertones
    quaternary: "#7B241C", // Light salmon accents
  },
  noise: {
    octaves: 8,
    persistence: 0.65,
    scale: 1.0,
    roughness: 0.75,
    lacunarity: 2.5,
    displacement: 0.15,
    frequencyMod: 1.2,
    gradientStrength: 0.0,
    edgeSharpness: 0.95,
    bias: 0.0,
    contrast: 0.7,
    warp: 0.15,
    ridge: false,
    colorBlendPower: 0.8,
    roughnessRange: [60, 120],
    metalnessRange: [8, 16],
  },
};
