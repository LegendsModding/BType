import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates district definition cards for urban planning.
 * Manages village/town area subdivisions.
 * @param {string} type District category
 * @param {number} [count=1] Card copies
 * @returns {Deck} District configuration deck
 * @example
 * // Create 4 commercial districts
 * const commerce = CARD_District("commercial", 4);
 * @description
 * Defines:
 * - Residential areas
 * - Industrial zones
 * - Marketplaces
 * - Defensive perimeters
 */
export const CARD_District = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "district_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("district_card_library", type);
  }
};
