import { QUERY_GetVillageEntityFromID } from "scripts_bType/queries/QUERY_GetVillageEntityFromID.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { VILLAGE_BiomeRewards } from "./VILLAGE_BiomeRewards.ts";

// Define the type of reward configuration based on the default.
type VillageRewardData = typeof VILLAGE_BiomeRewards.default;

/**
 * Retrieves biome-specific reward configuration for a village.
 * Checks for custom biome rewards based on village placement name, falling back to defaults if unavailable.
 * @param {VillageID} villageId Target village identifier
 * @returns {VillageRewardData} Reward configuration object
 * @example
 * // Get reward configuration for jungle village
 * const jungleRewards = VILLAGE_GetRewardData(25);
 * @see {@link VILLAGE_BiomeRewards} for configuration registry
 * @see {@link QUERY_GetVillageEntityFromID} for entity resolution
 * @remarks
 * This function performs:
 * 1. Entity validation
 * 2. Biome placement name check
 * 3. Configuration lookup
 * 4. Default fallback mechanism
 *
 * Uses FORESIGHT logging for diagnostic tracking of configuration selection.
 */
export const VILLAGE_GetRewardData = (
  villageId: VillageID,
): VillageRewardData => {
  let rewardData = VILLAGE_BiomeRewards.default;
  const villageEntity = QUERY_GetVillageEntityFromID(villageId);
  if (QUERY_HasWorldPlacementName(villageEntity)) {
    const villagePlacementName = QUERY_GetWorldPlacementName(villageEntity);
    const data =
      VILLAGE_BiomeRewards[
        villagePlacementName as keyof typeof VILLAGE_BiomeRewards
      ];
    if (data) {
      FORESIGHT.verbose(
        `Specific village biome rewards found for ${villageId} - using ${villagePlacementName}`,
      );
      rewardData = data as VillageRewardData;
    }
  }
  if (rewardData === VILLAGE_BiomeRewards.default) {
    FORESIGHT.verbose(
      `No specific village biome rewards found for ${villageId} - using default`,
    );
  }
  return rewardData;
};
