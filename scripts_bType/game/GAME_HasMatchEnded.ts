import { GAME_MODE_GLOBAL } from "scripts_bType/consts/GAME_MODE_GLOBAL.ts";

/**
 * Checks if the game match has concluded.
 * @returns {boolean} True if matchEnded global variable is set.
 * @remarks Evaluates GAME_MODE_GLOBAL.matchEnded state. Used for end-of-match conditional logic.
 */
export const GAME_HasMatchEnded = (): boolean => {
  return QUERY_GetGlobalVariable(GAME_MODE_GLOBAL.matchEnded) === 1;
};
