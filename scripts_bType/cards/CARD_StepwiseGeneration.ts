import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates phased generation cards for sequential building.
 * Controls construction order in procedural generation.
 * @param {string} type Phase configuration
 * @param {number} [count=1] Card copies
 * @returns {Deck} Phase control deck
 * @example
 * // Setup multi-stage dungeon
 * const dungeonPhase = CARD_StepwiseGeneration("dungeon_stage_1");
 * @description
 * Manages:
 * - Construction sequencing
 * - Progressive unlocks
 * - Environmental storytelling
 * - Difficulty scaling
 */
export const CARD_StepwiseGeneration = (
  type: string,
  count: number = 1,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "stepwise_generation_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered(
      "stepwise_generation_card_library",
      type,
    );
  }
};
