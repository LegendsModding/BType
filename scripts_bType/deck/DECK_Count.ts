/**
 * Returns the total number of cards in a deck.
 * @param {Deck} deck The deck to evaluate
 * @returns {number} Total card count
 * @example
 * const deckSize = DECK_Count(worldGenerationDeck);
 */
export const DECK_Count = (deck: Deck): number => {
  return deck.length;
};
