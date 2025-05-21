import { PLAYER_GetVariableKey } from "./PLAYER_GetVariableKey.ts";

/**
 *
 * @param playerId
 * @param key
 * @param value
 */
export const PLAYER_SetVariable = (
  playerId: UserId,
  key: VariableKey,
  value: VariableValue,
): NoReturn => {
  OUTPUT_SetGlobalVariable(PLAYER_GetVariableKey(playerId, key), value);
};
