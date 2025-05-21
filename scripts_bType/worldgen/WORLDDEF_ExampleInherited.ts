// Note that we can have an indefinite chain of inheritance. Here modify() would run after the modify() of showcaseWorldGenDefinition
import { NUMBER_RandomWorldGen } from "scripts_bType/number/NUMBER_RandomWorldGen.ts";

import { WORLDDEF_Example } from "./WORLDDEF_Example.ts";

/**
 * Example inherited world generation configuration demonstrating filter manipulation.
 * @readonly
 * @remarks
 * Extends WORLDDEF_Example while modifying filter collections for custom biome distributions.
 * Demonstrates advanced filter management techniques for procedural content generation.
 */
export const WORLDDEF_ExampleInherited = {
  base: WORLDDEF_Example,

  /**
   * Modifies inherited world generation filters with biome-specific adjustments.
   * @param filterManager World generation filter management interface.
   * @remarks
   * Replaces base filters with DLC-specific variants, adjusts tower counts,
   * and conditionally modifies forest biome filters based on existing configurations.
   */
  modify: (filterManager: WorldGenFilterManager): void => {
    filterManager.AddFilterAfterTarget(
      ["biome", "campaign", "set2"],
      ["forest"],
      NUMBER_RandomWorldGen(2, 5),
    );
    if (
      filterManager.FilterExists(["wetlands"]) &&
      filterManager.FilterExists(["poi_tower_04"])
    ) {
      filterManager.ChangeFilterCount(["poi_tower_04"], 10);
    }
  },
};
