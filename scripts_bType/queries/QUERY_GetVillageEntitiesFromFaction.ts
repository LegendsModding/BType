/**
 * Retrieves the village entities from a faction name.
 * @param {PiglinFactionName} factionName The faction name.
 * @returns {EntityIdArray} The village entity.
 */
export const QUERY_GetVillageEntitiesFromFaction = (
  factionName: FactionNameId,
): EntityGroup => {
  const villages = FILTER_ByFactionName(QUERY_GetAllVillages(), [factionName]);
  return villages;
};
