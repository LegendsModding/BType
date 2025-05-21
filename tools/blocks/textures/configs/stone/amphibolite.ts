/**
 * Amphibolite: A metamorphic rock composed mainly of amphibole and plagioclase.
 * It typically exhibits deep olive-green gray hues with subtle foliation.
 */
export const amphiboliteConfig: StoneConfig = {
  name: "amphibolite",
  colors: {
    main: "#3B4F3A", // A deep, muted olive-green—forms the robust base tone.
    secondary: "#576C5A", // A subdued green-gray that adds gentle variation.
    tertiary: "#7B8C7F", // A lighter slate-green/gray to highlight subtle veining.
    quaternary: "#2A3932", // A very dark accent for emphasizing foliation details.
  },
  noise: {
    octaves: 4,
    persistence: 0.5,
    scale: 1.0,
    roughness: 0.6,
    lacunarity: 2.0,
    displacement: 0.2,
    frequencyMod: 1.5,
    gradientStrength: 0.3,
    edgeSharpness: 0.5,
    bias: 0,
    contrast: 1.1,
    warp: 0.1,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [64, 128], // Smooth metamorphic texture
    metalnessRange: [16, 32], // Subtle amphibole reflectivity
    foliation: {
      angle: 90,
      frequency: 3,
      contrast: 1.3,
    },
    crystalline: {
      density: 1, // Rare amphibole crystals
      size: 0.4,
      sharpness: 5,
    },
    layers: [
      {
        octaves: 3,
        persistence: 0.6,
        scale: 2.0,
        roughness: 0.65,
        weight: 0.7,
      },
      { octaves: 2, persistence: 0.4, scale: 1.0, roughness: 0.8, weight: 0.3 },
    ],
  },
};
