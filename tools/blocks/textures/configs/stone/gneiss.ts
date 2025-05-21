/**
 * Gneiss:
 * A metamorphic rock characterized by prominent banding of light and dark minerals.
 * The banding is usually diagonal and reflects the intense metamorphic conditions.
 * @constant gneissConfig
 * @name gneissConfig
 * @description Configuration for generating a realistic gneiss texture.
 * @notes
 * - Colors: Alternating bands of medium dark gray, light gray, and near-black accents.
 * - Noise: Enhanced to produce distinct, diagonal banding with increased contrast.
 */
export const gneissConfig: StoneConfig = {
  name: "gneiss",
  colors: {
    main: "#505050", // Medium dark gray.
    secondary: "#C0C0C0", // Light gray for the banding.
    tertiary: "#303030", // Deep near-black for dark bands.
    quaternary: "#909090", // Medium gray for smooth transitions.
  },
  noise: {
    octaves: 5,
    persistence: 0.6,
    scale: 1.0,
    roughness: 1.0,
    lacunarity: 3.0,
    displacement: 0.25,
    frequencyMod: 1.6,
    gradientStrength: 0.6,
    edgeSharpness: 1.0,
    bias: 0,
    contrast: 1.3,
    warp: 0.05,
    ridge: false,
    colorBlendPower: 1.5,
    roughnessRange: [70, 140],
    metalnessRange: [16, 32],
    foliation: {
      angle: 60, // Diagonal banding.
      frequency: 7, // Increased frequency for pronounced bands.
      contrast: 1.8,
    },
    layers: [
      { octaves: 4, persistence: 0.7, scale: 1.1, roughness: 0.8, weight: 0.6 },
      { octaves: 3, persistence: 0.5, scale: 0.9, roughness: 1.0, weight: 0.4 },
    ],
  },
};
