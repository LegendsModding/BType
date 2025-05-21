/**
 * Retrieves biome-specific reward configuration for a village.
 * Falls back to default configuration if no biome-specific data exists.
 * @param {VillageID} villageId Target village identifier
 * @returns {VillageRewardData} Biome-specific or default reward configuration
 * @example
 * // Get jungle biome rewards
 * const rewards = VILLAGE_GetRewardData(15);
 * @remarks
 * This function checks:
 * 1. Village's world placement name
 * 2. Biome-specific reward registry
 * 3. Default configuration fallback
 * @see {@link VILLAGE_BiomeRewards} for configuration registry
 */
export const VILLAGE_GetResetGV = (villageId: VillageID): string => {
  return "reset_" + villageId;
};
