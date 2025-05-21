/**
 * Creates a shallow copy of a deck.
 * @param {Deck} deck Source deck
 * @returns {Deck} Duplicate deck instance
 * @example
 * const backupDeck = DECK_DuplicateDeck(originalDeck);
 */
export const DECK_DuplicateDeck = (deck: Deck): Deck => {
  const outDeck: Deck = [];
  deck.forEach((multiCard) => {
    outDeck.push([...multiCard]);
  });
  return outDeck;
};
