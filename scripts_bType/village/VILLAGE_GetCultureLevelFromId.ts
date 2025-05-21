import { VILLAGE_GetCultureLevelFromValue } from "./VILLAGE_GetCultureLevelFromValue.ts";

/**
 * @name QUERY_GetCultureLevelFromVillageId
 * @description
 * Retrieves the culture level for a given village by querying its culture value and converting it.
 * @param villageId The village ID.
 * @returns The culture level.
 * @example
 * const cultureLevel = QUERY_GetCultureLevelFromVillageId(villageId);
 */
export const VILLAGE_GetCultureLevelFromId = (villageId: VillageID): number => {
  const cultureValue = QUERY_GetCultureValue(villageId, "A");
  return VILLAGE_GetCultureLevelFromValue(cultureValue);
};
