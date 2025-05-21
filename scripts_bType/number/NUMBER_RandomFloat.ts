/**
 * Generates a random float between 0.0 (inclusive) and 1.0 (exclusive).
 * Wraps QUERY_RandomNumber() for consistent seed-based randomness.
 * @returns {number} Random value in [0.0, 1.0) range
 * @example
 * // 50% chance to apply effect
 * if(NUMBER_RandomFloat() < 0.5) {
 *   APPLY_Effect("burning");
 * }
 * @description
 * Converts integer range 0-999 to float by:
 * 1. Getting random integer via QUERY_RandomNumber(0, 999)
 * 2. Dividing by 1000 to create decimal precision
 *
 * Key characteristics:
 * - Deterministic based on game seed
 * - Uniform distribution
 * - Consistent across game instances
 * - Ideal for probability calculations
 *
 * Use cases:
 * - Chance-based mechanics (critical hits, loot drops)
 * - AI decision weighting
 * - Procedural content variation
 */
export const NUMBER_RandomFloat = (): number => {
  return QUERY_RandomNumber(0, 999) / 1000.0;
};
