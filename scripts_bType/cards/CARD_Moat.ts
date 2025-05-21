import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates moat cards for defensive water features.
 * Surrounds areas with protective water barriers.
 * @param {string} type Moat configuration
 * @param {number} [count=1] Card copies
 * @returns {Deck} Moat generation deck
 * @example
 * // Add castle moat
 * const castleMoat = CARD_Moat("castle_defenses");
 * @description
 * Configures:
 * - Water width/depth
 * - Bridge placement
 * - Aquatic creature presence
 * - Aesthetic variations
 */
export const CARD_Moat = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "moat_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("moat_card_library", type);
  }
};
