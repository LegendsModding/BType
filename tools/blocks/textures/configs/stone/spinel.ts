/** */
export const spinelConfig: StoneConfig = {
  name: "spinel",
  colors: {
    main: "#F05A28", // Deep pink/red spinel
    secondary: "#D84B3A", // Reddish pink
    tertiary: "#C34A60", // Slightly purplish red
    quaternary: "#9B2D20", // Darker red accent
  },
  noise: {
    octaves: 8,
    persistence: 0.75,
    scale: 1.2,
    roughness: 0.85,
    lacunarity: 3.3,
    displacement: 0.2,
    frequencyMod: 1.5,
    edgeSharpness: 0.75,
    contrast: 1.8,
    warp: 0.15,
    colorBlendPower: 1.5,
    crystalline: {
      density: 7,
      size: 0.15,
      sharpness: 5,
    },
    roughnessRange: [28, 56],
    metalnessRange: [48, 96],
    layers: [
      {
        octaves: 6,
        persistence: 0.5,
        scale: 0.5,
        roughness: 0.35,
        weight: 0.8,
      },
    ],
  },
};
