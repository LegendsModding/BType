/**
 * Merges deck into target deck (bottom insertion).
 * @param {Deck} movingDeck Deck to merge
 * @param {Deck} existingDeck Target deck
 * @example
 * DECK_PutOnBottomOf(additionalCards, worldDeck);
 * @description
 * Behavior:
 * - Empty source deck after
 * - Maintains card order
 * - Generation priority preserved
 */
export const DECK_PutOnBottomOf = (
  movingDeck: Deck,
  existingDeck: Deck,
): void => {
  while (movingDeck.length) {
    existingDeck.push(movingDeck.shift()!);
  }
};
