import { FORESIGHT } from "../utility/Foresight.ts";

/**
 * Retrieves the village entity from its faction name.
 * NOTE: This only works on singular village factions! @see QUERY_GetVillageEntitiesFromFaction if you are querying a multi-village faction!
 * @param {PiglinFactionName} factionName The faction name.
 * @returns {EntityIdArray} The village entity.
 */
export const QUERY_GetVillageEntityFromFaction = (
  factionName: FactionNameId,
): EntityGroup | undefined => {
  const villages = FILTER_ByFactionName(QUERY_GetAllVillages(), [factionName]);
  const villageCount = QUERY_GetEntitiesCount(villages);
  if (villageCount > 1) {
    FORESIGHT.error(
      `Called QUERY_GetVillageEntityFromFaction on faction ${factionName} but found more than one village! You can only use this function on factions that have one village.`,
    );
    return;
  }
  return villages;
};
