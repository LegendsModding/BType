/**
 * Amphibolite: A metamorphic rock composed mainly of amphibole and plagioclase.
 * It typically exhibits deep olive-green gray hues with subtle foliation.
 */
export const maybeWoodConfig: StoneConfig = {
  name: "amphibolite",
  colors: {
    main: "#A07C52", // Deep olive-green gray
    secondary: "#B89773", // Lighter, muted green-gray
    tertiary: "#8C6A4A", // Lightened tone for veins
    quaternary: "#73573A", // Cool accent for foliation
  },
  noise: {
    octaves: 4,
    persistence: 0.5,
    scale: 1.0,
    roughness: 0.7,
    lacunarity: 2.0,
    displacement: 0.2,
    frequencyMod: 1.5,
    gradientStrength: 0.4,
    edgeSharpness: 0.5,
    bias: 0,
    contrast: 1.1,
    warp: 0.3,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [96, 180], // Smooth metamorphic texture
    metalnessRange: [0, 4], // Subtle amphibole reflectivity
    foliation: {
      angle: 90,
      frequency: 2,
      contrast: 1.4,
    },
    crystalline: {
      density: 1, // Rare amphibole crystals
      size: 0.4,
      sharpness: 6,
    },
    layers: [
      { octaves: 3, persistence: 0.6, scale: 2.0, roughness: 0.6, weight: 0.7 },
      { octaves: 2, persistence: 0.4, scale: 1.0, roughness: 0.8, weight: 0.3 },
    ],
  },
};