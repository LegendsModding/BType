/**
 * @constant arkoseConfig
 * @name arkoseConfig
 * @description Configuration for arkose - a feldspar-rich sandstone.
 * @notes
 * - Colors: Pinkish-brown with granular texture.
 * - Noise: Coarse grains and angular fragments.
 */
export const arkoseConfig: StoneConfig = {
  name: "arkose",
  colors: {
    main: "#D98B72", // Terracotta base
    secondary: "#8C5A44", // Burnt sienna matrix
    tertiary: "#B79B76", // Pale feldspar grains
    quaternary: "#A09890", // Rust-colored cement
  },
  noise: {
    octaves: 8,
    persistence: 1.1,
    scale: 3.0,
    roughness: 0.9,
    lacunarity: 4.4,
    displacement: 0.5,
    contrast: 0.45,
    warp: 0.75,
    edgeSharpness: 1.7,
    frequencyMod: 0.8,
    roughnessRange: [120, 180],
    metalnessRange: [0, 5],
    layers: [
      {
        octaves: 4,
        persistence: 0.9,
        scale: 2.0,
        roughness: 0.85,
        weight: 0.7,
      },
      {
        octaves: 8,
        persistence: 0.3,
        scale: 2.0,
        roughness: 0.45,
        weight: 0.8,
      },
      {
        octaves: 6,
        persistence: 1.1,
        scale: 2.0,
        roughness: 0.75,
        weight: 0.5,
      },
    ],
  },
};
