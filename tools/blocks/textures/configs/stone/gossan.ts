/**
 * @constant gossanConfig
 * @name gossanConfig
 * @description Configuration for gossan - iron oxide-rich rock cap.
 * @notes
 * - Colors: Rust-red with metallic hematite streaks.
 * - Noise: Rough texture with oxidized appearance.
 */
export const gossanConfig: StoneConfig = {
  name: "gossan",
  colors: {
    main: "#4D1E00", // Peru
    secondary: "#A23E00", // Beige
    tertiary: "#C06E2D", // Indian red
    quaternary: "#8B6B4F", // Saddle brown,
  },
  noise: {
    octaves: 5,
    persistence: 0.4,
    scale: 2.0,
    roughness: 1.8,
    lacunarity: 8.0,
    displacement: 0.45,
    contrast: 0.7,
    warp: 0.3,
    edgeSharpness: 1.1,
    colorBlendPower: 1.5,
    roughnessRange: [140, 200],
    metalnessRange: [30, 50],
    layers: [
      {
        octaves: 4,
        persistence: 0.7,
        scale: 0.8,
        roughness: 0.9,
        weight: 0.6,
      },
    ],
  },
};
