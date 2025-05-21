/**
 * @constant shaleBlackConfig
 * @name shaleBlackConfig
 * @description Configuration for black shale - organic-rich sedimentary rock.
 * @notes
 * - Colors: Jet-black with subtle silvery sheen.
 * - Noise: Dense layered structure with high contrast.
 */
export const shaleBlackConfig: StoneConfig = {
  name: "shale_black",
  colors: {
    main: "#1F1F1F",
    secondary: "#4B4B4B",
    tertiary: "#323232",
    quaternary: "#4A4A4A",
  },
  noise: {
    octaves: 7,
    persistence: 0.6,
    scale: 2.5,
    roughness: 1.0,
    lacunarity: 2.4,
    displacement: 0.3,
    contrast: 0.6,
    warp: 0.2,
    foliation: {
      angle: 90,
      frequency: 19,
      contrast: 1.55,
    },
    roughnessRange: [80, 140],
    metalnessRange: [0, 10],
  },
};
