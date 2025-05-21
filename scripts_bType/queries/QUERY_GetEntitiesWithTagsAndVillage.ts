/**
 * Retrieves entities with specific tags within a village.
 * @param {Tag[]} tags The tags to filter by.
 * @param {VillageID} villageId The village ID.
 * @returns {EntityIdArray} The filtered entities.
 */
export const QUERY_GetEntitiesWithTagsAndVillage = (
  tags: TagArray,
  villageId: VillageID,
): EntityGroup => {
  return FILTER_ByVillageID(QUERY_GetEntitiesWithTags(tags), villageId);
};
