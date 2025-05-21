/**
 * Merges deck into target deck (top insertion).
 * @param {Deck} movingDeck Deck to merge
 * @param {Deck} existingDeck Target deck
 * @example
 * DECK_PutOnTopOf(priorityCards, worldDeck);
 * @description
 * Characteristics:
 * - Reverse order insertion
 * - Overwrites existing cards
 * - Immediate priority change
 */
export const DECK_PutOnTopOf = (movingDeck: Deck, existingDeck: Deck): void => {
  while (movingDeck.length) {
    existingDeck.unshift(movingDeck.pop()!);
  }
};
