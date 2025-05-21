import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates path cards for navigation routes.
 * Defines walkable paths between points of interest.
 * @param {string} type Path configuration
 * @param {number} [count=1] Card copies
 * @returns {Deck} Path generation deck
 * @example
 * // Create mountain trails
 * const trails = CARD_Path("mountain_trail", 5);
 * @description
 * Controls:
 * - Path width/length
 * - Surface material
 * - Navigation markers
 * - Encounter frequency
 */
export const CARD_Path = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "path_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("path_card_library", type);
  }
};
