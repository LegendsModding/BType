import { CULTURE_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { TAGS } from "scripts_bType/tags/TAGS.ts";

import { VILLAGE_ForEachAlive } from "./VILLAGE_ForEachAlive.ts";
import { QUERY_IsPlayerOutpost } from "./VILLAGE_IsOutpost.ts";

/**
 * Iterates through all non-player, active villages with chests.
 * Executes callback for each qualifying village entity group.
 *
 * This function processes villages by:
 * 1. Skipping inactive villages (with TAGS.VILLAGE.inactive)
 * 2. Filtering out player outposts
 * 3. Excluding occupied villages
 * 4. Validating faction associations
 * @param {VillageChestCallback} callback Processing function for valid villages
 * @example // Example usage for resource collection:
 * VILLAGE_ForEachWithActiveChest((villageGroup) => {
 *   COLLECT_VillageResources(villageGroup);
 * });
 * @see {@link VILLAGE_ForEachAlive} for base iteration mechanism
 * @see {@link QUERY_HasTags} for entity filtering
 * @remarks
 * Requires valid faction configuration via CULTURE_FactionNames.
 * Callback receives EntityGroup containing valid village entities.
 */
export const VILLAGE_ForEachWithActiveChest = (
  callback: VillageChestCallback,
): void => {
  VILLAGE_ForEachAlive((entity: SingleEntity) => {
    if (QUERY_HasTags(entity, [TAGS.VILLAGE.inactive]) === true) {
      return;
    }
    const villagerVillageEntity = FILTER_ByFactionName(
      entity,
      CULTURE_FactionNames.all, // TODO
    );
    if (!QUERY_HasEntities(villagerVillageEntity)) {
      return;
    }
    const villageId = QUERY_GetVillageIDFromEntity(entity);
    if (QUERY_IsPlayerOutpost(villageId)) {
      return;
    }
    if (QUERY_IsVillageOccupied(villageId)) {
      return;
    }

    callback(villagerVillageEntity);
  });
};
