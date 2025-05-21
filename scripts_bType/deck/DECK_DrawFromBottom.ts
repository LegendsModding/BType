/**
 * Draws cards from the bottom of the deck using FIFO order.
 * @param {Deck} deck Source deck
 * @param {number} count Number of cards to draw
 * @returns {Deck} New deck containing drawn cards
 * @example
 * const ancientCards = DECK_DrawFromBottom(historyDeck, 3);
 */
export const DECK_DrawFromBottom = (deck: Deck, count: number): Deck => {
  count = Math.min(count, deck.length);
  const newDraws: Deck = [];
  for (let i = 0; i < count; ++i) {
    newDraws.push(deck.pop()!);
  }
  return newDraws;
};
