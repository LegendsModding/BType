/**
 * Randomizes card order in a deck using the Fisher-Yates algorithm.
 * This in-place shuffle ensures uniform distribution probability across all permutations.
 * Maintains referential integrity of the deck while modifying element positions.
 * @param {Deck} deck Target deck to randomize
 * @example
 * // Prepare randomized treasure pool
 * DECK_Shuffle(lootDeck);
 * @description
 * The algorithm iterates from the deck's end to start, swapping each element with a randomly chosen predecessor.
 * Uses QUERY_RandomNumber() for deterministic randomness based on game seed.
 * Critical for unbiased procedural generation and loot distribution systems.
 * Performance scales linearly with deck size (O(n) complexity).
 * Does not create new deck instances, preserving existing references for system consistency.
 */
export const DECK_Shuffle = (deck: Deck): void => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = QUERY_RandomNumber(0, i);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};
