import { libraryFilters } from "./DeckConsts.ts";

/**
 * Calculates total resource cost of a deck configuration.
 * Aggregates values from library definitions for budget validation.
 * @param {string} libraryName Source library identifier
 * @param {Deck} deck Deck to evaluate
 * @returns {number} Total resource cost
 * @example
 * // Validate construction budget
 * const totalCost = DECK_TotalValue("buildings", villageDeck);
 * @description
 * The calculation:
 * 1. Resolves each MultiCard's primary SingleCard
 * 2. Looks up associated Card.value from library
 * 3. Sums all values for total cost
 *
 * Used for:
 * - Resource management systems
 * - Budget constraint validation
 * - Difficulty scaling calculations
 * - Progression system balancing
 */
export const DECK_TotalValue = (libraryName: string, deck: Deck): number => {
  let total = 0;
  deck.forEach((multiCard) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [libraryIndex, cardIndex] = multiCard[0];
    total += libraryFilters[libraryName][cardIndex].value;
  });
  return total;
};
