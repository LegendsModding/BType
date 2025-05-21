import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";
import { PLACEMENT_Name } from "scripts_bType/placement/PLACEMENT_Name.ts";

import { VILLAGE_RewardData } from "./VILLAGE_RewardData.ts";

/**
 * Biome-specific village reward configuration registry.
 * @readonly
 * @remarks
 * Contains resource distribution parameters for villages across different biomes.
 * Surge resources scale with cultural development thresholds and attack strength multipliers.
 * Default configurations apply to unspecified biomes.
 * lootTableAmounts arrays correspond to cultural progression tiers (indexes 0-5),
 * with each sub-array defining [wood, stone, emerald, rareResource] quantities.
 * surgeAdditionalResources mirrors lootTableAmounts structure but for surge events.
 * Note: Placement name keys will transition to biome category identifiers in future versions.
 */
export const VILLAGE_BiomeRewards = {
  // Default is used if no matching entry is found.
  surgeResource: "xp_common",
  // How much is given per culture threshold
  surgeResourceAmounts: [
    // threshold 0 (none)
    50,
    // threshold 1
    60,
    // threshold 2
    70,
    // threshold 3
    80,
    // threshold 4
    90,
    // threshold 5
    100,
  ],
  // The maximum amount a chest can hold
  surgeResourceCap: 200,
  // Multiplies both surgeResource and surgeAdditionalResources by the incoming attack strength
  surgeStrengthMultipliers: [
    // Strength 1
    1,
    // Strength 2
    1.25,
    // Strength 3
    1.5,
  ],
  default: {
    rareResource: "iron",
    lootTableTypes: ["wood", "stone", "emerald", "iron"],
    lootTableAmounts: [
      // threshold 0 (none)
      [1000, 1000, 100, 25],
      // threshold 1
      [1500, 1500, 150, 50],
      // threshold 2
      [2000, 2000, 200, 100],
      // threshold 3
      [2500, 2500, 250, 175],
      // threshold 4
      [3000, 3000, 300, 275],
      // threshold 5
      [3500, 3500, 350, 400],
    ],
    //Surging a days worth of resources at current tuning, equal between modes for now.
    surgeAdditionalResources: [
      [1000, 1000, 100, 25],
      [1500, 1500, 150, 50],
      [2000, 2000, 200, 100],
      [2500, 2500, 250, 175],
      [3000, 3000, 300, 275],
      [3500, 3500, 350, 400],
    ],
  },
  [PLACEMENT_Name.FROSTLANDS_VILLAGE]: {
    rareResource: "diamond",
    lootTableTypes: ["wood", "stone", "emerald", "diamond"],
    lootTableAmounts: [
      [500, 1000, 100, 25],
      [750, 1500, 150, 50],
      [1000, 2000, 200, 100],
      [1250, 2500, 250, 175],
      [1500, 3000, 300, 275],
      [1750, 3500, 350, 400],
    ],
    surgeAdditionalResources: [
      [500, 1000, 100, 25],
      [750, 1500, 150, 50],
      [1000, 2000, 200, 100],
      [1250, 2500, 250, 175],
      [1500, 3000, 300, 275],
      [1750, 3500, 350, 400],
    ],
  },
  [PLACEMENT_Name.FOREST_VILLAGE]: {
    rareResource: "iron",
    lootTableTypes: ["wood", "stone", "emerald", "iron"],
    lootTableAmounts: [
      [1000, 500, 100, 25],
      [1500, 750, 150, 50],
      [2000, 1000, 200, 100],
      [2500, 1250, 250, 175],
      [3000, 1500, 300, 275],
      [3500, 1750, 350, 400],
    ],
    surgeAdditionalResources: [
      [1000, 500, 100, 25],
      [1500, 750, 150, 50],
      [2000, 1000, 200, 100],
      [2500, 1250, 250, 175],
      [3000, 1500, 300, 275],
      [3500, 1750, 350, 400],
    ],
  },
  [PLACEMENT_Name.DRYLANDS_VILLAGE]: {
    rareResource: "iron",
    lootTableTypes: ["wood", "stone", "emerald", "iron"],
    lootTableAmounts: [
      [500, 1000, 100, 25],
      [750, 1500, 150, 50],
      [1000, 2000, 200, 100],
      [1250, 2500, 250, 175],
      [1500, 3000, 300, 275],
      [1750, 3500, 350, 400],
    ],
    surgeAdditionalResources: [
      [500, 1000, 100, 25],
      [750, 1500, 150, 50],
      [1000, 2000, 200, 100],
      [1250, 2500, 250, 175],
      [1500, 3000, 300, 275],
      [1750, 3500, 350, 400],
    ],
  },
  [PLACEMENT_Name.WETLANDS_VILLAGE]: {
    rareResource: "redstone",
    lootTableTypes: ["wood", "stone", "emerald", "redstone"],
    lootTableAmounts: [
      [1000, 500, 100, 25],
      [1500, 750, 150, 50],
      [2000, 1000, 200, 100],
      [2500, 1250, 250, 175],
      [3000, 1500, 300, 275],
      [3500, 1750, 350, 400],
    ],
    surgeAdditionalResources: [
      [1000, 500, 100, 25],
      [1500, 750, 150, 50],
      [2000, 1000, 200, 100],
      [2500, 1250, 250, 175],
      [3000, 1500, 300, 275],
      [3500, 1750, 350, 400],
    ],
  },
  [PLACEMENT_Name.GRASSLANDS_VILLAGE]: {
    rareResource: "coal",
    lootTableTypes: ["wood", "stone", "emerald", "coal"],
    lootTableAmounts: [
      [500, 1000, 100, 25],
      [750, 1500, 150, 50],
      [1000, 2000, 200, 100],
      [1250, 2500, 250, 175],
      [1500, 3000, 300, 275],
      [1750, 3500, 350, 400],
    ],
    surgeAdditionalResources: [
      [500, 1000, 100, 25],
      [750, 1500, 150, 50],
      [1000, 2000, 200, 100],
      [1250, 2500, 250, 175],
      [1500, 3000, 300, 275],
      [1750, 3500, 350, 400],
    ],
  },
};

DIFFICULTY_RegisterConfig(
  "village_reward_data_config",
  VILLAGE_RewardData,
  GAME_DIFFICULTY.easy,
);
DIFFICULTY_RegisterConfig(
  "village_biome_rewards_config",
  VILLAGE_BiomeRewards,
  GAME_DIFFICULTY.easy,
);
