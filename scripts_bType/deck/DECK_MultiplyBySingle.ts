/**
 * Multiplies deck by single-card deck.
 * @param {Deck} originalDeck Base deck
 * @param {Deck} singleDeck Single-card modifier
 * @example
 * DECK_MultiplyBySingle(worldDeck, resourceDeck);
 * @description
 * Operation:
 * - Combines card data
 * - Maintains hierarchy
 * - Requires valid single-card input
 */
export const DECK_MultiplyBySingle = (
  originalDeck: Deck,
  singleDeck: Deck,
): void => {
  // error check wanted here to make sure
  // a) singleDeck just has a single card
  if (singleDeck.length !== 1) {
    throw new Error("DECK_MultiplyBySingle given a non-single DECK");
  }

  // b) the card in singleDeck is just a single card
  if (singleDeck[0].length !== 1) {
    throw new Error("DECK_MultiplyBySingle given a non-single CARD");
  }

  const singleCard = singleDeck[0][0];
  originalDeck.forEach(function (compositeCard: [number, number][]) {
    compositeCard.push(singleCard);
  });
};
