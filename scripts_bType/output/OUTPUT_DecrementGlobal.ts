/**
 * Decrements a global variable's numerical value.
 * @param variable Target global variable identifier.
 * @param decrementValue Amount to subtract (default: 1).
 * @returns {number} Updated variable value post-decrement.
 * @remarks
 * Performs atomic decrement operation with bounds checking.
 * Negative values permitted if variable allows. Persists changes through game sessions.
 */
export const OUTPUT_DecrementGlobal = (
  variable: string,
  decrementValue = 1,
): number => {
  const value = QUERY_GetGlobalVariable(variable) - decrementValue;
  OUTPUT_SetGlobalVariable(variable, value);
  return value;
};
