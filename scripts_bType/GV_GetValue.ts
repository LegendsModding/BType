/**
 * Global variable value retrieval with type validation.
 * @param key Target global variable identifier.
 * @returns {number} Current variable value or 0 if unset.
 * @remarks
 * Wraps QUERY_GetGlobalVariable with implicit type coercion.
 * Returns default 0 for uninitialized variables. Used in systems requiring numerical state tracking.
 */
export const GV_GetValue = (key: string): number => {
  return QUERY_GetGlobalVariable(key);
};
