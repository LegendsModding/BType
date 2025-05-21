import { PLAYER_GetVariableKey } from "./PLAYER_GetVariableKey.ts";

/**
 * Retrieves player-specific variable values from global storage.
 * @param playerId Target player identifier.
 * @param key Variable category identifier.
 * @returns {VariableValue} Stored value or default if unset.
 * @remarks
 * Uses PLAYER_GetVariableKey for namespaced access. Persists through game sessions unless explicitly modified.
 */
export const PLAYER_GetVariable = (
  playerId: UserId,
  key: VariableKey,
): VariableValue => {
  return QUERY_GetGlobalVariable(PLAYER_GetVariableKey(playerId, key));
};
