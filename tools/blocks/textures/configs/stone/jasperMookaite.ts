/**
 * @constant jasperMookaiteConfig
 * @name jasperMookaiteConfig
 * @description Configuration for mookaite jasper - a colorful sedimentary rock.
 * @notes
 * - Colors: Earthy yellows, reds, and browns with speckled patterns.
 * - Noise: High-frequency speckling for natural variation.
 */
export const jasperMookaiteConfig: StoneConfig = {
  name: "jasper_mookaite",
  colors: {
    main: "#FFA500", // Vibrant orange base
    secondary: "#CD5C5C", // Reddish-brown highlight
    tertiary: "#DAA520", // Golden yellow specks
    quaternary: "#8B4513", // Dark brown accents
  },
  noise: {
    octaves: 7,
    persistence: 1.0,
    scale: 1.0,
    roughness: 1.5,
    lacunarity: 2.0,
    frequencyMod: 0.75,
    edgeSharpness: 1.2,
    contrast: 0.75,
    ridge: false,
    colorBlendPower: 1.3,
    roughnessRange: [60, 120],
    metalnessRange: [8, 16],
  },
};
