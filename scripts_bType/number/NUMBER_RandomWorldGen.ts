/**
 * Generates random numbers within procedural generation context.
 * @param min Minimum boundary value.
 * @param max Maximum boundary value.
 * @returns {number} Random integer within [min, max] range.
 * @remarks
 * Uses "world_gen" randomization group for consistent procedural generation patterns.
 * Values are inclusive of both min and max boundaries.
 */
export const NUMBER_RandomWorldGen = (min: number, max: number): number => {
  return QUERY_RandomNumberGroup(min, max, "world_gen");
};
