/**
 * Identifies closest entity to reference position.
 * @param entities Target entity collection.
 * @param referenceEntity Position reference entity.
 * @returns {SingleEntity} Nearest valid entity or undefined if no candidates.
 * @remarks
 * Uses FILTER_ByClosest with range=1 for proximity filtering.
 * Returns undefined when input group is empty or reference entity invalid.
 */
export const FILTER_ClosestEntity = (
  entities: EntityGroup,
  referenceEntity: SingleEntity,
): SingleEntity => {
  return FILTER_ByClosest(entities, referenceEntity, 1) as SingleEntity;
};
