/**
 * @constant shungiteConfig
 * @name shungiteConfig
 * @description Configuration for shungite - carbon-rich metamorphic rock.
 * @notes
 * - Colors: Gunmetal-black with metallic sparkles.
 * - Noise: Dense carbon structure with high reflectivity.
 */
export const shungiteConfig: StoneConfig = {
  name: "shungite",
  colors: {
    main: "#1E1D1B", // Absolute black
    secondary: "#1A1A1A", // Slightly metallic dark
    tertiary: "#2A2A2A", // Cool highlight
    quaternary: "#363530", // Depth accent,
  },
  noise: {
    octaves: 8,
    persistence: 0.7,
    scale: 0.8,
    roughness: 0.9,
    lacunarity: 3.0,
    displacement: 0.1,
    contrast: 0.65,
    warp: 0.2,
    colorBlendPower: 1.4,
    metalnessRange: [160, 220],
    roughnessRange: [80, 140],
    layers: [
      {
        octaves: 5,
        persistence: 0.9,
        scale: 1.0,
        roughness: 1.1,
        weight: 0.6,
      },
    ],
  },
};
