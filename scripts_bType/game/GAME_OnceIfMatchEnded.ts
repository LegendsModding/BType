import { GAME_HasMatchEnded } from "./GAME_HasMatchEnded.ts";

/**
 * Executes one-time logic if the match has concluded.
 * @returns {boolean} True if match ended and logic executed.
 * @remarks Uses Once() pattern to ensure single execution. Returns true when conditions met and processed.
 */
export const GAME_OnceIfMatchEnded = (): boolean => {
  if (GAME_HasMatchEnded()) {
    Once();
    return true;
  }
  return false;
};
