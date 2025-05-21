import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { ARRAY_ShuffleGroup } from "scripts_bType/utility/ARRAY_ShuffleGroup.ts";

import { WORLDDEF_GetExtraClusterCount } from "./WORLDDEF_GetExtraClusterCount.ts";
import { WORLDDEF_GetSubclusterCount } from "./WORLDDEF_GetSubclusterCount.ts";
import { WORLDDEF_SettingsCustom } from "./WORLDDEF_SettingsCustom.ts";

/**
 * Campaign-specific world generation configuration with complex filter management.
 * @readonly
 * @remarks
 * Constructs procedural world layout through sequential filter operations.
 * Implements cultural village placement strategy with randomized initial positions.
 */
export const WORLDDEF_CampaignCustom = {
  base: null, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()

  /**
   * Configures world generation filters for campaign scenarios.
   * @param filterManager World generation filter management interface.
   * @remarks
   * Establishes campaign core structures, manages village placement order through shuffling,
   * and integrates biome-specific content distributions using helper functions for cluster calculations.
   */
  modify: (filterManager: WorldGenFilterManager): void => {
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

    filterManager.AppendFilter(
      ["extra-cluster", "campaign", "attack"],
      WORLDDEF_GetExtraClusterCount(PIGLIN_FactionNames.horderunners),
    );
    filterManager.AppendFilter(
      ["extra-cluster", "campaign", "defend"],
      WORLDDEF_GetExtraClusterCount(PIGLIN_FactionNames.unbreakables),
    );
    filterManager.AppendFilter(
      ["extra-cluster", "campaign", "obstacle"],
      WORLDDEF_GetExtraClusterCount(PIGLIN_FactionNames.rotters),
    );
    filterManager.AppendFilter(["biome", "campaign", "set1"], 1);
    filterManager.AppendFilter(["biome", "skeleton_alliance"], 1);
    filterManager.AppendFilter(["biome", "campaign", "set2"], 1);
    filterManager.AppendFilter(["villageBaseSlot"], 1);
    filterManager.AppendFilter(["act1CampsSlot"], 1);
    filterManager.AppendFilter(["mob_alliance_factions"], 1);
    filterManager.AppendFilter(["mobAllianceBaseSlot"], 1);
    filterManager.AppendFilter(["faction_required"], 1);
    filterManager.AppendFilter(["poi_deck"], 1);
    filterManager.AppendFilter(
      ["poi_mount_01"],
      WORLDDEF_SettingsCustom.mountCount.tiger,
    );
    filterManager.AppendFilter(
      ["poi_mount_03"],
      WORLDDEF_SettingsCustom.mountCount.beetle,
    );
    filterManager.AppendFilter(
      ["poi_mount_04"],
      WORLDDEF_SettingsCustom.mountCount.bird,
    );
    filterManager.AppendFilter(
      ["poi_mount_06"],
      WORLDDEF_SettingsCustom.mountCount.frog,
    );
    filterManager.AppendFilter(
      ["poi_tower_01"],
      WORLDDEF_SettingsCustom.towerCount.blast,
    );
    filterManager.AppendFilter(
      ["poi_tower_02"],
      WORLDDEF_SettingsCustom.towerCount.frost,
    );
    filterManager.AppendFilter(
      ["poi_tower_04"],
      WORLDDEF_SettingsCustom.towerCount.stun,
    );
    filterManager.AppendFilter(["invasionBaseSlot"], 1);
  },
};
