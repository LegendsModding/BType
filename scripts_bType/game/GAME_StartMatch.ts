import { GAME_MODE_GLOBAL } from "scripts_bType/consts/GAME_MODE_GLOBAL.ts";

import { GAME_HasMatchStarted } from "./GAME_HasMatchStarted.ts";

/**
 * Initiates game match progression.
 * @returns {NoReturn}
 * @remarks Checks existing match state before activation. Sets GAME_MODE_GLOBAL.matchStarted and logs debug information.
 */
export const GAME_StartMatch = (): void => {
  if (GAME_HasMatchStarted()) {
    return;
  }
  OUTPUT_DebugLog("Match started!", 2);
  OUTPUT_SetGlobalVariable(GAME_MODE_GLOBAL.matchStarted, 1);
};
