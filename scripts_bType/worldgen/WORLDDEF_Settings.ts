/**
 * Base world generation configuration parameters.
 * @readonly
 * @remarks
 * Defines default mount populations and world mirroring state (0 indicates no mirroring).
 * Serves as template for derived configurations in procedural generation systems.
 */
export const WORLDDEF_Settings = {
  mountCount: {
    beetle: 1,
    bird: 1,
    frog: 1,
    tiger: 1,
  },
  mirroredWorld: 0,
};
