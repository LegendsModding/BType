/**
 * Combines two decks into a new composite deck.
 * Merges decks while preserving their relative order through reverse insertion.
 * @param {Deck} top Primary deck (processed last)
 * @param {Deck} bottom Secondary deck (processed first)
 * @returns {Deck} Combined deck
 * @example
 * // Merge terrain and structure decks
 * const worldDeck = DECK_Stack(structureDeck, terrainDeck);
 * @description
 * The stacking process:
 * 1. Takes all elements from bottom deck in reverse order
 * 2. Takes all elements from top deck in reverse order
 * 3. Combines them into new deck (top elements appear first)
 *
 * Maintains generation sequence priorities while merging different configuration layers.
 * Creates new deck references to prevent unintended side effects.
 * Used for combining modular generation systems into cohesive configurations.
 */
export const DECK_Stack = (top: Deck, bottom: Deck): Deck => {
  const newDeck: Deck = [];

  const bottomCount = bottom.length;
  const topCount = top.length;

  for (let i = 0; i < bottomCount; ++i) {
    newDeck.unshift(bottom.pop() as [number, number][]);
  }
  for (let i = 0; i < topCount; ++i) {
    newDeck.unshift(top.pop() as [number, number][]);
  }

  return newDeck;
};
