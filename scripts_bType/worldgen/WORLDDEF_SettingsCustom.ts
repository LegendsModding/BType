import { NUMBER_RandomWorldGen } from "scripts_bType/number/NUMBER_RandomWorldGen.ts";

/**
 * Contains custom procedural generation parameters for world spawner systems.
 * @readonly
 * @remarks
 * Tower counts use randomized generation ranges while mount counts maintain fixed presets.
 * Configuration affects world population density and strategic placement patterns.
 */
export const WORLDDEF_SettingsCustom = {
  towerCount: {
    blast: NUMBER_RandomWorldGen(2, 5),
    frost: NUMBER_RandomWorldGen(2, 5),
    stun: NUMBER_RandomWorldGen(2, 5),
  },
  mountCount: {
    beetle: 1,
    bird: 1,
    frog: 1,
    tiger: 1,
  },
};
