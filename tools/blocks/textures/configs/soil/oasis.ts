/**
 * @name oasisSoilConfig
 * @description Soil texture configuration for Oasis Soil, designed to emulate the moist, organic-rich deposits found around desert water sources.
 * @notes Exhibits a blend of dark, moist sandy browns with subtle olive hints—providing a nurturing substrate for Oasis Grass.
 * @see SoilTextureConfig
 * @example
 * // Integrate oasisSoilConfig in desert biomes featuring rare, life-sustaining water sources.
 */
export const oasisSoilConfig: SoilTextureConfig = {
  name: "oasis",
  noise: {
    scale: 2.2,
    octaves: 5,
    persistence: 0.55,
    lacunarity: 2.0,
    contrast: 1.0,
    bias: 0.05,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#5A4738", // Dark, moist sandy brown
    secondary: "#6D5A4A", // Muted olive-brown
    tertiary: "#8A7B68", // Soft beige-green accent
  },
};
