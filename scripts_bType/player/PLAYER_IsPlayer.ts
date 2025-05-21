import { PLAYER_GetPlayers } from "./PLAYER_GetPlayers.ts";

/**
 * Checks if a given entity is a player.
 * @param entity The entity ID.
 * @returns True if the entity is a player; otherwise, false.
 */
export const PLAYER_IsPlayer = (entity: SingleEntity): boolean => {
  const allPlayers = PLAYER_GetPlayers();
  const entityCount = QUERY_GetEntitiesCount(
    OPER_Intersection(allPlayers, [entity]),
  );
  return entityCount === 1;
};
