/**
 * Magmastone: A volcanic rock with intensely fiery hues and rugged, molten texture.
 * @constant magmastoneConfig
 */
export const magmastoneConfig: StoneConfig = {
  name: "magmastone",
  colors: {
    main: "#FF4500", // Intense OrangeRed
    secondary: "#FF8C00", // Vivid DarkOrange
    tertiary: "#E60000", // Deep Red accent
    quaternary: "#740B0B", // Dark red for depth
  },
  noise: {
    octaves: 6,
    persistence: 0.6,
    scale: 1.0,
    roughness: 0.95,
    lacunarity: 3.0,
    displacement: 0.7,
    frequencyMod: 1.8,
    gradientStrength: 0.7,
    edgeSharpness: 1.0,
    bias: 0,
    contrast: 1.3,
    warp: 0.15,
    ridge: true,
    colorBlendPower: 1.5,
    roughnessRange: [192, 255], // Extreme volcanic roughness
    metalnessRange: [0, 16], // Molten rock appearance
    layers: [
      {
        octaves: 5,
        persistence: 0.65,
        scale: 1.0,
        roughness: 0.85,
        weight: 0.6,
      },
      {
        octaves: 4,
        persistence: 0.5,
        scale: 0.9,
        roughness: 0.95,
        weight: 0.4,
      },
    ],
  },
};
