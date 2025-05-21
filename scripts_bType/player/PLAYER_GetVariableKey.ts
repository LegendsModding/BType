import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * Generates namespaced variable keys for player-specific data storage.
 * @param playerId Target player identifier.
 * @param key Variable category identifier.
 * @returns {string} Formatted variable name string.
 * @remarks
 * Creates "player_var_{playerId}_{key}" identifiers. Validates against empty/undefined keys to prevent invalid storage operations.
 */
export const PLAYER_GetVariableKey = (
  playerId: UserId,
  key: VariableKey,
): string => {
  if (!key) {
    FORESIGHT.error(
      `Call to GetPlayerVariableKey made with undefined or empty string!`,
    );
  }
  return `player_var_${playerId}_${key}`;
};
