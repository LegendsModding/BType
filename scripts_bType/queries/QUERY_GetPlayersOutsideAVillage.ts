import { PLAYER_GetPlayers } from "../player/PLAYER_GetPlayers.ts";
import { VILLAGE_GetHeartStructures } from "../village/VILLAGE_GetHeartStructures.ts";

import { QUERY_HasEntities } from "./QUERY_HasEntities.ts";

/**
 * Retrieves players outside a village.
 * @param {VillageID} villageId The village ID.
 * @returns {EntityIdArray} The players outside the village.
 */
export const QUERY_GetPlayersOutsideAVillage = (
  villageId: VillageID,
): EntityGroup => {
  let allPlayers = PLAYER_GetPlayers();
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
