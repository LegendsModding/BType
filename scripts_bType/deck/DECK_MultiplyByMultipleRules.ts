import { DECK_MultiplyBySingle } from "./DECK_MultiplyBySingle.ts";

/**
 * Multiplies deck by multiple rule decks.
 * @param {Deck} originalDeck Base deck
 * @param {Deck[]} arrayOfRules Modifier decks
 * @example
 * DECK_MultiplyByMultipleRules(baseDeck, [rule1, rule2]);
 * @description
 * Process:
 * - Sequential application
 * - Cumulative effects
 * - Order-dependent results
 */
export const DECK_MultiplyByMultipleRules = (
  originalDeck: Deck,
  arrayOfRules: Deck[],
): void => {
  arrayOfRules.forEach(function (rule: Deck) {
    DECK_MultiplyBySingle(originalDeck, rule);
  });
};
