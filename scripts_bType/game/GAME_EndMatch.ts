import { GAME_MODE_GLOBAL } from "scripts_bType/consts/GAME_MODE_GLOBAL.ts";

import { GAME_HasMatchEnded } from "./GAME_HasMatchEnded.ts";

/**
 * Concludes active game match with victory conditions.
 * @param winningTeam Identifier for the victorious team.
 * @returns {NoReturn}
 * @remarks Checks match completion status before execution. Updates GAME_MODE_GLOBAL.matchEnded and triggers match conclusion systems.
 */
export const GAME_EndMatch = (winningTeam: TeamName): void => {
  if (GAME_HasMatchEnded()) {
    return;
  }
  OUTPUT_SetGlobalVariable(GAME_MODE_GLOBAL.matchEnded, 1);
  OUTPUT_EndMatch(winningTeam);
};
