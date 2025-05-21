/**
 * Netherite: A dark, lustrous, nearly mythical material with subtle metallic sheen, intricate texture, and crystalline features.
 * @constant netheriteConfig
 */
export const netheriteConfig: StoneConfig = {
  name: "netherite",
  colors: {
    main: "#181818", // Near-absolute black with a very subtle sheen
    secondary: "#232323", // Deep charcoal gray for highlights
    tertiary: "#2C2C2C", // Darker transition gray for depth
    quaternary: "#1E1E28", // Very deep bluish-black for an ancient, arcane metal feel
  },
  noise: {
    octaves: 16,
    persistence: 0.7,
    scale: 2.0,
    roughness: 0.6, // Smoother, more polished surface
    lacunarity: 2.0,
    displacement: 0.3,
    frequencyMod: 1.0,
    gradientStrength: 0.0,
    edgeSharpness: 0.75,
    bias: 0,
    contrast: 0.65,
    warp: 0.3,
    ridge: false,
    colorBlendPower: 1.5,
    layers: [
      {
        octaves: 6,
        persistence: 0.35,
        scale: 4.0,
        roughness: 0.35,
        weight: 0.7,
      },
      {
        octaves: 2,
        persistence: 0.5,
        scale: 0.5,
        roughness: 0.5,
        weight: 0.3,
      },
    ],

    roughnessRange: [100, 190], // More aggressive range to allow for deeper details
    metalnessRange: [180, 240], // More reflectivity to ensure metallic feel
  },
};
