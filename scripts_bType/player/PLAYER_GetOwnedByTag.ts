import { TEAM } from "../consts/TEAM.ts";

/**
 * Retrieves player-owned entities that match specific tags.
 * @param includeTags The tags to include.
 * @returns An array of entity IDs.
 */
export const PLAYER_GetOwnedByTag = (includeTags: Tag[]): EntityGroup => {
  return FILTER_ByTeam(QUERY_GetEntitiesWithTags(includeTags), TEAM.blue);
};
