/**
 * @constant larvikiteConfig
 * @name larvikiteConfig
 * @description Configuration for larvikite - a feldspar-rich igneous rock with schiller effect.
 * @notes
 * - Colors: Gray-blue base with flashes of iridescent colors.
 * - Noise: Metallic sheen with layered texture for schiller.
 */
export const larvikiteConfig: StoneConfig = {
  name: "larvikite",
  colors: {
    main: "#353D4A", // Gray-blue base
    secondary: "#4F5A66", // Light blue highlight
    tertiary: "#C88810", // Golden flash
    quaternary: "#69767F", // Orange accent
  },
  noise: {
    octaves: 5,
    persistence: 0.3,
    scale: 1.5,
    roughness: 3.6,
    lacunarity: 3.0,
    frequencyMod: 1.1,
    edgeSharpness: 1.3,
    bias: 0.05,
    contrast: 0.4,
    ridge: false,
    colorBlendPower: 2.5,
    roughnessRange: [40, 80],
    metalnessRange: [64, 96],
  },
};
