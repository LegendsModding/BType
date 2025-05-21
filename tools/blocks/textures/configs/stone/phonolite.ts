/**
 * @constant phonoliteConfig
 * @name phonoliteConfig
 * @description Configuration for phonolite - a feldspar-rich volcanic rock.
 * @notes
 * - Colors: Light gray with greenish spots from nepheline.
 * - Noise: Fine-grained texture with spotted pattern.
 */
export const phonoliteConfig: StoneConfig = {
  name: "phonolite",
  colors: {
    main: "#E0E0E0", // Pale gray base
    secondary: "#D0E0D0", // Soft green-gray
    tertiary: "#C0D0C0", // Muted sage
    quaternary: "#B0C0B0", // Darker green spots
  },
  noise: {
    octaves: 7,
    persistence: 0.6,
    scale: 1.0,
    roughness: 1.7,
    lacunarity: 2.2,
    displacement: 0.15,
    contrast: 1.8,
    warp: 0.7,
    edgeSharpness: 1.4,
    roughnessRange: [50, 90],
    metalnessRange: [20, 40],
    layers: [
      {
        octaves: 5,
        persistence: 0.7,
        scale: 0.5,
        roughness: 0.6,
        weight: 0.7,
      },
      {
        octaves: 9,
        persistence: 0.6,
        scale: 2.0,
        roughness: 0.8,
        weight: 0.4,
      },
    ],
  },
};
