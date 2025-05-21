import { TAG_Structure } from "../tags/TAG_Structure.ts";

import { ACT1_GetFirstVillageEntity } from "./ACT1_GetFirstVillageEntity.ts";

/**
 * Retrieves fountain entity from Act 1's primary village.
 * @returns {EntityGroup} Fountain structure entity group.
 * @remarks
 * Chains ACT1_GetFirstVillageEntity, QUERY_GetVillageIDFromEntity, and FILTER_ByTagFilter
 * with TAG_Structure.villageFountain for precise targeting.
 * Used in resource management and audio trigger systems.
 */
export const ACT1_GetFirstVillageFountain = (): EntityGroup => {
  const firstUnderAttackVillage = ACT1_GetFirstVillageEntity() as SingleEntity;
  const villageId = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage);
  const fountain = FILTER_ByTagFilter(
    QUERY_GetEntitiesOwnedByVillage(villageId),
    [TAG_Structure.villageFountain],
    [],
  );
  return fountain;
};
