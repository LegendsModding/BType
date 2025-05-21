import { TAGS } from "../tags/TAGS.ts";

/**
 * Retrieves the central structures of a village.
 * @param {VillageID} villageId The village ID.
 * @returns {EntityIdArray} The central structure entities.
 */
export const VILLAGE_GetHeartStructures = (
  villageId: VillageID,
): EntityGroup => {
  let centralEntities: EntityGroup = [];
  const centralEntityTags = [
    TAGS.BUILDABLES.mobAllegiance,
    TAGS.BUILDABLES.outpost,
    TAGS.VILLAGE.fountain,
  ];

  centralEntityTags.forEach((tag) => {
    centralEntities = OPER_Union(
      centralEntities,
      QUERY_GetEntitiesWithTags([tag]),
    );
  });

  return FILTER_ByVillageID(centralEntities, villageId);
};
