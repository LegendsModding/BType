/**
 * Global variable identifiers for match state tracking.
 * @readonly
 * @remarks
 * Contains matchStarted and matchEnded flags for synchronizing game state across clients and systems.
 */
export const GAME_MODE_GLOBAL = {
  matchStarted: "gv_game_match_started",
  matchEnded: "gv_game_match_ended",
};
