/**
 * @constant lapisConfig
 * @name lapisConfig
 * @description Configuration for generating a realistic lapis texture.
 *
 * Lapis lazuli is prized for its deep blue color, often interspersed with golden pyrite
 * specks. The revised palette uses a rich ultramarine base with bright blue accents and
 * brilliant gold flecks, while the noise parameters deliver a polished, slightly crystalline
 * surface with minimal disruption.
 * @example
 * generateStoneTexture(lapisConfig);
 */
export const lapisConfig: StoneConfig = {
  name: "lapis",
  colors: {
    main: "#1E3A66", // Deep ultramarine base.
    secondary: "#2B5AA1", // Bright blue accent.
    tertiary: "#FFD700", // Gold specks reminiscent of pyrite.
    quaternary: "#0B1E3F", // Midnight blue for depth.
  },
  noise: {
    octaves: 5,
    persistence: 0.65,
    scale: 1.2,
    roughness: 0.6,
    lacunarity: 2.8,
    displacement: 0.05,
    frequencyMod: 2.0,
    gradientStrength: 0.0,
    edgeSharpness: 0.8,
    bias: 0,
    contrast: 1.2,
    warp: 0.15,
    ridge: false,
    colorBlendPower: 1.2,
    roughnessRange: [60, 130],
    metalnessRange: [24, 48],
    crystalline: {
      density: 5,
      size: 0.45,
      sharpness: 7,
    },
  },
};
