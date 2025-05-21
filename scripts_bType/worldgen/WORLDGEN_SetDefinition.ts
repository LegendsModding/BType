import { DECK_Count } from "scripts_bType/deck/DECK_Count.ts";
import { DECK_Empty } from "scripts_bType/deck/DECK_Empty.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";
import { DECK_PutOnBottomOf } from "scripts_bType/deck/DECK_PutOnBottomOf.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { WORLDGEN_GenerateFilterCollection } from "./WORLDGEN_GenerateFilterCollection.ts";

/**
 * Configures world generation based on definition filters.
 * Builds a procedural generation deck from filter collections.
 * @param {WorldDefinition} worldGenDefinition Generation rules
 * @example
 * const desertWorld = {
 *   base: baseWorldDefinition,
 *   modify: (manager) => {
 *     manager.ReplaceFilter(["biome_forest"], ["biome_desert"], 20);
 *   }
 * };
 * WORLDGEN_SetDefinition(desertWorld);
 * @description
 * Generation pipeline:
 * 1. Process inheritance chain
 * 2. Apply filter modifications
 * 3. Build card deck
 * 4. Assign to world generator
 */
export const WORLDGEN_SetDefinition = (
  worldGenDefinition: WorldDefinition,
): NoReturn => {
  const filterCollection =
    WORLDGEN_GenerateFilterCollection(worldGenDefinition);
  const combinedDeck = DECK_Empty();

  for (const filter of filterCollection) {
    const deck = DECK_MakeFromLibraryFilteredWithCopies(
      "worldCards",
      filter.tags,
      filter.count,
    );
    DECK_PutOnBottomOf(deck, combinedDeck);
  }

  FORESIGHT.info(
    `Setting up the world gen deck with count ${DECK_Count(combinedDeck)}`,
  );
  OUTPUT_SetNamedDeck("WorldPlacementRulesDeck", combinedDeck);
};
