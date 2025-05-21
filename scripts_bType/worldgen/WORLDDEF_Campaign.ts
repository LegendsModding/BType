import { NUMBER_RandomWorldGen } from "scripts_bType/number/NUMBER_RandomWorldGen.ts";
import { ARRAY_ShuffleGroup } from "scripts_bType/utility/ARRAY_ShuffleGroup.ts";

import { WORLDDEF_GetSubclusterCount } from "./WORLDDEF_GetSubclusterCount.ts";

// This definition exists in a separate file so that DLC or challenge modes could inherit from it.
// When you are making a definition that must persist across many game modes / data packs, put it into a separate file that won't get stomped.

/**
 * Core campaign world generation definition with procedural content filters.
 * @readonly
 * @remarks
 * Establishes base procedural generation patterns including cultural villages,
 * biome distributions, and strategic structure placement. Uses helper functions
 * for dynamic cluster calculations and randomization via NUMBER_RandomWorldGen.
 */
export const WORLDDEF_Campaign = {
  base: null, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()

  /**
   * Constructs campaign-specific procedural generation filters.
   * @param filterManager World generation filter management interface.
   * @remarks
   * Creates campaign core structures, implements cultural village placement order randomization,
   * and integrates biome-specific content distribution through sequential filter operations.
   * Tower counts use procedural generation ranges for scenario variation.
   */
  modify: (filterManager: WorldGenFilterManager): NoReturn => {
    filterManager.AppendFilter(["center", "campaign"], 1);
    filterManager.AppendFilter(["wellOfFate", "campaign"], 1);
    filterManager.AppendFilter(["village_west_magnet"], 1);

    // Pick one of the five villages to place first (it will place to the west of the WoF)
    const forestVillage = ["culture_required", "forest"];
    const frostlandsVillage = ["culture_required", "frostlands"];
    const drylandsVillage = ["culture_required", "drylands"];
    const wetlandsVillage = ["culture_required", "wetlands"];
    const grasslandsVillage = ["culture_required", "grasslands"];
    const villageFilters = [
      forestVillage,
      frostlandsVillage,
      drylandsVillage,
      wetlandsVillage,
      grasslandsVillage,
    ];
    ARRAY_ShuffleGroup(villageFilters, "world_gen");
    filterManager.AppendFilter(villageFilters.pop() as string[], 1);

    filterManager.AppendFilter(["cluster", "campaign"], 1);
    filterManager.AppendFilter(
      ["sub-cluster", "campaign"],
      WORLDDEF_GetSubclusterCount(),
    );

    // Now place the rest of the villages
    villageFilters.forEach((villageFilter) => {
      filterManager.AppendFilter(villageFilter, 1);
    });

    filterManager.AppendFilter(["biome", "campaign", "set1"], 1);
    filterManager.AppendFilter(["biome", "skeleton_alliance"], 1);
    filterManager.AppendFilter(["biome", "campaign", "set2"], 1);
    filterManager.AppendFilter(["villageBaseSlot"], 1);
    filterManager.AppendFilter(["act1CampsSlot"], 1);
    filterManager.AppendFilter(["mob_alliance_factions"], 1);
    filterManager.AppendFilter(["mobAllianceBaseSlot"], 1);
    filterManager.AppendFilter(["faction_required"], 1);
    filterManager.AppendFilter(["poi_deck"], 1);
    filterManager.AppendFilter(["poi_mount_01"], 1);
    filterManager.AppendFilter(["poi_mount_03"], 1);
    filterManager.AppendFilter(["poi_mount_04"], 1);
    filterManager.AppendFilter(["poi_mount_06"], 1);
    filterManager.AppendFilter(["poi_tower_01"], NUMBER_RandomWorldGen(2, 5));
    filterManager.AppendFilter(["poi_tower_02"], NUMBER_RandomWorldGen(2, 5));
    filterManager.AppendFilter(["poi_tower_04"], NUMBER_RandomWorldGen(2, 5));
    filterManager.AppendFilter(["invasionBaseSlot"], 1);
  },
};
