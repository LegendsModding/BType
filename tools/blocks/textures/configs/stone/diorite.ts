/**
 * @constant dioriteConfig
 * @name dioriteConfig
 * @description Configuration for generating a realistic diorite texture.
 *
 * Diorite is an intrusive igneous rock that features a distinctive salt-and-pepper appearance.
 * This configuration focuses on the coarse grain structure, balancing light and dark speckles
 * with subtle mineral gradients. The noise settings simulate the rock’s crystalline texture and
 * varying mineral compositions.
 * @notes
 * - Colors: Light and dark gray variations with mid-gray and subtle beige accents to simulate diorite’s speckled pattern.
 * - Noise: High roughness and displacement with multiple layers to simulate the irregular, coarse texture of diorite.
 * - Crystalline: Minimal crystal sharpness to allow the texture to maintain a coarse, speckled appearance.
 * - Stratification: Layers are used to add depth and simulate the geological formation of the rock.
 * @example
 * // Usage in texture generation:
 * generateStoneTexture(dioriteConfig);
 */
export const dioriteConfig: StoneConfig = {
  name: "diorite",
  colors: {
    main: "#D0D0D0", // Light gray background to represent the main body of diorite.
    secondary: "#707070", // Dark speckles for contrast and texture.
    tertiary: "#B0B0B0", // Lighter gray highlights for additional contrast.
    quaternary: "#8A8A8A", // A subtle dark gray for depth and detail.
  },
  noise: {
    octaves: 5, // Moderate octaves for a more coarse, detailed texture.
    persistence: 0.95, // Increased persistence for varied, organic detail.
    scale: 1.0, // Balanced scale for the grainy structure.
    roughness: 0.9, // High roughness to simulate the coarse, gritty nature.
    lacunarity: 2.2, // Higher lacunarity for more pronounced speckled detail.
    displacement: 0.1, // Displacement added for rugged texture variation.
    frequencyMod: 1.0, // Slight frequency modulation for a more natural spread.
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
