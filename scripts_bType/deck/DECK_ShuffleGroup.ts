/**
 * Performs grouped shuffling for synchronized randomness.
 * Uses context-specific random number generation for deterministic results within systems.
 * @param {Deck} deck Target deck
 * @param {string} group Context identifier for randomization
 * @example
 * // Synchronize village shuffles
 * DECK_ShuffleGroup(villageDeck, "village_5_generation");
 * @description
 * This variation maintains shuffling consistency within defined contexts (e.g., village ID, region name).
 * Uses QUERY_RandomNumberGroup() for context-aware randomization.
 * Enables reproducible results for specific systems while maintaining global unpredictability.
 * Essential for multi-instance synchronization in networked environments.
 */
export const DECK_ShuffleGroup = (deck: Deck, group: string): void => {
  // fisher-yates, yo
  for (let i = deck.length - 1; i > 0; i--) {
    const j = QUERY_RandomNumberGroup(0, i, group);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};
