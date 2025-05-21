import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates elevation change cards for terrain modification.
 * Alters height maps during procedural generation.
 * @param {string} type Elevation pattern
 * @param {number} [count=1] Card copies
 * @returns {Deck} Elevation control deck
 * @example
 * // Create mountain range
 * const mountains = CARD_ZoneHeightChange("alpine", 5);
 * @description
 * Manages:
 * - Terrain slopes
 * - Cliff generation
 * - Water flow patterns
 * - Underground cavities
 */
export const CARD_ZoneHeightChange = (
  type: string,
  count: number = 1,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "zone_height_change_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered(
      "zone_height_change_card_library",
      type,
    );
  }
};
