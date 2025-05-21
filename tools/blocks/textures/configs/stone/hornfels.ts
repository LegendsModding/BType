/**
 * @constant hornfelsConfig
 * @name hornfelsConfig
 * @description Configuration for generating a realistic hornfels texture.
 *
 * Hornfels is a fine‐grained, contact metamorphic rock with a dark, dense matrix and
 * scattered mineral crystals such as biotite and cordierite. The palette uses a dark
 * charcoal base with warm brown–gray flecks, while the noise settings produce a slightly
 * textured, subtle foliation reminiscent of contact metamorphism.
 * @example
 * generateStoneTexture(hornfelsConfig);
 */
export const hornfelsConfig: StoneConfig = {
  name: "hornfels",
  colors: {
    main: "#494949", // Dark charcoal base.
    secondary: "#7B6F62", // Warm brownish–gray for biotite flecks.
    tertiary: "#A09182", // Soft cordierite tone.
  },
  noise: {
    octaves: 4,
    persistence: 0.55,
    scale: 1.0,
    roughness: 0.65,
    lacunarity: 2.5,
    displacement: 0.12,
    frequencyMod: 1.0,
    gradientStrength: 0.3,
    edgeSharpness: 0.6,
    bias: 0.0,
    contrast: 1.0,
    warp: 0.05,
    ridge: false,
    colorBlendPower: 1.0,
    roughnessRange: [60, 120],
    metalnessRange: [8, 16],
    foliation: {
      angle: 20, // Slight foliation with a gentle offset.
      frequency: 3,
      contrast: 1.0,
    },
  },
};
