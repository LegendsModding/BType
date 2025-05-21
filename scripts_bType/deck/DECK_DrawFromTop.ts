/**
 * Draws cards from the top of the deck using LIFO order.
 * @param {Deck} deck Source deck
 * @param {number} count Number of cards to draw
 * @returns {Deck} New deck containing drawn cards
 * @example
 * const newCards = DECK_DrawFromTop(updateDeck, 2);
 */
export const DECK_DrawFromTop = (deck: Deck, count: number): Deck => {
  count = Math.min(count, deck.length);
  const newDraws: Deck = [];
  for (let i = 0; i < count; ++i) {
    newDraws.push(deck.shift()!);
  }
  return newDraws;
};
