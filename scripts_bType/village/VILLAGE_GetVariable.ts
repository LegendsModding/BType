import { VILLAGE_GetVariableKey } from "./VILLAGE_GetVariableKey.ts";

/**
 * Retrieves a village-specific global variable.
 * @param {VillageID} villageId The village ID.
 * @param {string} key The variable key.
 * @returns {any} The value of the variable.
 */
export const VILLAGE_GetVariable = (
  villageId: VillageID,
  key: string,
): number => {
  return QUERY_GetGlobalVariable(VILLAGE_GetVariableKey(villageId, key));
};
