/**
 * @constant komatiiteConfig
 * @name komatiiteConfig
 * @description Configuration for komatiite - an ultramafic volcanic rock.
 * @notes
 * - Colors: Dark green-black with spinifex texture patterns.
 * - Noise: High roughness and sharp edges for bladed crystals.
 */
export const komatiiteConfig: StoneConfig = {
  name: "komatiite",
  colors: {
    main: "#2A3A2A", // Deep forest-green base
    secondary: "#4A6F4A", // Black-green olivine
    tertiary: "#B0B8A8", // Muted green pyroxene
    quaternary: "#8C9F8C", // Weathered brown accents
  },
  noise: {
    octaves: 2,
    persistence: 0.95,
    scale: 1.5,
    roughness: 0.95,
    lacunarity: 3.0,
    displacement: 0.55,
    contrast: 0.3,
    warp: 0.7,
    edgeSharpness: 1.1,
    frequencyMod: 1.6,
    roughnessRange: [180, 240],
    metalnessRange: [0, 5],
    crystalline: {
      density: 8, // Spinifex texture crystals
      size: 1.0,
      sharpness: 9,
    },
  },
};
