import { INVASION_ActiveGV } from "./INVASION_ActiveGV.ts";

/**
 * Checks if invasion system is currently active.
 * @returns {boolean} True if invasion system is enabled.
 * @remarks
 * Queries INVASION_ActiveGV global variable. Value persistence maintained across game sessions.
 */
export const INVASION_IsActive = (): boolean => {
  return QUERY_GetGlobalVariable(INVASION_ActiveGV) === 1;
};
