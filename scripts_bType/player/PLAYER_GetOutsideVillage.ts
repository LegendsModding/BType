import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { VILLAGE_GetHeartStructures } from "scripts_bType/village/VILLAGE_GetHeartStructures.ts";

/**
 * Retrieves players outside a specified village.
 * @param villageId The village ID.
 * @returns An array of player entity IDs outside the village.
 */
export const PLAYER_GetOutsideVillage = (villageId: VillageID): EntityGroup => {
  let allPlayers = QUERY_GetAlivePlayers();
  const fountain = VILLAGE_GetHeartStructures(villageId);
  if (QUERY_HasEntities(fountain)) {
    const closePlayers = FILTER_ByDistance(
      allPlayers,
      fountain as SingleEntity,
      100,
    );
    allPlayers = OPER_Difference(allPlayers, closePlayers);
  }
  return allPlayers;
};
