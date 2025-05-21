import { FILTER_ClosestEntity } from "scripts_bType/filter/FILTER_ClosestEntity.ts";

/**
 * Retrieves the closest player to a reference entity.
 * @param referenceEntity The reference entity ID.
 * @returns The closest player entity ID or null.
 */
export const PLAYER_GetClosestToEntity = (
  referenceEntity: SingleEntity,
): SingleEntity | null => {
  const alivePlayers = QUERY_GetAlivePlayers();
  return FILTER_ClosestEntity(alivePlayers, referenceEntity);
};
