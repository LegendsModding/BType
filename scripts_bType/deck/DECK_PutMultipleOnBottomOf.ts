import { DECK_PutOnBottomOf } from "./DECK_PutOnBottomOf.ts";

/**
 * Combines multiple decks into base deck.
 * @param {Deck} baseDeck Primary deck
 * @param {Deck[]} decks Decks to merge
 * @returns {Deck} Combined deck
 * @example
 * const worldDeck = DECK_PutMultipleOnBottomOf(baseDeck, [add1, add2]);
 * @description
 * Merge order:
 * - Bottom insertion
 * - Maintains original order
 * - Multiple deck integration
 */
export const DECK_PutMultipleOnBottomOf = (
  baseDeck: Deck,
  decks: Deck[],
): Deck => {
  decks.forEach((deck) => {
    DECK_PutOnBottomOf(deck, baseDeck);
  });
  return baseDeck;
};
