/**
 * Generates normalized random floating point values using group-based seeds.
 * @param group Randomization context identifier.
 * @returns {number} Value between 0.0 (inclusive) and 1.0 (exclusive).
 * @remarks
 * Scales 0-999 integer range to decimal through division by 1000.
 * Used for consistent procedural generation patterns across different systems.
 */
export const NUMBER_RandomFloatGroup = (group: string): number => {
  return QUERY_RandomNumberGroup(0, 999, group) / 1000.0;
};
