/**
 * Selects a random entity from a group using procedural algorithms.
 * @param entities Target entity collection.
 * @returns {SingleEntity} Randomly selected entity or invalid reference if empty.
 * @remarks
 * Wraps FILTER_RandomCount with fixed count=1 parameter.
 * Returns undefined when input group contains no valid entities.
 */
export const FILTER_RandomEntity = (entities: EntityGroup): SingleEntity => {
  return FILTER_RandomCount(entities, 1) as SingleEntity;
};
