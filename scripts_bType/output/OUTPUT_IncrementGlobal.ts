/**
 * Increments a global variable and returns the new value.
 * Provides atomic operation for variable modification.
 * @param {GlobalVariableName} variable Variable name
 * @param {number} [incrementValue=1] Increment amount
 * @returns {number} New variable value
 * @example
 * // Increase kill count by 5
 * const newKills = OUTPUT_IncrementGlobal("total_kills", 5);
 * @description
 * Behavior:
 * - Creates variable if not exists
 * - Supports positive/negative increments
 * - Thread-safe operation
 *
 * Use cases:
 * - Player statistics
 * - Achievement tracking
 * - System progression counters
 */
export const OUTPUT_IncrementGlobal = (
  variable: GlobalVariableName,
  incrementValue = 1,
): number => {
  const value = QUERY_GetGlobalVariable(variable) + incrementValue;
  OUTPUT_SetGlobalVariable(variable, value);
  return value;
};
