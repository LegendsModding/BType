import { CULTURE_FactionNames } from "../FACTION_NAMES.ts";

/**
 * Retrieves all culturally aligned villages in active state.
 * @returns {EntityGroup} Collection of friendly villages.
 * @remarks
 * Currently uses CULTURE_FactionNames.all for filtering. Future implementations will integrate dynamic faction relations.
 */
export const QUERY_GetAllFriendlyVillages = (): EntityGroup => {
  return FILTER_ByFactionName(
    QUERY_GetAllAliveVillages(),
    CULTURE_FactionNames.all, // TODO: Make this use faction relations to properly find aligned village
  );
};
