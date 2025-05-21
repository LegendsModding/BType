import { libraryIndices, libraryFilters } from "./DeckConsts.ts";

/**
 * Creates deck from entire library contents.
 * @param {string} library Library name
 * @returns {Deck} Populated deck
 * @example
 * const fullDeck = DECK_MakeFromLibrary("base_biomes");
 * @description
 * Requirements:
 * - Valid library registration
 * - Non-empty library
 * - Correct tag structure
 */
export const DECK_MakeFromLibrary = (library: string): Deck => {
  const deck: Deck = [];
  const libraryIndex = libraryIndices[library];
  libraryFilters[library].forEach((card) => {
    const combinedCard: [[number, number]] = [[libraryIndex, card.index]];
    deck.push(combinedCard);
  });
  if (!deck.length) {
    throw new Error(
      `Call to DECK_MakeFromLibrary with library '${library}' yielded no cards. Double check the library is spelled correctly.`,
    );
  }
  return deck;
};
