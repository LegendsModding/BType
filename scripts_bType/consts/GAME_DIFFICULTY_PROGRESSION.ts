/**
 * Ordered list of game difficulties from easiest to hardest.
 * Used for progressive configuration merging.
 * @constant
 * @example
 * // Difficulty progression order:
 * ["peaceful", "easy", "normal", "hard", "custom"]
 * @description
 * Key features:
 * - Compile-time type safety
 * - Runtime value verification
 * - Immutable order
 * - Used for configuration inheritance
 */
export const GAME_DIFFICULTY_PROGRESSION = [
  "peaceful",
  "easy",
  "normal",
  "hard",
  "custom",
] as const satisfies GameDifficultyOrder;
