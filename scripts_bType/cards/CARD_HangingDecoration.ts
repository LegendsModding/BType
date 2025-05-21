import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates decoration cards for environmental storytelling.
 * Places hanging ornaments and markers.
 * @param {string} type Decoration category
 * @param {number} [count=1] Card copies
 * @returns {Deck} Decoration placement deck
 * @example
 * // Add festival decorations
 * const festivalDecor = CARD_HangingDecoration("lanterns", 10);
 * @description
 * Handles:
 * - Cultural decorations
 * - Seasonal ornaments
 * - Quest markers
 * - Environmental storytelling elements
 */
export const CARD_HangingDecoration = (
  type: string,
  count: number = 1,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "hanging_decoration_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered(
      "hanging_decoration_card_library",
      type,
    );
  }
};
