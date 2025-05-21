/**
 * Retrieves all entities possessing a specified classification tag.
 * @param tag Target entity classification identifier.
 * @returns {EntityGroup} Entities matching the tag criteria.
 * @remarks
 * Wraps QUERY_GetEntitiesWithTags for single-tag queries. Used in entity management and spatial awareness systems.
 */
export const QUERY_GetEntitiesWithTag = (tag: Tag): EntityGroup => {
  return QUERY_GetEntitiesWithTags([tag]);
};
