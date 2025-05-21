import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";
import { MAP_VillageChest } from "scripts_bType/map/MAP_VillageChest.ts";
import { QUERY_GetEntitiesWithTagsAndVillage } from "scripts_bType/queries/QUERY_GetEntitiesWithTagsAndVillage.ts";
import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import { VILLAGE_GetRewardData } from "scripts_bType/village/VILLAGE_GetRewardData.ts";

import { VILLAGE_BiomeRewards } from "./VILLAGE_BiomeRewards.ts";
import { VILLAGE_ResourceStore } from "./VILLAGE_ResourceStore.ts";

/**
 *
 * @param villageEntity
 */
export const VILLAGE_EmptyChest = (villageEntity: SingleEntity): void => {
  const villageId = QUERY_GetVillageIDFromEntity(villageEntity);

  FORESIGHT.verbose(`Emptying chest for village: ${villageId}`);

  const rewardData = VILLAGE_GetRewardData(villageId);
  const rewardTypes = rewardData.lootTableTypes;
  const store = VILLAGE_ResourceStore(villageId);

  // grant the rewards
  for (const resourceName of rewardTypes) {
    store.Set(resourceName, 0);
  }

  // Remove surge resource
  store.Set(VILLAGE_BiomeRewards.surgeResource, 0);

  OUTPUT_MapSetKeyValue(
    [villageEntity],
    MAP_Key.VILLAGE_CHEST_STATE,
    MAP_VillageChest.COLLECTED,
  );

  const villageChestEntity = QUERY_GetEntitiesWithTagsAndVillage(
    ["village_treasure_chest_interact"],
    villageId,
  );
  if (QUERY_HasEntities(villageChestEntity)) {
    OUTPUT_AddVisualState(villageChestEntity, "open_chest");
  }
};
