/**
 * Retrieves entities matching tag and village filters.
 * @param {Tag} tag Target tag
 * @param {VillageID} villageId Village filter
 * @returns {EntityGroup} Filtered entities
 * @example
 * const portals = QUERY_GetEntitiesWithTagAndVillage("portal", 10);
 */
export const QUERY_GetEntitiesWithTagAndVillage = (
  tag: Tag,
  villageId: VillageID,
): EntityGroup => {
  return FILTER_ByVillageID(QUERY_GetEntitiesWithTags([tag]), villageId);
};
