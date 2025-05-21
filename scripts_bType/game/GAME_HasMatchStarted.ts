import { GAME_MODE_GLOBAL } from "scripts_bType/consts/GAME_MODE_GLOBAL.ts";

/**
 * Checks if the game match has initiated.
 * @returns {boolean} True if matchStarted global variable is set.
 * @remarks Evaluates GAME_MODE_GLOBAL.matchStarted state. Used for match initialization checks.
 */
export const GAME_HasMatchStarted = (): boolean => {
  return QUERY_GetGlobalVariable(GAME_MODE_GLOBAL.matchStarted) === 1;
};
