/**
 * Retrieves the village entity from its ID.
 * @param {VillageID} villageId The village ID.
 * @returns {EntityId} The village entity.
 */
export const QUERY_GetVillageEntityFromID = (
  villageId: VillageID,
): SingleEntity => {
  return FILTER_ByVillageID(QUERY_GetAllVillages(), villageId) as SingleEntity;
};
