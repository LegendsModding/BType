/**
 * @constant dioriteQuartzConfig
 * @name dioriteQuartzConfig
 * @description Configuration for quartz diorite - a granitic rock with quartz-rich composition.
 * @notes
 * - Colors: Salt-and-pepper pattern with lighter quartz streaks.
 * - Noise: Coarse grain with contrasting light/dark layers.
 */
export const dioriteQuartzConfig: StoneConfig = {
  name: "diorite_quartz",
  colors: {
    main: "#D0D0D0", // Light gray quartz matrix
    secondary: "#707070", // Dark biotite speckles
    tertiary: "#B0B0B0", // Medium gray feldspar
    quaternary: "#E0E0E0", // Milky quartz veins
  },
  noise: {
    octaves: 7, // Moderate octaves for a more coarse, detailed texture.
    persistence: 0.85, // Increased persistence for varied, organic detail.
    scale: 1.0, // Balanced scale for the grainy structure.
    roughness: 0.85, // High roughness to simulate the coarse, gritty nature.
    lacunarity: 2.2, // Higher lacunarity for more pronounced speckled detail.
    displacement: 0.1, // Displacement added for rugged texture variation.
    frequencyMod: 0.8, // Slight frequency modulation for a more natural spread.
    gradientStrength: 0.05, // Stronger gradients to blend light and dark textures smoothly.
    edgeSharpness: 0.9, // Defined edges to accentuate the coarse texture.
    bias: 0, // No bias for neutrality.
    contrast: 1.2, // Slightly increased contrast to highlight the speckling.
    warp: 0.05, // Mild warp to give subtle distortion to the texture.
    ridge: false, // No pronounced ridges, keeping the texture uniformly coarse.
    colorBlendPower: 1.3, // Enhanced color blending for smoother transitions between light and dark spots.
    roughnessRange: [150, 200], // Coarse grain range for a rougher appearance.
    metalnessRange: [0, 10], // Low metalness to reflect diorite’s non-metallic nature.
    crystalline: {
      density: 7, // Higher density for the salt-and-pepper speckling.
      size: 0.4, // Moderate crystal size for noticeable, but not overwhelming, specks.
      sharpness: 4, // Soft crystalline sharpness to match diorite's grainy texture.
    },
    layers: [
      {
        octaves: 4,
        persistence: 0.8,
        scale: 1.0,
        roughness: 0.7,
        weight: 0.9,
      },
    ],
  },
};
