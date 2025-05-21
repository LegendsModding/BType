/**
 * @constant argilliteConfig
 * @name argilliteConfig
 * @description Configuration for argillite - a compacted claystone.
 * @notes
 * - Colors: Steel-gray base with muted green undertones.
 * - Noise: Fine-grained with subtle foliation patterns.
 */
export const argilliteConfig: StoneConfig = {
  name: "argillite",
  colors: {
    main: "#6B7A8C", // Cold steel-gray
    secondary: "#5A697A", // Darker slate tone
    tertiary: "#7D8D9E", // Soft blue-gray highlight
    quaternary: "#4A5866", // Charcoal accent
  },
  noise: {
    octaves: 7,
    persistence: 0.7,
    scale: 2.0,
    roughness: 0.8,
    lacunarity: 2.2,
    frequencyMod: 1.6,
    contrast: 0.5,
    edgeSharpness: 0.6,
    warp: 0.3,
    roughnessRange: [80, 140],
    metalnessRange: [0, 10],
  },
};
