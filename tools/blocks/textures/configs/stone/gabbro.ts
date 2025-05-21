/**
 * Gabbro:
 * A dark, coarse-grained intrusive igneous rock with a mafic composition.
 * Its texture is deep, dark, and slightly greenish with pronounced granularity.
 * @constant gabbroConfig
 * @name gabbroConfig
 * @description Configuration for generating a realistic gabbro texture.
 * @notes
 * - Colors: A dark slate with hints of green and subtle variations for mineral diversity.
 * - Noise: Coarse, rugged texture with pronounced grain and minimal metallic sheen.
 */
export const gabbroConfig: StoneConfig = {
  name: "gabbro",
  colors: {
    main: "#2E3B3C", // Deep slate-green.
    secondary: "#1C2627", // Very dark, nearly black for depth.
    tertiary: "#4A4E52", // Grayish-blue hint for mineral contrast.
    quaternary: "#6B7075", // Soft muted dark gray.
  },
  noise: {
    octaves: 4,
    persistence: 0.65,
    scale: 1.3,
    roughness: 0.85,
    lacunarity: 2.6,
    displacement: 0.1,
    frequencyMod: 1.0,
    gradientStrength: 0.1,
    edgeSharpness: 0.8,
    bias: 0,
    contrast: 1.0,
    warp: 0.3,
    ridge: false,
    colorBlendPower: 1.1,
    roughnessRange: [140, 210],
    metalnessRange: [0, 8],
    crystalline: {
      density: 5,
      size: 0.45,
      sharpness: 4,
    },
    layers: [
      {
        octaves: 3,
        persistence: 0.7,
        scale: 1.2,
        roughness: 0.75,
        weight: 0.6,
      },
    ],
  },
};
