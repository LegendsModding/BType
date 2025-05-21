/**
 * @constant scoriaRedConfig
 * @name scoriaRedConfig
 * @description Configuration for red scoria - oxidized volcanic cinder.
 * @notes
 * - Colors: Rust-red with black accents.
 * - Noise: Vesicular texture with metallic sheen.
 */
export const scoriaRedConfig: StoneConfig = {
  name: "scoria_red",
  colors: {
    main: "#3B1A1A", // Burnt sienna base
    secondary: "#A03A3A", // Saddle brown matrix
    tertiary: "#F6B2B2", // Basaltic vesicles
    quaternary: "#6C2E2E", // Oxidized highlights
  },
  noise: {
    octaves: 6,
    persistence: 0.8,
    scale: 1.5,
    roughness: 0.7,
    lacunarity: 2.5,
    displacement: 0.3,
    contrast: 0.7,
    warp: 0.3,
    colorBlendPower: 1.4,
    metalnessRange: [30, 50],
    roughnessRange: [140, 200],
    layers: [
      {
        octaves: 4,
        persistence: 0.7,
        scale: 1.0,
        roughness: 0.8,
        weight: 0.6,
      },
    ],
  },
};
