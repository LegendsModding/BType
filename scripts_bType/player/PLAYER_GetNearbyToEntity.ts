import { PLAYER_NearbyRange } from "./PLAYER_NearbyRange.ts";

/**
 * Retrieves players near a given reference entity.
 * @param referenceEntity The reference entity.
 * @returns An array of nearby player entity IDs.
 */
export const PLAYER_GetNearbyToEntity = (
  referenceEntity: SingleEntity,
): EntityGroup => {
  return FILTER_ByDistance(
    QUERY_GetAlivePlayers(),
    referenceEntity,
    PLAYER_NearbyRange,
  );
};
