import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates buildable structure cards for construction systems.
 * Defines what structures can be built in areas.
 * @param {string} type Structure category
 * @param {number} [count=1] Card copies
 * @returns {Deck} Buildable deck
 * @example
 * // Allow 3 watchtower constructions
 * const towers = CARD_Buildable("watchtower", 3);
 * @description
 * Affects:
 * - Player construction options
 * - AI building priorities
 * - Resource requirements
 * - Zone-specific building rules
 */
export const CARD_Buildable = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "buildable_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("buildable_card_library", type);
  }
};
