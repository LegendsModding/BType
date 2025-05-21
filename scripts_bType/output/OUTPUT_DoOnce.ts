/**
 * Executes logic exactly once per global variable state.
 * @param globalKey Unique identifier for execution tracking.
 * @returns {boolean} True if executed for the first time, false if already completed.
 * @remarks
 * Uses global variable persistence to track execution status.
 * Automatically sets the variable upon first execution. Critical for one-time initialization systems.
 */
export const OUTPUT_DoOnce = (globalKey: string): boolean => {
  if (QUERY_GetGlobalVariable(globalKey) === 0) {
    OUTPUT_SetGlobalVariable(globalKey, 1);
    return true;
  } else {
    return false;
  }
};
