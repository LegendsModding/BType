import { TAGS } from "../tags/TAGS.ts";

/**
 * Retrieves a combined list of players and their associated mobs.
 * @returns An array of player and mob entity IDs.
 */
export const PLAYER_GetPlayerAndMobs = (): EntityGroup => {
  const playerEntities = QUERY_GetEntitiesWithTagFilter(
    [TAGS.PLAYER.player],
    [],
  );
  const playerMobEntities = QUERY_GetEntitiesWithTagFilter(
    ["mob"],
    ["piglin", "animal"],
  );
  return OPER_Union(playerEntities, playerMobEntities);
};
