import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates entity clearing cards for area preparation.
 * Removes specified entities during generation.
 * @param {string} type Entity category to clear
 * @param {number} [count=1] Card copies
 * @returns {Deck} Clearing instruction deck
 * @example
 * // Clear hostile creatures from safezone
 * const safeClear = CARD_EntityClearing("hostiles", 1);
 * @description
 * Targets:
 * - Specific enemy types
 * - Resource obstacles
 * - Decorative elements
 * - Temporary structures
 */
export const CARD_EntityClearing = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "entity_clearing_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("entity_clearing_card_library", type);
  }
};
