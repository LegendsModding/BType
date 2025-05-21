/**
 * Retrieves all alive villages associated with a specified faction.
 * @param factionName Target faction identifier.
 * @returns {EntityGroup} Collection of faction-aligned villages or empty group.
 * @remarks
 * Filters QUERY_GetAllAliveVillages results using FILTER_ByFactionName.
 * Returns empty group when no villages exist for the specified faction.
 */
export const FACTION_GetVillages = (
  factionName: FactionNameId,
): EntityGroup => {
  return FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [factionName]);
};
