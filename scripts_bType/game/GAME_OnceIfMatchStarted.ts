import { GAME_HasMatchStarted } from "./GAME_HasMatchStarted.ts";

/**
 * Executes one-time logic if the match has started.
 * @returns {boolean} True if match started and logic executed.
 * @remarks Uses Once() pattern for single execution. Returns true when conditions met and processed.
 */
export const GAME_OnceIfMatchStarted = (): boolean => {
  if (GAME_HasMatchStarted()) {
    Once();
    return true;
  }
  return false;
};
