import { DECK_Empty } from "./DECK_Empty.ts";
import { DECK_Shuffle } from "./DECK_Shuffle.ts";
import { libraryFilters } from "./DeckConsts.ts";

/**
 * Reduces a deck to fit within specified resource budget.
 * Uses card values from library definitions for cost calculations.
 * @param {string} libraryName Source library identifier
 * @param {Deck} deck Deck to process
 * @param {number} budget Maximum allowed resource cost
 * @returns {Deck} Filtered deck within budget
 * @example
 * const affordableDeck = DECK_ReduceToBudget("buildings", expensiveDeck, 100);
 */
export const DECK_ReduceToBudget = (
  libraryName: string,
  deck: Deck,
  budget: number,
): Deck => {
  let budgetRemaining = budget;
  const outDeck = DECK_Empty();
  DECK_Shuffle(deck);
  deck.forEach(function (multiCard: [number, number][]) {
    const firstCard = multiCard[0];
    const value = libraryFilters[libraryName][firstCard[1]].value;
    if (value <= budgetRemaining) {
      outDeck.push(multiCard);
      budgetRemaining -= value;
    }
  });
  return outDeck;
};
