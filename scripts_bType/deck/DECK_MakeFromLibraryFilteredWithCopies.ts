import { DECK_MakeFromLibraryFiltered } from "./DECK_MakeFromLibraryFiltered.ts";
import { DECK_PutOnTopOf } from "./DECK_PutOnTopOf.ts";

/**
 * Creates multiple copies of filtered library cards.
 * Builds stacked decks for weighted generation.
 * @param {string} library Source library
 * @param {string | string[]} filter Tag filter
 * @param {number} copies Number of copies
 * @returns {Deck} Multiplied card deck
 * @example
 * // Triple forest generation chances
 * const denseForest = DECK_MakeFromLibraryFilteredWithCopies(
 *   "biomes",
 *   "forest",
 *   3
 * );
 * @description
 * Key behavior:
 * - Multiplies filtered card presence
 * - Maintains original card order
 * - Affects procedural probabilities
 * - Preserves library references
 */
export const DECK_MakeFromLibraryFilteredWithCopies = (
  library: string,
  filter: string | string[],
  copies: number,
): Deck => {
  const multiDeck: Deck = [];
  for (let i = 0; i < copies; ++i) {
    const filteredCards = DECK_MakeFromLibraryFiltered(library, filter);
    DECK_PutOnTopOf(filteredCards, multiDeck);
  }
  return multiDeck;
};
