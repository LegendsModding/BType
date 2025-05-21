import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";
import { VILLAGE_GetHeartStructures } from "../village/VILLAGE_GetHeartStructures.ts";

/**
 * Retrieves players inside a specified village.
 * @param villageId The village ID.
 * @returns An array of player entity IDs inside the village.
 */
export const PLAYER_GetInsideVillage = (villageId: VillageID): EntityGroup => {
  let allPlayers = QUERY_GetAlivePlayers();
  const fountain = VILLAGE_GetHeartStructures(villageId);
  if (QUERY_HasEntities(fountain)) {
    allPlayers = FILTER_ByDistance(allPlayers, fountain as SingleEntity, 100);
  }
  return allPlayers;
};
