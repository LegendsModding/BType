import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates construction cost cards for resource management.
 * Defines material requirements for building types.
 * @param {string} type Building category
 * @param {number} [count=1] Card copies
 * @returns {Deck} Cost configuration deck
 * @example
 * // Set high costs for advanced structures
 * const expensiveBuilds = CARD_BuildCost("advanced", 2);
 * @description
 * Controls:
 * - Wood/stone requirements
 * - Labor costs
 * - Tech tree dependencies
 * - Difficulty scaling costs
 */
export const CARD_BuildCost = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies("buildCosts", type, count);
  } else {
    return DECK_MakeFromLibraryFiltered("buildCosts", type);
  }
};
