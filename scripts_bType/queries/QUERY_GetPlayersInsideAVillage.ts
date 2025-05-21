import { VILLAGE_GetHeartStructures } from "../village/VILLAGE_GetHeartStructures.ts";

import { QUERY_HasEntities } from "./QUERY_HasEntities.ts";

/**
 * Retrieves players inside a village.
 * @param {VillageID} villageId The village ID.
 * @returns {EntityIdArray} The players inside the village.
 */
export const QUERY_GetPlayersInsideAVillage = (
  villageId: VillageID,
): EntityGroup => {
  let allPlayers = QUERY_GetAllPlayers();
  const fountain = VILLAGE_GetHeartStructures(villageId);
  if (QUERY_HasEntities(fountain)) {
    allPlayers = FILTER_ByDistance(
      allPlayers,
      // TODO:Based on the API functions, FILTER_ByDistance takes a single entity here
      // TODO:but fountain would be an eg from VILLAGE_GetHeartStructures, hence the unknown conversion.
      fountain as unknown as number,
      100,
    );
  }
  return allPlayers;
};
