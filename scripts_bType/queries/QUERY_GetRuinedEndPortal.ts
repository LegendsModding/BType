import { TAG_Structure } from "scripts_bType/tags/TAG_Structure.ts";

/**
 * Retrieves entities marked as ruined End portals.
 * @returns {EntityGroup} Collection of entities with TAG_Structure.ruinedPortal.
 * @remarks
 * Uses QUERY_GetEntitiesWithTags for structure identification. Critical for portal-related event triggers and progression systems.
 */
export const QUERY_GetRuinedEndPortal = (): EntityGroup => {
  return QUERY_GetEntitiesWithTags([TAG_Structure.ruinedPortal]);
};
