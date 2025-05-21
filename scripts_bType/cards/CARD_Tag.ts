import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates tag association cards for metadata linking.
 * Attaches semantic tags to generated areas.
 * @param {string} type Tag category
 * @param {number} [count=1] Card copies
 * @returns {Deck} Tag association deck
 * @example
 * // Mark dangerous area
 * const dangerTags = CARD_Tag("high_risk", 2);
 * @description
 * Enables:
 * - Quest targeting
 * - AI behavior modification
 * - Environmental effects
 * - Achievement tracking
 */
export const CARD_Tag = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "tag_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("tag_card_library", type);
  }
};
