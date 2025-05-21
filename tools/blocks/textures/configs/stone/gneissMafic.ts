/**
 * @constant gneissMaficConfig
 * @name gneissMaficConfig
 * @description Configuration for mafic gneiss - a banded metamorphic rock.
 * @notes
 * - Colors: Dark green-black bands with lighter mineral segregation.
 * - Noise: Strong foliation and layered structure.
 */
export const gneissMaficConfig: StoneConfig = {
  name: "gneiss_mafic",
  colors: {
    main: "#3B3C40", // Jet-black base
    secondary: "#646464", // Dark green amphibole bands
    tertiary: "#2A2D32", // Graphite-gray layers
    quaternary: "#918C80", // Deep forest-green accents
  },
  noise: {
    octaves: 7,
    persistence: 0.6,
    scale: 2.5,
    roughness: 0.7,
    lacunarity: 2.0,
    displacement: 0.3,
    contrast: 1.3,
    warp: 0.2,
    foliation: {
      angle: 60,
      frequency: 3,
      contrast: 1.3,
    },
    roughnessRange: [80, 140],
    metalnessRange: [5, 20],
  },
};
