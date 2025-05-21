import { TEAM } from "../consts/TEAM.ts";
import { TAGS } from "../tags/TAGS.ts";

/**
 * Retrieves player-owned structures.
 * @returns An array of entity IDs representing player-owned structures.
 */
export const PLAYER_GetStructures = (): EntityGroup => {
  return FILTER_ByHasCreator(
    FILTER_ByTeam(
      QUERY_GetEntitiesWithTags([TAGS.BUILDABLES.buildable]),
      TEAM.blue,
    ),
  );
};
