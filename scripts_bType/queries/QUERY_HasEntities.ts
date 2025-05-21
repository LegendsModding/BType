/**
 * Checks if entity group contains valid entities.
 * @param {EntityGroup} entities Group to check
 * @returns {boolean} True if non-empty
 * @example
 * if(QUERY_HasEntities(players)) {
 *   START_Mission();
 * }
 */
export const QUERY_HasEntities = (entities: EntityGroup): boolean => {
  return QUERY_GetEntitiesCount(entities) > 0;
};
